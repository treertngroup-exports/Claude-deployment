import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2000)",
      }}
    >
      {/* Dark Overlay (NO GREEN TINT) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <p className="uppercase tracking-widest text-sm text-white/80 mb-4">
          Trusted Indian Agricultural Exporter
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
          Connect Your Business <br />
          To A World Of Possibilities
        </h1>

        <p className="text-xl sm:text-2xl mb-6 font-light max-w-4xl mx-auto text-white/90">
          TREERT exports premium agriculture and value-added products globally,
          promoting quality, sustainability, and farmer empowerment.
        </p>

        <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto text-white/80">
          Bringing farm-fresh excellence to global markets.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get a Quote
            <ArrowRight size={20} />
          </a>

          <a
            href="#services"
            onClick={(e) => scrollToSection(e, "#services")}
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 hover:-translate-y-0.5"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
