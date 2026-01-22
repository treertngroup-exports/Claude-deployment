import { useEffect, useRef } from "react";

/* =========================
   Certificates Data
========================= */
const certificates = [
  {
    id: 1,
    image: "https://drive.google.com/thumbnail?id=1XCfemS3R0p4LC_YQ4dvldc5fHrXeHIU3&auto=compress&cs=tinysrgb&w=600",
    title: "Coconut Development Board",
    link: "https://coconutboard.gov.in",
  },
  {
    id: 2,
    image: "https://drive.google.com/thumbnail?id=1nzF3cJdx5uWVn_UDxfV-Hq0I_8UmmCgK&auto=compress&cs=tinysrgb&w=600",
    title: "Spices Board India",
    link: "https://www.indianspices.com",
  },
  {
    id: 3,
    image: "https://drive.google.com/thumbnail?id=1Ig6V80TNYFUVghhOdi_Im_20U3LK-wUj&auto=compress&cs=tinysrgb&w=600",
    title: "FSSAI",
    link: "https://www.fssai.gov.in",
  },
  {
    id: 4,
    image: "https://drive.google.com/thumbnail?id=1Bic6LAdejJ2WP29T_-SsNntdKvN5uZZ7&auto=compress&cs=tinysrgb&w=600",
    title: "MSME",
    link: "https://msme.gov.in",
  },
  {
    id: 5,
    image: "https://drive.google.com/thumbnail?id=16tUIOxiwW6-GoSxBACyrS2IFbbvg_KVs&auto=compress&cs=tinysrgb&w=600",
    title: "APEDA",
    link: "https://apeda.gov.in",
  },
];

/* =========================
   Testimonials
========================= */
const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Importer, Dubai",
    text: "TREERT delivers consistent quality and professional export handling. Extremely reliable partner.",
  },
  {
    name: "Anand Patel",
    role: "Wholesale Buyer, Singapore",
    text: "Their packing quality and documentation process is world-class. Highly recommended.",
  },
  {
    name: "Mohammed Irfan",
    role: "Trader, Malaysia",
    text: "Very transparent sourcing and timely shipments. We are working long term with TREERT.",
  },
  {
    name: "Suresh Rao",
    role: "Distributor, Chennai",
    text: "One of the most disciplined export companies I have seen in agri sector.",
  },
  {
    name: "Lee Wong",
    role: "Buyer, Thailand",
    text: "Great quality control and communication. Shipments always arrive perfectly.",
  },
];

export default function Credibility() {
  const certRef = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (certRef.current) {
      certRef.current.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
        { duration: 30000, iterations: Infinity, easing: "linear" }
      );
    }

    if (testRef.current) {
      testRef.current.animate(
        [{ transform: "translateX(-50%)" }, { transform: "translateX(0)" }],
        { duration: 35000, iterations: Infinity, easing: "linear" }
      );
    }
  }, []);

  return (
    <div className="bg-white pt-20 pb-16">

      {/* ================= HEADER ================= */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Credibility
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our certifications and our clients’ trust define our commitment to quality and compliance.
        </p>
      </section>

      {/* ================= CERTIFICATES ================= */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-12">Our Certifications</h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-10 w-max" ref={certRef}>
            {[...certificates, ...certificates].map((cert, i) => (
              <a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-64 h-48 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:shadow-xl transition"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-32 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Partners Say</h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-8 w-max" ref={testRef}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-80 bg-white border rounded-2xl p-6 shadow-md"
              >
                <p className="text-gray-600 mb-4">“{t.text}”</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
