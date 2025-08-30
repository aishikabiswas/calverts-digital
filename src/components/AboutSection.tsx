import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

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

      // Images stagger animation
      gsap.from(imagesRef.current?.children, {
        scale: 0.8,
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imagesRef.current,
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
            More About Us
          </span>
        </div>

        {/* Section Title */}
        <div ref={titleRef} className="mb-20">
          <h2 className="section-title text-5xl md:text-7xl lg:text-8xl leading-none">
            <span className="block overflow-hidden">
              <span className="inline-block">We Create</span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block text-primary">Digital Magic</span>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mt-8 max-w-2xl">
            We are a team of passionate creators, designers, and developers who believe in the power of digital storytelling.
          </p>
        </div>

        {/* About Images Grid */}
        <div ref={imagesRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="aspect-square glass-card rounded-2xl overflow-hidden group cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">✦</span>
                </div>
                <p className="text-sm font-medium">Design</p>
              </div>
            </div>
          </div>

          <div className="aspect-square glass-card rounded-2xl overflow-hidden group cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent text-2xl font-bold">⚡</span>
                </div>
                <p className="text-sm font-medium">Development</p>
              </div>
            </div>
          </div>

          <div className="aspect-square glass-card rounded-2xl overflow-hidden group cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">◆</span>
                </div>
                <p className="text-sm font-medium">Strategy</p>
              </div>
            </div>
          </div>

          <div className="aspect-square glass-card rounded-2xl overflow-hidden group cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent text-2xl font-bold">●</span>
                </div>
                <p className="text-sm font-medium">Branding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;