import React from "react";
import { Users, FileCheck, Award, Compass } from "lucide-react";

const stats = [
  { id: 1, icon: Users, value: "50+", label: "Industries Covered" },
  { id: 2, icon: FileCheck, value: "1000+", label: "Interview Questions" },
  { id: 3, icon: Award, value: "95%", label: "Success Rate" },
  { id: 4, icon: Compass, value: "24/7", label: "AI Support" },
];

const Achievements = () => {
  // Duplicate metrics multiple times to ensure the marquee string is long enough to fill ultra-wide screens infinitely
  const marqueeItems = [...stats, ...stats, ...stats, ...stats];

  return (
    <section className="py-8 bg-black relative overflow-hidden flex items-center">
      {/* Edge Gradients for Smooth In/Out Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Internal CSS for the bulletproof marquee */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-scroll {
          animation: marquee-scroll 25s linear infinite;
        }
        .animate-marquee-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Marquee Track Container (w-max is required so it calculates the true width of its contents) */}
      <div className="flex w-max animate-marquee-scroll gap-6 pr-6">
        {marqueeItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="w-[260px] h-[80px] rounded-2xl bg-white/5 border border-white/10 p-4 flex items-center gap-4 hover:bg-white/10 transition-colors backdrop-blur-md shadow-lg cursor-default"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center border border-white/5 shadow-inner">
              <item.icon className="w-5 h-5 text-gray-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white mb-0.5">{item.value}</span>
              <span className="text-[9px] text-white/50 uppercase tracking-widest">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
