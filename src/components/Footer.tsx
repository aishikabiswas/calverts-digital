import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer entrance animation
      gsap.from(footerRef.current?.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%"
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="py-16 relative overflow-hidden border-t border-border/30"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold">Agenz</span>
              <span className="text-sm text-muted-foreground">| based in UK</span>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              We are a creative digital agency that transforms brands through innovative design and strategic thinking.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Visual Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Art Direction
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Branding Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Development
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@agenz.studio" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@agenz.studio
                </a>
              </li>
              <li>
                <a href="tel:+442012345678" className="text-muted-foreground hover:text-primary transition-colors">
                  +44 (0) 20 1234 5678
                </a>
              </li>
              <li>
                <span className="text-muted-foreground">
                  London, UK
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 mt-12 border-t border-border/30">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <span className="text-sm text-muted-foreground">
              © 2025 Agenz. All rights reserved.
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;