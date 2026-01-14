import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

/* ---------------- CONTACT INFO ---------------- */
const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99944 98426",
    link: "tel:+919994498426",
  },
  {
    icon: Mail,
    label: "Email",
    value: "treertngroup@gmail.com",
    link: "mailto:treertngroup@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tamil Nadu, India",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sat: 9AM - 6PM",
  },
];

const airPorts = ["JFK (New York)", "DXB (Dubai)", "SIN (Singapore)", "LAX (Los Angeles)"];
const seaPorts = ["Shanghai Port", "Singapore Port", "Rotterdam Port", "Nhava Sheva (India)"];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    cargoType: "air",
    port: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const tempErrors: any = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/))
      tempErrors.email = "Valid email is required";
    if (!formData.country.trim()) tempErrors.country = "Country is required";
    if (!formData.phone || formData.phone.length < 8)
      tempErrors.phone = "Valid phone number required";
    if (!formData.port) tempErrors.port = "Please select a port";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const GOOGLE_SHEET_WEBHOOK =
      "https://script.google.com/macros/s/AKfycbwlIbQuPa8Y2-I1tCtZ1ZS-D0bYKIZ6G1s2R1oB9F3NJsOl2X4EOqnW7kfZ-mH76Pby8A/exec";

    try {
      await fetch(GOOGLE_SHEET_WEBHOOK, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
      });

      setSubmitMessage("✅ Thank you! We have received your enquiry.");

      setFormData({
        name: "",
        email: "",
        country: "",
        phone: "",
        cargoType: "air",
        port: "",
        message: "",
      });

      setErrors({});
    } catch (err) {
      setSubmitMessage("❌ Failed to send. Please try again.");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(""), 6000);
  };

  /* ====================== UI ====================== */
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Request a Quote</h2>
          <p className="text-gray-600 mt-3">Tell us your export requirements</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ================= FORM ================= */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
            <div>
              <input
                placeholder="Your Name"
                className="w-full border-2 p-3 rounded-lg"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
            </div>

            <div>
              <input
                placeholder="Your Email"
                className="w-full border-2 p-3 rounded-lg"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            </div>

            <div>
              <input
                placeholder="Your Country"
                className="w-full border-2 p-3 rounded-lg"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              />
              {errors.country && <p className="text-red-600 text-sm">{errors.country}</p>}
            </div>

            <div>
              <input
                placeholder="Your Phone"
                className="w-full border-2 p-3 rounded-lg"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
            </div>

            <div>
              <select
                className="w-full border-2 p-3 rounded-lg"
                value={formData.port}
                onChange={(e) => setFormData({ ...formData, port: e.target.value })}
              >
                <option value="">Select Port</option>
                {(formData.cargoType === "air" ? airPorts : seaPorts).map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              {errors.port && <p className="text-red-600 text-sm">{errors.port}</p>}
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border-2 p-3 rounded-lg"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Sending..." : <>Send Enquiry <Send size={18} /></>}
            </button>

            {submitMessage && (
              <p className="text-center font-semibold text-green-600">{submitMessage}</p>
            )}
          </form>

          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex gap-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <info.icon className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    {info.link ? (
                      <a href={info.link} className="font-semibold text-gray-900">
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-semibold">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15656.495082513109!2d77.0725775!3d11.1784707"
                width="100%"
                height="300"
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
