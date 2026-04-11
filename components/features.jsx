"use client";
import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  FileText,
  Sparkles,
  ClipboardCheck
} from "lucide-react";

// Number Counter hook for smooth counting
const Counter = ({ from, to, duration, symbol = "" }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest) + symbol);

  React.useEffect(() => {
    const controls = animate(count, to, { duration: duration, ease: "easeOut" });
    return controls.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
};

// Reusable Card Wrapper
const FeatureCard = ({ className, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    whileHover={{ scale: 1.02 }}
    className={`liquid-glass rounded-2xl p-6 transition-colors duration-300 hover:border-white/20 group flex flex-col ${className}`}
  >
    {children}
  </motion.div>
);

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-[#0F1115] text-white overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24 relative z-20">
          <div>
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/50 mb-6 font-bold">
              <span className="w-8 h-[1px] bg-white/30" />
              FEATURES
            </span>
            <h2
              className="text-4xl lg:text-6xl tracking-tight text-white"
              style={{ fontFamily: "var(--font-instrument), serif" }}
            >
              Everything you need to
              <br />
              grow your career.
            </h2>
          </div>
          <div className="max-w-xs text-white/50 text-sm leading-relaxed">
            Powerful AI tools to help you build, prepare, and stay ahead in your career.
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1: Industry Insights */}
          <FeatureCard className="md:col-span-2 lg:col-span-2" delay={0}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                <TrendingUp className="w-5 h-5 text-white/80" />
              </div>
              <div>
                <h3 className="text-xl font-medium" style={{ fontFamily: "var(--font-instrument), serif" }}>Industry Insights</h3>
              </div>
            </div>
            <p className="text-sm text-white/60 font-sans mb-8">
              Track market outlook, growth, and demand in real time.
            </p>

            <div className="flex-1 flex flex-col gap-4">
              {/* Top: 3 Side-by-Side Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                {/* Box 1 */}
                <div className="bg-black/20 rounded-xl p-4 flex flex-col justify-between border border-white/5">
                  <span className="text-xs font-semibold text-white/50 mb-3 tracking-wider">MARKET OUTLOOK</span>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center gap-2 mt-auto"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                    <span className="text-xl font-bold text-white tracking-tight">Positive</span>
                  </motion.div>
                </div>

                {/* Box 2 */}
                <div className="bg-black/20 rounded-xl p-4 flex flex-col justify-between border border-white/5">
                  <span className="text-xs font-semibold text-white/50 mb-3 tracking-wider">INDUSTRY GROWTH</span>
                  <span className="text-xl font-bold text-white tracking-tight mt-auto">
                    +<Counter from={0} to={12} duration={2} symbol="%" />
                  </span>
                </div>

                {/* Box 3 */}
                <div className="bg-black/20 rounded-xl p-4 flex flex-col justify-between border border-white/5 gap-2">
                  <span className="text-xs font-semibold text-white/50 mb-1 tracking-wider">DEMAND LEVEL</span>
                  <div className="flex items-center gap-3 mt-auto">
                    <span className="text-xl font-bold text-white tracking-tight">High</span>
                    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="h-full bg-white rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom: Trend Visualization Full Width */}
              <div className="bg-black/20 rounded-xl border border-white/5 p-4 flex items-end gap-2 justify-between h-32 w-full overflow-hidden relative mt-2">
                <div className="absolute bg-blue-500/5 blur-2xl rounded-full" />
                {[30, 45, 25, 60, 40, 75, 50, 85, 65, 95, 40, 70, 80, 50, 90].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-white/20 rounded-t border-t border-white/40 relative z-10"
                    initial={{ height: "10%" }}
                    animate={{ height: [`${h * 0.7}%`, `${h}%`, `${h * 0.8}%`] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.05,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </FeatureCard>

          {/* Card 2: Salary Trends */}
          <FeatureCard className="col-span-1" delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                <DollarSign className="w-5 h-5 text-white/80" />
              </div>
              <h3 className="text-xl font-medium" style={{ fontFamily: "var(--font-instrument), serif" }}>Salary Trends</h3>
            </div>
            <p className="text-sm text-white/60 font-sans mb-6">
              Understand salary ranges across roles.
            </p>
            <div className="flex-1 flex flex-col gap-4 justify-center">
              {[
                { label: "Entry", val: "$45k", width: "30%", color: "bg-white/20" },
                { label: "Median", val: "$78k", width: "60%", color: "bg-white/40" },
                { label: "Max", val: "$120k", width: "90%", color: "bg-white/70" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1 w-full relative">
                  <div className="flex justify-between text-xs text-white/60">
                    <span>{item.label}</span>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.2 }}>
                      {item.val}
                    </motion.span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: item.width }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.2, ease: "easeOut" }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </FeatureCard>

          {/* Card 3: Resume Builder */}
          <FeatureCard className="col-span-1" delay={0.2}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                <FileText className="w-5 h-5 text-white/80" />
              </div>
              <h3 className="text-xl font-medium" style={{ fontFamily: "var(--font-instrument), serif" }}>Resume Builder</h3>
            </div>
            <p className="text-sm text-white/60 font-sans mb-6">
              Create professional resumes with AI assistance.
            </p>
            <div className="flex-1 flex items-center justify-center pt-2">
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-[65%] aspect-[3/4.5] bg-[#ececec] border border-white/20 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-4 flex flex-col gap-4 overflow-hidden relative"
              >
                {/* Header Profile Area */}
                <div className="flex gap-3 items-center">
                  <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="w-8 h-8 rounded-full bg-blue-500/20 flex-shrink-0" />
                  <div className="flex flex-col gap-1.5 w-full">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "60%" }} className="h-2 bg-black/30 rounded-full" />
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "40%" }} transition={{ delay: 0.2 }} className="h-1.5 bg-black/15 rounded-full" />
                  </div>
                </div>
                {/* Sections */}
                <div className="flex flex-col gap-2">
                  {/* Experience */}
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-[6px] font-extrabold text-black/40 uppercase tracking-widest mt-1">Experience</motion.div>
                  <div className="flex flex-col gap-1">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "80%" }} transition={{ delay: 0.5 }} className="h-1 bg-black/30 rounded-full" />
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "95%" }} transition={{ delay: 0.6 }} className="h-0.5 bg-black/15 rounded-full" />
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "95%" }} transition={{ delay: 0.7 }} className="h-0.5 bg-black/15 rounded-full" />
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "95%" }} transition={{ delay: 0.8 }} className="h-0.5 bg-black/15 rounded-full" />
                  </div>
                  {/* Projects */}
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-[6px] font-extrabold text-black/40 uppercase tracking-widest mt-1">Project 1</motion.div>
                  <div className="flex flex-col gap-1">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "70%" }} transition={{ delay: 0.8 }} className="h-1 bg-black/30 rounded-full" />
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ delay: 0.9 }} className="h-0.5 bg-black/15 rounded-full" />
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ delay: 0.9 }} className="h-0.5 bg-black/15 rounded-full" />
                  </div>
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-[6px] font-extrabold text-black/40 uppercase tracking-widest mt-1">Project 2</motion.div>
                  <div className="flex flex-col gap-1">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "70%" }} transition={{ delay: 0.8 }} className="h-1 bg-black/30 rounded-full" />
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ delay: 0.9 }} className="h-0.5 bg-black/15 rounded-full" />
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ delay: 0.9 }} className="h-0.5 bg-black/15 rounded-full" />
                  </div>
                  {/* Skills */}
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.0 }} className="text-[6px] font-extrabold text-black/40 uppercase tracking-widest mt-1">Skills</motion.div>
                  <div className="flex gap-1 flex-wrap">
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.1 }} className="h-1.5 w-4 bg-black/20 rounded-full" />
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.2 }} className="h-1.5 w-6 bg-black/20 rounded-full" />
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.3 }} className="h-1.5 w-5 bg-black/20 rounded-full" />
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.4 }} className="h-1.5 w-3 bg-black/20 rounded-full" />
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.3 }} className="h-1.5 w-5 bg-black/20 rounded-full" />
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.3 }} className="h-1.5 w-5 bg-black/20 rounded-full" />
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.3 }} className="h-1.5 w-5 bg-black/20 rounded-full" />
                  </div>
                </div>
                {/* Typing Line */}
                <div className="flex flex-col gap-1 mt-auto pt-2 border-t border-black/10">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "50%" }} transition={{ delay: 1 }} className="h-1.5 bg-blue-500/60 rounded-full relative">
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="absolute -right-2 top-1/2 -translate-y-1/2 w-0.5 h-2.5 bg-blue-600" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </FeatureCard>

          {/* Card 4: Cover Letter */}
          <FeatureCard className="col-span-1" delay={0.3}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors items-center justify-center relative">
                <ClipboardCheck className="w-5 h-5 text-white/80" />
              </div>
              <h3 className="text-xl font-medium" style={{ fontFamily: "var(--font-instrument), serif" }}>Cover Letters</h3>
            </div>
            <p className="text-sm text-white/60 font-sans mb-6">
              Generate tailored cover letters instantly.
            </p>
            <div className="flex-1 flex flex-col justify-center items-center relative">
              <div className="w-[90%] bg-black/20 rounded-xl border border-white/5 p-4 shadow-inner relative overflow-hidden backdrop-blur-sm flex flex-col gap-3">
                {/* Top shimmer loop */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
                />

                {/* Input 1: Company Name */}
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] text-white/50 uppercase tracking-widest">Company Name</span>
                  <div className="h-6 rounded bg-white/5 border border-white/10 flex items-center px-2">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "40%" }} transition={{ delay: 0.2 }} className="h-1 bg-white/30 rounded-full" />
                  </div>
                </div>

                {/* Input 2: Role */}
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] text-white/50 uppercase tracking-widest">Role</span>
                  <div className="h-6 rounded bg-white/5 border border-white/10 flex items-center px-2">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "60%" }} transition={{ delay: 0.6 }} className="h-1 bg-white/30 rounded-full" />
                  </div>
                </div>

                {/* Input 3: Job Description */}
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] text-white/50 uppercase tracking-widest">Job Description</span>
                  <div className="h-10 rounded bg-white/5 border border-white/10 p-2 flex flex-col gap-1.5">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "90%" }} transition={{ delay: 1 }} className="h-1 bg-white/20 rounded-full" />
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "70%" }} transition={{ delay: 1.2 }} className="h-1 bg-white/20 rounded-full" />
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} className="mt-2 h-7 rounded-md flex items-center justify-center gap-1.5 border border-gray-500 cursor-pointer bg-zinc-600">
                  <Sparkles className="w-3 h-3 text-white" />
                  <span className="text-[10px] font-semibold text-white">Generate</span>
                </motion.div>
              </div>
            </div>
          </FeatureCard>

          {/* Card 5: Online Assessment */}
          <FeatureCard className="col-span-1" delay={0.4}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                <ClipboardCheck className="w-5 h-5 text-white/80" />
              </div>
              <h3 className="text-xl font-medium" style={{ fontFamily: "var(--font-instrument), serif" }}>Assessments</h3>
            </div>
            <p className="text-sm text-white/60 font-sans mb-6">
              Practice with real-world questions & feedback.
            </p>
            <div className="flex-1 flex flex-col justify-center items-center w-full gap-4 px-4 pt-4 relative">
              {/* Top Stats */}
              <div className="flex justify-between w-full">
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/50 uppercase tracking-widest mb-1.5">Overall Score</span>
                  <span className="text-2xl font-bold text-gray-200 tracking-tight">80<span className="text-xs opacity-70 ml-0.5">%</span></span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-white/50 uppercase tracking-widest mb-1.5">Highest Score</span>
                  <span className="text-2xl font-bold text-white tracking-tight">98<span className="text-xs opacity-70 ml-0.5">%</span></span>
                </div>
              </div>

              {/* Line Graph */}
              <div className="w-full flex-1 relative flex items-end opacity-90 mt-4">
                <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                  <motion.path
                    d="M 0,35 C 10,20 20,32 30,28 C 38,24 40,12 45,12 C 52,12 55,22 60,18 C 65,14 68,5 75,5 C 85,5 90,12 100,8"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.85)"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                  />
                  <motion.path
                    d="M 0,35 C 10,20 20,32 30,28 C 38,24 40,12 45,12 C 52,12 55,22 60,18 C 65,14 68,5 75,5 C 85,5 90,12 100,8 L 100,40 L 0,40 Z"
                    fill="url(#grad)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
                      <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                    </linearGradient>
                  </defs>

                  {/* Floating points */}
                  <motion.circle cx="45" cy="12" r="1.5" fill="white" className="drop-shadow-[0_0_3px_rgba(255,255,255,1)]" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.9 }} vectorEffect="non-scaling-stroke" />
                  <motion.circle cx="75" cy="5" r="1.5" fill="white" className="drop-shadow-[0_0_3px_rgba(255,255,255,1)]" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.5 }} vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
            </div>
          </FeatureCard>

        </div>
      </div>
    </section>
  );
}
