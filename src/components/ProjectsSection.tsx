import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Mathew Company Branding",
      category: "Art Direction",
      year: "2023",
      studio: "by Monus Studio",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop&crop=entropy&cs=tinysrgb",
      href: "#project-1",
    },
    {
      id: 2,
      title: "Hinobe Agency Branding",
      category: "Marketing",
      year: "2023",
      studio: "by Swiss Studio",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop&crop=entropy&cs=tinysrgb",
      href: "#project-2",
    },
    {
      id: 3,
      title: "Krea Klock Branding",
      category: "Branding",
      year: "2023",
      studio: "by Cafe Studio",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop&crop=entropy&cs=tinysrgb",
      href: "#project-3",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(
        projectsRef.current?.children || []
      );

      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false, // stack effect
          scrub: true,
          end: () =>
            i === cards.length - 1 ? "bottom top" : "+=" + window.innerHeight,
        });

        // fade/slide in effect
        gsap.fromTo(
          card,
          { yPercent: 30, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top center",
              scrub: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden bg-background"
    >
      {/* Section Heading */}
      <div className="w-full max-w-7xl mx-auto px-6 py-24 text-center">
        {/* Small label */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="w-3 h-3 bg-lime-400 rounded-none" />
          <span className="text-muted-foreground tracking-widest font-medium">
            PROJECTS
          </span>
        </div>

        {/* Big title */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
          View Our{" "}
          <span className="font-bold text-lime-400">Works</span>
        </h2>
      </div>

      {/* Projects Slider */}
      <div ref={projectsRef} className="relative">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group glass-card w-full h-screen flex items-center justify-center overflow-hidden border-border/50"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
              {/* Project Image */}
              <div className="relative overflow-hidden h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Info */}
              <div className="p-8 lg:p-16 flex flex-col justify-center bg-background/80 backdrop-blur-md">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                <div className="w-16 h-px bg-primary mb-6 group-hover:w-24 transition-all duration-500" />

                <h3 className="text-3xl lg:text-5xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="flex items-center space-x-4 text-muted-foreground mb-6">
                  <span>{project.year}</span>
                  <span>-</span>
                  <span>{project.studio}</span>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-2 text-primary">
                    <span className="text-sm font-medium">View Project</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
