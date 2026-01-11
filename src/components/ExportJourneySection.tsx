import { motion, useScroll, useTransform } from "framer-motion";

export default function ExportScrollImage() {
  const { scrollYProgress } = useScroll();

  // Fade everything out near bottom (Contact/Footer)
  const globalOpacity = useTransform(
    scrollYProgress,
    [0, 0.8, 0.9, 1],
    [1, 1, 0, 0]
  );

  // Cross-fade between images
  const harvestOpacity = useTransform(scrollYProgress, [0, 0.22, 0.25], [1, 1, 0]);
  const packingOpacity = useTransform(scrollYProgress, [0.23, 0.25, 0.48], [0, 1, 0]);
  const shipOpacity = useTransform(scrollYProgress, [0.49, 0.5, 0.73], [0, 1, 0]);
  const planeOpacity = useTransform(scrollYProgress, [0.74, 0.76, 1], [0, 1, 1]);

  // Position movement (corners)
  const x = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [320, -320, -320, 320, 320]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [260, -260, 260, -260, -260]
  );

  // Zoom effect
  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.7, 1, 0.95, 1, 1.05]
  );

  // Subtle rotation
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [6, -6, 6, -6, 0]
  );

  const baseClass =
    "fixed w-[320px] h-[320px] object-cover rounded-3xl shadow-2xl z-40 pointer-events-none";

  // Helper to combine per-image opacity with global fade out
  const combine = (local: any) =>
    useTransform([local, globalOpacity], ([a, b]) => a * b);

  return (
    <>
      {/* 🌾 Harvest */}
      <motion.img
        src="https://images.unsplash.com/photo-1594058573823-d8edf1ad3380?w=800"
        style={{ x, y, scale, rotate, opacity: combine(harvestOpacity) }}
        className={baseClass}
      />

      {/* 📦 Packing */}
      <motion.img
        src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=800"
        style={{ x, y, scale, rotate, opacity: combine(packingOpacity) }}
        className={baseClass}
      />

      {/* 🚢 Ship */}
      <motion.img
        src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800"
        style={{ x, y, scale, rotate, opacity: combine(shipOpacity) }}
        className={baseClass}
      />

      {/* ✈️ Plane */}
      <motion.img
        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800"
        style={{ x, y, scale, rotate, opacity: combine(planeOpacity) }}
        className={baseClass}
      />
    </>
  );
}
