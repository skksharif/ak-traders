import { useState } from 'react';

const categories = ['All', 'Scaffolding', 'Centering', 'Spans', 'Jacks', 'Clamps'];

const images = [
  { category: 'Scaffolding', title: 'Scaffolding System', url: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { category: 'Centering', title: 'Centering Sheets', url: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { category: 'Scaffolding', title: 'Construction Site', url: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { category: 'Spans', title: 'Acrow Spans', url: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { category: 'Jacks', title: 'Jack Pipes', url: 'https://images.pexels.com/photos/106606/construction-site-build-construction-work-106606.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { category: 'Clamps', title: 'Clamps & Fittings', url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { category: 'Scaffolding', title: 'Steel Structure', url: 'https://images.pexels.com/photos/2219010/pexels-photo-2219010.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { category: 'Centering', title: 'Column Boxes', url: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All'
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="bg-neutral-800 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Our <span className="text-yellow-500">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-8"></div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-yellow-500 text-neutral-900'
                    : 'bg-neutral-700 text-gray-300 hover:bg-neutral-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-neutral-900 aspect-square"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-yellow-500 text-sm font-semibold mb-1">{image.category}</p>
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
