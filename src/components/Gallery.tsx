import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&q=80',
    alt: 'Fresh mangoes',
    category: 'Fruits',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1518977676601-b53f82ber49e?w=800&q=80',
    alt: 'Organic vegetables',
    category: 'Vegetables',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
    alt: 'Indian spices',
    category: 'Spices',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80',
    alt: 'Fresh produce',
    category: 'Vegetables',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=800&q=80',
    alt: 'Exotic fruits',
    category: 'Fruits',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80',
    alt: 'Vegetable variety',
    category: 'Vegetables',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));

  return (
    <section id="gallery" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 rounded-full border border-primary-100 mb-6">
              <Camera className="w-4 h-4 text-accent-600" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary-700">
                Our Gallery
              </span>
            </div>
            <h2 className="section-title mb-4">
              Farm Fresh <span className="text-primary-700">Excellence</span>
            </h2>
            <p className="section-subtitle">
              Explore our premium quality agricultural products sourced from the finest farms.
            </p>
          </div>
          <Link
            to="/gallery"
            className="btn-secondary self-start md:self-auto"
          >
            View All
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 ? 'h-64 md:h-full min-h-[400px]' : 'h-48 md:h-64'}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-semibold text-primary-800">{image.category}</span>
                </div>

                {/* Hover Content */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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

          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
