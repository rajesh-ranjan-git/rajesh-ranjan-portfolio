import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const MAX_WIDTH = 1920;
const QUALITY = 78;
const MIN_SAVING = 0.1;

const SKIP = [/button-mask-/, /[\\/]favicon[\\/]/];

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const targets = args.filter((arg) => !arg.startsWith("--"));

const collect = async (target) => {
  const info = await stat(target);
  if (info.isFile()) return [target];

  const entries = await readdir(target, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => collect(path.join(target, entry.name))),
  );
  return nested.flat();
};

const formatKb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

const compress = async (file) => {
  const original = await readFile(file);
  const output = await sharp(original)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toBuffer();

  if (output.length > original.length * (1 - MIN_SAVING)) {
    return { file, before: original.length, after: original.length };
  }

  if (!dryRun) await writeFile(file, output);
  return { file, before: original.length, after: output.length };
};

const files = (
  await Promise.all((targets.length ? targets : ["public/assets"]).map(collect))
)
  .flat()
  .filter((file) => file.toLowerCase().endsWith(".webp"))
  .filter((file) => !SKIP.some((pattern) => pattern.test(file)));

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const { before, after } = await compress(file);
  totalBefore += before;
  totalAfter += after;

  if (after < before) {
    console.log(`${formatKb(before)} -> ${formatKb(after)}  ${file}`);
  }
}

console.log(
  `\n${dryRun ? "[dry run] " : ""}${files.length} images: ${formatKb(totalBefore)} -> ${formatKb(totalAfter)}`,
);
