import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const services = [
    {
      image: "/services/cuplock.webp",
      title: "Scaffolding Cuplock System",
      description:
        "Strong, modular, and safe scaffolding systems for all construction needs.",
      delay: 0,
    },
    {
      image: "/services/acrospan.webp",
      title: "Adjustable Acro Span",
      description:
        "Heavy-duty spans with adjustable support for maximum stability.",
      delay: 100,
    },
    {
      image: "/services/jack-pipe.webp",
      title: "Jack Pipes for Construction",
      description:
        "Reliable vertical support for scaffolding setups and structures.",
      delay: 200,
    },
    {
      image: "/services/centering-sheet.webp",
      title: "Centering Sheets",
      description:
        "Premium mild steel sheets for slab & beam casting applications.",
      delay: 300,
    },
    {
      image: "/services/civil-clamp.webp",
      title: "Civil Clamps & Fasteners",
      description:
        "High-strength clamps ensuring safety and structural integrity.",
      delay: 0,
    },
    {
      image: "/services/perforated-metal.webp",
      title: "Galvanized Perforated Planks",
      description:
        "Anti-slip galvanized platforms for worker safety and efficiency.",
      delay: 100,
    },
    {
      image: "/services/u-jack-and-base-jack-.webp",
      title: "U Jack & Base Jack",
      description:
        "Adjustable supports for perfect balance & structural strength.",
      delay: 200,
    },
    {
      image: "/services/columnbox.webp",
      title: "Column Box",
      description:
        "Robust formwork solutions for precise column shaping and support.",
      delay: 300,
    },
  ];

  return (
    <section id="services" className="relative pt-5 bg-neutral-900 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-850 to-neutral-900 opacity-80"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjE1LDAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Our Premium <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive scaffolding solutions designed for safety, strength,
            and reliability in every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-yellow-600/20 hover:border-yellow-500/50 rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              {/* Image Container */}
              <div className="relative w-full h-48 overflow-hidden bg-neutral-800">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-5 lg:p-6 relative z-20">
                <h3 className="text-lg lg:text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-300 leading-relaxed mb-5 line-clamp-2">
                  {service.description}
                </p>

                {/* CTA Link */}
                <a
                  href="https://wa.me/+919963554996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-500 font-semibold text-sm group-hover:text-yellow-400 transition-all duration-300 group-hover:gap-3"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Corner accent - top right */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-yellow-500/5 rounded-full blur-2xl group-hover:bg-yellow-500/10 transition-colors duration-500"></div>
              
              {/* Corner accent - bottom left */}
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-yellow-600/5 rounded-full blur-2xl group-hover:bg-yellow-600/10 transition-colors duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-24 text-center" data-aos="fade-up" data-aos-delay="400">
          <p className="text-gray-300 mb-6 text-lg">Need a custom solution?</p>
          <a
            href="tel:9963554996"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg hover:shadow-yellow-500/50 transform hover:-translate-y-1"
          >
            <span>Contact Us Today</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
