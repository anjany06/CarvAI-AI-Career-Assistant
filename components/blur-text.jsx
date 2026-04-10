"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const BlurText = ({
  text,
  className = "",
  delay = 0,
  animateBy = "words",
  direction = "bottom",
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const segments = animateBy === "words" ? text.split(" ") : text.split("");
  const yOffset = direction === "top" ? -20 : 20;

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap ${className}`}
      style={{ display: "flex", flexWrap: "wrap", whiteSpace: "pre-wrap" }}
    >
      {segments.map((segment, index) => (
        <span
          key={index}
          style={{ display: "inline-block", marginRight: animateBy === "words" ? "0.2em" : "0" }}
        >
          <motion.span
            initial={{ filter: "blur(10px)", opacity: 0, y: yOffset }}
            animate={
              isVisible ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}
            }
            transition={{
              duration: 0.8,
              delay: delay + index * 0.05,
              ease: "easeOut",
            }}
            style={{ display: "inline-block" }}
          >
            {segment}
          </motion.span>
        </span>
      ))}
    </div>
  );
};
