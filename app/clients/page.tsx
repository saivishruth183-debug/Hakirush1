'use client';

import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Users, Building, Award } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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
    await new Promise((resolve) => setTimeout(resolve, 100));
    router.push(`/clients/${id}`);
  };

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(() => nextTestimonial(), 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff000020,_transparent_80%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
              Our <span className="text-red-500">Clients</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Trusted by leading companies to deliver exceptional corporate sports experiences and build stronger teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with 3D hover */}
      <section className="py-16 inset-0 bg-[radial-gradient(circle_at_left,_#ff000020,_transparent_80%)]">
        <div className="max-w-7xl mx-auto px-20 sm:px-22 lg:px-26">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Building className="h-8 w-8 text-yellow-600" />, label: "Companies Trust Us", value: "50+" },
              { icon: <Users className="h-8 w-8 text-blue-600" />, label: "Employees Engaged", value: "10K+" },
              { icon: <Award className="h-8 w-8 text-green-600" />, label: "Events Delivered", value: "500+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center bg-black shadow-lg rounded-2xl p-6 hover:shadow-red-400 cursor-pointer"
                whileHover={{
                  rotateX: 8,
                  rotateY: -8,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                }}
                style={{ perspective: 1000 }}
              >
                <div className="p-4 bg-black/30 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-red-600 bg-red-200">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-white">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Marquee with 3D tilt */}
      <section className="py-16 inset-0 bg-[radial-gradient(circle_at_center,_#ff000020,_transparent_80%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Trusted by <span className="text-red-600">Industry Leaders</span>
          </h2>

          <div className="relative overflow-hidden">
            <motion.div
              animate={paused ? { x: 0 } : { x: ["-100%", "0%"] }}
              transition={{
                x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" },
              }}
              className="flex space-x-8 items-center py-10 px-10"
            >
              {[...clients, ...clients].map((client, index) => (
                <motion.div
                  key={`${client.id}-${index}`}
                  onClick={() => handleClick(client.id)}
                  whileHover={{
                    rotateY: 15,
                    scale: 1.1,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex-shrink-0 bg-white p-6 rounded-xl shadow-md hover:shadow-2xl cursor-pointer shadow-red-400"
                  style={{ perspective: 1200 }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 w-32 object-contain filter grayscale hover:grayscale-0 transition duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 inset-0 bg-[radial-gradient(circle_at_right,_#ff000020,_transparent_80%)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            What Our <span className="text-red-600">Clients Say</span>
          </h2>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-black p-8 rounded-2xl shadow-xl hover:shadow-red-400 cursor-pointer"
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].person}
                    className="w-20 h-20 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-red-600">
                      {testimonials[currentTestimonial].person}
                    </h3>
                    <p className="text-white">
                      {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                    </p>
                    <div className="flex mb-4">
                     {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current mt-2" />
                     ))}
                    </div>
                  </div>
                </div>

                <blockquote className="text-lg text-white italic leading-relaxed">
                  "{testimonials[currentTestimonial].message}"
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
