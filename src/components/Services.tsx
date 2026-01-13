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

  // Camera movement on background
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -6]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative min-h-[160vh] overflow-hidden"
    >
      {/* 3D MOVING BACKGROUND */}
      <motion.div
        style={{
          scale,
          y,
          rotateX,
          transformOrigin: "center center",
        }}
        className="absolute inset-0"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?q=80&w=2400)", // farmers harvesting
          }}
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT (mostly static) */}
      <div className="relative section-padding text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
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

        {/* Cards */}
        <div className="max-w-7xl mx-auto px-4 mt-20">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
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
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a href="#contact" className="btn-primary">
              Request Product Catalogue
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
