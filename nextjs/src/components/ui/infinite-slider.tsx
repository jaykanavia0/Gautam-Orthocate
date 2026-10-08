"use client";

import React, { useRef, useState } from "react";
import { motion, useAnimationFrame } from "motion/react";
import { cn } from "@/lib/utils";

interface InfiniteSliderProps {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
  speed?: number;
  speedOnHover?: number;
  className?: string;
  reverse?: boolean;
}

export function InfiniteSlider({
  children,
  direction = "horizontal",
  speed = 25,
  speedOnHover,
  className,
  reverse = false,
}: InfiniteSliderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  const effectiveSpeed = isHovered && speedOnHover !== undefined ? speedOnHover : speed;

  useAnimationFrame((_, delta) => {
    if (!containerRef.current || effectiveSpeed === 0) return;
    const distance = (effectiveSpeed * delta) / 1000;
    setOffset((prev) => {
      const isVertical = direction === "vertical";
      const totalSize = isVertical
        ? containerRef.current?.scrollHeight || 1000
        : containerRef.current?.scrollWidth || 1000;
      const halfSize = totalSize / 2;

      if (halfSize <= 0) return 0;

      const next = reverse ? prev + distance : prev - distance;
      return next <= -halfSize ? 0 : next >= 0 ? -halfSize : next;
    });
  });

  const isVertical = direction === "vertical";

  return (
    <div
      className={cn(
        "overflow-hidden select-none",
        isVertical ? "flex flex-col h-full" : "flex flex-row w-full",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={containerRef}
        className={cn(
          "flex shrink-0",
          isVertical ? "flex-col gap-6" : "flex-row gap-6"
        )}
        style={{
          transform: isVertical
            ? `translateY(${offset}px)`
            : `translateX(${offset}px)`,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default InfiniteSlider;
