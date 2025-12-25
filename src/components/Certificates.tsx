import { Shield, CheckCircle2, Award } from 'lucide-react';

const certificates = [
  {
    id: 1,
    name: 'CDB India',
    fullName: 'Coconut Development Board',
    description: 'Ministry of Agriculture, Govt. of India',
    color: 'from-green-500 to-green-700',
  },
  {
    id: 2,
    name: 'FSSAI',
    fullName: 'Food Safety & Standards',
    description: 'Authority of India',
    color: 'from-orange-500 to-green-600',
  },
  {
    id: 3,
    name: 'MSME',
    fullName: 'Micro, Small & Medium',
    description: 'Enterprises, Govt. of India',
    color: 'from-amber-500 to-amber-700',
  },
  {
    id: 4,
    name: 'Spices Board',
    fullName: 'Spices Board India',
    description: 'Ministry of Commerce',
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 5,
    name: 'APEDA',
    fullName: 'Agricultural & Processed Food',
    description: 'Products Export Development',
    color: 'from-green-600 to-green-800',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding bg-gradient-to-b from-white to-cream relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-radial from-accent-100/30 via-transparent to-transparent rounded-full translate-x-1/2" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-radial from-primary-100/20 via-transparent to-transparent rounded-full -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 rounded-full border border-primary-100 mb-6">
            <Shield className="w-4 h-4 text-accent-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-700">
              Verified & Certified
            </span>
          </div>
          <h2 className="section-title mb-4">
            Legal <span className="text-primary-700">Certifications</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We proudly hold registrations and authorizations from India's most recognized 
            regulatory authorities, ensuring the highest standards of quality and compliance.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="group bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-primary-200 transition-all duration-500 hover:shadow-large hover:-translate-y-3 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />

              {/* Logo Container */}
              <div className="w-24 h-24 mx-auto mb-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                <div className={`absolute inset-0 rounded-full border-2 border-dashed border-gray-200 group-hover:border-accent-300 transition-colors duration-300`} style={{ margin: '-4px' }} />
                <Award className={`w-10 h-10 text-gray-400 group-hover:text-primary-600 transition-colors duration-300`} />
              </div>

              {/* Name */}
              <h3 className="font-display text-xl font-bold text-primary-800 mb-2 group-hover:text-primary-900 transition-colors">
                {cert.name}
              </h3>

              {/* Full Name */}
              <p className="text-sm text-gray-600 mb-1">{cert.fullName}</p>
              <p className="text-xs text-gray-400">{cert.description}</p>

              {/* Verified Badge */}
              <div className="mt-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-50 rounded-full text-xs font-semibold text-primary-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-3">
                Committed to Excellence & Compliance
              </h3>
              <p className="text-primary-100 text-lg max-w-xl">
                Meeting international standards for food safety, quality assurance, and export compliance.
              </p>
            </div>

            <div className="flex items-center gap-8 lg:gap-12">
              <div className="text-center">
                <p className="font-display text-4xl lg:text-5xl font-bold text-accent-400">100%</p>
                <p className="text-sm text-primary-200 mt-1">Compliance Rate</p>
              </div>
              <div className="w-px h-16 bg-primary-700" />
              <div className="text-center">
                <p className="font-display text-4xl lg:text-5xl font-bold text-accent-400">5+</p>
                <p className="text-sm text-primary-200 mt-1">Certifications</p>
              </div>
              <div className="w-px h-16 bg-primary-700 hidden md:block" />
              <div className="text-center hidden md:block">
                <p className="font-display text-4xl lg:text-5xl font-bold text-accent-400">0</p>
                <p className="text-sm text-primary-200 mt-1">Quality Issues</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
