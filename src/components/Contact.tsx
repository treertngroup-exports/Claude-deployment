import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Trash2, PlusCircle } from "lucide-react";
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

/* ---------------- DIAL CODES (MINIMAL) ---------------- */
const phoneCodes: Record<string, string> = {
  IN: "91",
  US: "1",
  AE: "971",
  GB: "44",
  SA: "966",
  SG: "65",
};

/* ---------------- COUNTRIES (IMPORTANT ONES) ---------------- */
const nationalityOptions = [
  { value: "IN", label: "India" },
  { value: "US", label: "United States" },
  { value: "AE", label: "United Arab Emirates" },
  { value: "GB", label: "United Kingdom" },
  { value: "SA", label: "Saudi Arabia" },
  { value: "SG", label: "Singapore" },
];

/* ---------------- PORTS ---------------- */
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

  /* ---------------- AUTO SET DIAL CODE ---------------- */
  useEffect(() => {
    const dial = phoneCodes[formData.nationality];
    if (dial && (!formData.phone || /^\+\d*$/.test(formData.phone))) {
      setFormData((prev) => ({ ...prev, phone: `+${dial}` }));
    }
  }, [formData.nationality]);

  /* ---------------- PRODUCT ROW HELPERS ---------------- */
  const addProductRow = () => {
    setFormData((prev) => ({
      ...prev,
      products: [...prev.products, { product: "", quantity: "", unit: "ton" }],
    }));
  };

  const removeProductRow = (index: number) => {
    setFormData((prev) => {
      const products = prev.products.filter((_, i) => i !== index);
      return { ...prev, products: products.length ? products : [{ product: "", quantity: "", unit: "ton" }] };
    });
  };

  const updateProductRow = (index: number, key: keyof ProductRow, value: any) => {
    setFormData((prev) => {
      const products = [...prev.products];
      products[index] = { ...products[index], [key]: value };
      return { ...prev, products };
    });
  };

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const e: any = {};

    if (!formData.name.trim()) e.name = "Name required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) e.email = "Valid email required";
    if (!formData.phone || formData.phone.length < 8) e.phone = "Valid phone required";
    if (!formData.port) e.port = "Select a port";
    if (!formData.message.trim()) e.message = "Message required";

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
    setTimeout(() => setSubmitMessage(""), 6000);
  };

  /* ---------------- UI ---------------- */
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Request a Quote</h2>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
          <input className="input" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <input className="input" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

          <Select
            options={nationalityOptions}
            value={nationalityOptions.find((n) => n.value === formData.nationality)}
            onChange={(opt: any) => setFormData({ ...formData, nationality: opt.value })}
            formatOptionLabel={(c: any) => (
              <div className="flex gap-2 items-center">
                <Flag code={c.value} style={{ width: 24 }} /> {c.label}
              </div>
            )}
          />

          <PhoneInput country={formData.nationality.toLowerCase()} value={formData.phone} onChange={(v) => setFormData({ ...formData, phone: v })} />

          {/* PRODUCTS */}
          {formData.products.map((row, index) => (
            <div key={index} className="flex gap-3">
              <input className="input" placeholder="Product" value={row.product} onChange={(e) => updateProductRow(index, "product", e.target.value)} />
              <input className="input w-32" type="number" placeholder="Qty" value={row.quantity} onChange={(e) => updateProductRow(index, "quantity", e.target.value)} />
              <button type="button" onClick={() => removeProductRow(index)} className="btn-red">
                <Trash2 size={18} />
              </button>
            </div>
          ))}

          <button type="button" onClick={addProductRow} className="btn-green-outline flex items-center gap-2">
            <PlusCircle size={18} /> Add Product
          </button>

          <textarea className="input" rows={4} placeholder="Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />

          <button disabled={isSubmitting} className="btn-green w-full">
            {isSubmitting ? "Sending..." : "Send Request"}
          </button>

          {submitMessage && <p className="text-center text-green-600">{submitMessage}</p>}
        </form>
      </div>

      {/* WhatsApp */}
      <a href="https://wa.me/918438906166" target="_blank" className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white shadow-xl">
        <MessageCircle />
      </a>
    </section>
  );
}
