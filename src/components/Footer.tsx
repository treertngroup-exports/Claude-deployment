import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '#founders' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Quality Policy', href: '#quality' },
  { name: 'Contact', href: '#contact' },
];

const products = [
  'Fresh Fruits',
  'Fresh Vegetables',
  'Spices & Herbs',
  'Value Added Products',
  'Organic Produce',
  'Seasonal Items',
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Top CTA Section */}
      <div className="bg-gradient-to-r from-primary-800 to-primary-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Source Premium Produce?
              </h3>
              <p className="text-primary-100">
                Get in touch with us for quotes and inquiries.
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-800 font-semibold rounded-full hover:bg-accent-100 transition-all duration-300 hover:-translate-y-1"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <img
                  src="/logo.png"
                  alt="TREERT Logo"
                  className="h-14 w-auto brightness-0 invert"
                />
                <div>
                  <h4 className="font-display text-2xl font-bold text-white">TREERT</h4>
                  <p className="text-xs text-gray-400 tracking-wider">EXPORTS & IMPORTS</p>
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

            {/* Quick Links */}
            <div>
              <h5 className="font-display text-lg font-bold text-white mb-6">Quick Links</h5>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h5 className="font-display text-lg font-bold text-white mb-6">Our Products</h5>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product}>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('#services');
                      }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="font-display text-lg font-bold text-white mb-6">Contact Us</h5>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+919994498426"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary-500" />
                    +91 99944 98426
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:treertngroup@gmail.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary-500" />
                    treertngroup@gmail.com
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-gray-400">
                    <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span>Tamil Nadu, India</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} TREERT Exports & Imports. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
