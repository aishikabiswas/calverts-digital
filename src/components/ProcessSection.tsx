import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSteps, setActiveSteps] = useState([0]); // step 1 active by default

  const processSteps = [
    {
      step: "Step 1",
      title: "Research",
      description:
        "We listen stories of user to understand pain points and give a rough estimate about cost and time-frame.",
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      step: "Step 2",
      title: "Implementation",
      description:
        "We bring your vision to life with cutting-edge design and development practices, ensuring every detail is perfect.",
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      step: "Step 3",
      title: "Testing",
      description:
        "Rigorous testing ensures your project works flawlessly across all devices and platforms before launch.",
      image: "https://picsum.photos/300/200?random=3",
    },
  ];

  // GSAP fade-up animation
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

  const handleStepClick = (index: number) => {
    // mark all steps up to the clicked one as active
    const newActive = Array.from({ length: index + 1 }, (_, i) => i);
    setActiveSteps(newActive);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white py-32 px-6 md:px-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Title */}
        <div className="flex flex-col justify-center">
          <span className="flex items-center gap-2 text-sm uppercase tracking-widest text-green-400 mb-6">
            <span className="w-2 h-2 bg-green-400"></span> Process
          </span>
          <h2 className="text-4xl md:text-6xl font-light leading-tight">
            A color rich in{" "}
            <span className="text-green-400 font-semibold">Meaning</span>
          </h2>
        </div>

        {/* Right Steps (Vertical Timeline) */}
        <div className="flex flex-col space-y-8 relative">
          {processSteps.map((step, index) => {
            const isActive = activeSteps.includes(index);
            return (
              <div
                key={index}
                className="relative pl-8 cursor-pointer"
                onClick={() => handleStepClick(index)}
              >
                {/* Connector Line */}
                {index !== processSteps.length - 1 && (
                  <div
                    className={`absolute left-[7px] top-6 w-[2px] h-full ${
                      activeSteps.includes(index + 1)
                        ? "bg-green-400"
                        : "bg-gray-700"
                    }`}
                  ></div>
                )}

                {/* Step Dot */}
                <span
                  className={`absolute -left-[2px] top-1 w-4 h-4 rounded-none ${
                    isActive ? "bg-green-400" : "bg-gray-600"
                  }`}
                ></span>

                {/* Step Info */}
                <p
                  className={`text-sm mb-1 ${
                    isActive ? "text-green-400" : "text-gray-400"
                  }`}
                >
                  {step.step}
                </p>
                <h3
                  className={`text-lg font-medium mb-3 ${
                    isActive ? "text-green-400" : "text-gray-500"
                  }`}
                >
                  {step.title}
                </h3>

                {/* Details: stays open once activated */}
                {isActive && (
                  <div className="flex items-start gap-6 bg-gray-900 p-5 rounded-lg border border-green-700/30">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-32 h-20 object-cover rounded"
                    />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
