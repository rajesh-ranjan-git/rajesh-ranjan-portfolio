"use client";

import { useEffect, useRef } from "react";
import {
  WOBBLE_DISTANCE,
  FRAME_INTERVAL,
} from "@/constants/particles.constants";
import { themeConfig } from "@/config/common.config";
import useStore from "@/store/store";
import { Particle } from "@/types/types/particles.types";
import {
  createParticle,
  drawParticle,
  getParticleCount,
  randomBetween,
} from "@/helpers/particles.helpers";

const Particles = () => {
  const activeTheme = useStore((state) => state.activeTheme);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorRef = useRef<string>("#ffffff");
  const particlesRef = useRef<Particle[]>([]);
  const sizeRef = useRef<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    colorRef.current = activeTheme === themeConfig.dark ? "#ffffff" : "#000000";
  }, [activeTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;

    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const drawFrame = (): void => {
      const { width, height } = sizeRef.current;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = colorRef.current;

      for (const particle of particlesRef.current) {
        particle.y += particle.fallSpeed;
        particle.wobbleAngle += particle.wobbleSpeed * 0.001;
        particle.x += Math.sin(particle.wobbleAngle) * (WOBBLE_DISTANCE / 100);

        if (particle.x < 0) particle.x += width;
        if (particle.x > width) particle.x -= width;

        if (particle.y - particle.size > height) {
          particle.y = -particle.size;
          particle.x = randomBetween(0, width);
        }

        drawParticle(ctx, particle);
      }
    };

    const resize = (): void => {
      const dpr = window.devicePixelRatio || 1;
      const { clientWidth: width, clientHeight: height } = container;

      sizeRef.current = { width, height };

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particlesRef.current = Array.from(
        { length: getParticleCount(width, height) },
        () => createParticle(width, height),
      );

      // Resizing the canvas clears it, so redraw the static frame.
      if (prefersReducedMotion) drawFrame();
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    let animationFrameId: number | null = null;
    let lastFrameTime = 0;
    let isOnScreen = true;

    const animate = (time: number): void => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = time - lastFrameTime;

      if (elapsed < FRAME_INTERVAL) return;

      lastFrameTime = time - (elapsed % FRAME_INTERVAL);

      drawFrame();
    };

    const start = (): void => {
      if (prefersReducedMotion || animationFrameId !== null) return;
      animationFrameId = requestAnimationFrame(animate);
    };

    const stop = (): void => {
      if (animationFrameId === null) return;
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    };

    const syncPlayback = (): void => {
      if (isOnScreen && !document.hidden) start();
      else stop();
    };

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isOnScreen = entry.isIntersecting;
      syncPlayback();
    });

    visibilityObserver.observe(container);
    document.addEventListener("visibilitychange", syncPlayback);

    start();

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, []);

  return (
    <div className="absolute w-screen h-screen pointer-events-none">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Particles;
