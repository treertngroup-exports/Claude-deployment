import { motion, useScroll, useTransform } from "framer-motion";

export default function ExportJourney() {
  const { scrollYProgress } = useScroll();

  // Which image is visible at which scroll range
  const harvestOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const packingOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const shipOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const planeOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      
      {/* 🌾 Harvest */}
      <motion.img
        src="https://images.unsplash.com/photo-1594058573823-d8edf1ad3380?w=800"
        style={{ opacity: harvestOpacity }}
        className="w-72 h-72 object-cover rounded-2xl shadow-2xl fixed bottom-10 right-10"
      />

      {/* 📦 Packing */}
      <motion.img
        src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=800"
        style={{ opacity: packingOpacity }}
        className="w-72 h-72 object-cover rounded-2xl shadow-2xl fixed top-20 left-10"
      />

      {/* 🚢 Ship */}
      <motion.img
        src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800"
        style={{ opacity: shipOpacity }}
        className="w-72 h-72 object-cover rounded-2xl shadow-2xl fixed bottom-20 left-10"
      />

      {/* ✈️ Plane */}
      <motion.img
        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800"
        style={{ opacity: planeOpacity }}
        className="w-72 h-72 object-cover rounded-2xl shadow-2xl fixed top-24 right-10"
      />
    </div>
  );
}
