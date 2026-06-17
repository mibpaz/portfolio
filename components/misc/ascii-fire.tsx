"use client";

import { useEffect, useRef } from "react";
import { createBuffer, palettes, renderFireText, stepFire } from "./fire";

const FRAME_MS = 1000 / 12;
const CHAR_H = 13;

function measureCharWidth(element: HTMLElement) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) return 8;

  const { font } = window.getComputedStyle(element);
  context.font = font;
  return context.measureText("0").width || 8;
}
const INTENSITY = 0.9;
const COOLING = 0.25;
const PALETTE = palettes.classic.split("");
const PAL_SIZE = PALETTE.length - 1;

type FireState = {
  cols: number;
  rows: number;
  heat: Uint8Array;
};

function createFire(cols: number, rows: number): FireState {
  return { cols, rows, heat: createBuffer(cols, rows) };
}

export const AsciiFire = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const fireRef = useRef<FireState | null>(null);
  const rafRef = useRef(0);
  const lastFrameRef = useRef(0);
  const visibleRef = useRef(true);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const pre = preRef.current;
    if (!container || !pre) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = motionQuery.matches;

    const onMotionChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
      if (e.matches) {
        cancelAnimationFrame(rafRef.current);
        renderOnce();
      } else if (visibleRef.current) {
        lastFrameRef.current = 0;
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    motionQuery.addEventListener("change", onMotionChange);

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      const effectiveWidth = width > 0 ? width : window.innerWidth;
      const effectiveHeight = height > 0 ? height : window.innerHeight * 0.5;
      const charWidth = measureCharWidth(pre);
      const cols = Math.max(40, Math.floor(effectiveWidth / charWidth));
      const rows = Math.max(18, Math.floor(effectiveHeight / CHAR_H));
      fireRef.current = createFire(cols, rows);

      if (reducedMotionRef.current) {
        renderOnce();
      }
    };

    const renderOnce = () => {
      const fire = fireRef.current;
      if (!fire || !pre) return;
      stepFire(fire.heat, fire.cols, fire.rows, INTENSITY, PAL_SIZE, COOLING);
      pre.textContent = renderFireText(
        fire.heat,
        fire.cols,
        fire.rows,
        PAL_SIZE,
        PALETTE,
      );
    };

    const tick = (now: number) => {
      if (!visibleRef.current || reducedMotionRef.current) return;

      if (now - lastFrameRef.current >= FRAME_MS) {
        lastFrameRef.current = now;
        const fire = fireRef.current;
        if (fire) {
          stepFire(
            fire.heat,
            fire.cols,
            fire.rows,
            INTENSITY,
            PAL_SIZE,
            COOLING,
          );
          pre.textContent = renderFireText(
            fire.heat,
            fire.cols,
            fire.rows,
            PAL_SIZE,
            PALETTE,
          );
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && !reducedMotionRef.current) {
          lastFrameRef.current = 0;
          rafRef.current = requestAnimationFrame(tick);
        } else {
          cancelAnimationFrame(rafRef.current);
        }
      },
      { threshold: 0.05 },
    );

    observer.observe(container);

    const init = () => {
      resize();
      if (!reducedMotionRef.current) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        renderOnce();
      }
    };

    requestAnimationFrame(init);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      motionQuery.removeEventListener("change", onMotionChange);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 z-0 h-1/2 w-screen overflow-hidden [-webkit-mask-image:radial-gradient(ellipse_90%_100%_at_50%_100%,black_30%,transparent_72%)] [mask-image:radial-gradient(ellipse_90%_100%_at_50%_100%,black_30%,transparent_72%)]"
    >
      <pre
        ref={preRef}
        aria-hidden="true"
        className="m-0 h-full w-full select-none overflow-hidden whitespace-pre font-mono text-[12px] leading-[13px] text-transparent bg-[linear-gradient(to_top,var(--color-primary)_0%,var(--color-primary-600)_35%,transparent_85%)] bg-clip-text [-webkit-background-clip:text]"
      />
    </div>
  );
};
