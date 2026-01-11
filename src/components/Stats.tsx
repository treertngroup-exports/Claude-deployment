import { Globe2, Users, Truck, Award } from 'lucide-react';

const stats = [
  { icon: Globe2, value: '50+', label: 'Countries Served' },
  { icon: Users, value: '1000+', label: 'Partner Farmers' },
  { icon: Truck, value: '500+', label: 'Shipments Monthly' },
  { icon: Award, value: '5+', label: 'Certifications' },
];

export default function Stats() {
  return (
    <section className="relative py-20 bg-white/70 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg text-center"
          >
            <stat.icon className="w-10 h-10 mx-auto text-green-600 mb-3" />
            <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-gray-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
