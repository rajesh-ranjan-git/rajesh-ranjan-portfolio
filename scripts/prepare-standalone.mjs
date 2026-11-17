import { cp, rm, stat } from "node:fs/promises";

const OUT = ".next/standalone";

try {
  await stat(`${OUT}/server.js`);
} catch {
  console.error(`${OUT}/server.js not found. Is output: "standalone" set?`);
  process.exit(1);
}

const copies = [
  ["public", `${OUT}/public`],
  [".next/static", `${OUT}/.next/static`],
  ["ecosystem.config.cjs", `${OUT}/ecosystem.config.cjs`],
];

for (const [from, to] of copies) {
  await rm(to, { recursive: true, force: true });
  await cp(from, to, { recursive: true });
}

console.log(`Standalone package ready in ${OUT}`);
