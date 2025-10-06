'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Camera, Video } from 'lucide-react';

const galleryItems = [
  { id: 1, type: 'image', src: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?w=800', title: 'Cricket Championship Finals', category: 'cricket' },
  { id: 2, type: 'image', src: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?w=800', title: 'Badminton Tournament', category: 'badminton' },
  { id: 3, type: 'image', src: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?w=800', title: 'Football League Match', category: 'football' },
  { id: 4, type: 'image', src: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?w=800', title: 'Trophy Ceremony', category: 'ceremony' },
  { id: 5, type: 'image', src: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?w=800', title: 'Team Celebration', category: 'celebration' },
  { id: 6, type: 'image', src: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?w=800', title: 'Basketball Action', category: 'basketball' },
  { id: 7, type: 'image', src: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?w=800', title: 'Volleyball Match', category: 'volleyball' },
  { id: 8, type: 'image', src: 'https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?w=800', title: 'Awards Night', category: 'ceremony' },
  { id: 9, type: 'video', src: 'https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?w=800', title: 'Tournament Highlights', category: 'highlights' },
];

const categories = ['all', 'cricket', 'football', 'badminton', 'basketball', 'volleyball', 'ceremony', 'celebration', 'highlights'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Event <span className="text-red-500">Gallery</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Relive the excitement and competitive spirit through our collection of memorable moments from corporate tournaments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="break-inside-avoid mb-6 group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.type === 'video' ? (
                        <Play className="h-16 w-16 text-white" />
                      ) : (
                        <Camera className="h-16 w-16 text-white" />
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative max-w-4xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>

              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={filteredItems[currentImage]?.src}
                alt={filteredItems[currentImage]?.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                <h3 className="text-xl font-semibold">{filteredItems[currentImage]?.title}</h3>
              </div>

              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-colors"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-colors"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}