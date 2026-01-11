import { Truck, Shield, Users, Globe2, HeartHandshake, Zap, Award } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "ISO 22000 certified with rigorous quality checks at every stage.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    description: "Reliable logistics network ensuring on-time delivery worldwide.",
  },
  {
    icon: Users,
    title: "Direct Sourcing",
    description: "Partnered with 1000+ farmers for farm-fresh products.",
  },
  {
    icon: Globe2,
    title: "Global Network",
    description: "Exporting to 50+ countries with established trade relations.",
  },
  {
    icon: HeartHandshake,
    title: "Ethical Practices",
    description: "Fair trade and sustainable farming partnerships.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Quick order processing and documentation handling.",
  },
];

export default function WhyChoose() {
  return (
    <section className="section-padding bg-transparent relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - Image & Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/70 backdrop-blur-lg">
              <img
                src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&q=80"
                alt="Fresh produce packaging"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 lg:p-8 max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-green-700" />
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-gray-900">15+</p>
                  <p className="text-sm text-gray-500">Years of Excellence</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Trusted by businesses across the globe for premium agricultural exports.
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-lg rounded-full border border-white/40 mb-6">
              <Award className="w-4 h-4 text-green-700" />
              <span className="text-xs font-bold tracking-widest uppercase text-green-800">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-4xl font-bold text-white mb-6">
              Your Trusted Partner for <span className="text-green-400">Global Exports</span>
            </h2>

            <p className="text-lg text-gray-200 leading-relaxed mb-10">
              With years of experience in agricultural exports, we've built a reputation 
              for reliability, quality, and customer satisfaction. Here's why businesses 
              worldwide choose TREERT.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/70 backdrop-blur-lg shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
