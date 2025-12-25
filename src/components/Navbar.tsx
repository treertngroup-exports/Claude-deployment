import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Quality', href: '#quality' },
  { name: 'About Us', href: '#founders' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/logo.png"
                alt="TREERT Logo"
                className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl md:text-2xl font-bold text-primary-950 tracking-wide">
                TREERT
              </h1>
              <p className="text-[10px] text-gray-500 tracking-widest uppercase">
                Exports & Imports
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 animated-underline ${
                    location.pathname === link.href
                      ? 'text-primary-700'
                      : 'text-gray-700 hover:text-primary-700'
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
                  className="relative text-sm font-medium text-gray-700 hover:text-primary-700 transition-colors duration-300 animated-underline"
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <a
                href="tel:+919994498426"
                className="flex items-center gap-2 text-sm font-semibold text-primary-800 hover:text-primary-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 99944 98426
              </a>
              <a
                href="mailto:treertngroup@gmail.com"
                className="text-xs text-gray-500 hover:text-primary-600 transition-colors"
              >
                treertngroup@gmail.com
              </a>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="px-6 py-3 bg-gradient-to-r from-primary-900 to-primary-800 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-base font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-primary-700'
                      : 'text-gray-700 hover:text-primary-700'
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
            ))}
            <div className="pt-4 border-t border-gray-100">
              <a
                href="tel:+919994498426"
                className="flex items-center gap-2 text-sm font-medium text-primary-800"
              >
                <Phone className="w-4 h-4" />
                +91 99944 98426
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
                handleNavClick('#contact');
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
