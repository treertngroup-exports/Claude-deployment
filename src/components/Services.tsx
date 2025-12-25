import { Apple, Carrot, Leaf, Package, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Apple,
    title: 'Fresh Fruits',
    description: 'Premium quality seasonal and exotic fruits including mangoes, pomegranates, grapes, and tender coconuts sourced directly from certified farms.',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&q=80',
    items: ['Mangoes', 'Pomegranates', 'Grapes', 'Coconuts'],
  },
  {
    icon: Carrot,
    title: 'Fresh Vegetables',
    description: 'Hand-picked vegetables from Indian farms ensuring freshness and nutritional value. Available year-round with cold chain logistics.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80',
    items: ['Onions', 'Potatoes', 'Tomatoes', 'Green Chillies'],
  },
  {
    icon: Leaf,
    title: 'Premium Spices',
    description: 'Authentic Indian spices and herbs known for distinctive aroma and flavor. Quality tested and export-ready packaging.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    items: ['Turmeric', 'Cardamom', 'Pepper', 'Cinnamon'],
  },
  {
    icon: Package,
    title: 'Value Added Products',
    description: 'Processed and packaged agricultural products meeting international food safety standards for retail and wholesale markets.',
    image: 'https://images.unsplash.com/photo-1509358271058-aedd22b2e4e6?w=600&q=80',
    items: ['Dried Fruits', 'Pickles', 'Preserves', 'Ready Mixes'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-cream relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-primary-100/30 via-transparent to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-accent-100/20 via-transparent to-transparent rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 rounded-full border border-primary-100 mb-6">
            <Package className="w-4 h-4 text-accent-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-700">
              Our Products
            </span>
          </div>
          <h2 className="section-title mb-4">
            What We <span className="text-primary-700">Export</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Premium agricultural products sourced directly from certified farms across India, 
            delivered fresh to global markets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <service.icon className="w-7 h-7 text-primary-700" />
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-900 transition-colors group/link"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="btn-primary"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
