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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".story-panel");

    // Set initial state
    panels.forEach((panel, i) => {
      if (i !== 0) gsap.set(panel, { autoAlpha: 0 });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${panels.length * window.innerHeight}`,
        scrub: true,
        pin: true,
      },
    });

    panels.forEach((panel, i) => {
      const image = panel.querySelector(".story-bg");
      const content = panel.querySelector(".story-content");

      if (i > 0) {
        tl.to(panels[i - 1], { autoAlpha: 0, duration: 0.5 });
      }

      tl.fromTo(
        panel,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.5 }
      );

      tl.fromTo(
        image,
        { scale: 1.2 },
        { scale: 1, duration: 1 },
        "<"
      );

      tl.fromTo(
        content,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "<"
      );

      tl.to({}, { duration: 1 }); // pause between scenes
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      <div className="relative h-screen w-full">
        {scenes.map((scene, i) => (
          <div
            key={i}
            className="story-panel absolute inset-0 h-full w-full"
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
      </div>
    </section>
  );
}
