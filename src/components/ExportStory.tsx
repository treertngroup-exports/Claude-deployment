import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    title: "Harvested at the Farm",
    subtitle: "Fresh fruits and vegetables picked directly from farmers",
    image:
      "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?q=80&w=2400",
  },
  {
    title: "Quality Checked",
    subtitle: "Sorted, graded and inspected to meet export standards",
    image:
      "https://images.unsplash.com/photo-1581091012184-5c7b7d3b4c9f?q=80&w=2400",
  },
  {
    title: "Carefully Packed",
    subtitle: "Export-grade packing to maintain freshness",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2400",
  },
  {
    title: "Shipped Worldwide",
    subtitle: "Via sea ports and air cargo for global markets",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2400",
  },
  {
    title: "Delivered to Your Business",
    subtitle: "On-time delivery with complete traceability",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2400",
  },
];

export default function ExportStory() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".story-panel");

      panels.forEach((panel, index) => {
        const image = panel.querySelector(".story-bg");
        const content = panel.querySelector(".story-content");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top+=${index * window.innerHeight} top`,
            end: `top+=${(index + 1) * window.innerHeight} top`,
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        });

        tl.fromTo(
          image,
          { scale: 1.15, opacity: 0 },
          { scale: 1, opacity: 1, ease: "none" }
        ).fromTo(
          content,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, ease: "none" },
          "<"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black">
      {scenes.map((scene, i) => (
        <div
          key={i}
          className="story-panel h-screen w-full absolute top-0 left-0"
        >
          <img
            src={scene.image}
            className="story-bg absolute inset-0 w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="story-content relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
              {scene.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/90">
              {scene.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Scroll space */}
      <div style={{ height: `${scenes.length * 100}vh` }} />
    </section>
  );
}
