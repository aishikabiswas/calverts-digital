import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AwardsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);

  const awards = [
    {
      organization: "AWWWARDS",
      award: "SOTY 2023 - 1st Winner",
      date: "MAY 2025",
      url: "https://www.awwwards.com/"
    },
    {
      organization: "CSS AWWWARDS",
      award: "Top 5 Best of eCommerce Websites 2023",
      date: "MAY 2024",
      url: "https://www.cssdesignawards.com/"
    },
    {
      organization: "STUDIO AWARDS",
      award: "Winner - US Behance Portfolio Review 2024",
      date: "MAY 2024",
      url: "https://thedanceawards.com/studio-awards"
    },
    {
      organization: "D & AD AWARDS",
      award: "SOTY 2022 - 2nd Winner",
      date: "MAY 2022",
      url: "https://www.dandad.org/en/d-ad-awards/"
    },
    {
      organization: "R & AD AWARDS",
      award: "SOTY 2021 - 3rd Winner",
      date: "MAY 2021",
      url: "https://www.rd100awards.com/"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current?.children, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%"
        }
      });

      // Awards stagger animation
      gsap.from(awardsRef.current?.children, {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: awardsRef.current,
          start: "top 80%"
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="mb-16">
          <span className="inline-block px-4 py-2 glass-card rounded-full text-primary text-sm font-medium tracking-wider uppercase">
            Awards
          </span>
        </div>

        {/* Section Title */}
        <div ref={titleRef} className="mb-20">
          <h2 className="section-title text-5xl md:text-7xl lg:text-8xl leading-none">
            <span className="block overflow-hidden">
              <span className="inline-block">Recognition</span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block text-primary">& Awards</span>
            </span>
          </h2>
        </div>

        {/* Awards Header */}
        <div className="grid grid-cols-3 gap-8 mb-8 px-8">
          <div className="text-primary text-sm font-medium tracking-wider uppercase">
            Brand Name
          </div>
          <div className="text-primary text-sm font-medium tracking-wider uppercase">
            Prize Name
          </div>
          <div className="text-primary text-sm font-medium tracking-wider uppercase">
            Date
          </div>
        </div>

        {/* Awards List */}
        <div ref={awardsRef} className="space-y-4">
          {awards.map((award, index) => (
            <Card
              key={index}
              className="glass-card hover:bg-card/80 transition-all duration-300 border-border/50 hover:border-primary/30 group cursor-pointer"
            >
              <a 
                href={award.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-3 gap-8 p-8 items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {award.organization}
                  </h3>
                </div>

                <div className="flex items-center space-x-4">
                  <p className="text-foreground group-hover:text-primary/90 transition-colors flex-1">
                    {award.award}
                  </p>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                </div>

                <div>
                  <span className="text-muted-foreground text-sm font-medium">
                    {award.date}
                  </span>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;