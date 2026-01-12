import { Apple, Carrot, Leaf, Package, ArrowRight, Truck } from "lucide-react";

const services = [
  {
    icon: Apple,
    title: "Fresh Fruits",
    description:
      "Premium quality seasonal and exotic fruits including mangoes, pomegranates, grapes, and tender coconuts sourced directly from certified farms.",
    image:
      "https://images.unsplash.com/photo-1592921870789-04563d55041c?q=80&w=1200",
    items: ["Mangoes", "Pomegranates", "Grapes", "Coconuts"],
  },
  {
    icon: Carrot,
    title: "Fresh Vegetables",
    description:
      "Hand-picked vegetables from Indian farms ensuring freshness and nutritional value. Available year-round with cold chain logistics.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200",
    items: ["Onions", "Potatoes", "Tomatoes", "Green Chillies"],
  },
  {
    icon: Leaf,
    title: "Premium Spices",
    description:
      "Authentic Indian spices and herbs known for distinctive aroma and flavor. Quality tested and export-ready packaging.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200",
    items: ["Turmeric", "Cardamom", "Pepper", "Cinnamon"],
  },
  {
    icon: Package,
    title: "Value Added Products",
    description:
      "Processed and packaged agricultural products meeting international food safety standards for retail and wholesale markets.",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1200",
    items: ["Dried Fruits", "Pickles", "Preserves", "Ready Mixes"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream">
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
          From <span className="text-primary-700">Harvest</span> to{" "}
          <span className="text-primary-700">Global Markets</span>
        </h2>

        <p className="section-subtitle mx-auto">
          Every shipment begins in the fields of India — carefully grown,
          harvested, packed, and delivered worldwide.
        </p>
      </div>

      {/* =========================
          HARVEST STORY PARALLAX
      ========================= */}
      <div
        className="relative h-[520px] bg-cover bg-center bg-fixed flex items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1800)",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
          <p className="uppercase tracking-widest text-sm text-primary-200 mb-4">
            Our Journey
          </p>
          <h3 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Grown in Fields. <br />
            Harvested with Care. <br />
            Delivered to the World.
          </h3>
          <p className="max-w-3xl mx-auto text-lg text-primary-50 leading-relaxed mb-8">
            From the moment our farmers harvest the crops to the time it reaches
            international markets, every step is guided by quality, safety, and
            responsibility.
          </p>

          <div className="flex items-center justify-center gap-8 mt-8 text-primary-100">
            <div className="flex flex-col items-center gap-2">
              <Leaf className="w-7 h-7" />
              <span className="text-sm">Farming</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Apple className="w-7 h-7" />
              <span className="text-sm">Harvesting</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Package className="w-7 h-7" />
              <span className="text-sm">Packaging</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-7 h-7" />
              <span className="text-sm">Export</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          NORMAL SERVICES GRID
      ========================= */}
      <div className="section-padding max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-large transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-6 lg:p-8">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
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
                  className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-900"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary">
            View All Products
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
