import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Trash2, PlusCircle } from "lucide-react";

/* ---------------- CONTACT INFO ---------------- */
const contactInfo = [
  { icon: Phone, title: "Phone", value: "+91 99944 98426", link: "tel:+919994498426" },
  { icon: Mail, title: "Email", value: "treertngroup@gmail.com", link: "mailto:treertngroup@gmail.com" },
  { icon: MapPin, title: "Location", value: "Tamil Nadu, India", link: "#" },
  { icon: Clock, title: "Business Hours", value: "Mon - Sat: 9AM - 6PM", link: "#" },
];

const airPorts = ["JFK (New York)", "DXB (Dubai)", "SIN (Singapore)", "LAX (Los Angeles)"];
const seaPorts = ["Shanghai Port", "Singapore Port", "Rotterdam Port", "Nhava Sheva (India)"];

type ProductRow = {
  product: string;
  quantity: string;
  unit: "ton" | "kg";
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    cargoType: "air",
    port: "",
    products: [{ product: "", quantity: "", unit: "ton" }] as ProductRow[],
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  /* ---------------- PRODUCTS ---------------- */
  const addProductRow = () => {
    setFormData((prev) => ({
      ...prev,
      products: [...prev.products, { product: "", quantity: "", unit: "ton" }],
    }));
  };

  const removeProductRow = (index: number) => {
    setFormData((prev) => {
      const products = [...prev.products];
      products.splice(index, 1);
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

    await fetch(
      "https://script.google.com/macros/s/AKfycbwlIbQuPa8Y2-I1tCtZ1ZS-D0bYKIZ6G1s2R1oB9F3NJsOl2X4EOqnW7kfZ-mH76Pby8A/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
      }
    );

    setSubmitMessage("Thank you! We received your enquiry.");
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(""), 6000);
  };

  /* ====================== UI ====================== */
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

        {/* LEFT INFO */}
        <div className="space-y-6">
          {contactInfo.map((info) => (
            <div key={info.title} className="flex gap-4 bg-white p-6 rounded-xl shadow">
              <info.icon />
              <div>
                <p className="text-sm text-gray-500">{info.title}</p>
                <p className="font-semibold">{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow space-y-4">

          <input className="w-full border p-3" placeholder="Name" value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

          <input className="w-full border p-3" placeholder="Email" value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

          <input className="w-full border p-3" placeholder="Country" value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })} />

          <input className="w-full border p-3" placeholder="Phone" value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />

          <select
            className="w-full border p-3"
            value={formData.port}
            onChange={(e) => setFormData({ ...formData, port: e.target.value })}
          >
            <option value="">Select Port</option>
            {(formData.cargoType === "air" ? airPorts : seaPorts).map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>

          {/* PRODUCTS */}
          {formData.products.map((row, idx) => (
            <div key={idx} className="flex gap-2">
              <input className="border p-2 flex-1" placeholder="Product"
                value={row.product}
                onChange={(e) => updateProductRow(idx, "product", e.target.value)} />

              <input className="border p-2 w-24" placeholder="Qty"
                value={row.quantity}
                onChange={(e) => updateProductRow(idx, "quantity", e.target.value)} />

              <button type="button" onClick={() => removeProductRow(idx)}>
                <Trash2 />
              </button>
            </div>
          ))}

          <button type="button" onClick={addProductRow} className="flex items-center gap-2 text-green-600">
            <PlusCircle /> Add Product
          </button>

          <textarea className="w-full border p-3" placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })} />

          <button type="submit" className="bg-green-600 text-white py-3 rounded flex justify-center gap-2">
            {isSubmitting ? "Sending..." : <>Send <Send /></>}
          </button>

          {submitMessage && <p className="text-green-600 text-center">{submitMessage}</p>}

        </form>
      </div>
    </section>
  );
}
