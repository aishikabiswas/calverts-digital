import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Mathew Company Branding",
      category: "Art Direction",
      year: "2023",
      studio: "by Monus Studio",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      href: "#project-1",
    },
    {
      id: 2,
      title: "Hinobe Agency Branding",
      category: "Marketing",
      year: "2023",
      studio: "by Swiss Studio",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      href: "#project-2",
    },
    {
      id: 3,
      title: "Krea Klock Branding",
      category: "Branding",
      year: "2023",
      studio: "by Cafe Studio",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      href: "#project-3",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current?.children,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      // Projects stagger animation
      gsap.fromTo(
        projectsRef.current?.children,
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
          },
        }
      );

      // Project cards hover effects
      const projectCards = projectsRef.current?.children;
      if (projectCards) {
        Array.from(projectCards).forEach((card) => {
          const cardElement = card as HTMLElement;
          const image = cardElement.querySelector("img");

          cardElement.addEventListener("mouseenter", () => {
            gsap.to(cardElement, {
              y: -15,
              duration: 0.4,
              ease: "power2.out",
            });

            if (image) {
              gsap.to(image, {
                scale: 1.1,
                duration: 0.6,
                ease: "power2.out",
              });
            }
          });

          cardElement.addEventListener("mouseleave", () => {
            gsap.to(cardElement, {
              y: 0,
              duration: 0.4,
              ease: "power2.out",
            });

            if (image) {
              gsap.to(image, {
                scale: 1,
                duration: 0.6,
                ease: "power2.out",
              });
            }
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 relative overflow-hidden min-h-screen bg-background"
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div ref={titleRef} className="flex justify-center">
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl leading-none">
            <span className="">View Our </span>
            <span className="font-bold text-orange-400">Works</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="space-y-12 mt-16">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group glass-card overflow-hidden hover:bg-card/80 transition-all duration-500 cursor-pointer border-border/50 hover:border-primary/30"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Project Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Decorative line */}
                  <div className="w-16 h-px bg-primary mb-6 group-hover:w-24 transition-all duration-500" />

                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <span>{project.year}</span>
                    <span>-</span>
                    <span>{project.studio}</span>
                  </div>

                  {/* Hover arrow */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
      </div>
    </section>
  );
};

export default ProjectsSection;
