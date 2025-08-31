"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "It depends on the project! Simple tasks take about 1–2 weeks, while full branding or websites usually take 3–6 weeks."
  },
  {
    question: "What services does your agency offer?",
    answer:
      "We offer a wide range of creative services including branding, web design, development, digital strategy, and more."
  },
  {
    question: "What is your revision policy?",
    answer:
      "We provide multiple revision rounds to ensure the final result matches your expectations. Details depend on the project scope."
  },
  {
    question: "How do we get started working together?",
    answer:
      "Simply reach out via our contact form or email, and we’ll set up an intro call to understand your vision and goals."
  },
  {
    question: "Will I own the rights to the designs?",
    answer:
      "Yes! Once the project is completed and payment is made, you will own full rights to the designs."
  },
  {
    question: "How do you approach a new project or brand?",
    answer:
      "We start with research and discovery to understand your business, followed by strategy, design, and iterative feedback."
  }
];

const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // by default only first FAQ is active
  const [activeSteps, setActiveSteps] = useState<number[]>([0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current?.children, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%"
        }
      });

      // FAQ animation
      gsap.from(faqRef.current?.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 85%"
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const handleClick = (index: number) => {
    // progressively open → all previous stay active
    const newSteps = Array.from({ length: index + 1 }, (_, i) => i);
    setActiveSteps(newSteps);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="mb-16">
          <span className="inline-block px-4 py-2 glass-card rounded-full text-primary text-sm font-medium tracking-wider uppercase">
            FAQ
          </span>
        </div>

        {/* Section Title */}
        <div ref={titleRef} className="mb-20">
          <h2 className="section-title text-5xl md:text-7xl lg:text-8xl leading-none">
            <span className="block overflow-hidden">
              <span className="inline-block">Answers to</span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block text-primary">Your Queries</span>
            </span>
          </h2>
        </div>

        {/* FAQ List */}
        <div ref={faqRef} className="space-y-4 max-w-3xl">
          {faqs.map((faq, i) => {
            const isActive = activeSteps.includes(i);

            return (
              <Card
                key={i}
                className={`glass-card border border-border/50 overflow-hidden transition-all duration-300 cursor-pointer ${
                  isActive ? "bg-primary/5 border-primary/40" : ""
                }`}
                onClick={() => handleClick(i)}
              >
                <div className="p-6">
                  <h3
                    className={`text-lg font-medium transition-colors ${
                      isActive ? "text-primary" : "text-foreground/90"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  <div
                    className={`transition-all duration-500 text-muted-foreground ${
                      isActive
                        ? "max-h-40 mt-3 opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <p className="text-base leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
