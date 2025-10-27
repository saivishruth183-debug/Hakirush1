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
  email: 'krishna@hakirush.com',
  phone: '+91 7997110210',
  whatsapp: '+91 7997110210',
  address: 'No. 472/7 Balaji Arcade , A.V.S. Compound, 20th L  Cross Road, AVS Layout, Ejipura, Koramangala, Bengaluru, Karnataka -560095',
  hours: 'Mon-Sat: 9:00 AM - 7:00 PM'
};

const socialLinks = [
  { name: 'LinkedIn', icon: <Linkedin className="h-6 w-6 text-gray-600 hover:text-red-600" />, url: 'https://linkedin.com/company/hakirush' },
  { name: 'Instagram', icon: <Instagram className="h-6 w-6 text-gray-600 hover:text-red-600" />, url: 'https://www.instagram.com/hakirush.sports_events/?hl=en' },
  { name: 'Twitter', icon: <Twitter className="h-6 w-6 text-gray-600 hover:text-red-600" />, url: 'https://x.com/Hakirushsports' }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetForm = () => setFormData({ name: '', email: '', company: '', phone: '', message: '' });

  const sendMail = async () => {
    setLoading(true);
    const templateParams = { ...formData };

    try {
      await emailjs.send('service_e0wk90a', 'template_mpc32vt', templateParams, 'TdZxUTpTA6byQ_J-p');
      Swal.fire({ icon: 'success', title: 'Message Sent 🎉', text: 'We’ll get back to you soon!', timer: 2500, showConfirmButton: false });
      resetForm();
    } catch (error) {
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'Please try again later.', timer: 3000, showConfirmButton: false });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMail();
  };

  return (
    <div className="overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
      
      {/* Hero Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff000015,_transparent_80%),_radial-gradient(circle_at_bottom_right,_#ff660010,_transparent_90%),_radial-gradient(circle_at_top_left,_#ffffff05,_transparent_80%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
              Get in <span className="text-red-500">Touch</span>
            </h1>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Ready to transform your workplace culture? Let’s discuss how HAKIRUSH can create engaging sports experiences for your team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative bg-gradient-to-b from-white via-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_#ff000010,_transparent_90%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Let's <span className='text-red-600'>Connect</span></h2>
            <p className="text-lg text-gray-700 mb-8">
              Have questions about our services or want to schedule a consultation? We're here to help you build a stronger, more engaged team.
            </p>

            <div className="space-y-6">
              {/* Contact Items */}
              {[
                { icon: <Mail className="text-red-600" />, label: "Email", value: contactDetails.email, href: `mailto:${contactDetails.email}` },
                { icon: <Phone className="text-green-600" />, label: "Phone", value: contactDetails.phone, href: `tel:${contactDetails.phone}` },
                { icon: <MessageSquare className="text-blue-600" />, label: "WhatsApp", value: contactDetails.whatsapp, href: `https://wa.me/${contactDetails.whatsapp.replace(/[^0-9]/g, '')}` },
                { icon: <MapPin className="text-purple-600" />, label: "Address", value: contactDetails.address },
                { icon: <Clock className="text-orange-600" />, label: "Hours", value: contactDetails.hours },
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="p-3 bg-red-100 rounded-lg mr-4">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.label}</h3>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-700 text-sm hover:text-red-600 transition">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-8 border-t border-gray-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow <span className="text-red-600">Us</span></h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, i) => (
                  <motion.a key={i} href={link.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
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
            className="p-8 rounded-2xl shadow-2xl bg-white text-gray-900 border border-gray-200 shadow-red-400"
          >
            <h2 className="text-3xl font-bold mb-8">Send us a <span className="text-red-600">Message</span></h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField label="Full Name *" name="name" value={formData.name} onChange={handleInputChange} required />
                <InputField label="Email Address *" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField label="Company Name" name="company" value={formData.company} onChange={handleInputChange} />
                <InputField label="Phone Number" name="phone" value={formData.phone} onChange={handleInputChange} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <Textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleInputChange} placeholder="Tell us about your requirements..." />
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold flex justify-center items-center gap-2">
                <Send className="h-5 w-5" />
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 inset-0 bg-[linear-gradient(to_bottom,#ffffff,#f9fafb,#f3f4f6),radial-gradient(circle_at_left,#ff000010,_transparent_90%)]">
          <div className="max-w-7xl mx-auto px-6 text-center ">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-6">
            Find <span className="text-red-600">Us</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-gray-700 mb-12">
            Visit our office in the heart of Bangalore’s tech hub.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7697!2d77.6309!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA2LjciTiA3N8KwMzcnNTEuMiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="HAKIRUSH Office Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function InputField({ label, name, value, onChange, type = 'text', required = false }: any) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <Input id={name} name={name} type={type} required={required} value={value} onChange={onChange} className="focus:border-red-500 focus:ring-red-500" />
    </div>
  );
}
