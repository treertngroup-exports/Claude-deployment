import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    title: "Harvested at the Farm",
    subtitle: "Fresh fruits and vegetables picked directly from farmers",
    image:
      "https://plus.unsplash.com/premium_photo-1680344513206-b1f8ff2f4c8c?q=80&w=1740&auto=format&fit=crop",
  },
  {
    title: "Quality Checked",
    subtitle: "Sorted, graded and inspected to meet export standards",
    image:
      "https://images.unsplash.com/photo-1552901543-312fdade4c4e?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Carefully Packed",
    subtitle: "Export-grade packing to maintain freshness",
    image: "/packing.png", // from public/
  },
  {
    title: "Shipped Worldwide",
    subtitle: "Via sea ports and air cargo for global markets",
    image: "/shipping.png", // from public/
  },
];

export default function ExportStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".story-panel");

    // Initial visibility
    gsap.set(panels, { autoAlpha: 0 });
    gsap.set(panels[0], { autoAlpha: 1 });

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

      // Hold scene
      tl.to({}, { duration: 0.8 });

      // Animate current scene
      tl.fromTo(
        image,
        { scale: 1.15 },
        { scale: 1, duration: 1.2, ease: "none" },
        "<"
      ).fromTo(
        content,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "<"
      );

      // Crossfade to next
      if (i < panels.length - 1) {
        tl.to(panel, { autoAlpha: 0, duration: 1 }, "+=0.6");
        tl.to(panels[i + 1], { autoAlpha: 1, duration: 1 }, "<");
      }
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
