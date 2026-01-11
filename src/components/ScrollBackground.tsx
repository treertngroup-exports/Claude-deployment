import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollBackground() {
  const { scrollYProgress } = useScroll();

  // Opacity transitions
  const harvestOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const packingOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  const shipOpacity = useTransform(scrollYProgress, [0.45, 0.7], [0, 1]);
  const planeOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  // Slow zoom for cinematic feel
  const harvestScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.1]);
  const packingScale = useTransform(scrollYProgress, [0.25, 0.5], [1, 1.1]);
  const shipScale = useTransform(scrollYProgress, [0.5, 0.75], [1, 1.1]);
  const planeScale = useTransform(scrollYProgress, [0.75, 1], [1, 1.1]);

  const base =
    "fixed inset-0 w-full h-full object-cover z-0 pointer-events-none";

  return (
    <>
      {/* 🌾 Harvest */}
      <motion.img
        src="https://images.unsplash.com/photo-1594058573823-d8edf1ad3380?w=1600"
        style={{ opacity: harvestOpacity, scale: harvestScale }}
        className={base}
      />

      {/* 📦 Packing */}
      <motion.img
        src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=1600"
        style={{ opacity: packingOpacity, scale: packingScale }}
        className={base}
      />

      {/* 🚢 Ship */}
      <motion.img
        src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1600"
        style={{ opacity: shipOpacity, scale: shipScale }}
        className={base}
      />

      {/* ✈️ Plane */}
      <motion.img
        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600"
        style={{ opacity: planeOpacity, scale: planeScale }}
        className={base}
      />

      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/40 z-0 pointer-events-none" />
    </>
  );
}
