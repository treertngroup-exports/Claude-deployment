import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";

/* ---------------- CONFIG ---------------- */
const LOGO = "/logo.png"; // put logo in /public/logo.png

/* ---------------- DATA ---------------- */
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Gallery", href: "/gallery" },
  { name: "Credibility", href: "/credibility" },
  { name: "Contact", href: "/contact" },
];

const products = [
  "Fresh Fruits",
  "Fresh Vegetables",
  "Spices & Herbs",
  "Value Added Products",
  "Organic Produce",
  "Seasonal Items",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  /* -------- Smart navigation: go home + scroll -------- */
  const goToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* ================= CTA ================= */}
      <div className="bg-gradient-to-r from-primary-800 to-primary-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to Source Premium Produce?
              </h3>
              <p className="text-primary-100">
                Get in touch with us for quotes and inquiries.
              </p>
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-800 font-semibold rounded-full hover:bg-accent-100 transition-all duration-300 hover:-translate-y-1"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* -------- BRAND -------- */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6">
                <img
                  src={LOGO}
                  alt="TREERT Logo"
                  className="h-14 w-auto object-contain"
                />
                <div>
                  <h4 className="text-2xl font-bold text-white">TREERT</h4>
                  <p className="text-xs text-gray-400 tracking-wider">
                    EXPORTS & IMPORTS
                  </p>
                </div>
              </Link>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Bringing farm-fresh excellence to global markets since 2024.
                Committed to quality, sustainability, and farmer empowerment.
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-700 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* -------- QUICK LINKS -------- */}
            <div>
              <h5 className="text-lg font-bold mb-6">Quick Links</h5>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* -------- PRODUCTS -------- */}
            <div>
              <h5 className="text-lg font-bold mb-6">Our Products</h5>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product}>
                    <button
                      onClick={() => goToSection("services")}
                      className="text-gray-400 hover:text-white transition-colors text-left"
                    >
                      {product}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* -------- CONTACT -------- */}
            <div>
              <h5 className="text-lg font-bold mb-6">Contact Us</h5>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+919994498426"
                    className="flex items-center gap-3 text-gray-400 hover:text-white"
                  >
                    <Phone className="w-5 h-5 text-primary-500" />
                    +91 99944 98426
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:treertngroup@gmail.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-white"
                  >
                    <Mail className="w-5 h-5 text-primary-500" />
                    treertngroup@gmail.com
                  </a>
                </li>

                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-primary-500 mt-0.5" />
                  <span>Tamil Nadu, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TREERT Exports & Imports. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a className="text-gray-500 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a className="text-gray-500 hover:text-white text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
