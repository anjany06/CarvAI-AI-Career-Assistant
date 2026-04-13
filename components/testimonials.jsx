"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Extended existing testimonials with metrics for the new design structure
const testimonials = [
  {
    quote: "The AI-powered interview prep was a game-changer. Landed my dream job at a top tech company!",
    author: "Sarah Chen",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    role: "Software Engineer",
    company: "Tech Giant Co.",
    metric: "3x More Offers",
  },
  {
    quote: "The industry insights helped me pivot my career successfully. The salary data was spot-on!",
    author: "Michael Rodriguez",
    image: "https://randomuser.me/api/portraits/men/95.jpg",
    role: "Product Manager",
    company: "StartUp Inc.",
    metric: "45% Salary Jump",
  },
  {
    quote: "My resume's ATS score improved significantly. Got more interviews in two weeks than in six months!",
    author: "Priya Patel",
    image: "https://randomuser.me/api/portraits/women/84.jpg",
    role: "Marketing Director",
    company: "Global Corp",
    metric: "98% ATS Score",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="reviews" className="relative w-full py-24 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Label */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/50 mb-6 font-bold">
              <span className="w-8 h-[1px] bg-white/30" />
              REVIEWS
            </span>
            <h2
              className="text-4xl lg:text-6xl tracking-tight text-white"
              style={{ fontFamily: "var(--font-instrument), serif" }}
            >
              What our users
              <br />
              are saying.
            </h2>
          </div>
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold">
            {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </div>
        </div>

        {/* Main Quote Area */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-8">
            <blockquote
              className={`transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
            >
              <p className="text-4xl md:text-5xl lg:text-5xl leading-tight tracking-tight text-white/90" style={{ fontFamily: "var(--font-instrument), serif" }}>
                "{activeTestimonial.quote}"
              </p>
            </blockquote>

            {/* Author */}
            <div
              className={`mt-12 flex items-center gap-6 transition-all duration-300 delay-100 ${isAnimating ? "opacity-0" : "opacity-100"
                }`}
            >
              <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20 p-[2px] bg-white/5">
                <Image
                  width={56}
                  height={56}
                  src={activeTestimonial.image}
                  alt={activeTestimonial.author}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-medium text-white">{activeTestimonial.author}</p>
                <p className="text-white/50 text-sm">
                  {activeTestimonial.role}, <span className="text-white/80">{activeTestimonial.company}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Metric Highlight */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div
              className={`p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
            >
              <span className="text-[10px] tracking-widest text-white/30 uppercase block mb-4 font-bold border-b border-white/5 pb-4">
                Key Result
              </span>
              <p className="text-3xl md:text-4xl text-white font-medium tracking-tight">
                {activeTestimonial.metric}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-2 mt-8 px-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveIndex(idx);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>


      </div>


    </section>
  );
}
