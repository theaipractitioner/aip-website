/**
 * Fails the build if the company number is rendered without its leading zero.
 *
 * WHY
 *
 * The registered number is 09715227. It was stored as "9715227" for a while
 * and nothing noticed, because a wrong company number breaks no test and
 * renders perfectly well — it is only wrong in law. Every UK limited company
 * has to state its registered number on its website in readable text, so this
 * is a compliance defect that looks like a typo.
 *
 * There is an assertion in src/config/site.ts that catches the constant itself
 * changing shape. This catches the other way it can go wrong: somebody typing
 * the number straight into a page, a policy document or a blog post without
 * the zero. That is the more likely mistake, because every source document we
 * have gives it as "Company No. 9715227".
 *
 * WHAT IT DOES
 *
 * Reads the expected number out of src/config/site.ts, then scans every HTML
 * file in dist/ for the digits after the leading zero. Each occurrence has to
 * be preceded by that zero. One that is not fails the build.
 *
 * Deliberately fatal, and deliberately dependency-free — it runs on Cloudflare
 * Pages after `astro build`. A failed build leaves the previous site up, which
 * is the right direction to fail in.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = join(root, "dist");
const config = join(root, "src", "config", "site.ts");

const fail = (message) => {
  console.error(`\n✗ check-company-number: ${message}\n`);
  process.exit(1);
};

/* Read the expected value rather than hardcoding it here, so there is still
   only one place the number is written down. */
const declared = readFileSync(config, "utf8").match(
  /export const COMPANY_NUMBER = "(\d+)"/,
);
if (!declared) {
  fail(
    `could not find COMPANY_NUMBER in ${relative(root, config)}. If it was ` +
      "renamed or moved, update this script to match — do not delete the check.",
  );
}

const expected = declared[1];
if (!/^0\d{7}$/.test(expected)) {
  fail(
    `COMPANY_NUMBER is "${expected}", which is not an eight-digit number ` +
      "starting with a zero. Expected 09715227.",
  );
}

/* The digits after the leading zero. Any appearance of these that is not
   immediately preceded by the zero is the bug this exists to catch. */
const withoutZero = expected.slice(1);

const htmlFiles = readdirSync(dist, { recursive: true, encoding: "utf8" })
  .filter((f) => f.endsWith(".html"))
  .map((f) => join(dist, f));

if (htmlFiles.length === 0) {
  fail(`no HTML files found in ${relative(root, dist)}. Did the build run?`);
}

const offences = [];
let occurrences = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  for (const match of html.matchAll(new RegExp(withoutZero, "g"))) {
    occurrences += 1;
    if (html[match.index - 1] === "0") continue;
    offences.push({
      file: relative(dist, file),
      context: html.slice(Math.max(0, match.index - 60), match.index + 20),
    });
  }
}

if (offences.length > 0) {
  console.error(
    `\n✗ check-company-number: the company number appears without its ` +
      `leading zero in ${offences.length} place(s). It must read ${expected} ` +
      `everywhere — the zero is part of the registered number.\n`,
  );
  for (const { file, context } of offences.slice(0, 20)) {
    console.error(`  ${file}\n    …${context.replace(/\s+/g, " ")}…`);
  }
  if (offences.length > 20) {
    console.error(`  … and ${offences.length - 20} more`);
  }
  console.error("");
  process.exit(1);
}

if (occurrences === 0) {
  fail(
    `the company number does not appear in any of the ${htmlFiles.length} ` +
      "built pages. It is a statutory disclosure and belongs in the footer " +
      "of every page — something has removed it.",
  );
}

console.log(
  `✓ check-company-number: ${expected} correct in ${occurrences} place(s) ` +
    `across ${htmlFiles.length} pages`,
);
