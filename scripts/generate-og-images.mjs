// Generates the 1200x630 link-preview (Open Graph) images:
//   public/assets/og/home.jpg              homepage card
//   public/assets/og/projects/<slug>.jpg   one card per portfolio project
// Re-run with `npm run images:og` after changing basicDetails or portfolio.

import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { basicDetails, portfolio } from "../src/config/owner.config.ts";

const WIDTH = 1200;
const HEIGHT = 630;
const SITE_HOST = "rajeshranjan.dev";
const OUT_DIR = path.join("public", "assets", "og");
const FONT = "'Segoe UI', 'Helvetica Neue', Arial, sans-serif";

const COLORS = {
  bg: "#0d0f2b",
  light: "#f4f7ff",
  muted: "#aab3cf",
  blue: "#3f82d9",
  purple: "#8b5cf6",
  pink: "#f54568",
};

const fullName = `${basicDetails.firstName} ${basicDetails.lastName}`;

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const toJpeg = (image) =>
  image.jpeg({ quality: 82, mozjpeg: true, chromaSubsampling: "4:4:4" });

const homeCard = async () => {
  const location = `${basicDetails.location.city}, ${basicDetails.location.country}`;

  const background = Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glowBlue" cx="85%" cy="15%" r="60%">
          <stop offset="0%" stop-color="${COLORS.blue}" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="${COLORS.blue}" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="glowPurple" cx="10%" cy="95%" r="55%">
          <stop offset="0%" stop-color="${COLORS.purple}" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="${COLORS.purple}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="${COLORS.bg}"/>
      <rect width="100%" height="100%" fill="url(#glowBlue)"/>
      <rect width="100%" height="100%" fill="url(#glowPurple)"/>
      <rect x="72" y="292" width="96" height="8" rx="4" fill="${COLORS.pink}"/>
      <g font-family="${FONT}">
        <text x="72" y="140" font-size="30" font-weight="600" fill="${COLORS.blue}">${escapeXml(SITE_HOST)}</text>
        <text x="72" y="250" font-size="84" font-weight="800" fill="${COLORS.light}">${escapeXml(fullName)}</text>
        <text x="72" y="370" font-size="46" font-weight="700" fill="${COLORS.blue}">${escapeXml(basicDetails.designation)}</text>
        <text x="72" y="430" font-size="30" font-weight="500" fill="${COLORS.light}">${escapeXml(`${basicDetails.organization} · ${location}`)}</text>
        <text x="72" y="530" font-size="26" font-weight="500" fill="${COLORS.muted}">Next.js · React · Node.js · TypeScript · AWS</text>
      </g>
    </svg>`);

  const portraitHeight = 600;
  const portrait = await sharp(
    path.join("public", basicDetails.images.greetingsImage),
  )
    .resize({ height: portraitHeight })
    .toBuffer();
  const { width: portraitWidth } = await sharp(portrait).metadata();

  const output = path.join(OUT_DIR, "home.jpg");

  await toJpeg(
    sharp(background).composite([
      {
        input: portrait,
        left: WIDTH - portraitWidth - 40,
        top: HEIGHT - portraitHeight,
      },
    ]),
  ).toFile(output);

  return output;
};

const projectCard = async (project) => {
  const screenshot = project.screens?.[0];
  const output = path.join(OUT_DIR, "projects", `${project.slug}.jpg`);

  const base = screenshot
    ? sharp(path.join("public", screenshot)).resize(WIDTH, HEIGHT, {
        fit: "cover",
        position: "top",
      })
    : sharp({
        create: {
          width: WIDTH,
          height: HEIGHT,
          channels: 3,
          background: COLORS.bg,
        },
      });

  const overlay = Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${COLORS.bg}" stop-opacity="0"/>
          <stop offset="32%" stop-color="${COLORS.bg}" stop-opacity="0.1"/>
          <stop offset="56%" stop-color="${COLORS.bg}" stop-opacity="0.78"/>
          <stop offset="72%" stop-color="${COLORS.bg}" stop-opacity="0.92"/>
          <stop offset="100%" stop-color="${COLORS.bg}" stop-opacity="0.97"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#fade)"/>
      <rect x="64" y="478" width="80" height="7" rx="3.5" fill="${COLORS.pink}"/>
      <g font-family="${FONT}">
        <text x="64" y="458" font-size="64" font-weight="800" fill="${COLORS.light}">${escapeXml(project.title)}</text>
        <text x="64" y="540" font-size="28" font-weight="600" fill="${COLORS.blue}">${escapeXml(`Project by ${fullName}`)}</text>
        <text x="64" y="582" font-size="24" font-weight="500" fill="${COLORS.muted}">${escapeXml(`${project.category ?? "Web project"} · ${SITE_HOST}`)}</text>
      </g>
    </svg>`);

  await toJpeg(base.composite([{ input: overlay }])).toFile(output);

  return output;
};

await mkdir(path.join(OUT_DIR, "projects"), { recursive: true });

const outputs = [await homeCard()];
for (const project of portfolio) outputs.push(await projectCard(project));

console.log(`Generated ${outputs.length} Open Graph images in ${OUT_DIR}`);
