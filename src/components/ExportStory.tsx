import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    title: "Harvested at the Farm",
    subtitle: "Fresh fruits and vegetables picked directly from farmers",
    image:
      "https://plus.unsplash.com/premium_photo-1680344513206-b1f8ff2f4c8c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Quality Checked",
    subtitle: "Sorted, graded and inspected to meet export standards",
    image:
      "https://images.unsplash.com/photo-1552901543-312fdade4c4e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg0fHxwYWNraW5nJTIwZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlcyUyMHRvJTIwZXhwb3J0c3xlbnwwfDB8MHx8fDI%3D",
  },
  {
    title: "Carefully Packed",
    subtitle: "Export-grade packing to maintain freshness",
    image:
      "https://media.istockphoto.com/id/157558600/photo/view-from-above-inside-a-busy-huge-industrial-warehouse.webp?a=1&b=1&s=612x612&w=0&k=20&c=mjR7Twg0sWuM1QvqU786H7Qw69mtHznkB_iWcH-P08k=",
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
