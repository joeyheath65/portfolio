// Generates src/app/about/experienceData.ts from experienceData.yml.
//
// experienceData.yml is the human-editable source of truth. Run this after editing it:
//   npm run gen:experience
// It also runs automatically via the `predev` and `prebuild` npm hooks, so the generated
// TypeScript stays in sync on every dev server start and production build.

import { load } from "js-yaml";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const ymlPath = resolve(here, "../src/app/about/experienceData.yml");
const tsPath = resolve(here, "../src/app/about/experienceData.ts");

const REQUIRED = ["logo", "jobTitle", "company", "dates", "duties", "accomplishments", "technology", "reflection"];

function fail(msg) {
  console.error(`\n[gen-experience] ✗ ${msg}\n`);
  process.exit(1);
}

const parsed = load(readFileSync(ymlPath, "utf8"));
const experience = parsed?.experience;
if (!Array.isArray(experience) || experience.length === 0) {
  fail("experienceData.yml must contain a non-empty `experience:` list.");
}

// Validate + normalize each entry so a typo in the YAML fails the build loudly
// instead of silently shipping a broken About page.
const clean = experience.map((entry, i) => {
  const where = `entry #${i + 1} (${entry?.jobTitle ?? "?"} @ ${entry?.company ?? "?"})`;
  for (const key of REQUIRED) {
    if (entry[key] === undefined || entry[key] === null) fail(`${where}: missing required field \`${key}\`.`);
  }
  if (!Array.isArray(entry.duties)) fail(`${where}: \`duties\` must be a list.`);
  if (!Array.isArray(entry.technology)) fail(`${where}: \`technology\` must be a list.`);
  if (!Array.isArray(entry.accomplishments)) fail(`${where}: \`accomplishments\` must be a list.`);
  const accomplishments = entry.accomplishments.map((a, j) => {
    if (typeof a?.text !== "string") fail(`${where}: accomplishment #${j + 1} needs a \`text\` string.`);
    return a.link ? { text: a.text, link: a.link } : { text: a.text };
  });
  // Emit fields in interface order for a stable, readable generated file.
  return {
    logo: entry.logo,
    jobTitle: entry.jobTitle,
    company: entry.company,
    dates: entry.dates,
    duties: entry.duties,
    accomplishments,
    technology: entry.technology,
    reflection: entry.reflection,
  };
});

const banner = `// AUTO-GENERATED FILE — DO NOT EDIT BY HAND.
// Source of truth: experienceData.yml  (edit that, then \`npm run gen:experience\`).
// Regenerated automatically on \`npm run dev\` / \`npm run build\` (predev / prebuild hooks).
`;

const iface = `export interface ExperienceData {
  logo: string;
  jobTitle: string;
  company: string;
  dates: string;
  duties: string[];
  accomplishments: { text: string; link?: string }[];
  technology: string[];
  reflection: string;
}
`;

const body = `export const experienceData: ExperienceData[] = ${JSON.stringify(clean, null, 2)};\n`;

writeFileSync(tsPath, `${banner}\n${iface}\n${body}`);
console.log(`[gen-experience] ✓ wrote ${clean.length} entries → src/app/about/experienceData.ts`);
