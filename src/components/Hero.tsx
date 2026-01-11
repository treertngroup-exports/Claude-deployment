import { ArrowRight, Star, Globe2, Leaf, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream via-white to-green-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-primary-100/40 via-transparent to-transparent rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-accent-100/30 via-transparent to-transparent rounded-full -translate-x-1/3 translate-y-1/3" />
      
      {/* Floating Elements */}
      <div className="absolute top-32 right-20 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float animation-delay-200 hidden lg:flex">
        <Leaf className="w-10 h-10 text-primary-600" />
      </div>
      <div className="absolute top-52 right-52 w-16 h-16 bg-accent-100 rounded-full shadow-lg flex items-center justify-center animate-float animation-delay-400 hidden lg:flex">
        <Star className="w-8 h-8 text-accent-600" />
      </div>
      <div className="absolute bottom-40 right-32 w-24 h-24 bg-primary-50 rounded-2xl shadow-lg flex items-center justify-center animate-float animation-delay-600 hidden lg:flex">
        <Globe2 className="w-12 h-12 text-primary-700" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-primary-50 to-accent-50 rounded-full border border-primary-100 animate-fade-in">
              <Award className="w-5 h-5 text-accent-600" />
              <span className="text-sm font-bold tracking-wide text-primary-800">
                Premium Quality Since 2024
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-slide-up">
              <span className="block font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-[1.1]">
                Connecting Farms
              </span>
              <span className="block font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-700 leading-[1.1] mt-2 italic">
                to Global Markets
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl animate-slide-up animation-delay-200">
              TREERT exports premium agriculture and value-added products worldwide, 
              championing quality, sustainability, and empowering farmers across India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-300">
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

            {/* Stats Preview */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200 animate-slide-up animation-delay-400">
              <div>
                <p className="font-display text-4xl md:text-5xl font-bold text-primary-800">50+</p>
                <p className="text-sm text-gray-500 mt-1">Countries Served</p>
              </div>
              <div>
                <p className="font-display text-4xl md:text-5xl font-bold text-primary-800">1000+</p>
                <p className="text-sm text-gray-500 mt-1">Partner Farmers</p>
              </div>
              <div>
                <p className="font-display text-4xl md:text-5xl font-bold text-primary-800">15+</p>
                <p className="text-sm text-gray-500 mt-1">Years Excellence</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
                  alt="Fresh produce"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-8 top-20 bg-white rounded-2xl shadow-xl p-5 animate-float hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                    <Award className="w-7 h-7 text-primary-700" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-gray-900">Certified Quality</p>
                    <p className="text-sm text-gray-500">ISO 22000 & FSSAI</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-32 bg-white rounded-2xl shadow-xl p-5 animate-float animation-delay-300 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center">
                    <Globe2 className="w-7 h-7 text-accent-700" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-gray-900">Global Reach</p>
                    <p className="text-sm text-gray-500">Exports to 50+ Countries</p>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border-4 border-dashed border-accent-300/50 rounded-full hidden lg:block" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 50L48 45.7C96 41.3 192 32.7 288 35.8C384 39 480 54 576 59.2C672 64.3 768 59.7 864 50C960 40.3 1056 25.7 1152 22.5C1248 19.3 1344 27.7 1392 31.8L1440 36V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
