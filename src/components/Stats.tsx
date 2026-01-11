import { Globe2, Users, Truck, Award } from "lucide-react";

const stats = [
  { icon: Globe2, value: "50+", label: "Countries Served" },
  { icon: Users, value: "1000+", label: "Partner Farmers" },
  { icon: Truck, value: "500+", label: "Shipments Monthly" },
  { icon: Award, value: "5+", label: "Certifications" },
];

export default function Stats() {
  return (
    <section className="relative py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center text-white shadow-xl hover:bg-white/20 transition-all"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-10 h-10 text-primary-300" />
              </div>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="text-sm text-gray-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
