'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, Target, Trophy, Star } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const heroSlides = [
  { id: 1, image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?w=800', title: 'Cricket Championship Finals' },
  { id: 2, image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?w=800', title: 'Badminton Tournament' },
  { id: 3, image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?w=800', title: 'Football League Match' },
  { id: 4, image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?w=800', title: 'Trophy Ceremony' }
];

const visionPoints = [
  { 
    id: 'whyhakirush',
    title: 'Why HAKIRUSH?', 
    content: 'Post-pandemic, employee morale and wellness have taken a hit. HAKIRUSH brings companies together through biweekly sports tournaments, team-building events, and fun rivalries — all managed end-to-end.',
    icon: Target
  },
  { 
    id: 'difference',
    title: 'How We Make a Difference', 
    content: 'We transform corporate culture by fostering healthy competition, building stronger teams, and creating memorable experiences that employees talk about long after the games are over.',
    icon: Users
  },
  { 
    id: 'mission',
    title: 'Our Mission', 
    content: 'To be India\'s premier corporate sports engagement platform, helping companies boost employee morale, build team spirit, and create lasting professional relationships through the power of sports.',
    icon: Trophy
  },
  { 
    id: 'choose',
    title: 'Why Choose HAKIRUSH', 
    content: 'End-to-end event management, professional coverage, branded kits, transport included, monthly tournaments, and a dedicated leaderboard system that keeps the competitive spirit alive year-round.',
    icon: Star
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-red-500">CORPORATE</span><br />
                SPORTS<br />
                ENGAGEMENT
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-300">
                Transforming workplace culture through competitive sports, team building, and employee wellness programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                  >
                    Explore Services
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Slideshow */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] rounded-2xl overflow-hidden glassmorphic"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Slide Title */}
              <div className="absolute bottom-8 left-4 right-4 text-white">
                <h3 className="text-lg font-semibold">{heroSlides[currentSlide].title}</h3>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-red-500' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-red-600">HAKIRUSH</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a sports platform - we're your partner in building stronger, more engaged teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                // ✅ Comment moved OUTSIDE the prop
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => router.push(`/about/${point.id}`)}
                  className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-red-100 rounded-lg mr-4">
                      {IconComponent && <IconComponent className="h-6 w-6 text-red-600" />}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{point.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{point.content}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <span className="text-red-500">Workplace</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading companies who trust HAKIRUSH to boost employee morale and build stronger teams through sports.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 px-12 py-4 rounded-lg text-xl font-semibold text-white transition-colors"
              >
                Start Your Journey
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
