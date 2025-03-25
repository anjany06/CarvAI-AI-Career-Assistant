import React, { useEffect, useRef } from "react";
import { Users, FileCheck, Award, Compass } from "lucide-react";

const StatCard = ({ icon, value, label, color, suffix = "", delay }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let startValue = 0;
            const counter = counterRef.current;
            if (!counter) return;

            const duration = 2000; // ms
            const step = Math.max(1, Math.floor(value / (duration / 16))); // 60fps

            setTimeout(() => {
              const timer = setInterval(() => {
                startValue += step;

                if (startValue > value) {
                  startValue = value;
                  clearInterval(timer);
                }

                counter.textContent = startValue.toString() + suffix;
              }, 16);
            }, delay);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [value, suffix, delay]);

  const getColorClasses = () => {
    switch (color) {
      case "neon-blue":
        return { icon: "bg-cyan-400/10 text-cyan-400", text: "text-cyan-400" };
      case "neon-purple":
        return {
          icon: "bg-purple-500/10 text-purple-500",
          text: "text-purple-500",
        };
      case "neon-pink":
        return { icon: "bg-pink-500/10 text-pink-500", text: "text-pink-500" };
      default:
        return { icon: "bg-cyan-400/10 text-cyan-400", text: "text-cyan-400" };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <div
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center opacity-0"
      style={{
        animation: "scale-in 0.5s ease-out forwards",
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      <div
        className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4 ${colorClasses.icon}`}
      >
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-1 text-white">
        <span ref={counterRef}>0{suffix}</span>
      </h3>
      <p className="text-white/70">{label}</p>
    </div>
  );
};

const CircleProgress = ({ value, color, size, children }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (progressRef.current) {
                progressRef.current.style.setProperty(
                  "--progress",
                  String(value)
                );
                progressRef.current.classList.add("animated");
              }
            }, 300);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [value]);

  const radius = (size - 6) / 2;
  const circumference = 2 * Math.PI * radius;

  const getColorClass = () => {
    switch (color) {
      case "neon-blue":
        return "text-cyan-400";
      case "neon-purple":
        return "text-purple-500";
      case "neon-pink":
        return "text-pink-500";
      default:
        return "text-cyan-400";
    }
  };

  return (
    <div
      ref={progressRef}
      className={`relative flex items-center justify-center ${getColorClass()}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute top-0 left-0 w-full h-full"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          className="stroke-white/5 fill-none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={6}
        />
        <circle
          className={`stroke-current fill-none transition-all duration-1000 ease-out`}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={6}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference - (value / 100) * circumference,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-20 relative overflow-hidden bg-[#050714]"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-pink-500/10 text-pink-500 mb-4">
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Our Impact on Career Journeys
          </h2>
          <p className="text-white/70">
            See how Career Helper has transformed thousands of professional
            lives with our cutting-edge guidance and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <StatCard
            icon={<Users className="w-6 h-6" />}
            value={50}
            label="Industries Covered"
            color="neon-blue"
            suffix="+"
            delay={200}
          />

          <StatCard
            icon={<FileCheck className="w-6 h-6" />}
            value={1000}
            label="Interview Questions"
            color="neon-purple"
            suffix="+"
            delay={100}
          />

          <StatCard
            icon={<Award className="w-6 h-6" />}
            value={95}
            label="Success Rate"
            color="neon-pink"
            suffix="%"
            delay={300}
          />

          <StatCard
            icon={<Compass className="w-6 h-6" />}
            value={24}
            label="AI Support"
            color="neon-blue"
            suffix="/7"
            delay={500}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 mb-4">
              Growth Metrics
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Transforming Careers with Data-Driven Insights
            </h3>
            <p className="text-white/70 mb-8">
              Our platform analyzes industry trends and user data to provide the
              most effective career insights, resulting in measurable career
              growth for our users.
            </p>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white">Salary Increase</span>
                  <span className="text-pink-500">45%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-pink-500 w-[45%] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white">Interview Success Rate</span>
                  <span className="text-cyan-400">70%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 w-[70%] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white">Insights Accuracy</span>
                  <span className="text-purple-500">92%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-[92%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <CircleProgress value={87} color="neon-blue" size={140}>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-white">87%</span>
                  <span className="text-xs text-white/60 mt-1">
                    Promotion Rate
                  </span>
                </div>
              </CircleProgress>
            </div>

            <div className="flex flex-col items-center">
              <CircleProgress value={93} color="neon-purple" size={140}>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-white">93%</span>
                  <span className="text-xs text-white/60 mt-1">
                    Skill Growth
                  </span>
                </div>
              </CircleProgress>
            </div>

            <div className="flex flex-col items-center">
              <CircleProgress value={65} color="neon-pink" size={140}>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-white">65%</span>
                  <span className="text-xs text-white/60 mt-1">
                    Career Change
                  </span>
                </div>
              </CircleProgress>
            </div>

            <div className="flex flex-col items-center">
              <CircleProgress value={78} color="neon-blue" size={140}>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-white">78%</span>
                  <span className="text-xs text-white/60 mt-1">
                    Accurate Questions
                  </span>
                </div>
              </CircleProgress>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-[rgba(179,0,255,0.1)] rounded-full blur-[80px]"></div>
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-[rgba(0,255,255,0.1)] rounded-full blur-[80px]"></div>

      {/* Animation for statsCard appearance */}
      <style jsx>{`
        @keyframes scale-in {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Achievements;
