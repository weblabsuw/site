"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TickerProps {
  speed?: number; // px per second
  direction?: "left" | "right";
  allowScroll?: boolean;
  allowDrag?: boolean;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export function Ticker({
  speed = 0.5,
  direction = "left",
  allowScroll = false, // manual scroll
  allowDrag = false,
  className,
  children,
  ...rest
}: TickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollLeft = container.scrollWidth / 3; // set initial scroll position

    // infinite scroll
    const handleScroll = () => {
      const scrollWidth = container.scrollWidth;
      const scrollLeft = container.scrollLeft;

      if (scrollLeft === 0) {
        container.scrollLeft = scrollWidth / 3;
      }
      if (scrollLeft >= (2 * scrollWidth) / 3) {
        container.scrollLeft = scrollWidth / 3;
      }
    };

    // scroll variables
    let dx = 0; // scroll delta
    const scrollSpeed = direction === "left" ? speed : -speed;
    const frictionFactor = 0.95;

    // animate auto scroll w/ drag + friction
    let animationFrameId: number;
    let prevTimestamp: number;
    const animateScroll = (timestamp: number) => {
      if (!prevTimestamp) prevTimestamp = timestamp;
      const dt = timestamp - prevTimestamp;
      container.scrollLeft += scrollSpeed * (dt / 1000) + Math.round(dx);
      dx *= frictionFactor;

      prevTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animateScroll);
    };
    animationFrameId = requestAnimationFrame(animateScroll);

    // handle drag
    let prevMouseX: number;
    const handleDragStart = (e: MouseEvent) => {
      e.preventDefault();
      prevMouseX = e.clientX;
      container.addEventListener("mousemove", handleDrag);
      container.style.cursor = "grabbing";
    };
    const handleDrag = (e: MouseEvent) => {
      dx += 0.1 * (prevMouseX - e.clientX);
      prevMouseX = e.clientX;
    };
    const handleDragStop = () => {
      container.removeEventListener("mousemove", handleDrag);
      container.style.cursor = "auto";
    };

    // event listeners + clean up
    container.addEventListener("scroll", handleScroll);
    if (allowDrag) {
      container.addEventListener("mousedown", handleDragStart);
      container.addEventListener("mouseup", handleDragStop);
      container.addEventListener("mouseleave", handleDragStop);
    }
    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (allowDrag) {
        container.removeEventListener("mousedown", handleDragStart);
        container.removeEventListener("mouseup", handleDragStop);
        container.removeEventListener("mouseleave", handleDragStop);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [allowDrag, speed, direction]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "no-scrollbar",
        allowScroll ? "overflow-x-scroll" : "overflow-x-hidden",
        className
      )}
      {...rest}
    >
      <div className="w-fit pl-12 flex gap-12">
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}
