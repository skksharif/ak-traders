import { Award, DollarSign, Clock, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Premium Quality Steel',
    description: 'Top-grade materials ensuring maximum safety and durability',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Best value for money without compromising on quality',
  },
  {
    icon: Clock,
    title: 'On-Time Supply',
    description: 'Reliable delivery schedules to keep your projects on track',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-Centered Support',
    description: 'Expert guidance and dedicated service throughout your project',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-neutral-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            About <span className="text-yellow-500">AK TRADERS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            AK TRADERS is committed to supplying the construction industry with high-quality scaffolding and centering materials that guarantee safety, strength, and durability. We ensure reliable products, timely delivery, and expert guidance for your construction needs.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose <span className="text-yellow-500">Us?</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group text-center"
                >
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="text-neutral-900" size={36} strokeWidth={2.5} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
            Ready to Build with Confidence?
          </h3>
          <p className="text-lg text-neutral-800 mb-8 max-w-2xl mx-auto">
            Partner with AK TRADERS for superior scaffolding and centering materials that meet the highest industry standards.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-neutral-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-800 transition-all shadow-lg transform hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
