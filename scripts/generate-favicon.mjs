import sharp from "sharp";
import { join } from "path";

const root = "c:/Users/duart/OneDrive/Desktop/Portfolio-Duarte-Bastos-main/Portfolio-Duarte-Bastos-main";
const input = join(root, "src/assets/logo.png");

/** Crop tuned to isolate only the DB monogram from the home page logo. */
const MONOGRAM_BOUNDS = { left: 0.27, top: 0.07, width: 0.46, height: 0.33 };

function removeDarkBackground(pixels) {
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const brightness = (r + g + b) / 3;

    const isDarkBg = brightness < 80 || (max < 90 && max - min < 20);
    if (isDarkBg) {
      pixels[i + 3] = 0;
      continue;
    }

    if (brightness < 115) {
      const fade = Math.round(((brightness - 80) / 35) * 255);
      pixels[i + 3] = Math.min(pixels[i + 3], fade);
    }
  }
}

const meta = await sharp(input).metadata();
const bounds = {
  left: Math.round(meta.width * MONOGRAM_BOUNDS.left),
  top: Math.round(meta.height * MONOGRAM_BOUNDS.top),
  width: Math.round(meta.width * MONOGRAM_BOUNDS.width),
  height: Math.round(meta.height * MONOGRAM_BOUNDS.height),
};

const cropped = await sharp(input)
  .extract(bounds)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const pixels = Buffer.from(cropped.data);
removeDarkBackground(pixels);

const trimmed = await sharp(pixels, {
  raw: { width: cropped.info.width, height: cropped.info.height, channels: 4 },
})
  .trim({ threshold: 8 })
  .png()
  .toBuffer();

const publicDir = join(root, "public");
const assetsDir = join(root, "src/assets");

for (const [size, name] of [
  [32, "favicon.png"],
  [16, "favicon-16.png"],
  [48, "favicon-48.png"],
  [180, "apple-touch-icon.png"],
]) {
  await sharp(trimmed)
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(join(publicDir, name));
}

await sharp(trimmed).png().toFile(join(publicDir, "logo-db.png"));
await sharp(trimmed).png().toFile(join(assetsDir, "logo-db.png"));

console.log("DB monogram assets generated");
