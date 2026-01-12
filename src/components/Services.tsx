import { Apple, Carrot, Leaf, Package, ArrowRight } from "lucide-react";


const services = [
  {
    icon: Apple,
    title: "Fresh Fruits",
    description:
      "Premium quality seasonal and exotic fruits including mangoes, pomegranates, grapes, and tender coconuts sourced directly from certified farms.",
    image:
      "https://images.unsplash.com/photo-1592921870789-04563d55041c?q=80&w=1600",
    items: ["Mangoes", "Pomegranates", "Grapes", "Coconuts"],
  },
  {
    icon: Carrot,
    title: "Fresh Vegetables",
    description:
      "Hand-picked vegetables from Indian farms ensuring freshness and nutritional value. Available year-round with cold chain logistics.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600",
    items: ["Onions", "Potatoes", "Tomatoes", "Green Chillies"],
  },
  {
    icon: Leaf,
    title: "Premium Spices",
    description:
      "Authentic Indian spices and herbs known for distinctive aroma and flavor. Quality tested and export-ready packaging.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1600",
    items: ["Turmeric", "Cardamom", "Pepper", "Cinnamon"],
  },
  {
    icon: Package,
    title: "Value Added Products",
    description:
      "Processed and packaged agricultural products meeting international food safety standards for retail and wholesale markets.",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1600",
    items: ["Dried Fruits", "Pickles", "Preserves", "Ready Mixes"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      {/* =========================
          Header
      ========================= */}
      <div className="section-padding text-center max-w-7xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full border border-primary-100 mb-6">
          <Package className="w-4 h-4 text-primary-700" />
          <span className="text-xs font-bold tracking-widest uppercase text-primary-700">
            Our Products
          </span>
        </div>

        <h2 className="section-title mb-4">
          What We <span className="text-primary-700">Harvest & Export</span>
        </h2>

        <p className="section-subtitle mx-auto">
          From Indian farms to global markets — harvested, processed, and
          delivered with care.
        </p>
      </div>

      {/* =========================
          Parallax Sections
      ========================= */}
      <div className="space-y-24 pb-24">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="relative h-[520px] overflow-hidden group"
          >
            {/* Parallax Background */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-110 will-change-transform"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundAttachment: "fixed",
              }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div
                className={`max-w-7xl mx-auto px-6 w-full flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 lg:p-10 max-w-xl shadow-large">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary-700" />
                  </div>

                  <h3 className="font-display text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-900 transition-colors"
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
