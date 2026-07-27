"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealSectionProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delayMs?: number;
};

/**
 * Fades + slides content in once it enters the viewport. Adds `reveal-ready`
 * to the wrapper only after mount so content is fully visible for no-JS
 * clients and crawlers; CSS in globals.css does the actual animation and
 * already no-ops under prefers-reduced-motion.
 */
export default function RevealSection({ children, as: Tag = "div", className = "", delayMs = 0 }: RevealSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Arm the CSS transition only after mount so no-JS/SSR output stays fully visible.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReady(true);
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal
      className={`${ready ? "reveal-armed" : ""} ${visible ? "is-visible" : ""} ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
