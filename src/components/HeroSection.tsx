// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import heroOrb from "@/assets/hero-orb.png";
// import { ChevronDown } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const HeroSection = () => {
//   const heroRef = useRef<HTMLElement>(null);
//   const orbRef = useRef<HTMLImageElement>(null);
//   const titleRef = useRef<HTMLDivElement>(null);
//   const subtitleRef = useRef<HTMLDivElement>(null);
//   const descriptionRef = useRef<HTMLParagraphElement>(null);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Orb floating animation
//       gsap.to(orbRef.current, {
//         y: -30,
//         duration: 2,
//         ease: "power1.inOut",
//         repeat: -1,
//         yoyo: true
//       });

//       // Orb glow effect
//       gsap.to(orbRef.current, {
//         filter: "brightness(1.3) saturate(1.2)",
//         duration: 2,
//         ease: "power2.inOut",
//         repeat: -1,
//         yoyo: true
//       });

//       // Title entrance animation - split by words
//       const titleWords = titleRef.current?.querySelectorAll('.word');
//       if (titleWords) {
//         gsap.from(titleWords, {
//           y: 100,
//           opacity: 0,
//           duration: 1.2,
//           stagger: 0.2,
//           ease: "power3.out",
//           delay: 1
//         });
//       }

//       // Subtitle reveal
//       gsap.from(subtitleRef.current, {
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         ease: "power2.out",
//         delay: 1.8
//       });

//       // Description fade in
//       gsap.from(descriptionRef.current, {
//         y: 30,
//         opacity: 0,
//         duration: 0.8,
//         ease: "power2.out",
//         delay: 2.2
//       });

//       // Scroll indicator animation
//       gsap.from(scrollRef.current, {
//         y: 20,
//         opacity: 0,
//         duration: 0.8,
//         ease: "power2.out",
//         delay: 2.6
//       });

//       // Continuous scroll bounce
//       gsap.to(scrollRef.current, {
//         y: 10,
//         duration: 1.5,
//         ease: "power2.inOut",
//         repeat: -1,
//         yoyo: true,
//         delay: 3
//       });

//       // Parallax effect on scroll
//       ScrollTrigger.create({
//         trigger: heroRef.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: 1,
//         onUpdate: (self) => {
//           const progress = self.progress;
//           gsap.to(orbRef.current, {
//             y: progress * 200,
//             rotation: progress * 180,
//             scale: 1 - progress * 0.3,
//             duration: 0.3
//           });
//         }
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   const splitText = (text: string) => {
//     return text.split(' ').map((word, index) => (
//       <span key={index} className="word inline-block mr-4">
//         {word}
//       </span>
//     ));
//   };

//   return (
//     <section
//       ref={heroRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Background gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
//       {/* Animated orb */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//         <img
//           ref={orbRef}
//           src="/hero1.png"
//           alt="3D Orb"
//           className="w-80 h-80 object-contain animate-glow"
//         />
//         <div className="absolute inset-0 bg-gradient-orb rounded-full blur-xl" />
//       </div>

//       <div className="container mx-auto px-6 relative z-20 text-center">
//         {/* Creative Agency Label */}
//         {/* <div className="mb-8 ">
//           <span className="inline-block top-20 glass-card rounded-full text-primary text-sm font-medium tracking-wider uppercase">
//             Creative Agency
//           </span>
//         </div> */}

//         {/* Main Title */}
//         <div ref={titleRef} className="mb-6 relative">
//           <div className="max-w-6xl mx-auto relative h-[300px] md:h-[400px] lg:h-[500px]">
//             {/* Creative - positioned left */}
//             <div className="absolute top-48 left-0">
//               <h1 className="hero-text text-6xl md:text-8xl lg:text-9xl leading-none">
//                 {splitText("Creative")}
//               </h1>
//             </div>
            
//             {/* Digital Agency - positioned right and lower */}
//             <div className="absolute bottom-0 right-0">
//               <h1 className="hero-text text-6xl md:text-8xl lg:text-9xl leading-none">
//                 <span className="text-primary ">
//                   {splitText("Digital")}
//                 </span>
//                 <span className="text-white ml-4">
//                   {splitText("Agency")}
//                 </span>
//               </h1>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div 
//           ref={scrollRef}
//           className="absolute bottom--1 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer"
//           onClick={() => {
//             document.getElementById('services')?.scrollIntoView({ 
//               behavior: 'smooth' 
//             });
//           }}
//         >
//           <span className="text-primary text-sm tracking-wider uppercase">Scroll Down</span>
//           <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
//         </div>
//       </div>

//       {/* Copyright - positioned top-right */}
//       <div ref={subtitleRef} className="absolute centre right-80 z-30">
//         <p className="text-primary text-lg font-medium">© 2025</p>
//       </div>
      
//       {/* Description - positioned bottom-right */}
//       <div ref={descriptionRef} className="absolute bottom-64 right-6 z-30 max-w-md">
//         <p className="text-muted-foreground text-lg leading-relaxed text-left">
//           Agenz is a Simple team uses aesthetic and minimal approach to create stunning digital experiences.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const orbRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Orb floating animation
      gsap.to(orbRef.current, {
        y: -30,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      });

      // Orb glow effect
      gsap.to(orbRef.current, {
        filter: "brightness(1.3) saturate(1.2)",
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      });

      // Title entrance animation - split by words
      const titleWords = titleRef.current?.querySelectorAll('.word');
      if (titleWords) {
        gsap.from(titleWords, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          delay: 1
        });
      }

      // Subtitle reveal
      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1.8
      });

      // Description fade in
      gsap.from(descriptionRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 2.2
      });

      // Scroll indicator animation
      gsap.from(scrollRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 2.6
      });

      // Continuous scroll bounce
      gsap.to(scrollRef.current, {
        y: 10,
        duration: 1.5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        delay: 3
      });

      // Parallax effect on scroll
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(orbRef.current, {
            y: progress * 200,
            rotation: progress * 180,
            scale: 1 - progress * 0.3,
            duration: 0.3
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split(' ').map((word, index) => (
      <span key={index} className="word inline-block mr-4">
        {word}
      </span>
    ));
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:"url('/bg-hero.png')",
        }}
      />
      
      
      
      {/* Animated orb */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <img
          ref={orbRef}
          src="/hero1.png"
          alt="3D Orb"
          className="w-80 h-80 object-contain animate-glow"
        />
        <div className="absolute inset-0 bg-gradient-orb rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        {/* Main Title */}
        <div ref={titleRef} className="mb-6 relative">
          <div className="max-w-6xl mx-auto relative h-[300px] md:h-[400px] lg:h-[500px]">
            {/* Creative - positioned left */}
            <div className="absolute top-48 left-0">
              <h1 className="hero-text text-6xl md:text-8xl lg:text-9xl leading-none">
                {splitText("Creative")}
              </h1>
            </div>
            
            {/* Digital Agency - positioned right and lower */}
            <div className="absolute bottom-0 right-0">
              <h1 className="hero-text text-6xl md:text-8xl lg:text-9xl leading-none">
                <span className="text-primary ">
                  {splitText("Digital")}
                </span>
                <span className="text-white ml-4">
                  {splitText("Agency")}
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          ref={scrollRef}
          className="absolute bottom--1 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => {
            document.getElementById('services')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
        >
          <span className="text-primary text-sm tracking-wider uppercase">Scroll Down</span>
          <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
        </div>
      </div>

      {/* Copyright - positioned top-right */}
      <div ref={subtitleRef} className="absolute centre right-80 z-30">
        <p className="text-primary text-lg font-medium">© 2025</p>
      </div>
      
      {/* Description - positioned bottom-right */}
      <div ref={descriptionRef} className="absolute bottom-64 right-6 z-30 max-w-md">
        <p className="text-muted-foreground text-lg leading-relaxed text-left">
          Agenz is a Simple team uses aesthetic and minimal approach to create stunning digital experiences.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
