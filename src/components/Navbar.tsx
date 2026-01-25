import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Gallery", href: "/gallery" },
  { name: "Credibility", href: "/credibility" },
  { name: "Quality", href: "#quality" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    if (!href.startsWith("#")) return;

    if (location.pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="TREERT Logo"
              style={{
                height: "120px",
                width: "auto",
                objectFit: "contain",
                borderRadius: "24px",
              }}
            />

            <div className="hidden sm:block leading-tight">
              <h1 className="font-display text-2xl md:text-3xl font-bold tracking-wide text-white">
                TREERT
              </h1>
              <p className="text-xs tracking-widest uppercase text-white/80">
                Exports & Imports
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-lg">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    location.pathname === link.href
                      ? "bg-primary-900 text-white"
                      : "text-gray-800 hover:bg-primary-100"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-2 rounded-full text-sm font-semibold text-gray-800 hover:bg-primary-100 transition-all duration-300"
                >
                  {link.name}
                </a>
              )
            )}
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <a
                href="tel:+918438906166"
                className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary-200 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 84389 06166
              </a>
              <a
                href="mailto:treertngroup@gmail.com"
                className="text-xs text-white/80 hover:text-white transition-colors"
              >
                treertngroup@gmail.com
              </a>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-400 text-gray-900 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get a Quote
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-base font-medium transition-colors ${
                    location.pathname === link.href
                      ? "text-primary-700"
                      : "text-gray-700 hover:text-primary-700"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block py-2 text-base font-medium text-gray-700 hover:text-primary-700 transition-colors"
                >
                  {link.name}
                </a>
              )
            )}

            <div className="pt-4 border-t border-gray-100">
              <a
                href="tel:+918438906166"
                className="flex items-center gap-2 text-sm font-medium text-primary-800"
              >
                <Phone className="w-4 h-4" />
                +91 84389 06166
              </a>
              <a
                href="mailto:treertngroup@gmail.com"
                className="flex items-center gap-2 mt-2 text-sm text-gray-500"
              >
                <Mail className="w-4 h-4" />
                treertngroup@gmail.com
              </a>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="block w-full text-center py-3 bg-gradient-to-r from-primary-900 to-primary-800 text-white font-semibold rounded-full"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
