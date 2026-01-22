import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Linkedin, Target, Eye, X } from "lucide-react";

/* =========================
   Types
========================= */
type Leader = {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  color: string;
};

/* =========================
   Leadership Data
========================= */
const leadership: Leader[] = [
  {
    name: "Deepak T S",
    role: "Chief Executive Officer",
    image: "https://drive.google.com/thumbnail?id=1BaA-o9xkHl0GGqH1Fs8hMfDWaMBLfXME",
    bio: "Leads TREERT’s global operations with a strong focus on supply chain excellence, quality assurance, and adherence to international trade standards.",
    linkedin: "#",
    color: "bg-gradient-to-br from-primary-600 to-primary-800",
  },
  {
    name: "Dheetchith T",
    role: "Chairman & Managing Director",
    image: "https://drive.google.com/thumbnail?id=19MgSJ4UqSeD_sLuhx4KSi4EMPyLUcPJU",
    bio: "Provides strategic leadership and corporate governance, guiding long-term growth through strong farmer relationships and global market expansion.",
    linkedin: "#",
    color: "bg-gradient-to-br from-emerald-500 to-emerald-700",
  },
  {
    name: "Bala Jeevini S",
    role: "Manager (UK)",
    image: "https://drive.google.com/thumbnail?id=1Ro-vLZxtJrDapQP3WpDaEZe9ZX2KZ8Rv",
    bio: "Oversees UK operations and international coordination.",
    linkedin: "#",
    color: "bg-gradient-to-br from-sky-500 to-sky-700",
  },
  {
    name: "Barath T S",
    role: "Financial Director",
    image: "https://drive.google.com/thumbnail?id=1Ro-vLZxtJrDapQP3WpDaEZe9ZX2",
    bio: "Oversees financial planning, compliance, and risk management.",
    linkedin: "#",
    color: "bg-gradient-to-br from-violet-500 to-violet-700",
  },
  {
    name: "Arvindh S M",
    role: "Chief Product Officer (UAE)",
    image: "https://drive.google.com/thumbnail?id=15K7wef67L7wej39qkFA8LO7W7lSzGHPc",
    bio: "Oversees product quality and export readiness.",
    linkedin: "#",
    color: "bg-gradient-to-br from-orange-500 to-orange-700",
  },
  {
    name: "Raghul D",
    role: "Manager (UAE)",
    image: "https://drive.google.com/thumbnail?id=1wRL7oH3LyDHMWbmaVZohTN6vwQ4-hk9M",
    bio: "Manages regional operations and logistics.",
    linkedin: "#",
    color: "bg-gradient-to-br from-teal-500 to-teal-700",
  },
];

export default function AboutUs() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const founders = leadership.slice(0, 2);
  const team = leadership.slice(2);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ================= HEADER ================= */}
      {/* (UNCHANGED — keep your existing sections here) */}

      {/* ========================= LEADERSHIP ========================= */}
      <section className="py-24 bg-white">
        <div className="w-full px-6">

          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-gray-600 text-lg">
              The people building TREERT globally with experience, trust, and execution.
            </p>
          </div>

          {/* Founders Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            {founders.map((leader) => (
              <LeaderTile key={leader.name} leader={leader} onClick={setSelectedLeader} />
            ))}
          </div>

          {/* Team Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {team.map((leader) => (
              <LeaderTile key={leader.name} leader={leader} onClick={setSelectedLeader} />
            ))}
          </div>

        </div>
      </section>

      {/* ========================= MODAL ========================= */}
      {selectedLeader && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setSelectedLeader(null)}
        >
          <div
            className="bg-white max-w-lg w-full rounded-2xl p-8 relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedLeader(null)}
            >
              <X />
            </button>

            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-6 rounded-xl overflow-hidden bg-gray-100">
                <img src={selectedLeader.image} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-semibold">{selectedLeader.name}</h3>
              <p className="text-primary-700 mb-4">{selectedLeader.role}</p>
              <p className="text-gray-600 mb-6">{selectedLeader.bio}</p>

              <a
                href={selectedLeader.linkedin}
                className="inline-flex items-center gap-2 text-primary-700 font-semibold"
              >
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

/* =========================
   Leader Tile (Atlassian Style)
========================= */
function LeaderTile({
  leader,
  onClick,
}: {
  leader: Leader;
  onClick: (l: Leader) => void;
}) {
  return (
    <button
      onClick={() => onClick(leader)}
      className="group text-left w-full"
    >
      {/* Image Block */}
      <div
        className={`relative w-full aspect-[3/4] rounded-2xl overflow-hidden ${leader.color} flex items-end justify-center transition-transform duration-300 group-hover:-translate-y-1`}
      >
        <img
          src={leader.image}
          alt={leader.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{leader.name}</h3>
        <p className="text-sm text-gray-600 uppercase tracking-wide">
          {leader.role}
        </p>
      </div>
    </button>
  );
}
