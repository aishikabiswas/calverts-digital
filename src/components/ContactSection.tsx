import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

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

      // Form animation
      gsap.from(formRef.current?.children, {
        x: -60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%"
        }
      });

      // Contact info animation
      gsap.from(infoRef.current?.children, {
        x: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%"
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="mb-16">
          <span className="inline-block px-4 py-2 glass-card rounded-full text-primary text-sm font-medium tracking-wider uppercase">
            Contact Us
          </span>
        </div>

        {/* Section Title */}
        <div ref={titleRef} className="mb-20">
          <h2 className="section-title text-5xl md:text-7xl lg:text-8xl leading-none">
            <span className="block overflow-hidden">
              <span className="inline-block">Let's Create</span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block text-primary">Together</span>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mt-8 max-w-2xl">
            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div ref={formRef}>
            <Card className="glass-card p-8 border-border/50">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-2 block">
                      First Name
                    </label>
                    <Input 
                      placeholder="Your first name"
                      className="bg-input/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-2 block">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Your last name"
                      className="bg-input/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-input/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-2 block">
                    Project Type
                  </label>
                  <Input 
                    placeholder="Web Design, Branding, Development..."
                    className="bg-input/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="bg-input/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow font-semibold py-3 transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We're always excited to hear about new projects and opportunities. 
                Whether you have a clear vision or just an idea, we're here to help 
                bring it to life.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="glass-card p-6 border-border/50 hover:border-primary/30 transition-colors group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">hello@agenz.studio</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6 border-border/50 hover:border-primary/30 transition-colors group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold">+44 (0) 20 1234 5678</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6 border-border/50 hover:border-primary/30 transition-colors group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold">London, United Kingdom</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;