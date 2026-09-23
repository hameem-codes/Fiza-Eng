"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpStatProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // ms
  decimals?: number;
  className?: string;
}

export function CountUpStat({
  target,
  suffix = "",
  prefix = "",
  duration = 1800,
  decimals = 0,
  className = "",
}: CountUpStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}
      {suffix}
    </span>
  );
}
