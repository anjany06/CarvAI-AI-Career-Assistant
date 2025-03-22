import React, { useEffect, useRef } from "react";
import { Compass, FileText, Search, Sparkles } from "lucide-react";

const FeatureCard = ({ icon, title, description, color, delay }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(
                "opacity-100",
                "translate-y-0",
                "scale-100"
              );
              entry.target.classList.remove(
                "opacity-0",
                "translate-y-4",
                "scale-95"
              );
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  const getBgColor = () => {
    if (color === "blue") return "bg-[rgba(0,255,255,0.1)]";
    if (color === "purple") return "bg-[rgba(179,0,255,0.1)]";
    return "bg-[rgba(255,0,153,0.1)]";
  };

  const getTextColor = () => {
    if (color === "blue") return "text-[#00ffff]";
    if (color === "purple") return "text-[#b300ff]";
    return "text-[#ff0099]";
  };

  const getBorderColor = () => {
    if (color === "blue")
      return "hover:border-[#00ffff] hover:shadow-[0_0_10px_rgba(0,255,255,0.7)]";
    if (color === "purple")
      return "hover:border-[#b300ff] hover:shadow-[0_0_10px_rgba(179,0,255,0.7)]";
    return "hover:border-[#ff0099] hover:shadow-[0_0_10px_rgba(255,0,153,0.7)]";
  };

  return (
    <div
      ref={cardRef}
      className={`relative bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6 transition-all duration-500 overflow-hidden opacity-0 translate-y-4 scale-95 ${getBorderColor()} hover:-translate-y-2`}
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getBgColor()} ${getTextColor()}`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-[rgba(255,255,255,0.7)]">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 relative overflow-hidden bg-[#050714]"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-[rgba(0,255,255,0.1)] text-[#00ffff] mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Cutting-Edge Tools to Advance Your Career
          </h2>
          <p className="text-[rgba(255,255,255,0.7)]">
            Leverage our suite of advanced features designed to help you
            navigate your career journey with confidence and clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Compass className="w-6 h-6" />}
            title="Career Guidance"
            description="AI-powered career path analysis based on your skills, experience, and goals."
            color="blue"
            delay={0}
          />

          <FeatureCard
            icon={<FileText className="w-6 h-6" />}
            title="Resume Builder"
            description="Create professional, ATS-optimized resumes with our intuitive drag-and-drop editor."
            color="purple"
            delay={200}
          />

          <FeatureCard
            icon={<Search className="w-6 h-6" />}
            title="Job Matching"
            description="Find your perfect role with our advanced job matching algorithm and insights."
            color="pink"
            delay={400}
          />

          <FeatureCard
            icon={<Sparkles className="w-6 h-6" />}
            title="Skill Recommendations"
            description="Identify and develop the skills most in-demand for your desired career path."
            color="blue"
            delay={600}
          />
        </div>

        {/* <div className="mt-20 bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,255,255,0.1)] via-[rgba(179,0,255,0.1)] to-[rgba(255,0,153,0.1)]"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-[rgba(179,0,255,0.1)] text-[#b300ff] mb-4">
                AI-Powered Analysis
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Navigate Your Career with Precision
              </h3>
              <p className="text-[rgba(255,255,255,0.7)] mb-6">
                Our AI engine analyzes millions of career trajectories to
                provide you with personalized recommendations tailored to your
                unique profile and aspirations.
              </p>

              <ul className="space-y-3">
                {[
                  "Personalized career roadmaps",
                  "Industry trend analysis",
                  "Skill gap identification",
                  "Salary optimization strategies",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[rgba(179,0,255,0.2)] text-[#b300ff] flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-[rgba(255,255,255,0.8)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-[rgba(0,255,255,0.2)] via-[rgba(179,0,255,0.2)] to-[rgba(255,0,153,0.2)] rounded-lg overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center backdrop-blur-sm border border-[rgba(255,255,255,0.2)]">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[rgba(179,0,255,0.3)] rounded-full blur-[60px]"></div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-64 h-64 bg-[rgba(179,0,255,0.1)] rounded-full blur-[80px]"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[rgba(0,255,255,0.1)] rounded-full blur-[80px]"></div>
    </section>
  );
};

export default Features;
