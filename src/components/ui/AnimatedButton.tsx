"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { twMerge } from "tailwind-merge";

interface AnimatedButtonProps {
  onClick: () => void;
  title: string;
  variant?: string;
}

const AnimatedButton = ({ onClick, title, variant }: AnimatedButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const flairRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const buttonElement = buttonRef.current;
    const flairElement = flairRef.current;

    if (!buttonElement || !flairElement) return;

    const xSet = gsap.quickSetter(flairElement, "xPercent");
    const ySet = gsap.quickSetter(flairElement, "yPercent");

    const getXY = (e: MouseEvent) => {
      const { left, top, width, height } =
        buttonElement.getBoundingClientRect();

      const xTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, width, 0, 100),
        gsap.utils.clamp(0, 100),
      );

      const yTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, height, 0, 100),
        gsap.utils.clamp(0, 100),
      );

      return {
        x: xTransformer(e.clientX - left),
        y: yTransformer(e.clientY - top),
      };
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const { x, y } = getXY(e);

      xSet(x);
      ySet(y);

      gsap.to(flairElement, {
        scale: 40,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const { x, y } = getXY(e);

      gsap.killTweensOf(flairElement);

      gsap.to(flairElement, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { x, y } = getXY(e);

      gsap.to(flairElement, {
        x: x,
        y: y,
        duration: 0.4,
        ease: "power2",
      });
    };

    buttonElement.addEventListener("mouseenter", handleMouseEnter);
    buttonElement.addEventListener("mouseleave", handleMouseLeave);
    buttonElement.addEventListener("mousemove", handleMouseMove);
  });

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={twMerge(
        "relative w-fit overflow-hidden rounded-full bg-primary px-6 py-3 text-base leading-none",
        variant === "secondary" && "bg-muted",
      )}
    >
      <div className="relative z-30 text-foreground">{title}</div>

      <div
        ref={flairRef}
        className="button__flair scale-1 pointer-events-none absolute left-0 top-0 z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted"
      ></div>
    </button>
  );
};

export default AnimatedButton;
