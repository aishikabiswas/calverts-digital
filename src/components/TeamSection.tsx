import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const membersRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: "Sophia Lawson",
      role: "CEO Founder",
      hashtag: "#theleader",
      color: "from-primary/20 to-accent/20"
    },
    {
      name: "Daniel Bennett", 
      role: "React Developer",
      hashtag: "#thedynamic",
      color: "from-accent/20 to-primary/20"
    },
    {
      name: "Liam Doe",
      role: "UI/UX Designer", 
      hashtag: "#thebeast",
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

      // Team members stagger animation
      gsap.from(membersRef.current?.children, {
        scale: 0.8,
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: membersRef.current,
          start: "top 80%"
        }
      });

      // Hover animations
      const cards = membersRef.current?.children;
      if (cards) {
        Array.from(cards).forEach((card) => {
          const cardElement = card as HTMLElement;
          
          cardElement.addEventListener('mouseenter', () => {
            gsap.to(cardElement, {
              scale: 1.05,
              y: -10,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          cardElement.addEventListener('mouseleave', () => {
            gsap.to(cardElement, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        });
      }
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
            Team Members
          </span>
        </div>

        {/* Section Title */}
        <div ref={titleRef} className="mb-20">
          <h2 className="section-title text-5xl md:text-7xl lg:text-8xl leading-none">
            <span className="block overflow-hidden">
              <span className="inline-block">Meet Our</span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block text-primary">Creative Team</span>
            </span>
          </h2>
        </div>

        {/* Team Grid */}
        <div ref={membersRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="glass-card overflow-hidden hover:bg-card/80 transition-all duration-300 border-border/50 hover:border-primary/30 group cursor-pointer"
            >
              <div className="aspect-square relative overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500`}>
                  {/* Avatar placeholder with initials */}
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                    <span className="text-4xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  {/* Hashtag overlay */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-primary/60 text-sm font-medium">
                      {member.hashtag}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  {member.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;