import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

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
          start: "top 80%",
        },
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
          start: "top 80%",
        },
      });

      // Background text continuous left scroll (loop marquee)
      gsap.to(bgTextRef.current, {
        x: "-100%", // move full width to the left
        duration: 15, // slower = longer duration
        ease: "linear",
        repeat: -1, // infinite loop
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-40 relative overflow-hidden bg-background"
    >
      {/* Giant Background Text */}
      <div
        ref={bgTextRef}
        className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
      >
        <h1 className="text-[14rem] md:text-[20rem] font-bold text-foreground/5 leading-none pointer-events-none select-none">
          Thoughtfully&nbsp;&nbsp;Thoughtfully&nbsp;&nbsp;Thoughtfully
        </h1>
      </div>
    </section>
  );
};

export default AboutSection;
