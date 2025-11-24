import { howItWorks } from "@/data/howItWorks";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="w-full py-16 md:py-28 lg:py-32 bg-[#050714] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-[rgba(242,0,255,0.14)] text-[#ea00ff] mb-4">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Four simple steps to accelerate your career growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {howItWorks.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl 
              p-8 shadow-lg transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
            >
              {/* Rotating border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 via-primary/30 to-white/20 opacity-0 group-hover:opacity-100 
              transition-opacity duration-500 -z-10 blur-sm"></div>

              {/* Step number badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center
               text-white text-sm font-bold shadow-lg z-10">
                {index + 1}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 text-white 
                shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-primary/50">
                  <span className="text-2xl">{item.icon}</span>
                </div>

                <h3 className="font-semibold text-xl text-white mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Connecting line for desktop */}
              {index < howItWorks.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-64 h-64 bg-[rgba(179,0,255,0.1)] rounded-full blur-[80px]"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[rgba(0,255,255,0.1)] rounded-full blur-[80px]"></div>
    </section>
  );
};

export default HowItWorks;
