import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const isOnHero = !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        isOnHero
          ? "bg-primary-950/40 backdrop-blur-md py-5"
          : "bg-white/95 backdrop-blur-lg shadow-soft py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
           <div className="relative bg-white rounded-xl p-2 shadow-md">
              <img
                src="/logo.png"
                alt="TREERT Logo"
                className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:block leading-tight">
              <h1
                className={`font-display text-xl md:text-2xl font-bold tracking-wide ${
                  isOnHero ? "text-white" : "text-primary-950"
                }`}
              >
                TREERT
              </h1>
              <p
                className={`text-[10px] tracking-widest uppercase ${
                  isOnHero ? "text-primary-100" : "text-gray-500"
                }`}
              >
                Exports & Imports
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 animated-underline ${
                    isOnHero
                      ? "text-white hover:text-primary-200"
                      : location.pathname === link.href
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
                  className={`relative text-sm font-medium transition-colors duration-300 animated-underline ${
                    isOnHero
                      ? "text-white hover:text-primary-200"
                      : "text-gray-700 hover:text-primary-700"
                  }`}
                >
                  {link.name}
                </a>
              )
            )}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <a
                href="tel:+918438906166"
                className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                  isOnHero
                    ? "text-white hover:text-primary-200"
                    : "text-primary-800 hover:text-primary-600"
                }`}
              >
                <Phone className="w-4 h-4" />
                +91 84389 06166
              </a>
              <a
                href="mailto:treertngroup@gmail.com"
                className={`text-xs transition-colors ${
                  isOnHero
                    ? "text-primary-100 hover:text-white"
                    : "text-gray-500 hover:text-primary-600"
                }`}
              >
                treertngroup@gmail.com
              </a>
            </div>

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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isOnHero ? "hover:bg-white/20" : "hover:bg-gray-100"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X
                className={`w-6 h-6 ${
                  isOnHero ? "text-white" : "text-gray-700"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isOnHero ? "text-white" : "text-gray-700"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
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
