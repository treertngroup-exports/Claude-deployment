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
    bio:
      "Leads TREERT’s global operations with a strong focus on supply chain excellence, quality assurance, and adherence to international trade standards.",
    linkedin: "#",
  },
  {
    name: "Dheetchith T",
    role: "Chairman & Managing Director",
    image: "https://drive.google.com/thumbnail?id=1o8ZeX1SqNn_0Hx6UuSjlYM0nF_Mqk_fh",
    bio:
      "Provides strategic leadership and corporate governance, guiding long-term growth through strong farmer relationships and global market expansion.",
    linkedin: "#",
  },
  {
    name: "Arvindh S M",
    role: "Chief Product Officer",
    image: "https://drive.google.com/thumbnail?id=1IaWAj3Qw_UNuCixxZ8Uu5Rth5lwXpeff",
    bio:
      "Oversees product quality, sourcing protocols, and export readiness across all agricultural categories and destinations.",
    linkedin: "#",
  },
  {
    name: "Praneshvar M",
    role: "Sales Analyst",
    image: "https://drive.google.com/thumbnail?id=1595uqpXXkfWrUoXoOJnVngHQ2eDhd7VQ",
    bio:
      "Supports international sales operations through market analysis, customer insights, and demand forecasting.",
    linkedin: "#",
  },
  {
    name: "Barathi",
    role: "Database Administrator",
    image: "https://drive.google.com/thumbnail?id=1IaWAj3Qw_UNuCixxZ8Uu5Rth5lwXpeff",
    bio:
      "Manages data infrastructure, reporting systems, and operational accuracy across internal business processes.",
    linkedin: "#",
  },
  {
    name: "Barath T S",
    role: "Financial Director",
    image: "https://drive.google.com/thumbnail?id=1595uqpXXkfWrUoXoOJnVngHQ2eDhd7VQ",
    bio:
      "Oversees financial planning, compliance, and risk management to ensure sustainable and transparent growth.",
    linkedin: "#",
  },
];

export default function AboutUs() {
  const [selectedLeader, setSelectedLeader] = useState<null | typeof leadership[0]>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* =========================
          PAGE HEADER
      ========================= */}
      <section className="pt-28 pb-20 bg-gradient-to-b from-primary-50 to-white text-center">
        <p className="text-sm font-semibold tracking-widest text-primary-700 uppercase mb-4">
          About TREERT
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          From Indian Fields to Global Markets
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600">
          We are building a transparent, farmer-first export company connecting
          India’s agricultural strength with the world.
        </p>
      </section>

      {/* =========================
          OUR STORY
      ========================= */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              Our Story
            </h2>
            <p className="text-gray-500">
              How TREERT began and where we are heading.
            </p>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              TREERT began in <strong>2024 in Annur, Coimbatore</strong>, from a
              concern we could no longer ignore. Across Tamil Nadu, farmers
              worked season after season, yet their produce often went
              unnoticed, unsold, or undervalued.
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

            <p className="font-semibold">Our goal remains simple:</p>

            <p className="text-primary-800 font-semibold">
              To carry the strength of Indian farmers to Europe, the UK, Canada, and beyond — without forgetting where we started: in the fields.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          MISSION & VISION
      ========================= */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="bg-white border border-gray-100 rounded-2xl p-10">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-primary-700" />
              <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To connect India’s agricultural excellence with global markets by
              delivering consistent quality, ensuring compliance with
              international standards, and creating sustainable value for
              farmers, partners, and customers.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-10">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-5 h-5 text-primary-700" />
              <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become a globally respected agricultural export organization,
              recognized for reliability, transparency, and long-term
              partnerships across international markets.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          LEADERSHIP
      ========================= */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
              <Users className="w-4 h-4 text-primary-600" />
              <span className="text-xs font-bold uppercase text-primary-700">
                Leadership
              </span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              Executive Leadership
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Click on any leader to view their full profile.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {leadership.map((leader) => (
              <button
                key={leader.name}
                onClick={() => setSelectedLeader(leader)}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition text-center"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-xl object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {leader.name}
                </h3>
                <p className="text-primary-700 font-medium">
                  {leader.role}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          PROFILE MODAL
      ========================= */}
      {selectedLeader && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
          onClick={() => setSelectedLeader(null)}
        >
          <div
            className="bg-white max-w-lg w-full rounded-2xl p-8 relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <img
                src={selectedLeader.image}
                className="w-32 h-32 mx-auto rounded-xl object-cover mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-900">
                {selectedLeader.name}
              </h3>
              <p className="text-primary-700 font-medium mb-4">
                {selectedLeader.role}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {selectedLeader.bio}
              </p>

              <a
                href={selectedLeader.linkedin}
                className="inline-flex items-center gap-2 text-primary-700 font-semibold"
              >
                <Linkedin className="w-4 h-4" />
                View LinkedIn Profile
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
