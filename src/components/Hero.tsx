import { ArrowRight, Star, Globe2, Leaf, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
      {/* Content overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur rounded-full border border-white/20">
              <Award className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-bold tracking-wide text-white">
                Premium Quality Since 2024
              </span>
            </div>

            {/* Headline */}
            <h1>
              <span className="block font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1]">
                Connecting Farms
              </span>
              <span className="block font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-300 leading-[1.1] mt-2 italic">
                to Global Markets
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
              TREERT exports premium agriculture and value-added products worldwide, 
              championing quality, sustainability, and empowering farmers across India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#founders"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                Our Story
              </a>
            </div>

            {/* Stats Preview */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
              <div>
                <p className="font-display text-4xl md:text-5xl font-bold text-primary-300">50+</p>
                <p className="text-sm text-gray-300 mt-1">Countries Served</p>
              </div>
              <div>
                <p className="font-display text-4xl md:text-5xl font-bold text-primary-300">1000+</p>
                <p className="text-sm text-gray-300 mt-1">Partner Farmers</p>
              </div>
              <div>
                <p className="font-display text-4xl md:text-5xl font-bold text-primary-300">15+</p>
                <p className="text-sm text-gray-300 mt-1">Years Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
