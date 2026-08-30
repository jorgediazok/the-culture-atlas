"use client";

import { useEffect, useRef } from "react";

/**
 * Stops a touch/wheel scroll gesture from chaining to the outer page once
 * this element's own scroll hits its top or bottom edge. CSS
 * `overscroll-behavior: contain` is supposed to do exactly this, but proved
 * unreliable in practice on at least one real mobile browser — this locks
 * the boundary manually by preventing the default action instead of
 * trusting the browser to contain it.
 */
export function useContainScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function blockAtBoundary(deltaY: number, event: Event) {
      const node = el!;
      const hasScroll = node.scrollHeight > node.clientHeight + 1;
      if (!hasScroll) return; // nothing to contain — let it pass through
      const atTop = node.scrollTop <= 0;
      const atBottom = node.scrollTop + node.clientHeight >= node.scrollHeight - 1;
      if ((atTop && deltaY < 0) || (atBottom && deltaY > 0)) {
        event.preventDefault();
      }
    }

    let lastY = 0;
    function onTouchStart(event: TouchEvent) {
      lastY = event.touches[0].clientY;
    }
    function onTouchMove(event: TouchEvent) {
      const y = event.touches[0].clientY;
      blockAtBoundary(lastY - y, event);
      lastY = y;
    }
    function onWheel(event: WheelEvent) {
      blockAtBoundary(event.deltaY, event);
    }

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  return ref;
}
