import { Linkedin, Instagram } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/#quality", label: "Quality Policy" },
    { href: "/#leadership", label: "Leadership" },
    { href: "/contact", label: "Contact" }, // ✅ REAL PAGE
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/treert-export-b3689a383",
      label: "LinkedIn",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/treertngroup",
      label: "Instagram",
    },
  ];

  const handleSmartNav = async (e: React.MouseEvent, href: string) => {
    e.preventDefault();

    if (href.startsWith("/#")) {
      const id = href.replace("/#", "#");

      // If not on home, go home first
      if (location.pathname !== "/") {
        navigate("/");

        // Wait for home to render
        setTimeout(() => {
          const el = document.querySelector(id);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        const el = document.querySelector(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-green-800 to-green-900 text-white">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* LOGO + ABOUT */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-extrabold tracking-wide">
                TREERT
              </span>
              <span className="text-yellow-400 font-semibold">
                Exports & Imports
              </span>
            </Link>

            <p className="text-green-100 leading-relaxed">
              Bringing farm-fresh excellence to global markets with
              uncompromising quality, reliability, and service.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={(e) => handleSmartNav(e, link.href)}
                    className="text-green-100 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT + SOCIAL */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>

            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <p className="text-green-100 text-sm">
              <strong>Phone:</strong> +91 84389 06166
            </p>
            <p className="text-green-100 text-sm mt-2">
              <strong>Email:</strong> treertngroup@gmail.com
            </p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-green-700 pt-6 text-center text-green-100 text-sm">
          © {currentYear} Treert Exports & Imports. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
