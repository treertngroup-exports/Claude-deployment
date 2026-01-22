import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GalleryPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&q=80',
      alt: 'Fresh mangoes',
      category: 'Fruits',
    },
    {
      id: 2,
      src: 'https://drive.google.com/thumbnail?id=1zCIqXqk9EOC9fUhn69PJB4u1Z4GTIDkH',
      alt: 'Organic vegetables',
      category: 'Packing',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
      alt: 'Indian spices',
      category: 'Spices',
    },
    {
      id: 4,
      src: 'https://drive.google.com/thumbnail?id=1SiOVMnHr3qFS2z4Cun2ufojqRpW0Ri4q',
      alt: 'Fresh produce',
      category: 'Farms',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=800&q=80',
      alt: 'Exotic fruits',
      category: 'Fruits',
    },
    {
      id: 6,
      src: 'https://drive.google.com/thumbnail?id=1psEXW1PznIzAczfCEQg3_ZYKp4lCG5g3',
      alt: 'Vegetable variety',
      category: 'Vegetables',
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

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our complete collection of premium produce and farming operations
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-64"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img
                src={image.thumb}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 text-white p-3 rounded-full hidden sm:flex"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 text-white p-3 rounded-full hidden sm:flex"
          >
            <ChevronRight size={24} />
          </button>

          <div className="max-w-4xl w-full">
            <img
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default GalleryPage;
