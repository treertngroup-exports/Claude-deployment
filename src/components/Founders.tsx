import { Linkedin, Mail, Quote, Users } from 'lucide-react';

const founders = [
  {
    name: 'Founder Name',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'With over 15 years of experience in agricultural exports, leading TREERT\'s vision of connecting Indian farms to global markets.',
    linkedin: '#',
    email: 'ceo@treert.com',
  },
  {
    name: 'Co-Founder Name',
    role: 'Chief Operations Officer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    bio: 'Expert in supply chain management and quality control, ensuring seamless operations from farm to international markets.',
    linkedin: '#',
    email: 'coo@treert.com',
  },
];

export default function Founders() {
  return (
    <section id="founders" className="section-padding bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary-50/50 via-transparent to-transparent rounded-full translate-x-1/3 -translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 rounded-full border border-primary-100 mb-6">
            <Users className="w-4 h-4 text-accent-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-700">
              Leadership
            </span>
          </div>
          <h2 className="section-title mb-4">
            Meet Our <span className="text-primary-700">Founders</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Visionary leaders driving TREERT's mission to empower farmers 
            and deliver excellence to global markets.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="group bg-gradient-to-b from-cream to-white rounded-3xl p-8 border border-gray-100 hover:border-primary-200 transition-all duration-500 hover:shadow-large"
            >
              {/* Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Decorative Circle */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-40 h-40 border-2 border-dashed border-primary-200 rounded-full -z-10" />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-1">
                  {founder.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">{founder.role}</p>
                
                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-primary-100 mx-auto mb-2" />
                  <p className="text-gray-600 italic leading-relaxed">
                    "{founder.bio}"
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={founder.linkedin}
                    className="w-10 h-10 bg-primary-50 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-primary-700" />
                  </a>
                  <a
                    href={`mailto:${founder.email}`}
                    className="w-10 h-10 bg-primary-50 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-primary-700" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Story */}
        <div className="mt-20 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <h3 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
              Our Story
            </h3>
            <p className="text-primary-100 text-lg leading-relaxed mb-8">
              Founded in 2024, TREERT was born from a vision to bridge the gap between 
              India's rich agricultural heritage and global markets. We started with a 
              simple mission: to empower farmers by connecting them directly to 
              international buyers while ensuring the highest quality standards.
            </p>
            <p className="text-primary-100 text-lg leading-relaxed">
              Today, we proudly export premium fruits, vegetables, spices, and 
              value-added products to over 50 countries, partnering with more than 
              1000 farmers across India. Our journey continues as we strive to make 
              Indian agriculture shine on the global stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
