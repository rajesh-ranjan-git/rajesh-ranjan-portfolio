"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";
import { CarouselProps } from "@/types/props/carousel.props.types";
import Card from "@/components/ui/card/card";
import Tooltip from "@/components/ui/tooltip/tooltip";

const BREAKPOINTS = { md: 768, lg: 1024, xl: 1200 };

const getSlidesPerView = (width: number): number => {
  if (width >= BREAKPOINTS.xl) return 2;
  if (width >= BREAKPOINTS.lg) return 2;
  return 1;
};

const DRAG_THRESHOLD_RATIO = 0.15;
const TRANSITION_MS = 500;

const Carousel = ({
  slides,
  slidesPerViewOverride,
  slideHeightClassName = "h-56 sm:h-64 md:h-72 lg:h-80",
  autoPlay = false,
  autoPlayInterval = 3500,
  showArrows = true,
  showDots = true,
  dotsPosition = "bottom-center",
  rounded = true,
  scale,
  className = "",
}: CarouselProps) => {
  const realCount = slides.length;
  const [slidesPerView, setSlidesPerView] = useState(1);
  const cloneCount = Math.min(realCount, 3);

  const extendedSlides = useMemo(() => {
    if (realCount === 0) return [];
    const head = slides.slice(0, cloneCount).map((slide) => ({ ...slide }));
    const tail = slides
      .slice(realCount - cloneCount)
      .map((slide) => ({ ...slide }));
    const middle = slides.map((slide) => ({ ...slide }));
    return [...tail, ...middle, ...head];
  }, [slides, realCount, cloneCount]);

  const [currentIndex, setCurrentIndex] = useState(cloneCount);
  const [withTransition, setWithTransition] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const [isDragging, setIsDragging] = useState(false);
  const [dragDeltaPx, setDragDeltaPx] = useState(0);
  const dragStartX = useRef(0);
  const trackWrapperRef = useRef<HTMLDivElement>(null);
  const wrapperWidthRef = useRef(0);

  useEffect(() => setIsPlaying(autoPlay), [autoPlay]);

  useEffect(() => {
    const update = () =>
      setSlidesPerView(
        slidesPerViewOverride
          ? slidesPerViewOverride
          : getSlidesPerView(window.innerWidth),
      );
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (trackWrapperRef.current) {
        wrapperWidthRef.current = trackWrapperRef.current.offsetWidth;
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const slidePercent = 100 / slidesPerView;

  const goTo = useCallback((index: number) => {
    setWithTransition(true);
    setCurrentIndex(index);
  }, []);

  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  useEffect(() => {
    if (!isPlaying || isHovering || isDragging || realCount <= slidesPerView) {
      return;
    }
    const id = setInterval(() => {
      setWithTransition(true);
      setCurrentIndex((i) => i + 1);
    }, autoPlayInterval);
    return () => clearInterval(id);
  }, [
    isPlaying,
    isHovering,
    isDragging,
    autoPlayInterval,
    realCount,
    slidesPerView,
  ]);

  const handleTransitionEnd = useCallback(() => {
    if (currentIndex >= cloneCount + realCount) {
      setWithTransition(false);
      setCurrentIndex(currentIndex - realCount);
    } else if (currentIndex < cloneCount) {
      setWithTransition(false);
      setCurrentIndex(currentIndex + realCount);
    }
  }, [currentIndex, cloneCount, realCount]);

  useEffect(() => {
    if (!withTransition) {
      const raf = requestAnimationFrame(() => setWithTransition(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [withTransition]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (realCount <= 1) return;
    setIsDragging(true);
    setWithTransition(false);
    dragStartX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setDragDeltaPx(e.clientX - dragStartX.current);
  };

  const endDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setWithTransition(true);

    const wrapperWidth = wrapperWidthRef.current || 1;
    const slideWidthPx = wrapperWidth / slidesPerView;
    const threshold = slideWidthPx * DRAG_THRESHOLD_RATIO;

    if (dragDeltaPx <= -threshold) {
      setCurrentIndex((i) => i + 1);
    } else if (dragDeltaPx >= threshold) {
      setCurrentIndex((i) => i - 1);
    }
    setDragDeltaPx(0);
  };

  const onPointerUp = () => endDrag();
  const onPointerLeave = () => {
    if (isDragging) endDrag();
    setIsHovering(false);
  };

  const activeDot =
    (((currentIndex - cloneCount) % realCount) + realCount) % realCount;

  const dragDeltaPercent = trackWrapperRef.current
    ? (dragDeltaPx / (wrapperWidthRef.current || 1)) * 100
    : 0;

  const translatePercent = -(currentIndex * slidePercent) + dragDeltaPercent;

  const isDotsOnTop = dotsPosition.startsWith("top");
  const dotsJustifyClassName = dotsPosition.endsWith("left")
    ? "justify-start"
    : dotsPosition.endsWith("right")
      ? "justify-end"
      : "justify-center";

  const dots = showDots && realCount > slidesPerView && (
    <div
      className={`flex items-center flex-wrap gap-2 px-4 ${dotsJustifyClassName} ${
        isDotsOnTop ? "mb-8" : "mt-8"
      }`}
    >
      {slides.map((slide, index) => (
        <button
          key={`${slide.name}-${index}`}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => goTo(index + cloneCount)}
          className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-blue cursor-pointer shadow-sm shadow-surface-shadow-strong shrink-0 ${
            index === activeDot
              ? "w-6 bg-accent-blue"
              : "w-2 bg-gray-300 hover:bg-gray-400"
          }`}
        />
      ))}
    </div>
  );

  if (realCount === 0) return null;

  return (
    <div
      className={`relative w-full select-none ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={onPointerLeave}
    >
      {isDotsOnTop && dots}

      <div
        ref={trackWrapperRef}
        className="overflow-hidden touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className="flex py-4"
          style={{
            transform: `translateX(${translatePercent}%)`,
            transition: withTransition
              ? `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
              : "none",
            cursor: isDragging
              ? "grabbing"
              : realCount > 1
                ? "grab"
                : "default",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={`${slide.name}-${index}`}
              className="px-2 sm:px-3 shrink-0"
              style={{ flex: `0 0 ${slidePercent}%` }}
            >
              <Card
                scale={scale}
                className={`shadow-lg group px-2 py-2 ${slideHeightClassName}`}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={
                      slide.imageSrc || "/assets/error/image-not-available.webp"
                    }
                    alt={slide.alt ?? (slide.name as string)}
                    width={1600}
                    height={1600}
                    draggable={false}
                    className={`w-full h-full object-cover object-top pointer-events-none ${
                      rounded ? "rounded-xl" : ""
                    }`}
                  />

                  {slide?.url ? (
                    <div className="top-2 right-2 absolute">
                      <Tooltip
                        content="See certificate"
                        position="left"
                        delay={0}
                      >
                        <Link
                          href={slide.url}
                          target="_blank"
                          className="bg-surface-bg hover:bg-surface-bg-hover shadow-[0_12px_20px_var(--color-surface-shadow)] backdrop-blur-xl p-1 border-surface-border hover:border-surface-border-hover rounded-lg transition-all duration-300"
                        >
                          <MdOpenInNew size={20} />
                        </Link>
                      </Tooltip>
                    </div>
                  ) : null}

                  {slide.name && (
                    <div
                      className={`bottom-0 absolute flex flex-col gap-0.5 justify-center items-center bg-linear-to-b from-bg/0 via-bg/70 to-bg/95 backdrop-blur-md p-4 rounded-t-lg w-full ${rounded ? "rounded-b-xl" : ""}`}
                    >
                      {slide.name && (
                        <h6 className="font-semibold text-primary text-xl text-center">
                          {slide.name}
                        </h6>
                      )}
                      {slide.platform && (
                        <span className="font-semibold text-md text-secondary">
                          {slide.platform}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {showArrows && realCount > slidesPerView && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="top-1/2 left-3 z-10 absolute flex justify-center items-center bg-white/80 hover:bg-white shadow-lg backdrop-blur rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-9 h-9 text-gray-800 hover:scale-105 active:scale-95 transition -translate-y-1/2 focus-visible:ring-accent-blue"
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="top-1/2 right-3 z-10 absolute flex justify-center items-center bg-white/80 hover:bg-white shadow-lg backdrop-blur rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-9 h-9 text-gray-800 hover:scale-105 active:scale-95 transition -translate-y-1/2 focus-visible:ring-accent-blue"
          >
            <FaChevronRight />
          </button>
        </>
      )}

      {!isDotsOnTop && dots}
    </div>
  );
};

export default Carousel;
