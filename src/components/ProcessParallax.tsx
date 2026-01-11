import { motion } from "framer-motion";

const steps = [
  {
    title: "Sourced from Trusted Farmers",
    description:
      "We directly collect fresh produce from our network of trusted farmers across India, ensuring fair trade and top-quality raw materials.",
    image:
      "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=1200&q=80",
  },
  {
    title: "Careful Sorting & Quality Check",
    description:
      "Every batch goes through strict quality inspection and sorting to meet international export standards.",
    image:
      "https://images.unsplash.com/photo-1595855759920-86582396756a?w=1200&q=80",
  },
  {
    title: "Hygienic Processing & Cleaning",
    description:
      "Produce is cleaned, processed, and prepared in hygienic facilities using modern techniques.",
    image:
      "https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=1200&q=80",
  },
  {
    title: "Export-Grade Packing",
    description:
      "We pack products using export-grade, temperature-safe and damage-resistant packaging methods.",
    image:
      "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=1200&q=80",
  },
  {
    title: "Global Shipping & Delivery",
    description:
      "Shipped via sea and air freight to global markets with reliable logistics partners and full compliance.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80",
  },
];

export default function ExportProcess() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="section-title mb-4">
            From <span className="text-primary-700">Farm to Global Market</span>
          </h2>
          <p className="section-subtitle mx-auto">
            See how we deliver premium agricultural products through a carefully
            managed export process.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isReverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`${isReverse ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-[400px] lg:h-[480px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${isReverse ? "lg:order-1" : ""}`}>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </span>
                    <span className="text-sm uppercase tracking-widest text-primary-600 font-semibold">
                      Step {index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
