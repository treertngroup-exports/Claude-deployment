import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Globe2,
  MessageSquare,
  Send,
  Trash2,
  PlusCircle,
} from "lucide-react";

import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import Flag from "react-world-flags";

/* ---------------- CONTACT INFO ---------------- */
const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 99944 98426",
    link: "tel:+919994498426",
  },
  {
    icon: Mail,
    title: "Email",
    value: "treertngroup@gmail.com",
    link: "mailto:treertngroup@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Tamil Nadu, India",
    link: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Sat: 9AM - 6PM",
    link: "#",
  },
];

/* ---------------- PHONE CODES ---------------- */
const phoneCodes: any = {
  AF: "93",
  AL: "355",
  DZ: "213",
  AS: "1",
  AD: "376",
};

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

  const airPorts = ["JFK (New York)", "DXB (Dubai)", "SIN (Singapore)", "LAX (Los Angeles)"];
  const seaPorts = ["Shanghai Port", "Singapore Port", "Rotterdam Port", "Nhava Sheva (India)"];

  const nationalityOptions = [
    { value: "AF", label: "Afghanistan" },
    { value: "AL", label: "Albania" },
    { value: "DZ", label: "Algeria" },
    { value: "AS", label: "American Samoa" },
    { value: "AD", label: "Andorra" },
  ];

  useEffect(() => {
    const iso = formData.nationality;
    if (iso && phoneCodes[iso]) {
      if (!formData.phone || /^\+\d*$/.test(formData.phone)) {
        setFormData((prev: any) => ({ ...prev, phone: `+${phoneCodes[iso]}` }));
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
    if (!formData.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) tempErrors.email = "Valid email is required";
    if (!formData.nationality) tempErrors.nationality = "Nationality is required";
    if (!formData.phone || formData.phone.length < 8) tempErrors.phone = "Valid phone number required";
    if (!formData.port) tempErrors.port = "Please select a port";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    const productsErrors: any[] = [];
    formData.products.forEach((row: any) => {
      const rowErr: any = {};
      if (!row.product.trim()) rowErr.product = "Product name required";
      if (!row.quantity || Number(row.quantity) <= 0) rowErr.quantity = "Quantity must be greater than 0";
      productsErrors.push(rowErr);
    });

    if (productsErrors.some((r) => Object.keys(r).length > 0)) tempErrors.products = productsErrors;

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

      setSubmitMessage("Thank you! We have received your details.");

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
      console.error(err);
      setSubmitMessage("Failed to send. Please try again.");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(""), 6000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-cream relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 rounded-full border border-primary-100 mb-6">
            <MessageSquare className="w-4 h-4 text-accent-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-700">
              Get In Touch
            </span>
          </div>
          <h2 className="section-title mb-4">
            Let's Start a <span className="text-primary-700">Conversation</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Ready to source premium agricultural products? Contact us for quotes and export enquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* LEFT INFO */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a key={info.title} href={info.link} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{info.title}</p>
                      <p className="font-semibold text-gray-900">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 text-white">
              <Globe2 className="w-10 h-10 text-accent-400 mb-4" />
              <h4 className="font-display text-xl font-bold mb-3">Export Enquiries</h4>
              <p className="text-primary-100">
                Looking to import premium Indian agricultural products? We’re ready to serve your business.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 space-y-6">
              {/* Name */}
              <div>
                <label className="block font-semibold mb-1">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
                />
                {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block font-semibold mb-1">Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
                />
                {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
              </div>

              {/* Nationality */}
              <div>
                <label className="block font-semibold mb-1">Your Nationality</label>
                <Select
                  options={nationalityOptions}
                  value={nationalityOptions.find((n) => n.value === formData.nationality)}
                  onChange={(opt: any) => setFormData({ ...formData, nationality: opt?.value || "" })}
                  formatOptionLabel={(country: any) => (
                    <div className="flex items-center gap-2">
                      <Flag code={country.value} style={{ width: 25, height: 18 }} />
                      {country.label}
                    </div>
                  )}
                />
                {errors.nationality && <p className="text-red-600 text-sm">{errors.nationality}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block font-semibold mb-1">Contact Number</label>
                <PhoneInput
                  country={(formData.nationality || "IN").toLowerCase()}
                  value={formData.phone}
                  onChange={(phone: any) => setFormData({ ...formData, phone })}
                  inputClass="!w-full !px-4 !py-3 !border-2 !border-gray-300 !rounded-lg"
                />
                {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
              </div>

              {/* Cargo Type */}
              <div>
                <label className="block font-semibold mb-1">Cargo Type</label>
                <div className="flex gap-6">
                  <label>
                    <input
                      type="radio"
                      value="air"
                      checked={formData.cargoType === "air"}
                      onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                    />{" "}
                    Air Cargo
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="sea"
                      checked={formData.cargoType === "sea"}
                      onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                    />{" "}
                    Sea Cargo
                  </label>
                </div>
              </div>

              {/* Port */}
              <div>
                <label className="block font-semibold mb-1">Port</label>
                <Select
                  options={(formData.cargoType === "air" ? airPorts : seaPorts).map((p) => ({ value: p, label: p }))}
                  onChange={(opt: any) => setFormData({ ...formData, port: opt?.value })}
                  isSearchable
                />
                {errors.port && <p className="text-red-600 text-sm">{errors.port}</p>}
              </div>

              {/* Products */}
              <div>
                <label className="block font-semibold mb-3">Products to Export</label>

                {formData.products.map((row: any, idx: number) => (
                  <div key={idx} className="grid grid-cols-12 gap-2 mb-2">
                    <input
                      className="col-span-5 border p-2 rounded"
                      placeholder="Product"
                      value={row.product}
                      onChange={(e) => updateProductRow(idx, "product", e.target.value)}
                    />
                    <input
                      type="number"
                      className="col-span-3 border p-2 rounded"
                      placeholder="Qty"
                      value={row.quantity}
                      onChange={(e) => updateProductRow(idx, "quantity", e.target.value)}
                    />
                    <div className="col-span-3 flex gap-2 items-center">
                      <label>
                        <input
                          type="radio"
                          name={`unit-${idx}`}
                          value="ton"
                          checked={row.unit === "ton"}
                          onChange={(e) => updateProductRow(idx, "unit", e.target.value)}
                        />{" "}
                        Ton
                      </label>
                      <label>
                        <input
                          type="radio"
                          name={`unit-${idx}`}
                          value="kg"
                          checked={row.unit === "kg"}
                          onChange={(e) => updateProductRow(idx, "unit", e.target.value)}
                        />{" "}
                        Kg
                      </label>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeProductRow(idx)}
                      className="col-span-1 text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addProductRow}
                  className="flex items-center gap-2 text-green-700 mt-2"
                >
                  <PlusCircle size={18} /> Add Product
                </button>
              </div>

              {/* Message */}
              <div>
                <label className="block font-semibold mb-1">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border-2 border-gray-300 rounded-lg p-3"
                  rows={4}
                />
                {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : <>Send Message <Send size={20} /></>}
              </button>

              {submitMessage && <p className="text-green-600 text-center font-medium">{submitMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
