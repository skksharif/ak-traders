import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="bg-neutral-950 border-b border-yellow-600/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-neutral-900 font-bold text-2xl px-4 py-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              AK
            </div>
            <div>
              <h1 className="text-white font-bold text-xl tracking-tight">AK TRADERS</h1>
              <p className="text-yellow-500 text-xs uppercase tracking-wider">Scaffolding Material Suppliers</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-yellow-500 transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-yellow-500 transition-colors font-medium">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-yellow-500 transition-colors font-medium">Gallery</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-yellow-500 transition-colors font-medium">About Us</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-yellow-500 transition-colors font-medium">Contact</button>
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <Phone className="text-yellow-500" size={20} />
            <a href="tel:9963554996" className="text-white font-semibold hover:text-yellow-500 transition-colors">99635 54996</a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-yellow-500 transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-yellow-500 transition-colors font-medium">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="block text-gray-300 hover:text-yellow-500 transition-colors font-medium">Gallery</button>
            <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-yellow-500 transition-colors font-medium">About Us</button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-yellow-500 transition-colors font-medium">Contact</button>
            <a href="tel:9963554996" className="flex items-center space-x-2 text-yellow-500 font-semibold">
              <Phone size={18} />
              <span>99635 54996</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
