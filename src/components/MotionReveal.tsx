import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
};

export default function MotionReveal({
  children,
  delay = 0,
  direction = "up",
}: Props) {
  const variants = {
    up: { opacity: 0, y: 80, scale: 0.95 },
    down: { opacity: 0, y: -80, scale: 0.95 },
    left: { opacity: 0, x: 120 },
    right: { opacity: 0, x: -120 },
    scale: { opacity: 0, scale: 0.7 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1], // strong cinematic ease
      }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
