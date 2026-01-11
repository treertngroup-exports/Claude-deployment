import { Apple, Carrot, Leaf, Package, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Apple,
    title: 'Fresh Fruits',
    description: 'Premium quality fruits sourced from certified farms.',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&q=80',
  },
  {
    icon: Carrot,
    title: 'Fresh Vegetables',
    description: 'Hand-picked vegetables with cold-chain logistics.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80',
  },
  {
    icon: Leaf,
    title: 'Premium Spices',
    description: 'Authentic Indian spices with export quality.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
  },
  {
    icon: Package,
    title: 'Value Added Products',
    description: 'Processed and packaged agricultural products.',
    image: 'https://images.unsplash.com/photo-1595855759920-86582396756a?w=600&q=80',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          What We Export
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white/75 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={s.image} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-600 mb-4">{s.description}</p>
                <a href="#contact" className="text-green-700 font-semibold inline-flex items-center gap-2">
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
