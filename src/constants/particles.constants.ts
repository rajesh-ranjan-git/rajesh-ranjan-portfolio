import { ParticleShape } from "@/types/types/particles.types";

export const MAX_SIZE = 20;
export const SHAPES: ParticleShape[] = ["circle", "star", "edge"];
export const OPACITY = 0.5;
export const MIN_SIZE = 5;
export const WOBBLE_DISTANCE = 20;
export const WOBBLE_SPEED = 10;
export const FPS_LIMIT = 120;
export const FRAME_INTERVAL = 1000 / FPS_LIMIT;
export const DENSITY_AREA = 14000;
export const MIN_PARTICLES = 40;
export const MAX_PARTICLES = 220;
export const MIN_FALL_SPEED = 0.5;
export const FALL_SPEED_RANGE = 1.5;
