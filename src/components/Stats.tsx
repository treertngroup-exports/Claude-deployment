import { Globe2, Users, Truck, Award } from 'lucide-react';

const stats = [
  {
    icon: Globe2,
    value: '50+',
    label: 'Countries Served',
    description: 'Global export network',
  },
  {
    icon: Users,
    value: '1000+',
    label: 'Partner Farmers',
    description: 'Direct farm sourcing',
  },
  {
    icon: Truck,
    value: '500+',
    label: 'Shipments Monthly',
    description: 'On-time delivery',
  },
  {
    icon: Award,
    value: '5+',
    label: 'Certifications',
    description: 'Quality assured',
  },
];

export default function Stats() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative bg-gradient-to-br from-cream to-white rounded-2xl p-6 lg:p-8 border border-gray-100 hover:border-primary-200 transition-all duration-500 hover:shadow-large hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-7 h-7 text-primary-700" />
              </div>

              {/* Value */}
              <p className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </p>

              {/* Label */}
              <p className="font-semibold text-gray-800 mb-1">{stat.label}</p>

              {/* Description */}
              <p className="text-sm text-gray-500">{stat.description}</p>

              {/* Hover Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-3">
                Trusted by Leading Businesses Worldwide
              </h3>
              <p className="text-primary-100 text-lg max-w-2xl">
                Join our growing network of satisfied partners across 50+ countries
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-accent-400">100%</p>
                <p className="text-sm text-primary-200 mt-1">Compliance Rate</p>
              </div>
              <div className="w-px h-16 bg-primary-700" />
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-accent-400">15+</p>
                <p className="text-sm text-primary-200 mt-1">Years Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
