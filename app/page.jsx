"use client";
import Achievements from "@/components/achievements";
import Faqs from "@/components/comp-339";
import Features from "@/components/features";
import HeroSection from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/data/faqs";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const statistics = [
    {
      label: "Industries Covered",
      value: 50,
    },
    {
      label: "Interview Questions",
      value: 1000,
    },
    {
      label: "(Per) Success Rate",
      value: 95,
    },
    {
      label: "(Hours) AI Support",
      value: 20,
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const top = aboutSection.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };
    window.addEventListener("scroll", handleScroll);
    //cleanup function to remove the event Listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="lg:min-h-screen bg-gradient-to-br from-black via-[#001f3f] to-[#000000]">
        <HeroSection />
      </div>

      {/* features section */}

      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-800/50 to-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Our Key Tools for Career Advancement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-700 backdrop-blur-xl border-2 hover:border-primary transition-colors duration-300"
                >
                  <CardContent className="pt-6 text-center flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center">
                      {feature.icon}
                    </div>
                    <h1 className="text-xl font-bold mb-2">{feature.title}</h1>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section> */}

      <Features />

      {/* <section
        id="about"
        className=" w-full py-12 md:py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {statistics.map((statistic, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-2"
              >
                <div className="flex items-center gap-1">
                  <CountUp
                    start={isVisible ? 0 : null}
                    end={statistic.value}
                    duration={5}
                    delay={0}
                  >
                    {({ countUpRef }) => (
                      <h3 ref={countUpRef} className="text-5xl font-sans"></h3>
                    )}
                  </CountUp>
                  <h3 className="text-4xl font-bold">+</h3>
                </div>
                <p className="text-muted-foreground">{statistic.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Achievements />

      {/* How it works section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#050714]">
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
      </section>

      {/* testinomials section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => {
              return (
                <Card key={index} className="bg-background">
                  <CardContent className="pt-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative h-12 w-12 flex-shrink-0">
                          <Image
                            width={40}
                            height={40}
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="rounded-full object-cover border-2 border-primary/20"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                          <p className="text-sm text-primary">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <h5>
                        <p className="text-muted-foreground italic relative">
                          <span className="text-3xl text-primary absolute -top-4 -left-2">
                            &quot;
                          </span>
                          {testimonial.quote}
                          <span className="text-3xl text-primary absolute -bottom-4">
                            &quot;
                          </span>
                        </p>
                      </h5>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
