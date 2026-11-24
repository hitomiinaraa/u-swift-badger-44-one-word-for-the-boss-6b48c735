import { mkdirSync, writeFileSync } from "node:fs";

// One Word for the Boss — u-swift-badger-44-one-word-for-the-boss-6b48c735
// The entry is exactly one word: the boss who never decides, never says no,
// never says yes — he just says "let's circle back" and the decision dies
// in orbit. Every office knows this boss. The word lands on its own.
const ENTRY = "Circlebacker";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(ENTRY);
