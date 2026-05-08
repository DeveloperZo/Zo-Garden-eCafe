import { readdirSync, cpSync, mkdirSync, statSync } from "fs";
import { join, dirname, relative } from "path";

function findSVGs(dir, results = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) findSVGs(full, results);
    else if (entry.name.endsWith(".svg")) results.push(full);
  }
  return results;
}

const contentDir = "content";
const publicDir = "public";
const svgs = findSVGs(contentDir);

for (const src of svgs) {
  const rel = relative(contentDir, src);
  const dest = join(publicDir, rel);
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(src, dest);
}

console.log(`SVGs synced to public/ (${svgs.length} files)`);
