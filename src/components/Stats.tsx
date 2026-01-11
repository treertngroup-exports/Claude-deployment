import { Globe2, Users, Truck, Award } from 'lucide-react';
import MotionReveal from "./MotionReveal";

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
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <MotionReveal key={stat.label} direction="scale" delay={index * 0.15}>
              <div className="group relative bg-gradient-to-br from-cream to-white rounded-2xl p-6 lg:p-8 border border-gray-100 hover:border-primary-200 transition-all duration-500 hover:shadow-large hover:-translate-y-2">
                
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-primary-700" />
                </div>

                <p className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </p>

                <p className="font-semibold text-gray-800 mb-1">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.description}</p>

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
