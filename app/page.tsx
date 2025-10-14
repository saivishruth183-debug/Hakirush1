'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, Target, Trophy, Star } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cricket from './assets/cricket.webp';
import Badminton from './assets/badminton.jpg';
import Football from './assets/football.webp';
import Ceremoney from './assets/Ceremoney.jpg';

const heroSlides = [
  { id: 1, image: Cricket.src, title: 'Cricket Championship Finals' },
  { id: 2, image: Badminton.src, title: 'Badminton Tournament' },
  { id: 3, image: Football.src, title: 'Football League Match' },
  { id: 4, image: Ceremoney.src, title: 'Trophy Ceremony' },
];

const visionPoints = [
  { id: 'whyhakirush', title: 'Why HAKIRUSH?', content: 'Post-pandemic, employee morale and wellness have taken a hit. HAKIRUSH brings companies together through biweekly sports tournaments, team-building events, and fun rivalries — all managed end-to-end.', icon: Target },
  { id: 'difference', title: 'How We Make a Difference', content: 'We transform corporate culture by fostering healthy competition, building stronger teams, and creating memorable experiences that employees talk about long after the games are over.', icon: Users },
  { id: 'mission', title: 'Our Mission', content: "To be India's premier corporate sports engagement platform, helping companies boost employee morale, build team spirit, and create lasting professional relationships through the power of sports.", icon: Trophy },
  { id: 'choose', title: 'Why Choose HAKIRUSH', content: 'End-to-end event management, professional coverage, branded kits, transport included, monthly tournaments, and a dedicated leaderboard system that keeps the competitive spirit alive year-round.', icon: Star },
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
    <div className="overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 sm:pt-24 md:pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-100/30 via-transparent to-red-200/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -80, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1 }}
              className="text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="text-red-600 block drop-shadow-md">CORPORATE</span>
                SPORTS ENGAGEMENT
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 mb-8 max-w-xl">
                Transforming workplace culture through competitive sports, team building, and employee wellness programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {[
                  { href: '/services', label: 'Explore Services', primary: true },
                  { href: '/contact', label: 'Get Started', primary: false }
                ].map((btn, idx) => (
                  <Link href={btn.href} key={idx}>
                    <motion.button
                      whileHover={{
                        scale: 1.08,
                        boxShadow: '0 10px 20px rgba(255, 0, 0, 0.3)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className={`px-8 py-4 rounded-xl text-lg font-semibold ${
                        btn.primary
                          ? 'bg-red-600 text-white hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600'
                          : 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                      }`}
                    >
                      {btn.label}
                    </motion.button>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Right Slideshow */}
            <motion.div
              className="relative h-64 sm:h-80 md:h-[500px] rounded-3xl overflow-hidden bg-white shadow-2xl border border-gray-200 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 150 }}
              style={{ perspective: 1000 }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide].title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute bottom-8 left-4 right-4 text-red-600 bg-white/70 p-3 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-center">
                  {heroSlides[currentSlide].title}
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff000010,_transparent_90%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Why Choose <span className="text-red-600">HAKIRUSH</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a sports platform — we're your partner in building stronger, more engaged teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative cursor-pointer">
            {visionPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, y: 40, rotateX: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  viewport={{ once: true }}
                  className="relative bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-red-400 transition-all"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-red-100 rounded-lg mr-4">
                      <Icon className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">{point.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{point.content}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-50 to-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 text-center relative z-10"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Ready to Transform Your <span className="text-red-600 px-2 rounded-lg">Workplace</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join leading companies who trust HAKIRUSH to boost employee morale and build stronger teams through sports.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                boxShadow: '0px 0px 20px 5px rgba(255,0,0,0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-red-600 text-white font-bold px-12 py-4 rounded-xl text-xl hover:bg-red-700 transition"
            >
              Start Your Journey
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
