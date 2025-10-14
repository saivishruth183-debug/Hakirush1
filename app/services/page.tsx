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
    color: 'from-red-500 to-pink-600'
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
    color: 'from-blue-500 to-indigo-600'
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
    color: 'from-green-500 to-emerald-600'
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
    color: 'from-purple-500 to-violet-700'
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
    <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff000015,_transparent_80%),_radial-gradient(circle_at_bottom_right,_#ff660010,_transparent_90%),_radial-gradient(circle_at_top_left,_#ffffff05,_transparent_80%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
              Our <span className="text-red-600">Services</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive sports engagement solutions designed to transform your corporate culture and boost employee morale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_#ff000010,_transparent_80%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {serviceCards.map((service, index) => {
              const IconComponent = service.icon;
              const isExpanded = expandedCards[index];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-red-200"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: 1000,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-10 blur-xl" />
                  <div className="p-8 relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} mr-4`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1 text-gray-900">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleCard(index)}
                      className="flex items-center justify-between w-full text-red-600 hover:text-red-500 font-semibold mt-4"
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
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, featureIndex) => (
                                <motion.li
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: featureIndex * 0.05 }}
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
      <section className="py-24 inset-0 bg-gradient-to-r from-red-50 to-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 text-center relative z-10"
        >
          <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
            Ready to Get <span className="text-red-600 px-2 rounded-lg">Started</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Let's discuss how HAKIRUSH can transform your workplace culture through engaging sports programs.
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
              className="inline-flex items-center bg-red-600 text-white px-12 py-4 rounded-xl text-xl font-semibold hover:bg-red-700"
            >
              Contact Us Today
              <ArrowRight className="ml-3 h-5 w-5" />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
