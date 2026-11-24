// The One-Line Cat Joke That Lands
// make.fun bounty: u-aldy998-the-one-line-cat-joke-that-lands-a7b18262
// Program writes one joke (a single line, under 200 characters) to
// /output/entry.txt. Node 22 stdlib only, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My cat has never paid rent, never washed a dish, and still glares at me like I'm the one freeloading.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const text = JOKE.trim();
if (text.length < 1 || text.length > 200 || !/\S/.test(text)) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${text.length}`);
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`Wrote ${text.length} chars to ${join(outDir, "entry.txt")}`);
