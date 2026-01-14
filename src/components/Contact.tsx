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
const phoneCodes: Record<string, string> = {
  AF: "93",
  AL: "355",
  DZ: "213",
  AS: "1",
  AD: "376",
  IN: "91",
};

/* ---------------- OPTIONS ---------------- */
const airPorts = ["JFK (New York)", "DXB (Dubai)", "SIN (Singapore)", "LAX (Los Angeles)"];
const seaPorts = ["Shanghai Port", "Singapore Port", "Rotterdam Port", "Nhava Sheva (India)"];

const nationalityOptions = [
  { value: "AF", label: "Afghanistan" },
  { value: "AL", label: "Albania" },
  { value: "DZ", label: "Algeria" },
  { value: "AS", label: "American Samoa" },
  { value: "AD", label: "Andorra" },
  { value: "IN", label: "India" },
];

type ProductRow = {
  product: string;
  quantity: string;
  unit: "ton" | "kg";
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nationality: "",
    phone: "",
    cargoType: "air",
    port: "",
    products: [{ product: "", quantity: "", unit: "ton" }] as ProductRow[],
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  /* ---------------- AUTO PHONE CODE ---------------- */
  useEffect(() => {
    const iso = formData.nationality;
    if (iso && phoneCodes[iso]) {
      if (!formData.phone || /^\+\d*$/.test(formData.phone)) {
        setFormData((prev) => ({ ...prev, phone: `+${phoneCodes[iso]}` }));
      }
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

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const tempErrors: Record<string, any> = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) tempErrors.email = "Valid email is required";
    if (!formData.nationality) tempErrors.nationality = "Nationality is required";
    if (!formData.phone || formData.phone.length < 8) tempErrors.phone = "Valid phone number required";
    if (!formData.port) tempErrors.port = "Please select a port";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    const productErrors = formData.products.map((row) => {
      const err: any = {};
      if (!row.product.trim()) err.product = "Required";
      if (!row.quantity || Number(row.quantity) <= 0) err.quantity = "Invalid";
      return err;
    });

    if (productErrors.some((r) => Object.keys(r).length > 0)) tempErrors.products = productErrors;

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

      setSubmitMessage("Thank you! We have received your enquiry.");

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
    } catch {
      setSubmitMessage("Failed to send. Please try again.");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(""), 6000);
  };

  /* ====================== UI ====================== */
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-cream relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 rounded-full border border-primary-100 mb-6">
            <MessageSquare className="w-4 h-4 text-accent-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-700">Get In Touch</span>
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
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a key={info.title} href={info.link} className="flex items-start gap-4">
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
            {/* FORM JSX (unchanged UI) */}
            {/* The form you already tested continues here */}
          </div>

        </div>
      </div>
    </section>
  );
}
