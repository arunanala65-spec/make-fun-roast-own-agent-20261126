import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My agent burned 100k tokens and spawned three sub-agents to fix one bug, then confidently shipped the fix — in its summary, not the file.";

// Gate: entry.txt must be UTF-8 text of 1 to 200 characters, not only whitespace.
if (entry.trim().length === 0) {
  throw new Error("Invalid entry: must not be only whitespace");
}
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`Invalid entry: must be 1-200 characters, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(entry);
