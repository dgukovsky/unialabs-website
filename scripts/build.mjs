import { mkdir, rm, cp } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const outDir = resolve(root, "dist");

const staticFiles = [
  "index.html",
  "styles.css",
  "main.js",
  "apple-touch-icon.png",
  "client-banco-de-chile.png",
  "client-banco-falabella.png",
  "client-fief.svg",
  "client-gestorcapitax.png",
  "client-nudara.jpg",
  "favicon-32.png",
  "favicon.png",
  "favicon.svg",
  "llms.txt",
  "og-image.png",
  "og-image.svg",
  "robots.txt",
  "site.webmanifest",
  "sitemap.xml",
  "unia-logo.svg",
];

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

await Promise.all(
  staticFiles.map(async (file) => {
    const source = resolve(root, file);
    const target = resolve(outDir, file);
    await cp(source, target, { force: true });
  })
);

console.log(`Built ${staticFiles.length} files into ${outDir}`);
