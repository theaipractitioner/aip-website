"""Convert a Word document to Markdown, preserving what actually matters.

Written because `textutil` flattens the policy documents badly: it drops every
table into a run of orphaned lines, loses all bold, and turns numbered lists
into plain paragraphs. The AIP policies carry four tables and 50-70 bold runs
each, so that loss is most of the document's structure.

This walks the document body in order, so tables stay where the author put
them, and reads run-level formatting so emphasis survives.
"""
import re

from docx import Document
from docx.table import Table
from docx.text.paragraph import Paragraph


def _iter_block_items(parent):
    """Yield Paragraph and Table objects in document order."""
    from docx.oxml.ns import qn

    for child in parent.element.body.iterchildren():
        if child.tag == qn("w:p"):
            yield Paragraph(child, parent)
        elif child.tag == qn("w:tbl"):
            yield Table(child, parent)


def _escape(text):
    """Escape the few Markdown characters that appear in legal prose."""
    return text.replace("|", "\\|")


def _runs_to_markdown(paragraph):
    """Render a paragraph's runs, preserving bold and italic."""
    out = []
    for run in paragraph.runs:
        text = _escape(run.text)
        if not text:
            continue
        # Whitespace must sit outside the markers or the emphasis breaks.
        lead = text[: len(text) - len(text.lstrip())]
        trail = text[len(text.rstrip()) :]
        core = text.strip()
        if core:
            if run.bold:
                core = f"**{core}**"
            if run.italic:
                core = f"_{core}_"
        out.append(f"{lead}{core}{trail}")
    return "".join(out).strip()


def _is_list(paragraph):
    return paragraph._p.pPr is not None and paragraph._p.pPr.numPr is not None


def _table_to_markdown(table):
    """Render a Word table as a Markdown table."""
    rows = []
    for row in table.rows:
        cells = [" ".join(c.text.split()) for c in row.cells]
        # Word merges are expressed as repeated cells; collapse runs of the
        # same value so a merged header does not repeat across the row.
        deduped = [c for i, c in enumerate(cells) if i == 0 or c != cells[i - 1]]
        rows.append([_escape(c) for c in deduped])

    if not rows:
        return ""

    width = max(len(r) for r in rows)
    rows = [r + [""] * (width - len(r)) for r in rows]

    head, *body = rows
    out = ["| " + " | ".join(head) + " |",
           "| " + " | ".join("---" for _ in head) + " |"]
    out += ["| " + " | ".join(r) + " |" for r in body]
    return "\n".join(out)


def convert(path, stop_before=None, skip_until=None):
    """Convert `path` to Markdown.

    skip_until — a regex; everything before the first paragraph matching it
                 is dropped (used to cut the header table and approval note).
    stop_before — a regex; conversion stops at the first match.
    """
    doc = Document(path)
    out, started = [], skip_until is None

    for block in _iter_block_items(doc):
        if isinstance(block, Table):
            if started:
                out.append("\n" + _table_to_markdown(block) + "\n")
            continue

        text = _runs_to_markdown(block)
        if not text:
            continue

        plain = re.sub(r"[*_]", "", text)

        if not started:
            if re.match(skip_until, plain):
                started = True
            else:
                continue
        if stop_before and re.match(stop_before, plain):
            break

        # A paragraph can carry no style at all, in which case .style is None.
        style = (getattr(block.style, "name", None) or "").lower()
        if re.match(r"^\d+\.\s+\S", plain) and len(plain) < 90:
            # Section headings are numbered and short; a numbered list item
            # inside a section is not.
            out.append(f"\n## {plain}\n")
        elif style.startswith("heading"):
            level = "##" if style.endswith(("1", "2")) else "###"
            out.append(f"\n{level} {plain}\n")
        elif _is_list(block):
            out.append(f"- {text}")
        else:
            out.append(f"\n{text}\n")

    md = "\n".join(out)
    return re.sub(r"\n{3,}", "\n\n", md).strip() + "\n"


def header_table(path):
    """The key/value table at the top of every AIP policy."""
    doc = Document(path)
    for block in _iter_block_items(doc):
        if isinstance(block, Table):
            pairs = {}
            for row in block.rows:
                cells = [" ".join(c.text.split()) for c in row.cells]
                deduped = [c for i, c in enumerate(cells) if i == 0 or c != cells[i - 1]]
                if len(deduped) >= 2 and deduped[0]:
                    pairs[deduped[0]] = deduped[1]
            if "Policy ID" in pairs:
                return pairs
    return {}
