'use client';

import { motion, useAnimation } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Users, Building, Award } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ FIX: added this

const clients = [
  { id: "google", name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { id: "microsoft", name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { id: "amazon", name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { id: "facebook", name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
  { id: "apple", name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { id: "netflix", name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
];

const testimonials = [
  { 
    company: 'TechCorp Solutions', 
    person: 'Rajesh Kumar', 
    position: 'HR Director', 
    message: 'HAKIRUSH has revolutionized our employee engagement. The biweekly tournaments have created a buzz in the office that we never had before. Team morale is at an all-time high!', 
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?w=150',
    rating: 5
  },
  { 
    company: 'Innovation Labs', 
    person: 'Priya Sharma', 
    position: 'CEO', 
    message: 'The professional organization and competitive spirit that HAKIRUSH brings has made our company culture more vibrant. Our employees look forward to every tournament!', 
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=150',
    rating: 5
  },
  { 
    company: 'Digital Dynamics', 
    person: 'Amit Patel', 
    position: 'Operations Manager', 
    message: 'Outstanding service delivery! Every tournament is executed flawlessly. The branded kits, professional coverage, and seamless coordination exceed our expectations.', 
    avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?w=150',
    rating: 5
  },
  { 
    company: 'Future Systems', 
    person: 'Sarah Johnson', 
    position: 'Head of People Operations', 
    message: 'HAKIRUSH has transformed how our teams collaborate. The inter-department competitions have broken down silos and created lasting friendships across our organization.', 
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?w=150',
    rating: 5
  }
];

export default function Clients() {
  const controls = useAnimation();
  const router = useRouter();
  const [paused, setPaused] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleClick = async (id: string) => {
    setPaused(true);
    await controls.stop();

    // Small delay before navigation
    await new Promise((resolve) => setTimeout(resolve, 100));
    router.push(`/clients/${id}`);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
              Our <span className="text-red-500">Clients</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by leading companies to deliver exceptional corporate sports experiences and build stronger teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-4 bg-red-100 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Companies Trust Us</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-4 bg-blue-100 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10K+</h3>
              <p className="text-gray-600">Employees Engaged</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-4 bg-green-100 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Events Delivered</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Trusted by Industry Leaders
          </motion.h2>

          <div className="relative overflow-hidden">
            <motion.div
              animate={paused ? { x: 0 } : { x: ["-100%", "0%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              className="flex space-x-8 items-center"
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  onClick={() => handleClick(client.id)}
                  className="flex-shrink-0 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 w-32 object-contain filter grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            What Our <span className="text-red-600">Clients Say</span>
          </motion.h2>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].person}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonials[currentTestimonial].person}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                "{testimonials[currentTestimonial].message}"
              </blockquote>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
