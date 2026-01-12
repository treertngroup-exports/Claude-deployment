import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Linkedin, Users, Target, Eye } from "lucide-react";

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
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* =========================
          Executive Header
      ========================= */}
      <section className="pt-36 pb-28 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold tracking-widest text-primary-700 uppercase mb-4">
            About TREERT
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            A Trusted Partner in{" "}
            <span className="text-primary-700">Global Agricultural Trade</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            TREERT is an India-based agricultural export organization delivering
            premium-quality produce to international markets through ethical
            sourcing, stringent quality control, and reliable global logistics.
          </p>
        </div>
      </section>

      {/* =========================
          Mission & Vision
      ========================= */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="border border-gray-100 rounded-2xl p-10">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-primary-700" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To connect India’s agricultural excellence with global markets by
              delivering consistent quality, ensuring compliance with
              international standards, and creating sustainable value for
              farmers, partners, and customers.
            </p>
          </div>

          <div className="border border-gray-100 rounded-2xl p-10">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-5 h-5 text-primary-700" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Our Vision
              </h2>
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
          Company Overview
      ========================= */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Company Overview
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Founded in 2024, TREERT was established to bridge the gap between
            India’s agricultural producers and the increasing global demand for
            responsibly sourced, high-quality food products.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We collaborate closely with farmers, processors, and logistics
            partners to ensure that every shipment meets international quality,
            safety, and documentation requirements from origin to destination.
          </p>
        </div>
      </section>

      {/* =========================
          Leadership
      ========================= */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
              <Users className="w-4 h-4 text-primary-600" />
              <span className="text-xs font-bold uppercase text-primary-700">
                Leadership
              </span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Executive Leadership
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              TREERT is led by a multidisciplinary leadership team with expertise
              spanning agriculture, finance, operations, and global trade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-28 h-28 rounded-xl object-cover mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {leader.name}
                </h3>
                <p className="text-primary-700 font-medium mb-4">
                  {leader.role}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {leader.bio}
                </p>
                <a
                  href={leader.linkedin}
                  className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-900 text-sm font-medium"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          Contact
      ========================= */}
      <Contact />
      <Footer />
    </div>
  );
}
