import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Gallery", href: "/gallery" },
  { name: "Credibility", href: "/credibility" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : isHome
          ? "bg-black/40 backdrop-blur-sm"
          : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className={`text-2xl font-bold transition-colors ${
            isScrolled || !isHome ? "text-gray-900" : "text-white"
          }`}
        >
          TREERT
          <span className="text-primary-500"> Exports & Imports</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-colors ${
                  isScrolled || !isHome
                    ? "text-gray-700 hover:text-primary-600"
                    : "text-white hover:text-primary-300"
                } ${isActive ? "text-primary-600 font-semibold" : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className={`md:hidden ${
            isScrolled || !isHome ? "text-gray-900" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 font-medium hover:text-primary-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
