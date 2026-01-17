import { useState, useEffect } from "react";
import { MessageCircle, Trash2, PlusCircle } from "lucide-react";
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

/* ---------------- DIAL CODES ---------------- */
const phoneCodes: Record<string, string> = {
  IN: "91",
  US: "1",
  AE: "971",
  GB: "44",
  SA: "966",
  SG: "65",
};

/* ---------------- COUNTRIES ---------------- */
const nationalityOptions = [
  { value: "IN", label: "India" },
  { value: "US", label: "United States" },
  { value: "AE", label: "United Arab Emirates" },
  { value: "GB", label: "United Kingdom" },
  { value: "SA", label: "Saudi Arabia" },
  { value: "SG", label: "Singapore" },
];

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  /* ---------------- AUTO DIAL CODE ---------------- */
  useEffect(() => {
    const dial = phoneCodes[formData.nationality];
    if (dial && (!formData.phone || /^\+\d*$/.test(formData.phone))) {
      setFormData((prev) => ({ ...prev, phone: `+${dial}` }));
    }
  }, [formData.nationality]);

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

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
    } catch {
      setSubmitMessage("Failed to send. Please try again.");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(""), 5000);
  };

  /* ---------------- UI ---------------- */
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Request a Quote</h2>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl space-y-5">
          <input className="input" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

          <input className="input" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

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

          {/* PRODUCTS */}
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

          <textarea className="input" rows={4} placeholder="Your message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />

          <button disabled={isSubmitting} className="w-full bg-green-600 text-white py-3 rounded-lg font-bold">
            {isSubmitting ? "Sending..." : "Send Request"}
          </button>

          {submitMessage && <p className="text-center text-green-600">{submitMessage}</p>}
        </form>
      </div>

      {/* WhatsApp */}
      <a href="https://wa.me/918438906166" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white shadow-xl">
        <MessageCircle />
      </a>
    </section>
  );
}
