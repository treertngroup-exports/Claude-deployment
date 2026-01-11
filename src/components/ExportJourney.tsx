import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ExportJourneySection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const harvestOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const packingOpacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const shipOpacity = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);
  const planeOpacity = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  return (
    <section ref={ref} className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">

        {/* LEFT: Sticky Image Column */}
        <div className="relative">
          <div className="sticky top-32 h-[420px] flex items-center justify-center">

            <div className="relative w-[380px] h-[380px]">

              {/* 🌾 Harvest */}
              <motion.img
                src="https://images.unsplash.com/photo-1594058573823-d8edf1ad3380?w=800"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
                style={{ opacity: harvestOpacity }}
              />

              {/* 📦 Packing */}
              <motion.img
                src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=800"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
                style={{ opacity: packingOpacity }}
              />

              {/* 🚢 Ship */}
              <motion.img
                src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
                style={{ opacity: shipOpacity }}
              />

              {/* ✈️ Plane */}
              <motion.img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
                style={{ opacity: planeOpacity }}
              />

            </div>
          </div>
        </div>

        {/* RIGHT: Scrolling Content */}
        <div className="space-y-32">

          <div>
            <h3 className="text-3xl font-bold mb-4">Harvesting at Source</h3>
            <p className="text-gray-600 text-lg">
              We carefully harvest produce directly from partner farms ensuring freshness and quality.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4">Sorting & Packing</h3>
            <p className="text-gray-600 text-lg">
              Produce is cleaned, graded, and packed in export-grade hygienic facilities.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4">Sea Logistics</h3>
            <p className="text-gray-600 text-lg">
              We ship in temperature-controlled containers across global destinations.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4">Air Exports</h3>
            <p className="text-gray-600 text-lg">
              For premium and urgent shipments, we deliver by air cargo worldwide.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
