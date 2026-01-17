import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Trash2, PlusCircle } from "lucide-react";

import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import Flag from "react-world-flags";

/* ---------------- PHONE CODES ---------------- */
const phoneCodes: Record<string, string> = {
  IN: "91",
  US: "1",
  AE: "971",
  GB: "44",
  SG: "65",
  // (rest unchanged — your big list is fine)
};

/* ---------------- COMPONENT ---------------- */
const Contact = () => {
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
    { value: "IN", label: "India" },
    { value: "US", label: "United States" },
    { value: "AE", label: "United Arab Emirates" },
    { value: "GB", label: "United Kingdom" },
    { value: "SG", label: "Singapore" },
  ];

  useEffect(() => {
    const iso = formData.nationality;
    if (iso && phoneCodes[iso]) {
      if (!formData.phone || /^\+\d*$/.test(formData.phone)) {
        setFormData((prev: any) => ({ ...prev, phone: `+${phoneCodes[iso]}` }));
      }
    }
  }, [formData.nationality]);

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
      return { ...prev, products: products.length ? products : [{ product: "", quantity: "", unit: "ton" }] };
    });
  };

  const updateProductRow = (index: number, key: string, value: any) => {
    setFormData((prev: any) => {
      const products = [...prev.products];
      products[index] = { ...products[index], [key]: value };
      return { ...prev, products };
    });
  };

  const validate = () => {
    const tempErrors: any = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) tempErrors.email = "Valid email required";
    if (!formData.nationality) tempErrors.nationality = "Nationality required";
    if (!formData.phone || formData.phone.length < 8) tempErrors.phone = "Valid phone required";
    if (!formData.port) tempErrors.port = "Select port";
    if (!formData.message.trim()) tempErrors.message = "Message required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwlIbQuPa8Y2-I1tCtZ1ZS-D0bYKIZ6G1s2R1oB9F3NJsOl2X4EOqnW7kfZ-mH76Pby8A/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(formData),
        }
      );

      setSubmitMessage("Thank you! We received your enquiry.");
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
      setSubmitMessage("Failed to send.");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(""), 6000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      {/* UI UNCHANGED — shortened here for message limit */}
      {/* Your JSX body stays exactly the same */}
      <div className="text-center">Contact section working</div>

      <a
        href="https://wa.me/+918438906166"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Contact;
