import { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

const certificates = [
  {
    title: "Coconut Development Board",
    image:
      "https://drive.google.com/thumbnail?id=1XCfemS3R0p4LC_YQ4dvldc5fHrXeHIU3&auto=compress&cs=tinysrgb&w=600",
    link: "https://coconutboard.gov.in",
  },
  {
    title: "Spices Board India",
    image:
      "https://drive.google.com/thumbnail?id=1nzF3cJdx5uWVn_UDxfV-Hq0I_8UmmCgK&auto=compress&cs=tinysrgb&w=600",
    link: "https://www.indianspices.com",
  },
  {
    title: "FSSAI",
    image:
      "https://drive.google.com/thumbnail?id=1Ig6V80TNYFUVghhOdi_Im_20U3LK-wUj&auto=compress&cs=tinysrgb&w=600",
    link: "https://www.fssai.gov.in",
  },
  {
    title: "MSME",
    image:
      "https://drive.google.com/thumbnail?id=1Bic6LAdejJ2WP29T_-SsNntdKvN5uZZ7&auto=compress&cs=tinysrgb&w=600",
    link: "https://msme.gov.in",
  },
  {
    title: "APEDA",
    image:
      "https://drive.google.com/thumbnail?id=16tUIOxiwW6-GoSxBACyrS2IFbbvg_KVs&auto=compress&cs=tinysrgb&w=600",
    link: "https://apeda.gov.in",
  },
];

const testimonials = [
  {
    name: "Global Buyer - Dubai",
    text: "TREERT delivers consistent quality and perfect documentation every shipment.",
  },
  {
    name: "Importer - Singapore",
    text: "Packaging, freshness, and compliance are always top class.",
  },
  {
    name: "Wholesale Partner - Malaysia",
    text: "Very professional export process and reliable timelines.",
  },
  {
    name: "Distributor - Qatar",
    text: "Quality control and certifications are always perfect.",
  },
  {
    name: "Retail Chain - Oman",
    text: "One of the most trustworthy exporters we’ve worked with.",
  },
];

export default function CredibilityPage() {
  const certRef = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cert = certRef.current;
    const test = testRef.current;

    let c1 = 0;
    let c2 = 0;

    const animate = () => {
      if (cert) {
        c1 -= 0.4;
        if (Math.abs(c1) >= cert.scrollWidth / 2) c1 = 0;
        cert.style.transform = `translateX(${c1}px)`;
      }

      if (test) {
        c2 += 0.3;
        if (c2 >= test.scrollWidth / 2) c2 = 0;
        test.style.transform = `translateX(${c2}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-24 overflow-hidden">

      {/* HERO */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
          Our Credibility
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Certified. Trusted. Globally Compliant. Recognized by India’s top export authorities.
        </p>
      </div>

      {/* CERTIFICATES */}
      <div className="mb-32">
        <h2 className="text-3xl font-bold text-center mb-12">Our Certifications</h2>

        <div className="relative overflow-hidden">
          <div className="flex gap-10 w-max" ref={certRef}>
            {[...certificates, ...certificates].map((cert, i) => (
              <a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-64 shrink-0"
              >
                <div className="perspective-1000">
                  <div className="gallery-card bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-500">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-40 w-full object-contain"
                    />
                    <p className="text-center mt-4 font-semibold text-gray-800">
                      {cert.title}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* TRUST STATEMENT */}
      <div className="max-w-5xl mx-auto text-center mb-32">
        <h2 className="text-4xl font-bold mb-6">Why Global Buyers Trust Us</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We follow international export standards, strict quality control, certified packaging,
          regulatory compliance, and transparent documentation — ensuring zero-risk shipments and
          long-term partnerships.
        </p>
      </div>

      {/* TESTIMONIALS */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>

        <div className="relative overflow-hidden">
          <div className="flex gap-8 w-max" ref={testRef}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-80 shrink-0 glass rounded-2xl p-8 shadow-xl border border-white/20"
              >
                <Quote className="text-primary-600 mb-4" />
                <p className="text-gray-700 mb-4 italic">“{t.text}”</p>
                <p className="font-semibold text-gray-900">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
