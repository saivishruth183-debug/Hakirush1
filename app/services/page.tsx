'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Trophy, Users, Camera, Monitor, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const serviceCards = [
  {
    title: 'Tournament Management',
    description: 'Complete end-to-end tournament organization and management',
    features: [
      'Biweekly matches across multiple sports',
      'Professional venue booking and setup',
      'Match scheduling and coordination',
      'Real-time score tracking',
      'Tournament brackets and fixtures'
    ],
    icon: Trophy,
    color: 'bg-red-100 text-red-600'
  },
  {
    title: 'Team Building Events',
    description: 'Customized sports events designed to strengthen team bonds',
    features: [
      'Inter-department competitions',
      'Team-building sports activities',
      'Leadership development through sports',
      'Collaborative challenge events',
      'Corporate sports days'
    ],
    icon: Users,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Branding & Merchandise',
    description: 'Professional branded materials and promotional content',
    features: [
      'Customized team kits with company branding',
      'Professional photography and videography',
      'Social media content creation',
      'Trophy and award ceremonies',
      'Marketing materials and banners'
    ],
    icon: Camera,
    color: 'bg-green-100 text-green-600'
  },
  {
    title: 'Digital Platform',
    description: 'Comprehensive online platform for tracking and engagement',
    features: [
      'Live leaderboards and rankings',
      'Match results and statistics',
      'Player profiles and achievements',
      'Event calendar and notifications',
      'Company vs company comparisons'
    ],
    icon: Monitor,
    color: 'bg-purple-100 text-purple-600'
  }
];

export default function Services() {
  const [expandedCards, setExpandedCards] = useState(Array(serviceCards.length).fill(false));

  const toggleCard = (index: number) => {
    setExpandedCards(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
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
              Our <span className="text-red-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive sports engagement solutions designed to transform your corporate culture and boost employee morale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCards.map((service, index) => {
              const IconComponent = service.icon;
              const isExpanded = expandedCards[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${isExpanded ? 'z-10' : ''}`}
                  style={{ position: 'relative', minHeight: isExpanded ? 'auto' : '180px', height: isExpanded ? 'auto' : '180px' }}
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`p-4 rounded-2xl ${service.color} mr-4`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleCard(index)}
                      className="flex items-center justify-between w-full text-red-600 hover:text-red-700 font-semibold transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-5 w-5" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                          style={{ zIndex: 20, position: 'relative' }}
                        >
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, featureIndex) => (
                                <motion.li
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: featureIndex * 0.1 }}
                                  className="flex items-center text-gray-700"
                                >
                                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                                  {feature}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how HAKIRUSH can transform your workplace culture through engaging sports programs.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-lg font-semibold text-white transition-colors"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}