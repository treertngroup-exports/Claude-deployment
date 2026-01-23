import { useEffect, useRef } from "react";
import { Quote, ShieldCheck, Award } from "lucide-react";

/* ===================== DATA ===================== */

const certificates = [
  {
    title: "CDB",
    image:
      "https://drive.google.com/thumbnail?id=1XCfemS3R0p4LC_YQ4dvldc5fHrXeHIU3&auto=compress&cs=tinysrgb&w=600",
    link: "https://coconutboard.gov.in",
  },
  {
    title: "FSSAI",
    image:
      "https://drive.google.com/thumbnail?id=1nzF3cJdx5uWVn_UDxfV-Hq0I_8UmmCgK&auto=compress&cs=tinysrgb&w=600",
    link: "https://www.indianspices.com",
  },
  {
    title: "MSME",
    image:
      "https://drive.google.com/thumbnail?id=1Ig6V80TNYFUVghhOdi_Im_20U3LK-wUj&auto=compress&cs=tinysrgb&w=600",
    link: "https://www.fssai.gov.in",
  },
  {
    title: "Spices Board India",
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

/* ===================== PAGE ===================== */

export default function CredibilityPage() {
  const certRef = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cert = certRef.current;
    const test = testRef.current;
    if (!cert || !test) return;

    let c1 = 0;
    let c2 = -test.scrollWidth / 2;

    const speedCert = 0.35;
    const speedTest = 0.3;

    const animate = () => {
      c1 -= speedCert;
      if (Math.abs(c1) >= cert.scrollWidth / 2) c1 = 0;
      cert.style.transform = `translate3d(${c1}px,0,0)`;

      c2 += speedTest;
      if (c2 >= 0) c2 = -test.scrollWidth / 2;
      test.style.transform = `translate3d(${c2}px,0,0)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">

      {/* Soft background blobs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-green-300/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-emerald-300/20 rounded-full blur-3xl" />

      {/* HERO */}
      <section className="relative pt-24 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass mb-6">
          <ShieldCheck className="w-5 h-5 text-green-700" />
          <span className="font-semibold text-green-800">
            Globally Trusted Exporter
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
          Our Credibility
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Certified. Trusted. Globally Compliant. Recognized by India’s top export authorities.
        </p>
      </section>

      {/* TRUST STATS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 mb-24">
        {[
          { label: "Shipments Completed", value: "500+" },
          { label: "Countries Served", value: "12+" },
          { label: "Compliance Score", value: "99.8%" },
        ].map((s) => (
          <div
            key={s.label}
            className="card text-center"
          >
            <p className="text-4xl font-bold gradient-text mb-2">{s.value}</p>
            <p className="text-gray-600 font-medium">{s.label}</p>
          </div>
        ))}
      </section>

      {/* CERTIFICATES */}
      <section className="mb-28">
        <h2 className="text-3xl font-bold text-center mb-10">
          Recognized & Certified By
        </h2>

        <div className="relative overflow-hidden">
          {/* edge fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex gap-10 w-max will-change-transform" ref={certRef}>
            {[...certificates, ...certificates].map((cert, i) => (
              <a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-64 shrink-0"
              >
                <div className="gallery-card bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-500">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-36 w-full object-contain"
                  />
                  <p className="text-center mt-4 font-semibold text-gray-800">
                    {cert.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STATEMENT */}
      <section className="max-w-5xl mx-auto text-center mb-28 px-6">
        <Award className="w-12 h-12 mx-auto text-green-700 mb-6" />
        <h2 className="text-4xl font-bold mb-6">Why Global Buyers Trust Us</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We follow international export standards, strict quality control, certified packaging,
          regulatory compliance, and transparent documentation — ensuring zero-risk shipments and
          long-term partnerships.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="pb-24">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Clients Say
        </h2>

        <div className="relative overflow-hidden">
          {/* edge fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex gap-8 w-max will-change-transform" ref={testRef}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-80 shrink-0 glass rounded-2xl p-8 shadow-xl border border-white/20 hover:-translate-y-1 transition-transform duration-300"
              >
                <Quote className="text-green-700 mb-4" />
                <p className="text-gray-700 mb-4 italic">“{t.text}”</p>
                <p className="font-semibold text-gray-900">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default function CredibilityPage() {
  const certRef = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cert = certRef.current;
    const test = testRef.current;
  
    if (!cert || !test) return;
  
    let c1 = 0;
    let c2 = -test.scrollWidth / 2; // IMPORTANT: start negative for right scroll
  
    const speedCert = 0.4;
    const speedTest = 0.35;
  
    const animate = () => {
      // Certificates → LEFT
      c1 -= speedCert;
      if (Math.abs(c1) >= cert.scrollWidth / 2) {
        c1 = 0;
      }
      cert.style.transform = `translateX(${c1}px)`;
  
      // Testimonials → RIGHT (true infinite loop)
      c2 += speedTest;
      if (c2 >= 0) {
        c2 = -test.scrollWidth / 2;
      }
      test.style.transform = `translateX(${c2}px)`;
  
      requestAnimationFrame(animate);
    };
  
    animate();
  }, []);





  export default function CredibilityPage() {
  const certRef = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cert = certRef.current;
    const test = testRef.current;
    if (!cert || !test) return;

    let c1 = 0;
    let c2 = -test.scrollWidth / 2;

    const speedCert = 0.35;
    const speedTest = 0.3;

    const animate = () => {
      c1 -= speedCert;
      if (Math.abs(c1) >= cert.scrollWidth / 2) c1 = 0;
      cert.style.transform = `translate3d(${c1}px,0,0)`;

      c2 += speedTest;
      if (c2 >= 0) c2 = -test.scrollWidth / 2;
      test.style.transform = `translate3d(${c2}px,0,0)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">

      {/* Soft background blobs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-green-300/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-emerald-300/20 rounded-full blur-3xl" />

      {/* HERO */}
      <section className="relative pt-24 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass mb-6">
          <ShieldCheck className="w-5 h-5 text-green-700" />
          <span className="font-semibold text-green-800">
            Globally Trusted Exporter
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
          Our Credibility
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Certified. Trusted. Globally Compliant. Recognized by India’s top export authorities.
        </p>
      </section>

      {/* TRUST STATS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 mb-24">
        {[
          { label: "Shipments Completed", value: "500+" },
          { label: "Countries Served", value: "12+" },
          { label: "Compliance Score", value: "99.8%" },
        ].map((s) => (
          <div
            key={s.label}
            className="card text-center"
          >
            <p className="text-4xl font-bold gradient-text mb-2">{s.value}</p>
            <p className="text-gray-600 font-medium">{s.label}</p>
          </div>
        ))}
      </section>

      {/* CERTIFICATES */}
      <section className="mb-28">
        <h2 className="text-3xl font-bold text-center mb-10">
          Recognized & Certified By
        </h2>

        <div className="relative overflow-hidden">
          {/* edge fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex gap-10 w-max will-change-transform" ref={certRef}>
            {[...certificates, ...certificates].map((cert, i) => (
              <a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-64 shrink-0"
              >
                <div className="gallery-card bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-500">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-36 w-full object-contain"
                  />
                  <p className="text-center mt-4 font-semibold text-gray-800">
                    {cert.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STATEMENT */}
      <section className="max-w-5xl mx-auto text-center mb-28 px-6">
        <Award className="w-12 h-12 mx-auto text-green-700 mb-6" />
        <h2 className="text-4xl font-bold mb-6">Why Global Buyers Trust Us</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We follow international export standards, strict quality control, certified packaging,
          regulatory compliance, and transparent documentation — ensuring zero-risk shipments and
          long-term partnerships.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="pb-24">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Clients Say
        </h2>

        <div className="relative overflow-hidden">
          {/* edge fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex gap-8 w-max will-change-transform" ref={testRef}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-80 shrink-0 glass rounded-2xl p-8 shadow-xl border border-white/20 hover:-translate-y-1 transition-transform duration-300"
              >
                <Quote className="text-green-700 mb-4" />
                <p className="text-gray-700 mb-4 italic">“{t.text}”</p>
                <p className="font-semibold text-gray-900">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

