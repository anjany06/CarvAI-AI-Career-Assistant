"use client";

import { howItWorks } from "@/data/howItWorks";
import React, { useEffect, useState, useRef } from "react";

const HowItWorks = () => {
  const [time, setTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Only update time on client explicitly
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-24 lg:py-32 border-t border-white/5 bg-zinc-950">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/50 mb-6 font-bold">
              <span className="w-8 h-[1px] bg-white/30" />
              Process
            </span>
            <h2
              className={`text-4xl lg:text-6xl tracking-tight text-white transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ fontFamily: "var(--font-instrument), serif" }}
            >
              Four simple steps to
              <br />
              accelerate your career.
            </h2>
          </div>
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-white/50 font-bold">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Live
            </span>
            <span className="text-white/20">|</span>
            {/* Suppress Hydration Mismatch for Time */}
            <span suppressHydrationWarning>{time.toLocaleTimeString()}</span>
          </div>
        </div>

        {/* Grid Container mimicking grid gap 1px border line strategy from your snippet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {howItWorks.map((item, index) => (
            <div
              key={index}
              className={`bg-black p-8 lg:p-12 transition-all duration-700 hover:bg-neutral-900 cursor-default ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-16">
                <div
                  className="text-7xl lg:text-8xl tracking-tight text-white/90"
                  style={{ fontFamily: "var(--font-instrument), serif" }}
                >
                  0{index + 1}
                </div>
                <div className="[&_svg]:!w-10 [&_svg]:!h-10 [&_svg]:!text-white/40 opacity-80 mix-blend-screen">
                  {item.icon}
                </div>
              </div>
              <div>
                <h3 className="text-2xl text-white font-medium mb-3 tracking-tight">{item.title}</h3>
                <div className="text-base text-white/50 leading-relaxed max-w-[90%]">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
