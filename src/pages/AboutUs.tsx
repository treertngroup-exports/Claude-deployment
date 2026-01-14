import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Linkedin, Users, Target, Eye, X } from "lucide-react";

/* =========================
   Leadership Data
========================= */
const leadership = [
  {
    name: "Deepak T S",
    role: "Chief Executive Officer",
    image: "https://drive.google.com/thumbnail?id=1AA0bfJbO21liHcAj0lRXMHFkUvHO_muC",
    bio: "Leads TREERT’s global operations with a strong focus on supply chain excellence, quality assurance, and adherence to international trade standards.",
    linkedin: "#",
  },
  {
    name: "Dheetchith T",
    role: "Chairman & Managing Director",
    image: "https://drive.google.com/thumbnail?id=1o8ZeX1SqNn_0Hx6UuSjlYM0nF_Mqk_fh",
    bio: "Provides strategic leadership and corporate governance, guiding long-term growth through strong farmer relationships and global market expansion.",
    linkedin: "#",
  },
  {
    name: "Arvindh S M",
    role: "Chief Product Officer",
    image: "https://drive.google.com/thumbnail?id=1IaWAj3Qw_UNuCixxZ8Uu5Rth5lwXpeff",
    bio: "Oversees product quality, sourcing protocols, and export readiness across all agricultural categories and destinations.",
    linkedin: "#",
  },
  {
    name: "Praneshvar M",
    role: "Sales Analyst",
    image: "https://drive.google.com/thumbnail?id=1595uqpXXkfWrUoXoOJnVngHQ2eDhd7VQ",
    bio: "Supports international sales operations through market analysis, customer insights, and demand forecasting.",
    linkedin: "#",
  },
  {
    name: "Raghul D",
    role: "Manager (UAE)",
    image: "https://drive.google.com/thumbnail?id=1IaWAj3Qw_UNuCixxZ8Uu5Rth5lwXpeff",
    bio: "Manages regional operations and partner relationships in the UAE market.",
    linkedin: "#",
  },
  {
    name: "Barath T S",
    role: "Financial Director",
    image: "https://drive.google.com/thumbnail?id=1595uqpXXkfWrUoXoOJnVngHQ2eDhd7VQ",
    bio: "Oversees financial planning, compliance, and risk management to ensure sustainable growth.",
    linkedin: "#",
  },
  {
    name: "Jeevini",
    role: "Manager (UK)",
    image: "https://drive.google.com/thumbnail?id=1595uqpXXkfWrUoXoOJnVngHQ2eDhd7VQ",
    bio: "Handles UK operations, logistics coordination, and customer partnerships.",
    linkedin: "#",
  },
];

export default function AboutUs() {
  const [selectedLeader, setSelectedLeader] = useState<typeof leadership[0] | null>(null);

  const founders = leadership.slice(0, 2);
  const team = leadership.slice(2);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* =========================
          PAGE HEADER
      ========================= */}
      <section className="pt-20 pb-10 bg-gradient-to-b from-primary-50 to-white text-center">
        <p className="text-sm font-semibold tracking-widest text-primary-700 uppercase mb-3">
          About TREERT
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Our Success Story
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600">
          We are building a transparent, farmer-first export company connecting India’s agricultural strength with the world.
        </p>
      </section>

      {/* =========================
          OUR STORY
      ========================= */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-gray-700 leading-relaxed text-lg space-y-6">
          <p>
            TREERT began in <strong>2024 in Annur, Coimbatore</strong>, from a concern we could no longer ignore. Across Tamil Nadu, farmers worked season after season, yet their produce often went unnoticed, unsold, or undervalued.
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>We witnessed broken trust, repeated losses, and farmers leaving agriculture.</li>
            <li>Coming from a farming background, we decided to change this reality.</li>
            <li>By stepping into exports, we enabled farmers’ produce to reach markets that truly value quality.</li>
          </ul>

          <p>
            Our first successful shipment of <strong>onions and tomatoes to Dubai</strong> proved that honest sourcing and hard work can cross borders.
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>Early challenges in packing and logistics pushed us to work hands-on.</li>
            <li>We visited farms, inspected every bag, and honored every commitment.</li>
            <li>Trust followed naturally.</li>
          </ul>

          <p>Today, TREERT exports fruits and vegetables to:</p>

          <ul className="list-disc pl-6 space-y-2 font-medium text-primary-700">
            <li>Vietnam</li>
            <li>Indonesia</li>
            <li>Thailand</li>
            <li>Malaysia</li>
            <li>Singapore</li>
          </ul>

          <p className="text-primary-800 font-semibold">
            Our goal remains simple: To carry the strength of Indian farmers to Europe, the UK, Canada, and beyond — without forgetting where we started: in the fields.
          </p>
        </div>
      </section>

      {/* =========================
          MISSION & VISION
      ========================= */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="bg-white border rounded-2xl p-10">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-primary-700" />
              <h3 className="text-2xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-gray-600">
              To connect India’s agricultural excellence with global markets by delivering consistent quality, ensuring compliance, and creating sustainable value.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-10">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-5 h-5 text-primary-700" />
              <h3 className="text-2xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-gray-600">
              To become a globally respected agricultural export organization recognized for reliability and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          LEADERSHIP
      ========================= */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
              <Users className="w-4 h-4 text-primary-600" />
              <span className="text-xs font-bold uppercase text-primary-700">Leadership</span>
            </div>
            <h2 className="text-3xl font-semibold mb-3">Executive Leadership</h2>
            <p className="text-gray-600">Click any profile to view details.</p>
          </div>

          {/* Founders */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
            {founders.map((leader) => (
              <button
                key={leader.name}
                onClick={() => setSelectedLeader(leader)}
                className="bg-gray-50 border rounded-2xl p-10 hover:shadow-xl transition text-center"
              >
                <img src={leader.image} className="w-36 h-36 rounded-xl mx-auto mb-6 object-cover" />
                <h3 className="text-2xl font-semibold">{leader.name}</h3>
                <p className="text-primary-700">{leader.role}</p>
              </button>
            ))}
          </div>

          {/* Team */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {team.map((leader) => (
              <button
                key={leader.name}
                onClick={() => setSelectedLeader(leader)}
                className="bg-gray-50 border rounded-2xl p-8 hover:shadow-lg transition text-center"
              >
                <img src={leader.image} className="w-28 h-28 rounded-xl mx-auto mb-5 object-cover" />
                <h3 className="text-xl font-semibold">{leader.name}</h3>
                <p className="text-primary-700">{leader.role}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          PROFILE MODAL
      ========================= */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4" onClick={() => setSelectedLeader(null)}>
          <div className="bg-white max-w-lg w-full rounded-2xl p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4" onClick={() => setSelectedLeader(null)}>
              <X />
            </button>

            <div className="text-center">
              <img src={selectedLeader.image} className="w-32 h-32 mx-auto rounded-xl mb-6 object-cover" />
              <h3 className="text-2xl font-semibold">{selectedLeader.name}</h3>
              <p className="text-primary-700 mb-4">{selectedLeader.role}</p>
              <p className="text-gray-600 mb-6">{selectedLeader.bio}</p>

              <a href={selectedLeader.linkedin} className="inline-flex items-center gap-2 text-primary-700 font-semibold">
                <Linkedin className="w-4 h-4" /> View LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}

      <Contact />
      <Footer />
    </div>
  );
}
