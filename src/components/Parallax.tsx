import { useEffect, useState } from "react";

const steps = [
  {
    title: "Collected from Farmers",
    description:
      "We source fresh produce directly from trusted farmers across India.",
    image:
      "https://images.unsplash.com/photo-1595614983406-efc0d39a3a1d?w=1600&q=80",
  },
  {
    title: "Carefully Packed",
    description:
      "Products are graded, cleaned, and packed in export-quality facilities.",
    image:
      "https://images.unsplash.com/photo-1595855759920-86582396756a?w=1600&q=80",
  },
  {
    title: "Shipped Worldwide",
    description:
      "We ship to global markets with cold-chain and export logistics.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80",
  },
];

export default function ProcessParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative">
      {steps.map((step, index) => {
        const speed = 0.3 + index * 0.2; // each layer moves differently
        const translateY = scrollY * speed;

        return (
          <div
            key={step.title}
            className="relative h-screen overflow-hidden flex items-center"
          >
            {/* Parallax Background */}
            <div
              className="absolute inset-0"
              style={{
                transform: `translateY(${translateY}px)`,
              }}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
              <p className="text-sm uppercase tracking-widest mb-4 text-primary-200">
                Step {index + 1}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                {step.title}
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
