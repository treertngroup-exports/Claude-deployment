import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Linkedin, Target, Eye, X } from "lucide-react";

/* =========================
   Leadership Data
========================= */
const leadership = [
  {
    name: "Deepak T S",
    role: "Chief Executive Officer",
    image: "https://drive.google.com/thumbnail?id=16spkW4ZRP6ESZDAbK5IIczyCafYwrLx4",
    bio: "Leads TREERT’s global operations with a strong focus on supply chain excellence, quality assurance, and adherence to international trade standards.",
    linkedin: "#",
  },
  {
    name: "Dheetchith T",
    role: "Chairman & Managing Director",
    image: "https://drive.google.com/thumbnail?id=1vTnsu6xQNFl7Kj996DWvygpISzUMpQ71",
    bio: "Provides strategic leadership and corporate governance, guiding long-term growth through strong farmer relationships and global market expansion.",
    linkedin: "#",
  },
  {
    name: "Bala Jeevini S",
    role: "Manager (UK)",
    image: "https://drive.google.com/thumbnail?id=18UxGfJI9f1IKVfm5CUGVcD0vI4sUUAuR",
    bio: "Oversees UK operations and international coordination.",
    linkedin: "#",
  },
  {
    name: "Barath T S",
    role: "Financial Director",
    image: "https://drive.google.com/thumbnail?id=1s4KaufDEksOEgo8gkdiUulJfu92y4QO6",
    bio: "Oversees financial planning, compliance, and risk management.",
    linkedin: "#",
  },
  {
    name: "Arvindh S M",
    role: "Chief Product Officer (UAE)",
    image: "https://drive.google.com/thumbnail?id=13ZL20P5GkATtlT_4TCM3wwAt6MqlM4zK",
    bio: "Oversees product quality and export readiness.",
    linkedin: "#",
  },
  {
    name: "Raghul D",
    role: "Manager (UAE)",
    image: "https://drive.google.com/thumbnail?id=1cASUQ1JXNz0DraYo88pYYhm5vyuFwhAH",
    bio: "Manages regional operations and logistics.",
    linkedin: "#",
  },
];

export default function AboutUs() {
  const [selectedLeader, setSelectedLeader] = useState<(typeof leadership)[0] | null>(null);

  const founders = leadership.slice(0, 2);
  const team = leadership.slice(2);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ================= HEADER ================= */}
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

      {/* ================= STORY ================= */}
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

      {/* ================= MISSION & VISION ================= */}
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
              To become a globally respected agricultural export organization, recognized for reliability and long-term partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* ========================= LEADERSHIP ========================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Founders */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {founders.map((leader) => (
              <LeaderCard key={leader.name} leader={leader} onClick={setSelectedLeader} big />
            ))}
          </div>

          {/* Team */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {team.map((leader) => (
              <LeaderCard key={leader.name} leader={leader} onClick={setSelectedLeader} />
            ))}
          </div>

        </div>
      </section>

      {/* ========================= MODAL ========================= */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4" onClick={() => setSelectedLeader(null)}>
          <div className="bg-white max-w-lg w-full rounded-2xl p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4" onClick={() => setSelectedLeader(null)}>
              <X />
            </button>

            <div className="text-center">
              <Avatar src={selectedLeader.image} size="lg" />
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

/* ========================= COMPONENTS ========================= */

function Avatar({ src, size = "md" }: { src: string; size?: "md" | "lg" }) {
  const sizes = size === "lg" ? "w-40 h-40" : "w-32 h-32";
  return (
    <div className={`${sizes} mx-auto mb-6 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden`}>
      <img src={src} className="w-full h-full object-contain p-3" />
    </div>
  );
}

function LeaderCard({ leader, onClick, big = false }: any) {
  return (
    <button onClick={() => onClick(leader)} className="bg-gray-50 border rounded-2xl p-10 hover:shadow-lg transition text-center w-full">
      <Avatar src={leader.image} size={big ? "lg" : "md"} />
      <h3 className="text-xl font-semibold">{leader.name}</h3>
      <p className="text-primary-700">{leader.role}</p>
    </button>
  );
}
