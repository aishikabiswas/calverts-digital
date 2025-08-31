import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AwardsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current?.children;

      if (panels) {
        // Animate background panels scale + fade in/out based on scroll
        gsap.fromTo(
          panels,
          { scale: 1.2, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.3,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top", // animation starts when section enters
              end: "bottom top", // ends when section leaves viewport
              scrub: true, // ties animation directly to scroll
              pin: true, // keeps section pinned while animating
            },
          }
        );
      }

      // Optional: fade out after scroll passes
      gsap.to(panels, {
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom center",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 3 Panels (split image) */}
      <div
        ref={panelsRef}
        className="grid grid-cols-3 w-full h-[100vh] max-w-6xl gap-4"
      >
        <div
          className="bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('https://picsum.photos/1200/800?random=1')",
            backgroundPosition: "left",
          }}
        ></div>
        <div
          className="bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('https://picsum.photos/1200/800?random=1')",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('https://picsum.photos/1200/800?random=1')",
            backgroundPosition: "right",
          }}
        ></div>
      </div>
    </section>
  );
};

export default AwardsSection;
