import { Construction, Grid3x3, Maximize2, Cylinder, Box, Wrench, RefreshCcw, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Construction,
    title: 'Scaffolding Systems',
    description: 'Heavy-duty scaffolding equipment designed for safety and strength.',
  },
  {
    icon: Grid3x3,
    title: 'Centering Plates & Sheets',
    description: 'Premium centering sheets for stable and accurate concrete slab formwork.',
  },
  {
    icon: Maximize2,
    title: 'Adjustable Telescopic Spans',
    description: 'High-strength adjustable spans for flexible support structures.',
  },
  {
    icon: Cylinder,
    title: 'Jack Pipes',
    description: 'Durable jack pipes with excellent load-bearing capability.',
  },
  {
    icon: Box,
    title: 'Column Boxes',
    description: 'Available in various shapes and sizes for perfect concrete column casting.',
  },
  {
    icon: Wrench,
    title: 'U-Jacks & Base Jacks',
    description: 'Height-adjustable jacks providing strong foundational support.',
  },
  {
    icon: RefreshCcw,
    title: 'Old Material Purchase & Sale',
    description: 'We buy and sell used construction materials in excellent usable condition.',
  },
];

const benefits = [
  'Corrosion Resistant',
  'Strong Build Quality',
  'Reusable',
  'Project-Ready',
];

export default function Services() {
  return (
    <section id="services" className="bg-neutral-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Our Products & <span className="text-yellow-500">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-neutral-800 border border-yellow-600/20 rounded-xl p-8 hover:border-yellow-500/50 transition-all hover:shadow-xl hover:shadow-yellow-500/10 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-neutral-900" size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-neutral-800 to-neutral-850 border border-yellow-600/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Product Benefits</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 justify-center">
                <CheckCircle className="text-yellow-500 flex-shrink-0" size={24} strokeWidth={2.5} />
                <span className="text-white font-semibold">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
