"use client";
import Link from "next/link";
import React from "react";
import { ArrowRight, ChartSpline } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48 pb-10 bg-gradient-to-br from-black via-[#001f3f] to-[#000000] lg:min-h-screen">
      <div className="space-y-6 text-center">
        <div className="bg-slate-800 shadow-2xl shadow-zinc-900 rounded-full text-xs font-semibold leading-6 text-white inline-block max-md:mb-2">
          <div className="relative flex space-x-2 items-center z-10 rounded-full dark:bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 max-md:py-[0.01px] max-md:px-3">
            <span className="max-md:text-[10px]">AI-Powered Career Helper</span>
            <ChartSpline className="w-4 h-4" />
          </div>
        </div>
        <div className="space-y-6 mx-auto">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl xl:text-8xl gradient-title">
            Navigate Your Career Journey
            <br />
            with AI Precision⚡
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Boost your career with tailored advice, interview coaching, and
            AI-driven tools for job success.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-6 py-2 rounded-full text-lg transition-all duration-1200 transform hover:scale-105 flex items-center gap-2 mx-auto animate-bounce">
              Get Started <ArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
