"use client";

import { useEffect, useRef } from "react";
import { PenTool, Palette, Megaphone } from "lucide-react";
import gsap from "gsap";

const services = [
  {
    id: 1,
    title: "Visual Design",
    description: "UI Design, UX Design",
    icon: PenTool,
  },
  {
    id: 2,
    title: "Art Direction",
    description: "Visual Planning",
    icon: Palette,
  },
  {
    id: 3,
    title: "Branding Strategy",
    description: "Marketing Strategy",
    icon: Megaphone,
  },
];

export default function ServicesSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-0 md:px-6">
        {/* Section Header */}
        <div className="flex justify-end mb-16 pr-6">
          <h2 className="text-4xl md:text-5xl text-right">
            <span className="text-white">What are</span>
            <br />
            <span className="text-orange-400 font-bold">our Services</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="bg-black border border-gray-800 rounded-none p-10 flex flex-col justify-between hover:border-orange-500 transition-colors duration-300 min-h-[350px]"
              >
                {/* Top Row */}
                <div className="flex items-center justify-between mb-20">
                  <span className="text-gray-400 text-sm">
                    Service #{service.id}
                  </span>
                  <IconComponent className="w-6 h-6 text-orange-400" />
                </div>

                {/* Bottom Content */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
