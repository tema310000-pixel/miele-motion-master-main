import { useEffect } from "react";

const DEFAULT_SMOOTHING = 0.4;
const DEFAULT_SPEED_MULTIPLIER = 3.6;
const DEFAULT_MAX_DELTA = 1200;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getDeltaPixels = (event: WheelEvent) => {
  if (event.deltaMode === 1) return event.deltaY * 16;
  if (event.deltaMode === 2) return event.deltaY * window.innerHeight;
  return event.deltaY;
};

const isEditableTarget = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  !!target.closest("input, textarea, select, [contenteditable='true']");

const isScrollableTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;

  let el: HTMLElement | null = target;
  while (el && el !== document.body) {
    const style = window.getComputedStyle(el);
    const canScroll = /(auto|scroll|overlay)/.test(style.overflowY);
    if (canScroll && el.scrollHeight > el.clientHeight) return true;
    el = el.parentElement;
  }

  return false;
};

type SmoothWheelOptions = {
  smoothing?: number;
  speedMultiplier?: number;
  maxDelta?: number;
};

export const useSmoothWheel = (options: SmoothWheelOptions = {}) => {
  const {
    smoothing = DEFAULT_SMOOTHING,
    speedMultiplier = DEFAULT_SPEED_MULTIPLIER,
    maxDelta = DEFAULT_MAX_DELTA,
  } = options;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion()) return;

    let currentY = window.scrollY;
    let targetY = currentY;
    let rafId: number | null = null;

    const animate = () => {
      const diff = targetY - currentY;
      if (Math.abs(diff) < 0.5) {
        currentY = targetY;
        rafId = null;
        return;
      }

      currentY += diff * smoothing;
      window.scrollTo(0, currentY);
      rafId = requestAnimationFrame(animate);
    };

    const syncToScroll = () => {
      if (rafId !== null) return;
      currentY = window.scrollY;
      targetY = currentY;
    };

    const onWheel = (event: WheelEvent) => {
      if (event.defaultPrevented) return;
      if (event.ctrlKey || event.metaKey) return;
      if (isEditableTarget(event.target)) return;
      if (isScrollableTarget(event.target)) return;

      const delta = Math.max(
        -maxDelta,
        Math.min(maxDelta, getDeltaPixels(event))
      );

      if (delta === 0) return;

      event.preventDefault();

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      targetY = Math.max(
        0,
        Math.min(maxScroll, targetY + delta * speedMultiplier)
      );

      if (rafId === null) {
        currentY = window.scrollY;
        rafId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("scroll", syncToScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", syncToScroll);
      window.removeEventListener("wheel", onWheel);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [smoothing, speedMultiplier, maxDelta]);
};
