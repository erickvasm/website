import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));
const publicDir = path.join(root, "public");
const faviconSvgPath = path.join(publicDir, "favicon.svg");

/** Wrap a single PNG buffer in a minimal single-image ICO container. */
function pngToIco(pngBuffer, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 = 256)
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // color palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuffer.length, 8); // image data size
  entry.writeUInt32LE(header.length + entry.length, 12); // offset

  return Buffer.concat([header, entry, pngBuffer]);
}

async function generateFavicons() {
  const svg = await readFile(faviconSvgPath);

  const png32 = await sharp(svg).resize(32, 32).png().toBuffer();
  await writeFile(path.join(publicDir, "favicon.ico"), pngToIco(png32, 32));

  await sharp(svg)
    .resize(180, 180)
    .flatten({ background: "#0f172a" })
    .png()
    .toFile(path.join(publicDir, "apple-touch-icon.png"));

  await sharp(svg)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, "icon-192.png"));

  await sharp(svg)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, "icon-512.png"));

  const manifest = {
    name: "Erick Vásquez Murillo",
    short_name: "erickvasm",
    description: "Erick Vásquez Murillo — Backend Engineer portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#0f172a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
  await writeFile(
    path.join(publicDir, "site.webmanifest"),
    JSON.stringify(manifest, null, 2) + "\n",
  );
}

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#6366f1" />
          <stop offset="50%" stop-color="#3b82f6" />
          <stop offset="100%" stop-color="#eab308" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="#0f172a" />
      <rect width="${width}" height="${height}" fill="url(#bg)" opacity="0.12" />
      <text x="90" y="300" font-family="Arial, sans-serif" font-size="72" font-weight="800" fill="#f8fafc">
        Erick Vásquez Murillo
      </text>
      <text x="90" y="380" font-family="Arial, sans-serif" font-size="40" font-weight="600" fill="url(#bg)">
        Backend Engineer
      </text>
      <text x="90" y="440" font-family="Arial, sans-serif" font-size="28" fill="#94a3b8">
        Java · Spring Boot · Vert.x · Node.js · TypeScript
      </text>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(publicDir, "og-default.png"));
}

await generateFavicons();
await generateOgImage();

console.log(
  "Generated favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png, site.webmanifest, og-default.png",
);
