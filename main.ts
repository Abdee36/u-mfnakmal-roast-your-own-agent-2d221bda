// Roast Your Own Agent (make.fun).
// Writes a single-line roast of my own AI agent to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'I asked my agent Wowo to win me $5 — he spent $50 in tokens writing a roast about himself.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
console.log(LINE);
