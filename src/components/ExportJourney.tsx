import { motion, useScroll, useTransform } from "framer-motion";

export default function ExportJourney() {
  const { scrollYProgress } = useScroll();

  // 🌾 Harvest
  const hX = useTransform(scrollYProgress, [0, 0.25], [400, 0]);
  const hY = useTransform(scrollYProgress, [0, 0.25], [300, 0]);
  const hScale = useTransform(scrollYProgress, [0, 0.25], [0.6, 1]);
  const hOpacity = useTransform(scrollYProgress, [0.2, 0.3], [1, 0]);

  // 📦 Packing
  const pX = useTransform(scrollYProgress, [0.25, 0.5], [-400, 0]);
  const pY = useTransform(scrollYProgress, [0.25, 0.5], [-300, 0]);
  const pScale = useTransform(scrollYProgress, [0.25, 0.5], [0.6, 1]);
  const pOpacity = useTransform(scrollYProgress, [0.25, 0.5], [1, 1]);

  // 🚢 Ship
  const sX = useTransform(scrollYProgress, [0.5, 0.75], [-400, 0]);
  const sY = useTransform(scrollYProgress, [0.5, 0.75], [300, 0]);
  const sScale = useTransform(scrollYProgress, [0.5, 0.75], [0.6, 1]);
  const sOpacity = useTransform(scrollYProgress, [0.5, 0.75], [1, 1]);

  // ✈️ Plane
  const aX = useTransform(scrollYProgress, [0.75, 1], [400, 0]);
  const aY = useTransform(scrollYProgress, [0.75, 1], [-300, 0]);
  const aScale = useTransform(scrollYProgress, [0.75, 1], [0.6, 1]);
  const aOpacity = useTransform(scrollYProgress, [0.75, 1], [1, 1]);

  const base =
    "fixed left-1/2 top-1/2 w-[340px] h-[340px] -translate-x-1/2 -translate-y-1/2 object-cover rounded-3xl shadow-2xl z-50 pointer-events-none";

  return (
    <>
      {/* 🌾 Harvest */}
      <motion.img
        src="https://images.unsplash.com/photo-1594058573823-d8edf1ad3380?w=800"
        style={{ x: hX, y: hY, scale: hScale, opacity: hOpacity }}
        className={base}
      />

      {/* 📦 Packing */}
      <motion.img
        src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=800"
        style={{ x: pX, y: pY, scale: pScale, opacity: pOpacity }}
        className={base}
      />

      {/* 🚢 Ship */}
      <motion.img
        src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800"
        style={{ x: sX, y: sY, scale: sScale, opacity: sOpacity }}
        className={base}
      />

      {/* ✈️ Plane */}
      <motion.img
        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800"
        style={{ x: aX, y: aY, scale: aScale, opacity: aOpacity }}
        className={base}
      />
    </>
  );
}
