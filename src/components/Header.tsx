import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance animation
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
      });

      // Stagger logo, menu, and CTA
      gsap.from([logoRef.current, menuRef.current, ctaRef.current], {
        y: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.8
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div ref={logoRef} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold">Agenz</span>
            <span className="text-sm text-muted-foreground hidden md:block">| based in UK</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuRef}
            className="md:hidden p-2 glass-card rounded-lg hover:bg-muted/50 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </a>
          </nav>

          {/* CTA Button */}
          <div ref={ctaRef}>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow font-semibold px-6 py-2 transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;