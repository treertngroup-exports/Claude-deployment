import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Linkedin, Quote, Users } from "lucide-react";

/* =========================
   Leadership Data
========================= */
const leadership = [
  {
    name: "Deepak T S",
    role: "CEO",
    image: "https://drive.google.com/thumbnail?id=1AA0bfJbO21liHcAj0lRXMHFkUvHO_muC",
    bio: "Expert in supply chain management and quality control, ensuring seamless operations from farm to international markets.",
    linkedin: "#",
  },
  {
    name: "Dheetchith T",
    role: "Chairman & Managing Director",
    image: "https://drive.google.com/thumbnail?id=1o8ZeX1SqNn_0Hx6UuSjlYM0nF_Mqk_fh",
    bio: "Expert in supply chain management and quality control, ensuring seamless operations from farm to international markets.",
    linkedin: "#",
  },
  {
    name: "Arvindh S M",
    role: "Chief Product Officer",
    image: "https://drive.google.com/thumbnail?id=1IaWAj3Qw_UNuCixxZ8Uu5Rth5lwXpeff",
    bio: "Expert in supply chain management and quality control, ensuring seamless operations from farm to international markets.",
    linkedin: "#",
  },
  {
    name: "Praneshvar M",
    role: "Sales Analyst",
    image: "https://drive.google.com/thumbnail?id=1595uqpXXkfWrUoXoOJnVngHQ2eDhd7VQ",
    bio: "Expert in supply chain management and quality control, ensuring seamless operations from farm to international markets.",
    linkedin: "#",
  },
  {
    name: "Barathi",
    role: "Technical Advisor",
    image: "https://drive.google.com/thumbnail?id=1IaWAj3Qw_UNuCixxZ8Uu5Rth5lwXpeff",
    bio: "Expert in supply chain management and quality control, ensuring seamless operations from farm to international markets.",
    linkedin: "#",
  },
  {
    name: "Barath T S",
    role: "Technical Advisor",
    image: "https://drive.google.com/thumbnail?id=1595uqpXXkfWrUoXoOJnVngHQ2eDhd7VQ",
    bio: "Expert in supply chain management and quality control, ensuring seamless operations from farm to international markets.",
    linkedin: "#",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* =========================
          Hero
      ========================= */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-50 to-white text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About <span className="text-primary-700">TREERT</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Delivering premium agricultural exports from India while empowering
          farmers and building long-term global partnerships.
        </p>
      </section>

      {/* =========================
          Mission & Vision
      ========================= */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To connect India’s agricultural excellence with global markets
              through ethical sourcing, strict quality standards, and reliable
              export operations.
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become a globally trusted agricultural export brand known for
              transparency, consistency, and long-term impact.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          Our Story
      ========================= */}
      <section className="section-padding bg-gray-50 text-center">
        <h2 className="section-title mb-6">Our Story</h2>
        <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed">
          Founded in 2024, TREERT was created to bridge the gap between India’s
          agricultural heritage and international demand. Our journey is built
          on trust, quality, and strong farmer partnerships across the country.
        </p>
      </section>

      {/* =========================
          Leadership
      ========================= */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
              <Users className="w-4 h-4 text-primary-600" />
              <span className="text-xs font-bold uppercase text-primary-700">
                Leadership
              </span>
            </div>
            <h2 className="section-title mb-4">
              Meet Our <span className="text-primary-700">Team</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Experienced professionals guiding TREERT’s growth and global
              success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 mx-auto rounded-xl object-cover mb-4"
                />

                <h3 className="text-xl font-bold text-center text-gray-900">
                  {leader.name}
                </h3>
                <p className="text-primary-600 text-center mb-4">
                  {leader.role}
                </p>

                <Quote className="w-8 h-8 text-primary-100 mx-auto mb-2" />
                <p className="text-gray-600 text-center italic">
                  “{leader.bio}”
                </p>

                <div className="flex justify-center mt-4">
                  <a
                    href={leader.linkedin}
                    aria-label="LinkedIn"
                    className="text-primary-700 hover:text-primary-900"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
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
