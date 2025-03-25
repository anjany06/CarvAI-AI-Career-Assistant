import React, { useEffect, useRef } from "react";
import { Brain, Briefcase, ChartSpline, FileText } from "lucide-react";

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
            icon={<Brain className="w-6 h-6" />}
            title="AI-Driven Career Advice"
            description="Get personalized career advice and insights powered by advanced AI technology."
            color="blue"
            delay={0}
          />

          <FeatureCard
            icon={<FileText className="w-6 h-6" />}
            title="Resume Builder"
            description="Create professional resumes with our AI-powered builder. Stand out from the crowd with modern templates.."
            color="purple"
            delay={200}
          />

          <FeatureCard
            icon={<Briefcase className="w-6 h-6" />}
            title="Online Assessment"
            description="Practice with role-specific questions and get instant feedback to improve your performance."
            color="pink"
            delay={400}
          />

          <FeatureCard
            icon={<ChartSpline className="w-6 h-6" />}
            title="Market Trends"
            description="Stay ahead with real-time industry trends, salary data, and market analysis."
            color="blue"
            delay={600}
          />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-64 h-64 bg-[rgba(179,0,255,0.1)] rounded-full blur-[80px]"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[rgba(0,255,255,0.1)] rounded-full blur-[80px]"></div>
    </section>
  );
};

export default Features;
