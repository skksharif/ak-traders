export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-yellow-600/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="flex items-center space-x-3 justify-center md:justify-start mb-2">
              <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-neutral-900 font-bold text-2xl hover:scale-105 transition-transform">
                <img src="/logo.png" alt="logo" className="w-[70px] rounded" />
              </div>
              <span className="text-white font-bold text-lg">AK TRADERS</span>
            </div>
            <p className="text-gray-400 text-sm">
              ALL TYPES OF SCAFFOLDING MATERIAL SUPPLIERS
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2025 AK TRADERS. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
