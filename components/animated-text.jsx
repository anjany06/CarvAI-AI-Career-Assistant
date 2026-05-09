"use client";
import React from "react";
import { motion } from "framer-motion";

export const TypewriterText = ({ text, delay = 0 }) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: delay / 1000, ease: "linear" }}
      className="overflow-hidden whitespace-nowrap"
    >
      {text}
    </motion.div>
  );
};

export const AnimatedBlurText = ({ text, children, className, delay = 0 }) => {
  const content = text || children;
  const words = typeof content === "string" ? content.split(" ") : [];

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.1,
            ease: [0.21, 0.47, 0.32, 0.98]
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </span>
  );
};
