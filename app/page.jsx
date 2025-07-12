"use client";
import Achievements from "@/components/achievements";
import Faqs from "@/components/faq";
import Features from "@/components/features";
import HeroSection from "@/components/hero";
import HowItWorks from "@/components/howItWorks";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <Features />
      <Achievements />

      {/* How it works section */}
      <HowItWorks />
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-[#050714]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Four Simple steps to accelerate your career growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* testimonials section */}
      <section className="w-full py-16 md:py-28 lg:py-32 bg-[#050714] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[rgba(147,51,234,0.1)] rounded-full blur-[80px]"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[rgba(59,130,246,0.1)] rounded-full blur-[80px]"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-[rgba(147,51,234,0.14)] text-[#9333ea] mb-4">
              Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
              What Our Users Say
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Join thousands of professionals who've transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                <div className="relative z-10">
                  {/* 3D Quote icon */}
                  {/* <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-lg border border-gray-700 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                      <span
                        className="text-white text-2xl font-bold relative z-10 drop-shadow-lg"
                        style={{
                          textShadow:
                            "2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(255,255,255,0.3)",
                        }}
                      >
                        &quot;
                      </span>
                    </div>
                  </div> */}

                  {/* Quote text */}
                  <p className="text-white/90 text-lg leading-relaxed mb-6 font-medium">
                    {testimonial.quote}
                  </p>

                  {/* Author info */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-0.5">
                        <Image
                          width={48}
                          height={48}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg group-hover:text-primary transition-colors">
                        {testimonial.author}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.role}
                      </p>
                      <p className="text-primary text-sm font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <Faqs />

      {/* Action section */}
      <section className="w-full">
        <div className="mx-auto py-24 bg-gradient-to-r from-indigo-900 via-white to-cyan-400 rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-foreground tracking-tighter sm:text-4xl md:text-5xl">
              Are You Ready to Boost Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              Be part of a network of thousands of professionals who are
              transforming their careers with AI-powered support.
            </p>

            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-5 animate-bounce"
              >
                Take the First Step Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
