#!/usr/bin/env node
// Audits title/description length caps for every culture entry, both locales.
// Limits agreed during content authoring: titles <=55 chars, descriptions <=1000 chars
// (soft target ~700-850). Every batch of new content this project has added has needed
// this check at least once — this replaces the one-off Node scripts run by hand each time.
import { readFileSync, readdirSync } from "node:fs";
import { basename } from "node:path";

const CONTENT_DIR = new URL("../src/content/", import.meta.url);
const SKIP = new Set(["index.ts", "types.ts", "countries.ts"]);
const TITLE_MAX = 55;
const DESCRIPTION_MAX = 1000;

function slugs() {
  return readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".ts") && !f.endsWith(".test.ts") && !SKIP.has(f))
    .map((f) => basename(f, ".ts"));
}

// Splits a content file into one chunk per culture-entry object (from `id:` to the next `id:`
// or end of file) so title/description pairs are attributed to the right entry, and a title
// inside `subtitle:`/`imageAlt:` is never mistaken for the `title:` field (see the
// illustrations skill's "recurring length-audit miss" note about needing a `\btitle:` anchor).
function entries(text) {
  const idIndices = [...text.matchAll(/^\s*id:\s*"([^"]+)"/gm)].map((m) => ({
    id: m[1],
    index: m.index,
  }));
  return idIndices.map(({ id, index }, i) => {
    const end = i + 1 < idIndices.length ? idIndices[i + 1].index : text.length;
    return { id, chunk: text.slice(index, end) };
  });
}

let violations = 0;
let totalEntries = 0;

for (const slug of slugs()) {
  const text = readFileSync(new URL(`${slug}.ts`, CONTENT_DIR), "utf8");
  for (const { id, chunk } of entries(text)) {
    totalEntries++;
    const titles = [...chunk.matchAll(/\btitle:\s*"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
    const descriptions = [...chunk.matchAll(/\bdescription:\s*"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);

    titles.forEach((t, i) => {
      if (t.length > TITLE_MAX) {
        violations++;
        console.error(`✗ ${slug} / ${id}: title #${i + 1} is ${t.length} chars (max ${TITLE_MAX}): "${t}"`);
      }
    });
    descriptions.forEach((d, i) => {
      if (d.length > DESCRIPTION_MAX) {
        violations++;
        console.error(
          `✗ ${slug} / ${id}: description #${i + 1} is ${d.length} chars (max ${DESCRIPTION_MAX}): "${d.slice(0, 80)}..."`
        );
      }
    });
  }
}

if (violations === 0) {
  console.log(`✓ audit-lengths: ${totalEntries} entries, all titles <=${TITLE_MAX} and descriptions <=${DESCRIPTION_MAX} chars`);
  process.exit(0);
} else {
  console.error(`\naudit-lengths: ${violations} violation(s) across ${totalEntries} entries`);
  process.exit(1);
}
