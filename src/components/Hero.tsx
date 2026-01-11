import { ArrowRight, Star, Globe2, Leaf, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 text-white">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur rounded-full border border-white/20">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-bold tracking-wide">
                Premium Quality Since 2024
              </span>
            </div>

            <h1>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1]">
                Connecting Farms
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-semibold text-green-400 leading-[1.1] mt-2 italic">
                to Global Markets
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
              TREERT exports premium agriculture and value-added products worldwide, 
              championing quality, sustainability, and empowering farmers across India.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#founders"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all"
              >
                Our Story
              </a>
            </div>
          </div>

          {/* Right image card */}
          <div className="hidden lg:block">
            <div className="bg-white/70 backdrop-blur-lg p-4 rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
                alt="Fresh produce"
                className="rounded-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
