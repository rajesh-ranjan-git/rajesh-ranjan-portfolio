import {
  MAX_SIZE,
  SHAPES,
  OPACITY,
  MIN_SIZE,
  WOBBLE_SPEED,
  DENSITY_AREA,
  MIN_PARTICLES,
  MAX_PARTICLES,
  MIN_FALL_SPEED,
  FALL_SPEED_RANGE,
} from "@/constants/particles.constants";
import { Particle } from "@/types/types/particles.types";

export const randomBetween = (min: number, max: number): number =>
  min + Math.random() * (max - min);

export const createParticle = (width: number, height: number): Particle => {
  const depth = Math.random();

  return {
    x: randomBetween(0, width),
    y: randomBetween(-height, height),
    size: MIN_SIZE + (MAX_SIZE - MIN_SIZE) * (0.4 + 0.6 * depth),
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    rotation: randomBetween(0, Math.PI * 2),
    depth,
    fallSpeed: MIN_FALL_SPEED + FALL_SPEED_RANGE * depth,
    wobbleAngle: randomBetween(0, Math.PI * 2),
    wobbleSpeed: WOBBLE_SPEED,
  };
};

export const drawStar = (
  ctx: CanvasRenderingContext2D,
  size: number,
  rotation: number,
): void => {
  const spikes = 5;
  const outerRadius = size;
  const innerRadius = size / 2;

  ctx.beginPath();

  for (let i = 0; i < spikes * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = rotation + (i * Math.PI) / spikes;
    const px = Math.cos(angle) * radius;
    const py = Math.sin(angle) * radius;

    if (i === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }

  ctx.closePath();
  ctx.fill();
};

export const drawParticle = (
  ctx: CanvasRenderingContext2D,
  particle: Particle,
): void => {
  ctx.save();
  ctx.translate(particle.x, particle.y);
  ctx.globalAlpha = OPACITY * (0.5 + 0.5 * particle.depth);

  switch (particle.shape) {
    case "star":
      drawStar(ctx, particle.size, particle.rotation);
      break;
    case "edge":
      ctx.rotate(particle.rotation);
      ctx.fillRect(
        -particle.size / 2,
        -particle.size / 2,
        particle.size,
        particle.size,
      );
      break;
    case "circle":
    default:
      ctx.beginPath();
      ctx.arc(0, 0, particle.size / 2, 0, Math.PI * 2);
      ctx.fill();
      break;
  }

  ctx.restore();
};

export const getParticleCount = (width: number, height: number): number => {
  const count = Math.round((width * height) / DENSITY_AREA);
  return Math.min(MAX_PARTICLES, Math.max(MIN_PARTICLES, count));
};
