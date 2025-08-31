import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Linkedin, Twitter, Dribbble } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const members = [
    {
      name: "Sophia Lawson",
      role: "UI/UX Designer",
      hashtag: "#thestatic",
      image: "https://picsum.photos/400/500?random=1",
      socials: [
        { icon: <Twitter size={18} />, url: "#" },
        { icon: <Dribbble size={18} />, url: "#" },
        { icon: <Linkedin size={18} />, url: "#" },
      ],
    },
    {
      name: "Ethan Carter",
      role: "Frontend Developer",
      hashtag: "#reactmaster",
      image: "https://picsum.photos/400/500?random=2",
      socials: [
        { icon: <Twitter size={18} />, url: "#" },
        { icon: <Dribbble size={18} />, url: "#" },
        { icon: <Linkedin size={18} />, url: "#" },
      ],
    },
    {
      name: "Maya Patel",
      role: "Project Manager",
      hashtag: "#visionlead",
      image: "https://picsum.photos/400/500?random=3",
      socials: [
        { icon: <Twitter size={18} />, url: "#" },
        { icon: <Dribbble size={18} />, url: "#" },
        { icon: <Linkedin size={18} />, url: "#" },
      ],
    },
    {
      name: "Liam Rivera",
      role: "Backend Engineer",
      hashtag: "#apiguru",
      image: "https://picsum.photos/400/500?random=4",
      socials: [
        { icon: <Twitter size={18} />, url: "#" },
        { icon: <Dribbble size={18} />, url: "#" },
        { icon: <Linkedin size={18} />, url: "#" },
      ],
    },
    {
      name: "Ava Chen",
      role: "Brand Strategist",
      hashtag: "#identitymaker",
      image: "https://picsum.photos/400/500?random=5",
      socials: [
        { icon: <Twitter size={18} />, url: "#" },
        { icon: <Dribbble size={18} />, url: "#" },
        { icon: <Linkedin size={18} />, url: "#" },
      ],
    },
  ];

  // Fade-in section on scroll
  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  // Slide animation (1 card at a time)
  useEffect(() => {
    if (trackRef.current) {
      gsap.to(trackRef.current, {
        x: `-${index * 100}%`,
        duration: 0.8,
        ease: "power3.inOut",
      });
    }
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % members.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + members.length) % members.length);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute w-[700px] h-[700px] bg-gradient-to-tr from-green-400/30 to-blue-500/30 rounded-full blur-3xl"></div>

      {/* Slider container */}
      <div className="overflow-hidden w-full max-w-md relative z-10">
        <div
          ref={trackRef}
          className="flex transition-transform duration-700"
          style={{ width: `${members.length * 100}%` }}
        >
          {members.map((member, i) => (
            <Card
              key={i}
              className="w-full flex-shrink-0 p-8 bg-gradient-to-b from-gray-900/80 to-gray-800/70 backdrop-blur-xl border border-white/10 text-center rounded-2xl shadow-2xl"
            >
              {/* Role + Socials */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-sm text-gray-300">{member.role}</p>
                <div className="flex space-x-3">
                  {member.socials.map((s, j) => (
                    <a
                      key={j}
                      href={s.url}
                      className="w-8 h-8 rounded-full bg-gray-700/60 flex items-center justify-center hover:bg-primary/60 transition"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Profile image */}
              <div className="w-full flex justify-center mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-60 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Hashtag */}
              <p className="text-sm text-gray-400 mb-2">{member.hashtag}</p>

              {/* Name */}
              <h3 className="text-2xl font-semibold text-white">
                {member.name}
              </h3>
            </Card>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/70 hover:bg-white/20 transition z-20"
      >
        <span className="text-white text-lg">‹</span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/70 hover:bg-white/20 transition z-20"
      >
        <span className="text-white text-lg">›</span>
      </button>
    </section>
  );
};

export default TeamSection;
