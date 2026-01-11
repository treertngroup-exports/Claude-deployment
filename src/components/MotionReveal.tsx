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
    up: { opacity: 0, y: 100, scale: 0.95 },
    down: { opacity: 0, y: -100, scale: 0.95 },
    left: { opacity: 0, x: 150 },
    right: { opacity: 0, x: -150 },
    scale: { opacity: 0, scale: 0.6 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1], // cinematic easing
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}
