"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { BlurText } from "./blur-text";

const HeroSection = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white selection:bg-white/20">
      {/* Suppress global header on home page */}
      <style dangerouslySetInnerHTML={{ __html: `header { display: none !important; }` }} />

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover lg:object-fill object-right"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260330_145725_08886141-ed95-4a8e-8d6d-b75eaadce638.mp4"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col h-full w-full max-w-7xl mx-auto">
        
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center px-8 py-6 w-full">
          <Link href="/" className="text-3xl tracking-tight text-white flex items-start" style={{ fontFamily: "var(--font-instrument), serif" }}>
            CarvAi
          </Link>
          
          <div className="hidden md:flex gap-8 items-center text-sm" style={{ fontFamily: "var(--font-barlow), sans-serif" }}>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-white">Home</a>
            <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="text-white/60 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" onClick={(e) => handleScroll(e, 'how-it-works')} className="text-white/60 hover:text-white transition-colors">How it works</a>
            <a href="#reviews" onClick={(e) => handleScroll(e, 'reviews')} className="text-white/60 hover:text-white transition-colors">Reviews</a>
            <a href="#faq" onClick={(e) => handleScroll(e, 'faq')} className="text-white/60 hover:text-white transition-colors">FAQ</a>
          </div>

          <Link href="/dashboard">
            <button className="liquid-glass rounded-full px-6 py-2.5 text-sm font-medium text-white hover:scale-[1.03] transition-transform flex items-center gap-2">
              Get Started
            </button>
          </Link>
        </nav>

        {/* Hero Content (Left-aligned) */}
        <div className="flex-1 flex flex-col justify-center px-4 md:px-8 lg:px-16 pt-24">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="liquid-glass rounded-full flex items-center gap-2 px-3 py-1.5 w-fit mb-8"
          >
            <span className="bg-white text-black text-xs font-semibold px-2 py-0.5 rounded-full">New</span>
            <span className="text-xs font-medium text-white/90">AI Resume Builder & Career Insights Platform</span>
          </motion.div>

          {/* Headline */}
          <div className="mb-6 font-normal tracking-[-4px] text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.8]" style={{ fontFamily: "PPMondwest, sans-serif" }}>
            <BlurText 
              text="Shape Your Future with AI"
              delay={0.1}
              animateBy="words"
              direction="bottom"
              className="text-white pb-2"
            />
            <BlurText 
              text="Build Smarter Careers"
              delay={0.5}
              animateBy="words"
              direction="bottom"
              className="text-white"
            />
          </div>

          {/* Subheading */}
          <motion.p 
            initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-sm md:text-base text-white max-w-xl font-light leading-relaxed opacity-90"
            style={{ fontFamily: "var(--font-barlow), sans-serif", fontWeight: 300 }}
          >
            CarvAi empowers you to build resumes, explore industry trends, and prepare for opportunities with AI-driven tools designed for modern professionals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-10"
          >
            <Link href="/dashboard">
              <button className="bg-white/20 backdrop-blur-full border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-full px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/20 hover:scale-[1.03] transition-all flex items-center gap-2">
                Try it now
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </Link>
            <button className="hidden md:flex rounded-full px-6 py-3 text-sm font-medium text-white hover:text-white/80 transition-colors items-center gap-2 bg-transparent border-none">
              <Play className="w-4 h-4 fill-white" />
              See Demo
            </button>
          </motion.div>
        </div>

        {/* Partners / Features Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col items-center gap-4 pb-8 px-4 mt-2"
        >
          <div className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/80">
            Powered by modern AI and scalable tech stack
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-2" style={{ fontFamily: "var(--font-instrument), serif" }}>
            {["Resume Builder", "Industry Insights", "Assessments", "Cover Letters", "Analytics"].map((feature, i) => (
              <span key={i} className="italic text-2xl md:text-3xl tracking-tight text-white/90">
                {feature}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
