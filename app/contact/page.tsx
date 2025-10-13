'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ExternalLink, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactDetails = {
  email: 'connect@hakirush.com',
  phone: '+91 7997110210',
  whatsapp: '+91 7997110210',
  address: 'Koramangala, Bangalore, Karnataka 560095',
  hours: 'Mon-Sat: 9:00 AM - 7:00 PM'
};

const socialLinks = [
  { icon:  <Linkedin className="h-6 w-6 text-white/70 hover:text-red-600" />, url: 'https://linkedin.com/company/hakirush' },
  { icon: <Instagram className="h-6 w-6 text-white/70 hover:text-red-600" />, url: 'https://instagram.com/hakirush' },
  { icon: <Twitter className="h-6 w-6 text-white/70 hover:text-red-600" />, url: '#' }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    });
  };

  const sendMail = async () => {
    const templateParams = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      message: formData.message
    };
    try {
      await emailjs.send(
        'service_s1lva6i', // Your Service ID
        'template_lnqhq68', // Your Template ID
        templateParams,
        'X--V0CsL6UTjd3XiC' // Your Public Key
      );
      Swal.fire({
        icon: 'success',
        title: 'Message Sent 🎉',
        text: 'Thank you for reaching out! We will get back to you soon.',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true
      });
      resetForm();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong while sending your message. Please try again later.',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMail();
  };

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
              Get in <span className="text-red-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your workplace culture? Let's discuss how HAKIRUSH can create engaging sports experiences for your team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 inset-0 bg-[radial-gradient(circle_at_right,_#ff000020,_transparent_90%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">Let's <span className='text-red-600'>Connect</span></h2>
              <p className="text-lg text-white mb-8">
                Have questions about our services or want to schedule a consultation? We're here to help you build a stronger, more engaged team.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 bg-red-100 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-600">Email</h3>
                    <a 
                      href={`mailto:${contactDetails.email}`}
                      className="text-white/70 hover:text-red-600 transition-colors"
                    >
                      {contactDetails.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-green-100 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-600">Phone</h3>
                    <a 
                      href={`tel:${contactDetails.phone}`}
                      className="text-white/70 hover:text-green-600 transition-colors"
                    >
                      {contactDetails.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-600">WhatsApp</h3>
                    <a 
                      href={`https://wa.me/${contactDetails.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-blue-600 transition-colors flex items-center"
                    >
                      {contactDetails.whatsapp}
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-purple-100 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-600">Address</h3>
                    <p className="text-white/70">{contactDetails.address}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-orange-100 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-600">Business Hours</h3>
                    <p className="text-white/70">{contactDetails.hours}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-extrabold text-white mb-4">Follow <span className='text-red-600'>Us</span></h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.icon}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-red-600 transition-colors"
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-lg hover:shadow-red-400 cursor-pointer inset-0 bg-[radial-gradient(circle_at_top,_#ff000020,_transparent_90%)] border hover:border-red-400"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Send us a <span className='text-red-600'>Message</span></h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-2">
                      Company Name
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="focus:border-red-500 focus:ring-red-500"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 inset-0 bg-[radial-gradient(circle_at_left,_#ff000020,_transparent_90%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Find <span className='text-red-600'>Us</span></h2>
            <p className="text-lg text-white">
              Visit our office in the heart of Bangalore's tech hub
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-2xl overflow-hidden h-96 shadow-lg shadow-red-600"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7697!2d77.6309!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA2LjciTiA3N8KwMzcnNTEuMiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HAKIRUSH Office Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}