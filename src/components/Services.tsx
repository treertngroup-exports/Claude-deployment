import { Apple, Carrot, Leaf, Package, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Apple,
    title: "Fresh Fruits",
    items: ["Mangoes", "Pomegranates", "Grapes", "Coconuts"],
  },
  {
    icon: Carrot,
    title: "Fresh Vegetables",
    items: ["Onions", "Potatoes", "Tomatoes", "Green Chillies"],
  },
  {
    icon: Leaf,
    title: "Premium Spices",
    items: ["Turmeric", "Cardamom", "Pepper", "Cinnamon"],
  },
  {
    icon: Package,
    title: "Value Added Products",
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

        <p className="section-subtitle mx-auto max-w-3xl">
          Every shipment begins in the fields of India — grown by farmers,
          harvested by hand, packed with care, and delivered worldwide.
        </p>
      </div>

      {/* =========================
          HARVESTING PARALLAX STORY
      ========================= */}
      <div
        className="relative h-[520px] bg-cover bg-center bg-fixed flex items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2000)",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
          <p className="uppercase tracking-widest text-sm text-primary-200 mb-4">
            Our Journey
          </p>
          <h3 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Grown by Farmers. <br />
            Harvested by Hand. <br />
            Trusted by the World.
          </h3>
          <p className="max-w-3xl mx-auto text-lg text-primary-50 leading-relaxed">
            We work directly with farming communities across India to ensure
            ethical sourcing, premium quality, and global export standards from
            field to port.
          </p>
        </div>
      </div>

      {/* =========================
          PRODUCT CATEGORIES (SMALL CARDS)
      ========================= */}
      <div className="section-padding max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-large transition"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-50 flex items-center justify-center">
                <cat.icon className="w-7 h-7 text-primary-700" />
              </div>

              <h4 className="font-display text-xl font-semibold text-gray-900 mb-3">
                {cat.title}
              </h4>

              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                {cat.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-900 text-sm"
              >
                Enquire
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary">
            Request Product Catalogue
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
