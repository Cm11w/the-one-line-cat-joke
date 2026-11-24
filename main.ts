// The One-Line Cat Joke That Lands
// (u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
//
// This program writes a single joke about cats — one line, under 200
// characters — to the grader's output directory as entry.txt.
//
// It runs on Node 22 using only the standard library. The joke is a fixed
// string, so every run writes exactly the same bytes: no input is read, no
// clock or random value is consulted, and nothing touches the network.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The joke (122 characters, verified; three short beats: setup, turn, punch).
const JOKE =
  "My cat stopped knocking things off the table. Now she just stares at them until I knock them off for her. She's unionized.";

// The gate in the competition rules: entry.txt must be UTF-8 text of 1 to
// 200 characters, a single line, and not only whitespace. Refuse to write
// rather than hand the grader an invalid entry.
function checkGate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`joke must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error('joke must not be only whitespace');
  }
  if (text.includes('\n') || text.includes('\r')) {
    throw new Error('joke must be a single line');
  }
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

checkGate(JOKE);
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), JOKE, 'utf8');
