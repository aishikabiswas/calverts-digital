import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      rating: 5,
      text: "Excellent Work! The team at Agenz delivered beyond our expectations. Their attention to detail and creative vision transformed our brand completely.",
      author: "Sarah Johnson",
      position: "CEO, TechCorp",
      avatar: "SJ"
    },
    {
      rating: 5,
      text: "Working with Agenz was a game-changer for our business. They understood our vision perfectly and brought it to life with stunning design.",
      author: "Michael Chen",
      position: "Founder, StartupX",
      avatar: "MC"
    },
    {
      rating: 5,
      text: "The professionalism and creativity of Agenz is unmatched. They delivered a website that not only looks amazing but also drives results.",
      author: "Emily Rodriguez",
      position: "Marketing Director, Fashion Co",
      avatar: "ER"
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

      // Testimonials stagger animation
      gsap.from(testimonialsRef.current?.children, {
        scale: 0.9,
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: testimonialsRef.current,
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
            Testimonials
          </span>
        </div>

        {/* Section Title */}
        <div ref={titleRef} className="mb-20">
          <h2 className="section-title text-5xl md:text-7xl lg:text-8xl leading-none">
            <span className="block overflow-hidden">
              <span className="inline-block">What Our</span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block text-primary">Clients Say</span>
            </span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glass-card p-8 hover:bg-card/80 transition-all duration-300 border-border/50 hover:border-primary/30 group"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-primary fill-current" 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg leading-relaxed mb-8 group-hover:text-foreground/90 transition-colors">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold group-hover:text-primary transition-colors">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;