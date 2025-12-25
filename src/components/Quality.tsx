import { CheckCircle2, Leaf, Shield, ThermometerSun, Package, ArrowRight } from 'lucide-react';

const qualityFeatures = [
  {
    icon: Leaf,
    title: 'Farm Fresh',
    description: 'Products sourced directly from certified organic farms ensuring freshness and quality.',
  },
  {
    icon: Shield,
    title: 'Quality Tested',
    description: 'Rigorous quality checks at every stage from harvesting to packaging and delivery.',
  },
  {
    icon: ThermometerSun,
    title: 'Cold Chain',
    description: 'Temperature-controlled logistics maintaining product freshness during transit.',
  },
  {
    icon: Package,
    title: 'Export Packaging',
    description: 'International standard packaging ensuring products reach destination intact.',
  },
];

const qualityPoints = [
  'ISO 22000 certified food safety management',
  'FSSAI licensed and compliant operations',
  'APEDA registered exporter',
  'Spices Board certified quality',
  'Regular third-party audits',
  'Traceability from farm to consumer',
];

export default function Quality() {
  return (
    <section id="quality" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 rounded-full border border-primary-100 mb-6">
              <Shield className="w-4 h-4 text-accent-600" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary-700">
                Quality Policy
              </span>
            </div>
            
            <h2 className="section-title mb-6">
              Uncompromising <span className="text-primary-700">Quality</span> Standards
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At TREERT, quality is not just a promise—it's our foundation. We maintain 
              stringent quality control measures throughout our supply chain, from farm 
              selection to final delivery.
            </p>

            {/* Quality Points */}
            <div className="space-y-4 mb-10">
              {qualityPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary-700" />
                  </div>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary"
            >
              Request Quality Certificate
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {qualityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`group p-6 lg:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                  index % 2 === 0
                    ? 'bg-gradient-to-br from-primary-50 to-primary-100/50'
                    : 'bg-gradient-to-br from-accent-50 to-accent-100/50'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                  index % 2 === 0
                    ? 'bg-primary-200/50'
                    : 'bg-accent-200/50'
                }`}>
                  <feature.icon className={`w-7 h-7 ${
                    index % 2 === 0 ? 'text-primary-700' : 'text-accent-700'
                  }`} />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Our Quality Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every product goes through our rigorous 6-step quality assurance process
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Farm Selection', 'Harvesting', 'Sorting', 'Quality Check', 'Packaging', 'Dispatch'].map((step, index) => (
              <div key={step} className="relative">
                <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 text-center border border-primary-100 hover:border-primary-200 transition-colors">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {index + 1}
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">{step}</p>
                </div>
                {index < 5 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-primary-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
