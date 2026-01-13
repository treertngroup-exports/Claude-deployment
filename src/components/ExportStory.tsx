import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    title: "Harvested in Indian Farms",
    subtitle: "Fresh produce grown by trusted farmers",
    image:
      "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?q=80&w=2400",
  },
  {
    title: "Quality Checked",
    subtitle: "Every product is inspected and certified",
    image:
      "https://images.unsplash.com/photo-1581091012184-5c7b7d3b4c9f?q=80&w=2400",
  },
  {
    title: "Carefully Packed",
    subtitle: "Export-grade packaging for freshness",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2400",
  },
  {
    title: "Shipped Across Oceans",
    subtitle: "Reliable global sea logistics",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2400",
  },
  {
    title: "Air Delivered",
    subtitle: "Fast air cargo for premium goods",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2400",
  },
  {
    title: "Delivered to Your Business",
    subtitle: "On time. Every time.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2400",
  },
];

export default function ExportStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".story-panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${window.innerWidth * sections.length}`,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t: ScrollTrigger) => t.kill());
    };[]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      <div className="flex h-full w-[600vw]">
        {scenes.map((scene, i) => (
          <div
            key={i}
            className="story-panel relative w-screen h-screen flex-shrink-0"
          >
            <img
              src={scene.image}
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
                {scene.title}
              </h2>
              <p className="text-xl md:text-2xl text-white/90">
                {scene.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
