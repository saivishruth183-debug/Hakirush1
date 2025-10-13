'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import Cricket from '../assets/cricket.webp';
import Badminton from '../assets/badminton.jpg';
import Football from '../assets/football.webp';
import Ceremoney from '../assets/Ceremoney.jpg';
import Celebration from '../assets/Team Celebration.webp';
import Basketball from '../assets/Basketball Action.jpg';
import Volleyball from '../assets/Volleyball Match.avif';
import Awards from '../assets/Awards Night.webp';

const galleryItems = [
  { id: 1, type: 'image', src: Cricket.src, title: 'Cricket Championship Finals', category: 'cricket' },
  { id: 2, type: 'image', src: Badminton.src, title: 'Badminton Tournament', category: 'badminton' },
  { id: 3, type: 'image', src: Football.src, title: 'Football League Match', category: 'football' },
  { id: 4, type: 'image', src: Ceremoney.src, title: 'Trophy Ceremony', category: 'ceremony' },
  { id: 5, type: 'image', src: Celebration.src, title: 'Team Celebration', category: 'celebration' },
  { id: 6, type: 'image', src: Basketball.src, title: 'Basketball Action', category: 'basketball' },
  { id: 7, type: 'image', src: Volleyball.src, title: 'Volleyball Match', category: 'volleyball' },
  { id: 8, type: 'image', src: Awards.src, title: 'Awards Night', category: 'ceremony' },
];

const categories = ['all', 'cricket', 'football', 'badminton', 'basketball', 'volleyball', 'ceremony', 'celebration'];

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

  const nextImage = () => setCurrentImage(prev => (prev + 1) % filteredItems.length);
  const prevImage = () => setCurrentImage(prev => (prev - 1 + filteredItems.length) % filteredItems.length);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, filteredItems]);

  return (
    <div className="bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff000020,_transparent_80%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
              <span className="text-red-500">Gallery</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Relive the excitement and competitive spirit through our collection of memorable moments from corporate tournaments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 inset-0 bg-[radial-gradient(circle_at_left,_#ff000020,_transparent_90%)] text-white overflow-hidden ">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-105'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 perspective-1000">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30, rotateY: -10 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ scale: 1.08, rotateY: 5, rotateX: -2 }}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-red-400 transform-gpu"
                onClick={() => openLightbox(index)}
              >
                <motion.img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 bg-black/0 flex items-center justify-center"
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                >
                </motion.div>
                <div className="px-4 py-4 bg-black">
                  <h3 className="font-semibold text-white group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, rotateY: -10 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.9, rotateY: 10 }}
              transition={{ duration: 0.5 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>

              <motion.img
                key={filteredItems[currentImage].src}
                src={filteredItems[currentImage].src}
                alt={filteredItems[currentImage].title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="object-contain w-full h-full bg-black"
              />

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-red-600 text-center bg-black/30 backdrop-blur-lg px-7 py-2 rounded-lg">
                <h3 className="text-xl font-semibold">{filteredItems[currentImage].title}</h3>
              </div>

              {/* Navigation */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-3 text-white transition"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-3 text-white transition"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
