import { ArrowRight, Star, Globe2, Leaf, Award } from 'lucide-react';
import { motion } from "framer-motion";
import MotionReveal from "./MotionReveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream via-white to-green-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-primary-100/40 via-transparent to-transparent rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-accent-100/30 via-transparent to-transparent rounded-full -translate-x-1/3 translate-y-1/3" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-32 right-20 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center hidden lg:flex"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf className="w-10 h-10 text-primary-600" />
      </motion.div>

      <motion.div
        className="absolute top-52 right-52 w-16 h-16 bg-accent-100 rounded-full shadow-lg flex items-center justify-center hidden lg:flex"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Star className="w-8 h-8 text-accent-600" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-32 w-24 h-24 bg-primary-50 rounded-2xl shadow-lg flex items-center justify-center hidden lg:flex"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Globe2 className="w-12 h-12 text-primary-700" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <MotionReveal direction="down">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-primary-50 to-accent-50 rounded-full border border-primary-100">
                <Award className="w-5 h-5 text-accent-600" />
                <span className="text-sm font-bold tracking-wide text-primary-800">
                  Premium Quality Since 2024
                </span>
              </div>
            </MotionReveal>

            <MotionReveal direction="left" delay={0.2}>
              <h1>
                <span className="block font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-[1.1]">
                  Connecting Farms
                </span>
                <span className="block font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-700 leading-[1.1] mt-2 italic">
                  to Global Markets
                </span>
              </h1>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.4}>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                TREERT exports premium agriculture and value-added products worldwide, 
                championing quality, sustainability, and empowering farmers across India.
              </p>
            </MotionReveal>

            <MotionReveal direction="scale" delay={0.6}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-900 to-primary-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#founders"
                  className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  Our Story
                </a>
              </div>
            </MotionReveal>
          </div>

          {/* RIGHT IMAGE */}
          <MotionReveal direction="right">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <motion.img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
                  alt="Fresh produce"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                  initial={{ scale: 1.4 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent" />
              </div>
            </div>
          </MotionReveal>

        </div>
      </div>
    </section>
  );
}
