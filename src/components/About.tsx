import { Award, DollarSign, Clock, HeartHandshake, Zap, Shield, Building2, Users } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    icon: Award,
    title: "Premium Quality Steel",
    description: "Top-grade materials ensuring maximum safety and durability",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Best value for money without compromising on quality",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Clock,
    title: "On-Time Supply",
    description: "Reliable delivery schedules to keep your projects on track",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: HeartHandshake,
    title: "Customer Support",
    description: "Expert guidance and dedicated service throughout your project",
    color: "from-red-500 to-red-600",
  },
];

const stats = [
  { icon: Building2, label: "Projects Completed", value: "500+" },
  { icon: Users, label: "Satisfied Customers", value: "1000+" },
  { icon: Zap, label: "Years of Experience", value: "9+" },
  { icon: Shield, label: "Quality Guarantee", value: "100%" },
];

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section id="about" className="relative bg-neutral-900 py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-850 to-neutral-900 opacity-80"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjE1LDAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            About <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">AK TRADERS</span>
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">Leading manufacturer and supplier of premium scaffolding materials since 2016</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          {/* Left side - Text */}
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Established in 2016, AK TRADERS has grown into a leading manufacturer and supplier of premium scaffolding and centering materials, trusted by builders, contractors, and infrastructure developers.
              </p>
              <p>
                With nearly a decade of industry expertise, we specialize in delivering high-strength, reliable, and durable materials designed to meet the demanding requirements of modern construction.
              </p>
              <p>
                We cater to construction projects across all major regions of Andhra Pradesh and nearby areas, proudly serving Vijayawada, Guntur, Visakhapatnam, Tirupati, Nellore, Kakinada, Rajahmundry, Ongole, Kurnool, Kadapa, Anantapur, Srikakulam, Vizianagaram, Eluru, Machilipatnam, Khammam, and several other rapidly growing development zones.
              </p>
              <p className="pt-4 font-semibold text-yellow-400">
                Our mission is clear — to supply the most trusted construction support materials and remain the preferred partner for builders and contractors across the region.
              </p>
            </div>
          </div>

          {/* Right side - Image/Visual */}
          <div data-aos="fade-left" className="relative">
            <div className="relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-yellow-600/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-600/10 rounded-full blur-2xl"></div>
              
              <h4 className="text-2xl font-bold text-white mb-8 relative z-10">Why Choose Us?</h4>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-neutral-800/30 hover:bg-neutral-800/50 transition-colors">
                  <div className="flex-shrink-0">
                    <Shield className="text-yellow-500" size={28} />
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-1">Quality Assured</h5>
                    <p className="text-sm text-gray-400">Consistent product standards on every project</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-neutral-800/30 hover:bg-neutral-800/50 transition-colors">
                  <div className="flex-shrink-0">
                    <Zap className="text-yellow-500" size={28} />
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-1">Quick Delivery</h5>
                    <p className="text-sm text-gray-400">Timely supply to keep projects on schedule</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-neutral-800/30 hover:bg-neutral-800/50 transition-colors">
                  <div className="flex-shrink-0">
                    <Users className="text-yellow-500" size={28} />
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-1">Expert Support</h5>
                    <p className="text-sm text-gray-400">Dedicated guidance throughout your project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-yellow-600/20 rounded-xl p-6 text-center backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="text-yellow-500 group-hover:scale-110 transition-transform" size={40} />
                </div>
                <h4 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {stat.value}
                </h4>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            About Established in 2016, AK TRADERS has grown into a leading
            manufacturer and supplier of premium scaffolding and centering
            materials, trusted by builders, contractors, and infrastructure
            developers. With nearly a decade of industry expertise, we
            specialize in delivering high-strength, reliable, and durable
            materials designed to meet the demanding requirements of modern
            construction. <br/><br/> We cater to construction projects across all major
            regions of Andhra Pradesh and nearby areas, proudly serving
            Vijayawada, Guntur, Visakhapatnam, Tirupati, Nellore, Kakinada,
            Rajahmundry, Ongole, Kurnool, Kadapa, Anantapur, Srikakulam,
            Vizianagaram, Eluru, Machilipatnam, Khammam, and several other
            rapidly growing development zones. <br/> <br/>Our commitment to quality,
            integrity, and customer satisfaction sets us apart. At AK TRADERS,
            we ensure timely delivery, consistent product standards, and
            dependable support for every project. Our range includes centering
            plates, spans, jacks, props, and a complete selection of shuttering
            accessories — all designed to enhance safety, stability, and
            performance on every construction site. <br/><br/>Our mission is clear — to
            supply the most trusted construction support materials and remain
            the preferred partner for builders and contractors across the
            region, with a focus on long-term reliability and excellence.
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
                <div key={index} className="group text-center">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon
                      className="text-neutral-900"
                      size={36}
                      strokeWidth={2.5}
                    />
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
            Partner with AK TRADERS for superior scaffolding and centering
            materials that meet the highest industry standards.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
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
