import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const categories = ['All', 'Fruits', 'Vegetables', 'Spices', 'Processing', 'Packaging'];

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&q=80', alt: 'Fresh mangoes', category: 'Fruits' },
  { id: 2, src: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80', alt: 'Fresh vegetables', category: 'Vegetables' },
  { id: 3, src: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80', alt: 'Indian spices', category: 'Spices' },
  { id: 4, src: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=800&q=80', alt: 'Exotic fruits', category: 'Fruits' },
  { id: 5, src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80', alt: 'Vegetable variety', category: 'Vegetables' },
  { id: 6, src: 'https://images.unsplash.com/photo-1573246123716-6b1782bfc499?w=800&q=80', alt: 'Fresh produce', category: 'Vegetables' },
  { id: 7, src: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=800&q=80', alt: 'Pomegranates', category: 'Fruits' },
  { id: 8, src: 'https://images.unsplash.com/photo-1509358271058-aedd22b2e4e6?w=800&q=80', alt: 'Processing', category: 'Processing' },
  { id: 9, src: 'https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&q=80', alt: 'Packaging', category: 'Packaging' },
  { id: 10, src: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=800&q=80', alt: 'Pineapples', category: 'Fruits' },
  { id: 11, src: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=80', alt: 'Grapes', category: 'Fruits' },
  { id: 12, src: 'https://images.unsplash.com/photo-1518977676601-b53f82ber49e?w=800&q=80', alt: 'Organic farm', category: 'Processing' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null));
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null));

  return (
    <section className="section-padding bg-cream min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title mb-4">
            Our <span className="text-primary-700">Gallery</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Explore our premium quality agricultural products and state-of-the-art facilities.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Filter className="w-5 h-5 text-gray-400" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-800 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-semibold text-primary-800">{image.category}</span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="text-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg mb-4"
            />
            <p className="text-white font-medium">{filteredImages[selectedImage].alt}</p>
            <span className="text-gray-400 text-sm">{filteredImages[selectedImage].category}</span>
          </div>
        </div>
      )}
    </section>
  );
}
