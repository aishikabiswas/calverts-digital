import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Search, Code, TestTube } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  const processSteps = [
    {
      step: "Step 1",
      title: "Research",
      description: "We listen to stories of users to understand pain points and give a rough estimate about cost and time-frame.",
      icon: Search,
      color: "from-primary/20 to-accent/20"
    },
    {
      step: "Step 2", 
      title: "Implementation",
      description: "We bring your vision to life with cutting-edge design and development practices, ensuring every detail is perfect.",
      icon: Code,
      color: "from-accent/20 to-primary/20"
    },
    {
      step: "Step 3",
      title: "Testing",
      description: "Rigorous testing ensures your project works flawlessly across all devices and platforms before launch.",
      icon: TestTube,
      color: "from-primary/20 to-secondary/20"
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

      // Process steps animation
      gsap.from(stepsRef.current?.children, {
        scale: 0.8,
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stepsRef.current,
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
            Process
          </span>
        </div>

        {/* Section Title */}
        <div ref={titleRef} className="mb-20">
          <h2 className="section-title text-5xl md:text-7xl lg:text-8xl leading-none">
            <span className="block overflow-hidden">
              <span className="inline-block">A Colorful</span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block text-primary">Meaning</span>
            </span>
          </h2>
        </div>

        {/* Process Steps */}
        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((process, index) => {
            const IconComponent = process.icon;
            return (
              <Card
                key={index}
                className="glass-card overflow-hidden hover:bg-card/80 transition-all duration-300 border-border/50 hover:border-primary/30 group cursor-pointer"
              >
                {/* Visual Element */}
                <div className="aspect-video relative overflow-hidden">
                  <div className={`w-full h-full bg-gradient-to-br ${process.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className="w-16 h-16 text-primary/80" />
                  </div>
                </div>

                <div className="p-8">
                  {/* Step Number */}
                  <div className="mb-4">
                    <span className="text-primary text-sm font-medium tracking-wider uppercase">
                      {process.step}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {process.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;