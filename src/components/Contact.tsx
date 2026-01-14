import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Trash2,
  PlusCircle,
  MessageSquare,
} from "lucide-react";

import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import Flag from "react-world-flags";

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

/* ---------------- DIAL CODES (MINIMAL) ---------------- */
const phoneCodes: any = {
  IN: "91",
  AE: "971",
  US: "1",
  GB: "44",
  SG: "65",
};

/* ---------------- NATIONALITIES (SHORT LIST - YOU CAN EXTEND) ---------------- */
const nationalityOptions = [
  { value: "IN", label: "India" },
  { value: "AE", label: "United Arab Emirates" },
  { value: "US", label: "United States" },
  { value: "GB", label: "United Kingdom" },
  { value: "SG", label: "Singapore" },
];

const airPorts = ["JFK (New York)", "DXB (Dubai)", "SIN (Singapore)", "LAX (Los Angeles)"];
const seaPorts = ["Shanghai Port", "Singapore Port", "Rotterdam Port", "Nhava Sheva (India)"];

/* ===================================================== */

export default function Contact() {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    nationality: "",
    phone: "",
    cargoType: "air",
    port: "",
    products: [{ product: "", quantity: "", unit: "ton" }],
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  /* -------- AUTO SET DIAL CODE WHEN COUNTRY CHANGES -------- */
  useEffect(() => {
    if (formData.nationality && phoneCodes[formData.nationality]) {
      const dial = phoneCodes[formData.nationality];
      if (!formData.phone || formData.phone.startsWith("+")) {
        setFormData((prev: any) => ({ ...prev, phone: `+${dial}` }));
      }
    }
  }, [formData.nationality]);

  /* ---------------- PRODUCT HELPERS ---------------- */
  const addProductRow = () => {
    setFormData((prev: any) => ({
      ...prev,
      products: [...prev.products, { product: "", quantity: "", unit: "ton" }],
    }));
  };

  const removeProductRow = (index: number) => {
    setFormData((prev: any) => {
      const products = [...prev.products];
      products.splice(index, 1);
      return {
        ...prev,
        products: products.length ? products : [{ product: "", quantity: "", unit: "ton" }],
      };
    });
  };

  const updateProductRow = (index: number, key: string, value: any) => {
    setFormData((prev: any) => {
      const products = [...prev.products];
      products[index] = { ...products[index], [key]: value };
      return { ...prev, products };
    });
  };

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const tempErrors: any = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/))
      tempErrors.email = "Valid email is required";
    if (!formData.nationality) tempErrors.nationality = "Nationality is required";
    if (!formData.phone || formData.phone.length < 8)
      tempErrors.phone = "Valid phone number required";
    if (!formData.port) tempErrors.port = "Please select a port";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e: any) => {
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
        nationality: "",
        phone: "",
        cargoType: "air",
        port: "",
        products: [{ product: "", quantity: "", unit: "ton" }],
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

            <input
              placeholder="Your Name"
              className="w-full border-2 p-3 rounded-lg"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

            <input
              placeholder="Your Email"
              className="w-full border-2 p-3 rounded-lg"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

            <Select
              options={nationalityOptions}
              value={nationalityOptions.find((n) => n.value === formData.nationality)}
              onChange={(opt: any) => setFormData({ ...formData, nationality: opt?.value || "" })}
              formatOptionLabel={(c: any) => (
                <div className="flex gap-2 items-center">
                  <Flag code={c.value} style={{ width: 24 }} /> {c.label}
                </div>
              )}
            />
            {errors.nationality && <p className="text-red-600 text-sm">{errors.nationality}</p>}

            <PhoneInput
              country={(formData.nationality || "IN").toLowerCase()}
              value={formData.phone}
              onChange={(phone: any) => setFormData({ ...formData, phone })}
              inputClass="!w-full !py-3 !border-2 !rounded-lg"
            />
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}

            <Select
              options={(formData.cargoType === "air" ? airPorts : seaPorts).map((p) => ({
                value: p,
                label: p,
              }))}
              placeholder="Select Port"
              onChange={(opt: any) => setFormData({ ...formData, port: opt?.value })}
            />
            {errors.port && <p className="text-red-600 text-sm">{errors.port}</p>}

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border-2 p-3 rounded-lg"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}

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
