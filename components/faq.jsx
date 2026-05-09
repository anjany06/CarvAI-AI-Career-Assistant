import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import {
  ChartNoAxesCombined,
  CommandIcon,
  EclipseIcon,
  LockKeyhole,
  Pen,
  PlusIcon,
  ZapIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { TypewriterText, AnimatedBlurText } from "./animated-text";

const items = [
  {
    id: "1",
    icon: CommandIcon,
    title: "What makes CarvAI unique as a career development tool?",
    content:
      "CarvAI combines AI-powered career tools with industry-specific insights to help you advance your career. Our platform offers three main features: an intelligent resume builder, a cover letter generator, and an adaptive interview preparation system. Each tool is tailored to your industry and skills, providing personalized guidance for your professional journey.",
  },
  {
    id: "2",
    icon: EclipseIcon,
    title: "How does CarvAI create tailored content??",
    content:
      "CarvAI learns about your industry, experience, and skills during onboarding. It then uses this information to generate customized resumes, cover letters, and interview questions. The content is specifically aligned with your professional background and industry standards, making it highly relevant and effective.",
  },
  {
    id: "3",
    icon: ZapIcon,
    title: "How accurate and up-to-date are carvAi's industry insights?",
    content:
      "We update our industry insights weekly using advanced AI analysis of current market trends. This includes salary data, in-demand skills, and industry growth patterns. Our system constantly evolves to ensure you have the most relevant information for your career decisions.",
  },
  {
    id: "4",
    icon: LockKeyhole,
    title: "Is my data secure with CarvAI?",
    content:
      "Absolutely. We prioritize the security of your professional information. All data is encrypted and securely stored using industry-standard practices. We use Clerk for authentication and never share your personal information with third parties.",
  },
  {
    id: "5",
    icon: ChartNoAxesCombined,
    title: "How can I track my interview preparation progress?",
    content:
      "CarvAI tracks your performance across multiple practice interviews, providing detailed analytics and improvement suggestions. You can view your progress over time, identify areas for improvement, and receive AI-generated tips to enhance your interview skills based on your responses.",
  },
  {
    id: "6",
    icon: Pen,
    title: "Can I edit the AI-generated content?",
    content:
      "Yes! While CarvAI generates high-quality initial content, you have full control to edit and customize all generated resumes, cover letters, and other content. Our markdown editor makes it easy to refine the content to perfectly match your needs.",
  },
];

export default function Faqs() {
  return (
    <section id="faq" className="relative py-24 lg:py-32 border-t border-white/5 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/50 mb-6 font-bold">
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "2rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="h-[1px] bg-white/30" 
              />
              <TypewriterText text="FAQ" delay={500} />
            </span>
            <h2
              className="text-4xl lg:text-6xl tracking-tight text-white flex flex-col gap-2"
              style={{ fontFamily: "var(--font-instrument), serif" }}
            >
              <AnimatedBlurText delay={0.2} className="block">Frequently asked</AnimatedBlurText>
              <AnimatedBlurText delay={0.6} className="block">questions.</AnimatedBlurText>
            </h2>
          </div>
          <div className="max-w-xs text-white/50 text-sm leading-relaxed">
            <AnimatedBlurText delay={1.0}>
              Find answers to common questions about our platform and features.
            </AnimatedBlurText>
          </div>
        </div>

        {/* Unified Grid Styling Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-black p-8 lg:p-12 w-full col-span-1 md:col-span-2">
            <Accordion type="single" collapsible className="w-full">
              {items.map((item) => (
                <AccordionItem value={item.id} key={item.id} className="border-b border-white/5 last:border-0 py-2 group">
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 py-4 text-left text-lg leading-6 font-medium text-white transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 hover:text-white/80">
                      <span className="flex items-center gap-4">
                        <item.icon
                          size={24}
                          className="shrink-0 text-white/30 group-hover:text-white/60 transition-colors"
                          aria-hidden="true"
                        />
                        <span>{item.title}</span>
                      </span>
                      <PlusIcon
                        size={16}
                        className="pointer-events-none shrink-0 text-white/40 transition-transform duration-200"
                        aria-hidden="true"
                      />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent className="text-white/50 text-base ps-[44px] pb-6 leading-relaxed">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
