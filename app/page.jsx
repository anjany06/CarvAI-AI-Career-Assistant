"use client";
import Achievements from "@/components/achievements";
import Faqs from "@/components/faq";
import Features from "@/components/features";
import HeroSection from "@/components/hero";
import HowItWorks from "@/components/howItWorks";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { howItWorks } from "@/data/howItWorks";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import TestimonialsSection from "@/components/testimonials";
import { ReactLenis } from 'lenis/react';

export default function Home() {
  return (
    <ReactLenis root>
      <div>
      <HeroSection />

      {/* <Achievements /> */}
      <Features />

      {/* How it works section */}
      <HowItWorks />
      <TestimonialsSection />

      {/* FAQ SECTION */}
      <Faqs />

      {/* Action section */}
      <section className="relative py-24 lg:py-32 border-t border-white/5 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
            <div>
              <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/50 mb-6 font-bold">
                <span className="w-8 h-[1px] bg-white/30" />
                ACTION
              </span>
              <h2
                className="text-4xl lg:text-6xl tracking-tight text-white"
                style={{ fontFamily: "var(--font-instrument), serif" }}
              >
                Are you ready to
                <br />
                boost your career?
              </h2>
            </div>
            <div className="max-w-xs text-white/50 text-sm leading-relaxed">
              Join a network of thousands transforming their careers with AI.
            </div>
          </div>
          <div className="flex bg-gradient-to-r from-indigo-900 via-white to-cyan-400 rounded-2xl p-12 lg:p-20 items-center justify-center relative overflow-hidden group shadow-2xl">
            {/* Soft monochrome gradient inset for premium feel without harsh cyan edges */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
            <Link href="/dashboard">
              <Button
                size="lg"
                className="h-14 px-8 rounded-md bg-black/90 text-white hover:bg-black/80 transition-all font-medium flex items-center gap-2 text-lg shadow-2xl relative z-10"
              >
                Take the First Step Today
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </ReactLenis>
  );
}