import { Apple, Carrot, Leaf, Package, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    icon: Apple,
    title: "Fresh Fruits",
    items: ["Mangoes", "Pomegranates", "Grapes", "Coconuts"],
  },
  {
    icon: Carrot,
    title: "Fresh Vegetables",
    items: ["Onions", "Potatoes", "Tomatoes", "Green Chillies"],
  },
  {
    icon: Leaf,
    title: "Premium Spices",
    items: ["Turmeric", "Cardamom", "Pepper", "Cinnamon"],
  },
  {
    icon: Package,
    title: "Value Added Products",
    items: ["Dried Fruits", "Pickles", "Preserves", "Ready Mixes"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Apple-style 3D camera motion
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [35, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative min-h-[160vh] bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?q=80&w=2400)", // farmers harvesting
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 3D Perspective Scene */}
      <div className="relative h-screen flex items-center justify-center [perspective:1200px]">
        <motion.div
          style={{
            rotateX,
            scale,
            opacity,
            transformStyle: "preserve-3d",
          }}
          className="max-w-7xl mx-auto px-6 text-center text-white"
        >
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6">
              <Package className="w-4 h-4 text-accent-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-white">
                Our Products
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              From Fields to Global Markets
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-white/90">
              Grown by farmers. Harvested by hand. Trusted by the world.
            </p>
          </div>

          {/* Floating Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                style={{
                  transform: `translateZ(${(i + 1) * 40}px)`,
                }}
                className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 text-center shadow-large"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-50 flex items-center justify-center">
                  <cat.icon className="w-7 h-7 text-primary-700" />
                </div>

                <h4 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  {cat.title}
                </h4>

                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  {cat.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-900 text-sm"
                >
                  Enquire
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a href="#contact" className="btn-primary">
              Request Product Catalogue
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
