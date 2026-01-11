import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Certificates = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: 'https://drive.google.com/thumbnail?id=1XCfemS3R0p4LC_YQ4dvldc5fHrXeHIU3&auto=compress&cs=tinysrgb&w=600',
      thumb: 'https://drive.google.com/thumbnail?id=1XCfemS3R0p4LC_YQ4dvldc5fHrXeHIU3&auto=compress&cs=tinysrgb&w=400',
      title: 'Coconut Development Board State Centre Kolkata',
    },
    {
      id: 2,
      src: 'https://drive.google.com/thumbnail?id=1nzF3cJdx5uWVn_UDxfV-Hq0I_8UmmCgK&auto=compress&cs=tinysrgb&w=600',
      thumb: 'https://drive.google.com/thumbnail?id=1nzF3cJdx5uWVn_UDxfV-Hq0I_8UmmCgK&auto=compress&cs=tinysrgb&w=400',
      title: 'Spices Board India',
    },
    {
      id: 3,
      src: 'https://drive.google.com/thumbnail?id=1Ig6V80TNYFUVghhOdi_Im_20U3LK-wUj&auto=compress&cs=tinysrgb&w=600',
      thumb: 'https://drive.google.com/thumbnail?id=1Ig6V80TNYFUVghhOdi_Im_20U3LK-wUj&auto=compress&cs=tinysrgb&w=400',
      title: 'FSSAI',
    },
    {
      id: 4,
      src: 'https://drive.google.com/thumbnail?id=1Bic6LAdejJ2WP29T_-SsNntdKvN5uZZ7&auto=compress&cs=tinysrgb&w=600',
      thumb: 'https://drive.google.com/thumbnail?id=1Bic6LAdejJ2WP29T_-SsNntdKvN5uZZ7&auto=compress&cs=tinysrgb&w=400',
      title: 'MSME',
    },
    {
      id: 5,
      src: 'https://drive.google.com/thumbnail?id=16tUIOxiwW6-GoSxBACyrS2IFbbvg_KVs&auto=compress&cs=tinysrgb&w=600',
      thumb: 'https://drive.google.com/thumbnail?id=16tUIOxiwW6-GoSxBACyrS2IFbbvg_KVs&auto=compress&cs=tinysrgb&w=400',
      title: 'APEDA',
    },
  ];

  const handlePrevious = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1
    );
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImageIndex === null) return;
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImageIndex(null);
  };

  return (
    <section id="Certificates" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ✅ Heading & Paragraph from Image 1 (unchanged) */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Legal <span className="text-primary-700">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We proudly hold registrations and authorizations from India's most recognized regulatory authorities, ensuring the highest standards of quality and compliance.
          </p>
        </div>

        {/* Certificates Grid (Image 2 UI retained) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={image.thumb}
                alt={image.title}
                className="w-full h-64 sm:h-48 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelectedImageIndex(null)}
          onKeyDown={handleKeyDown}
          role="dialog"
          tabIndex={0}
        >
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hidden sm:flex"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hidden sm:flex"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <p className="mt-6 text-center text-gray-500 text-xs md:text-sm">
              {selectedImageIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;


check this section is using different front style compression to othres
