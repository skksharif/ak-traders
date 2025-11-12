import { Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.4);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-8 lg:py-20 overflow-hidden"
    >
      {/* Background image with parallax motion */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('/slides/s1.jpg')", // ← replace with your actual image path
          backgroundAttachment: "fixed",
          transform: `translateY(${offsetY * 0.2}px)`,
          transition: "transform 0.2s ease-out",
        }}
      ></div>

      {/* Animated pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjE1LDAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Box */}
        <div className="inline-block mb-6">
          <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-neutral-900 font-black text-6xl md:text-8xl px-8 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
            AK
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
          AK TRADERS
        </h1>

        <p className="text-2xl md:text-3xl text-yellow-500 font-bold mb-6 tracking-wide">
          Your Trusted Source for Scaffolding & Centering Materials
        </p>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
          Leading supplier of scaffolding systems, centering sheets, jack pipes,
          acrow spans, column boxes, and construction support equipment with
          superior durability and reliability.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:9963554996"
            className="group flex items-center space-x-3 bg-yellow-500 text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Phone
              className="group-hover:rotate-12 transition-transform"
              size={24}
            />
            <span>Call Now</span>
          </a>

          <a
            href="https://wa.me/919963554996"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <MessageCircle
              className="group-hover:rotate-12 transition-transform"
              size={24}
            />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* Bottom Fade Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-900 to-transparent"></div>
    </section>
  );
}
