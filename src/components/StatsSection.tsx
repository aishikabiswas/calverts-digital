import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      label: "HAPPY CLIENTS",
      value: "18+",
      description: "Satisfied clients worldwide"
    },
    {
      label: "OUR REVENUE", 
      value: "50M",
      description: "In total revenue generated"
    },
    {
      label: "PROJECT DONE",
      value: "95%",
      description: "Success rate completion"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats counter animation
      gsap.from(statsRef.current?.children, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%"
        }
      });

      // Number counting animation
      const numbers = sectionRef.current?.querySelectorAll('[data-count]');
      numbers?.forEach((number) => {
        const target = parseInt(number.getAttribute('data-count') || '0');
        gsap.from({ count: 0 }, {
          count: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: function() {
            const value = Math.ceil(this.targets()[0].count);
            if (number.textContent?.includes('M')) {
              number.textContent = value + 'M';
            } else if (number.textContent?.includes('%')) {
              number.textContent = value + '%';
            } else {
              number.textContent = value + '+';
            }
          },
          scrollTrigger: {
            trigger: number,
            start: "top 80%"
          }
        });
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
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="glass-card p-8 text-center hover:bg-card/80 transition-all duration-300 border-border/50 hover:border-primary/30 group"
            >
              <div className="mb-4">
                <span className="text-primary text-sm font-medium tracking-wider uppercase">
                  {stat.label}
                </span>
              </div>
              
              <div className="mb-4">
                <span 
                  className="hero-text text-6xl md:text-7xl text-primary group-hover:neon-text transition-all duration-300"
                  data-count={stat.value.replace(/[^\d]/g, '')}
                >
                  {stat.value}
                </span>
              </div>
              
              <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;