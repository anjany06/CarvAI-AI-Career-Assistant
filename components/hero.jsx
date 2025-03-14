"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowBigLeft, ArrowRight, ChartSpline } from "lucide-react";
// import { Button } from "./ui/moving-border";

const HeroSection = () => {
  const imageRef = useRef(null);

  // useEffect(() => {
  //   const imageElement = imageRef.current;
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     // scrollThreshold means jaise hi 100 cross ho hme tild kr deni h image
  //     const scrollThreshold = 100;

  //     if (scrollPosition > scrollThreshold) {
  //       imageElement.classList.add("scrolled");
  //     } else {
  //       imageElement.classList.remove("scrolled");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="bg-slate-800 shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block max-md:mb-2">
          <div className="relative flex space-x-2 items-center z-10 rounded-full dark:bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 max-md:py-[0.01px] max-md:px-3 ">
            <span className="max-md:text-[10px]">AI-Powered Career Helper</span>
            <ChartSpline className="w-4 h-4" />
          </div>
          {/* <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" /> */}
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

        {/* now image hover logic and implementation */}
        {/* 
        <div className="hero-image-wrapper mt-5 md:mt-0 px-3"> */}
        {/* ab useRef ki madad se hm issh div k html ka access mil jata hai and isko manipulate kr skte hai */}
        {/* <div className="hero-image" ref={imageRef}>
            <Image
              src={"/ban.jpg"}
              width={580}
              height={220}
              alt="Banner"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default HeroSection;
