'use client';

import { easeOut, motion } from 'framer-motion';
import { Trophy, Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import Logo from '../public/favicon.ico'
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className='flex items-center space-x-2 mb-4'>
              <div className="rounded-lg">
                <Image src={Logo} alt="Logo Image" width={24} height={24} className='rounded-lg' />
              </div>
              <span className="text-xl font-bold">HAKIRUSH</span>
            </Link>
            <p className="text-gray-400 mb-4">
              India's premier corporate sports engagement platform, fostering team building and employee wellness through competitive sports.
            </p>
            <div className="flex space-x-4">
              <motion.a href="https://linkedin.com/company/hakirush" 
                className="text-gray-400 hover:text-red-400 transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a href="https://www.instagram.com/hakirush.sports_events/?hl=en" 
                className="text-gray-400 hover:text-red-400 transition-colors" 
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a href="https://x.com/Hakirushsports" className="text-gray-400 hover:text-red-400 transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
                >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Leaderboard', 'Gallery', 'Clients', 'Contact'].map((item) => (
                <motion.li key={item}
                whileHover={{ x: 10 }}
                transition={{
                type: "tween",
                duration: 0.5,
                ease: "easeInOut",
              }}
                >
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <motion.span className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ x: 10 }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: "easeInOut",
              }}>
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-gray-400">krishna@hakirush.com</span>
              </motion.span>
              <motion.span className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ x: 10 }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: "easeInOut",
              }}>
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-gray-400">+91 7997110210</span>
              </motion.span>
              <motion.span 
              className="flex items-start justify-center space-x-3 cursor-pointer"
              whileHover={{ x: 10 }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: "easeInOut",
              }}
              >
                <MapPin className="h-10 w-10 text-red-400"/>
                <span className="text-gray-400 mt-2 text-md">No. 472/7 Balaji Arcade , A.V.S. Compound, 20th L Cross Road, AVS Layout, Ejipura, Koramangala, Bengaluru, Karnataka -560095.</span>
              </motion.span>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 HAKIRUSH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;