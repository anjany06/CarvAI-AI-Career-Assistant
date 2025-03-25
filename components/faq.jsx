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
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our platform
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item) => (
              <AccordionItem value={item.id} key={item.id} className="py-2">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                    <span className="flex items-center gap-3">
                      <item.icon
                        size={16}
                        className="shrink-0 opacity-60"
                        aria-hidden="true"
                      />
                      <span>{item.title}</span>
                    </span>
                    <PlusIcon
                      size={16}
                      className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-muted-foreground ps-7 pb-2">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
