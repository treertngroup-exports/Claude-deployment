import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe2, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 99944 98426',
    link: 'tel:+919994498426',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'treertngroup@gmail.com',
    link: 'mailto:treertngroup@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Tamil Nadu, India',
    link: '#',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Sat: 9AM - 6PM',
    link: '#',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Thank you for your enquiry! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-cream relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-primary-100/30 via-transparent to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-accent-100/20 via-transparent to-transparent rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 rounded-full border border-primary-100 mb-6">
            <MessageSquare className="w-4 h-4 text-accent-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-700">
              Get In Touch
            </span>
          </div>
          <h2 className="section-title mb-4">
            Let's Start a <span className="text-primary-700">Conversation</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Ready to source premium agricultural products? Contact us for quotes, 
            product inquiries, or partnership opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{info.title}</p>
                      <p className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Connect */}
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 text-white">
              <Globe2 className="w-10 h-10 text-accent-400 mb-4" />
              <h4 className="font-display text-xl font-bold mb-3">
                Export Enquiries
              </h4>
              <p className="text-primary-100 mb-6">
                Looking to import premium Indian agricultural products? 
                We're ready to serve your business needs.
              </p>
              <a
                href="https://wa.me/919994498426"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-800 font-semibold rounded-full hover:bg-accent-100 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-soft border border-gray-100"
            >
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Company Ltd."
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Interest
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a product category</option>
                  <option value="fruits">Fresh Fruits</option>
                  <option value="vegetables">Fresh Vegetables</option>
                  <option value="spices">Spices & Herbs</option>
                  <option value="value-added">Value Added Products</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
