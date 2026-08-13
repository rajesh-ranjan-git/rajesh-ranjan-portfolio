export type ParticleShape = "circle" | "star" | "edge";

export type Particle = {
  x: number;
  y: number;
  size: number;
  shape: ParticleShape;
  rotation: number;
  depth: number;
  fallSpeed: number;
  wobbleAngle: number;
  wobbleSpeed: number;
};
