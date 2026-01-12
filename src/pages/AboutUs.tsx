import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const leadership = [
  {
    name: "Founder & Managing Director",
    description:
      "With deep expertise in agricultural exports, our founder leads TREERT with a commitment to quality, transparency, and long-term partnerships.",
  },
  {
    name: "Operations Head",
    description:
      "Oversees sourcing, quality control, and logistics to ensure timely and reliable exports across global markets.",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-green-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            Building trust through quality agricultural exports from India.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To deliver premium agricultural products to global markets while
              maintaining uncompromising quality standards, ethical sourcing,
              and reliable supply chains.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Our Vision</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To become a globally trusted export partner, recognized for
              excellence, consistency, and long-term value creation in the
              agricultural trade ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Our Story
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed text-center">
            TREERT was founded with a clear objective: to connect India’s rich
            agricultural produce with international buyers seeking reliability
            and quality. From sourcing at origin to final delivery, every step
            of our process is built on trust, expertise, and attention to
            detail.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Leadership
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {leader.name}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <Contact />

      <Footer />
    </div>
  );
}
