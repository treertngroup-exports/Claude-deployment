import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Trash2,
  PlusCircle,
} from "lucide-react";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import Flag from "react-world-flags";

/* ---------------- TYPES ---------------- */
type ProductRow = {
  product: string;
  quantity: string;
  unit: "ton" | "kg";
};

type FormData = {
  name: string;
  email: string;
  nationality: string;
  phone: string;
  cargoType: "air" | "sea";
  port: string;
  products: ProductRow[];
  message: string;
};

/* ---------------- DATA ---------------- */
const phoneCodes: Record<string, string> = {
  IN: "91",
  US: "1",
  AE: "971",
  GB: "44",
  SA: "966",
  SG: "65",
};

const nationalityOptions = [
  { value: "IN", label: "India" },
  { value: "US", label: "United States" },
  { value: "AE", label: "United Arab Emirates" },
  { value: "GB", label: "United Kingdom" },
  { value: "SA", label: "Saudi Arabia" },
  { value: "SG", label: "Singapore" },
];

const airPorts = ["JFK (New York)", "DXB (Dubai)", "SIN (Singapore)", "LAX (Los Angeles)"];
const seaPorts = ["Nhava Sheva (India)", "Singapore Port", "Rotterdam Port", "Shanghai Port"];

/* ---------------- COMPONENT ---------------- */
export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    nationality: "IN",
    phone: "+91",
    cargoType: "air",
    port: "",
    products: [{ product: "", quantity: "", unit: "ton" }],
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  /* ---------------- AUTO DIAL CODE ---------------- */
  useEffect(() => {
    const dial = phoneCodes[formData.nationality];
    if (dial && (!formData.phone || /^\+\d*$/.test(formData.phone))) {
      setFormData((prev) => ({ ...prev, phone: `+${dial}` }));
    }
  }, [formData.nationality, formData.phone]);

  /* ---------------- PRODUCT HELPERS ---------------- */
  const addProductRow = () => {
    setFormData((prev) => ({
      ...prev,
      products: [...prev.products, { product: "", quantity: "", unit: "ton" }],
    }));
  };

  const removeProductRow = (index: number) => {
    setFormData((prev) => {
      const products = prev.products.filter((_, i) => i !== index);
      return {
        ...prev,
        products: products.length ? products : [{ product: "", quantity: "", unit: "ton" }],
      };
    });
  };

  const updateProductRow = (index: number, key: keyof ProductRow, value: string) => {
    setFormData((prev) => {
      const products = [...prev.products];
      products[index] = { ...products[index], [key]: value };
      return { ...prev, products };
    });
  };

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const e: Record<string, any> = {};

    if (!formData.name.trim()) e.name = "Name is required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) e.email = "Valid email required";
    if (!formData.phone || formData.phone.length < 8) e.phone = "Valid phone required";
    if (!formData.port) e.port = "Select a port";
    if (!formData.message.trim()) e.message = "Message is required";

    const productErrors = formData.products.map((p) => ({
      product: !p.product ? "Required" : "",
      quantity: !p.quantity || Number(p.quantity) <= 0 ? "Invalid" : "",
    }));

    if (productErrors.some((p) => p.product || p.quantity)) e.products = productErrors;

    setErrors(e);
    return Object.keys(e).length === 0;
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

      setSubmitMessage("Thank you! We received your request.");

      setFormData({
        name: "",
        email: "",
        nationality: "IN",
        phone: "+91",
        cargoType: "air",
        port: "",
        products: [{ product: "", quantity: "", unit: "ton" }],
        message: "",
      });
      setErrors({});
    } catch {
      setSubmitMessage("Failed to send. Please try again.");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(""), 5000);
  };

  /* ---------------- CONTACT INFO ---------------- */
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      label: "Phone",
      value: "+91 84389 06166",
      link: "tel:+918438906166",
    },
    {
      icon: <Mail className="w-6 h-6 text-green-600" />,
      label: "Email",
      value: "treertngroup@gmail.com",
      link: "mailto:treertngroup@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      label: "Address",
      value: "Treert & Group, Coimbatore, Tamil Nadu",
      link: "https://maps.app.goo.gl/Wbr2GnhbjuRfbSby6",
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      label: "Hours",
      value: "Mon – Sun • 8:00 AM – 5:30 PM",
      link: "",
    },
  ];

  /* ---------------- UI ---------------- */
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Request a Quote</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl space-y-5">
            <input className="input" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

            <input className="input" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

            <Select
              options={nationalityOptions}
              value={nationalityOptions.find((n) => n.value === formData.nationality)}
              onChange={(opt: any) => setFormData({ ...formData, nationality: opt.value })}
              formatOptionLabel={(c: any) => (
                <div className="flex items-center gap-2">
                  <Flag code={c.value} style={{ width: 24 }} /> {c.label}
                </div>
              )}
            />

            <PhoneInput country={formData.nationality.toLowerCase()} value={formData.phone} onChange={(v) => setFormData({ ...formData, phone: v })} />
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}

            {/* Cargo */}
            <div className="flex gap-6">
              <label><input type="radio" value="air" checked={formData.cargoType === "air"} onChange={() => setFormData({ ...formData, cargoType: "air" })} /> Air</label>
              <label><input type="radio" value="sea" checked={formData.cargoType === "sea"} onChange={() => setFormData({ ...formData, cargoType: "sea" })} /> Sea</label>
            </div>

            {/* Port */}
            <Select
              options={(formData.cargoType === "air" ? airPorts : seaPorts).map((p) => ({ value: p, label: p }))}
              onChange={(opt: any) => setFormData({ ...formData, port: opt.value })}
              placeholder="Select Port"
            />
            {errors.port && <p className="text-red-600 text-sm">{errors.port}</p>}

            {/* Products */}
            {formData.products.map((row, index) => (
              <div key={index} className="flex gap-3">
                <input className="input" placeholder="Product" value={row.product} onChange={(e) => updateProductRow(index, "product", e.target.value)} />
                <input className="input w-32" type="number" placeholder="Qty" value={row.quantity} onChange={(e) => updateProductRow(index, "quantity", e.target.value)} />
                <button type="button" onClick={() => removeProductRow(index)} className="p-3 bg-red-100 text-red-600 rounded-lg">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}

            <button type="button" onClick={addProductRow} className="flex items-center gap-2 text-green-600 font-semibold">
              <PlusCircle size={18} /> Add Product
            </button>

            <textarea className="input" rows={4} placeholder="Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}

            <button disabled={isSubmitting} className="w-full bg-green-600 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2">
              {isSubmitting ? "Sending..." : <>Send Request <Send size={18} /></>}
            </button>

            {submitMessage && <p className="text-center text-green-600">{submitMessage}</p>}
          </form>

          {/* INFO */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl space-y-5">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-green-50 p-3 rounded-lg">{c.icon}</div>
                  <div>
                    <p className="font-semibold text-gray-600">{c.label}</p>
                    {c.link ? (
                      <a href={c.link} className="text-gray-900 hover:text-green-600">{c.value}</a>
                    ) : (
                      <p>{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* MAP */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15656.495082513109!2d77.0725775!3d11.1784707"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp */}
      <a href="https://wa.me/918438906166" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white shadow-xl">
        <MessageCircle />
      </a>
    </section>
  );
}
