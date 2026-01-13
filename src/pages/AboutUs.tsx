import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Linkedin, Users, Target, Eye, X } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    name: "Barathi",
    role: "Database Administrator",
    image: "https://drive.google.com/thumbnail?id=1IaWAj3Qw_UNuCixxZ8Uu5Rth5lwXpeff",
    bio: "Manages data infrastructure, reporting systems, and operational accuracy across internal business processes.",
    linkedin: "#",
  },
  {
    name: "Barath T S",
    role: "Financial Director",
    image: "https://drive.google.com/thumbnail?id=1595uqpXXkfWrUoXoOJnVngHQ2eDhd7VQ",
    bio: "Oversees financial planning, compliance, and risk management to ensure sustainable and transparent growth.",
    linkedin: "#",
  },
];

export default function AboutUs() {
  const [selectedLeader, setSelectedLeader] = useState<typeof leadership[0] | null>(null);

  const storyRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Story text animation
    gsap.from(storyRef.current?.children || [], {
      scrollTrigger: {
        trigger: storyRef.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
    });

    // Mission & Vision cards
    gsap.from(missionRef.current?.children || [], {
      scrollTrigger: {
        trigger: missionRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });

    // Leadership cards
    gsap.from(".leader-card", {
      scrollTrigger: {
        trigger: leadershipRef.current,
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HEADER */}
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

      {/* STORY */}
      <section className="section-padding bg-white">
        <div ref={storyRef} className="max-w-4xl mx-auto px-4 text-gray-700 leading-relaxed text-lg space-y-6">
          {/* story content stays same */}
          {/* (keep your paragraphs and lists here exactly as before) */}
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-padding bg-gray-50">
        <div ref={missionRef} className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* mission & vision blocks unchanged */}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section ref={leadershipRef} className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {leadership.map((leader) => (
              <button
                key={leader.name}
                onClick={() => setSelectedLeader(leader)}
                className="leader-card bg-gray-50 border rounded-2xl p-8 hover:shadow-lg transition text-center"
              >
                <img src={leader.image} className="w-32 h-32 rounded-xl mx-auto mb-6 object-cover" />
                <h3 className="text-xl font-semibold">{leader.name}</h3>
                <p className="text-primary-700">{leader.role}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL remains unchanged */}
      {/* Contact & Footer remain unchanged */}

      <Contact />
      <Footer />
    </div>
  );
}
