import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Quality from "../components/Quality";
import ExportStory from "../components/ExportStory";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Stats */}
      <section className="py-20">
        <Stats />
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-32 py-20">
        <Services />
      </section>

      {/* Quality */}
      <section id="quality" className="scroll-mt-32 py-20 bg-gray-50">
        <Quality />
      </section>

      {/* Story */}
      <section className="py-20">
        <ExportStory />
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-32 py-24 bg-gray-50">
        <Contact />
      </section>
    </div>
  );
}
