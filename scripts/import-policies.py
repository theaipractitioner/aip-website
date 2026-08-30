#!/usr/bin/env python3
"""Convert an approved AIP policy .docx into the website's policies collection.

Source of truth is the .docx on iCloud Drive. This only translates it: the
header table becomes frontmatter, the numbered sections become headings, and
the internal approval note is dropped (it is addressed to AIP, not readers).

Re-runnable. Point it at a new version and it overwrites.
"""
import re
import subprocess
import sys
from pathlib import Path

POLICIES = Path(
    "/Users/timparkin/Library/Mobile Documents/com~apple~CloudDocs/"
    "Cowork OS/Business Development/09 Policies"
)
OUT = Path(
    "/Users/timparkin/Documents/Claude Code/aip-website-development/"
    "aip-website/src/content/policies"
)

# slug, docx path relative to POLICIES, group, order on the index, and a
# one-line summary written for the index page (the documents have no abstract).
T1 = "Tier 1 - Launch Critical"
T2 = "Tier 2 - Strategic Differentiators"

DOCS = [
    # Tier 1. Listed at v1.0 before those files exist: the importer skips a
    # missing file and refuses any document whose Status is not Approved, so
    # this can be run repeatedly and will pick each one up as it lands.
    dict(
        slug="privacy",
        path=f"{T1}/AIP-PS-001-Privacy-Policy-v1.0.docx",
        group="legal",
        order=1,
        summary="What personal information we collect, why we hold it, who else "
                "processes it on our behalf, and the rights you have over it.",
    ),
    dict(
        slug="cookies",
        path=f"{T1}/AIP-PS-002-Cookie-Policy-v1.0.docx",
        group="legal",
        order=2,
        summary="What this site stores on your device. At the time of writing it "
                "sets no cookies at all and carries no analytics or tracking.",
    ),
    dict(
        slug="data-protection",
        path=f"{T1}/AIP-PS-003-Data-Protection-Policy-v1.0.docx",
        group="legal",
        order=3,
        summary="How we handle personal data as a business: the standards we work "
                "to, and what happens if something goes wrong.",
    ),
    dict(
        slug="website-terms",
        path=f"{T1}/AIP-PS-004-Terms-of-Website-Use-v1.0.docx",
        group="legal",
        order=4,
        summary="The terms you accept by using this website.",
    ),
    dict(
        slug="terms-of-business",
        path=f"{T1}/AIP-PS-005-Terms-of-Business-v1.0.docx",
        group="legal",
        order=5,
        summary="The terms on which we take on and deliver client work.",
    ),
    dict(
        slug="ai-usage-and-governance",
        path="Tier 2 - Strategic Differentiators/AIP-PS-006-AI-Usage-and-Governance-Policy-v1.0.docx",
        group="how-we-work",
        order=1,
        summary="How we use AI tools in our own work: which tools are approved, what "
                "client data may go near them, and who is accountable for the output.",
    ),
    dict(
        slug="digital-workers",
        path="Tier 2 - Strategic Differentiators/AIP-PS-007-Digital-Workers-Policy-v1.0.docx",
        group="how-we-work",
        order=2,
        summary="How we govern AI that operates as a registered, semi-autonomous member "
                "of our workforce, rather than as a tool a human is driving.",
    ),
]


def docx_to_text(path):
    return subprocess.run(
        ["textutil", "-convert", "txt", "-stdout", str(path)],
        capture_output=True, text=True, check=True,
    ).stdout


def parse(text):
    """Split into (header dict, body lines), dropping the approval note."""
    lines = [l.rstrip() for l in text.split("\n")]

    # Header runs as alternating key/value pairs until the first blank line.
    header, i = {}, 2  # 0 = title, 1 = "Groundframe Ltd t/a ... Specification"
    while i + 1 < len(lines) and lines[i].strip():
        header[lines[i].strip()] = lines[i + 1].strip()
        i += 2

    # The approval note is a standalone "Approved — Version X" line plus the
    # paragraph under it. It speaks to AIP about publication, not to readers.
    while i < len(lines) and not re.match(r"^1\. ", lines[i]):
        i += 1

    return header, lines[i:]


def to_markdown(body):
    out = []
    for line in body:
        if re.match(r"^\d+\. \S", line):
            out.append(f"\n## {line}\n")
        elif line.startswith("\t•\t") or line.startswith("\t•\t"):
            out.append(f"- {line.split(chr(9))[2].strip()}")
        elif line.strip():
            out.append(f"\n{line.strip()}\n")
    # collapse runs of blank lines
    md = "\n".join(out)
    return re.sub(r"\n{3,}", "\n\n", md).strip() + "\n"


def esc(s):
    return s.replace('"', '\\"')


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for d in DOCS:
        src = POLICIES / d["path"]
        if not src.exists():
            print(f"  MISSING: {src}")
            continue
        header, body = parse(docx_to_text(src))

        version = header.get("Version", "").split("—")[0].strip()
        status = header.get("Status", "")
        if "Approved" not in status:
            print(f"  REFUSING {d['slug']}: status is {status!r}, not Approved")
            continue

        md = (
            "---\n"
            f'title: "{esc(header["Title"])}"\n'
            f'policyId: "{header["Policy ID"]}"\n'
            f'version: "{version}"\n'
            f'effectiveDate: {header["Effective date"]}\n'
            f'nextReview: "{esc(header["Next review"])}"\n'
            f'owner: "{esc(header["Owner"])}"\n'
            f'appliesTo: "{esc(header["Applies to"])}"\n'
            f'summary: "{esc(d["summary"])}"\n'
            f'group: "{d["group"]}"\n'
            f"order: {d['order']}\n"
            "---\n\n" + to_markdown(body)
        )
        (OUT / f"{d['slug']}.md").write_text(md)
        print(f"  {d['slug']}.md  v{version}  {len(md.split())} words")


if __name__ == "__main__":
    main()
