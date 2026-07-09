import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '', // 'success', 'error', 'loading', or ''
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validations
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email, and Message).'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending your message...' });

    // Retrieve environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Graceful fallback for demo/development if environment keys are missing
    if (!serviceId || !templateId || !publicKey) {
      setTimeout(() => {
        setStatus({
          type: 'success',
          message: 'Demo mode: Message simulated successfully! To activate live delivery, configure your EmailJS environment variables.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
      return;
    }

    // Call EmailJS API
    emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject || 'Portfolio Inquiry',
        message: formData.message
      },
      publicKey
    )
    .then((result) => {
      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully. I will get back to you shortly!'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong while sending your message. Please try again later or email me directly.'
      });
    });
  };

  const contactDetails = [
    {
      icon: faEnvelope,
      label: "Email",
      val: "ameerhana99@gmail.com",
      href: "mailto:ameerhana99@gmail.com"
    },
    {
      icon: faPhone,
      label: "Phone",
      val: "+94 77 123 4567", // Editable placeholder
      href: "tel:+94771234567"
    },
    {
      icon: faLinkedin,
      label: "LinkedIn",
      val: "linkedin.com/in/muhammed-ameer",
      href: "https://www.linkedin.com/in/muhammed-ameer-hana-asiri"
    },
    {
      icon: faMapMarkerAlt,
      label: "Location",
      val: "Colombo, Sri Lanka",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blur Blob */}
      <div className="bg-blob w-[450px] h-[450px] bg-secondary-500/10 dark:bg-primary-500/5 -bottom-24 -right-24 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[3px] bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact info cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Let's Discuss Opportunities
              </h3>
              <p className="text-slate-550 dark:text-slate-400 mb-8 leading-relaxed">
                Whether you have an event to plan, a project to coordinate, an HR position to fill, or just want to connect, feel free to reach out. I am open to job opportunities, community work, and partnerships.
              </p>
            </div>

            <div className="space-y-4">
              {contactDetails.map((detail, index) => {
                const CardWrapper = detail.href ? 'a' : 'div';
                const wrapperProps = detail.href ? { href: detail.href, target: "_blank", rel: "noopener noreferrer" } : {};

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={detail.href ? { x: 5, transition: { duration: 0.2 } } : {}}
                    className="flex items-center gap-4 glass-card-light dark:glass-card-dark p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-inner">
                      <FontAwesomeIcon icon={detail.icon} className="w-5 h-5 text-primary-500 dark:text-secondary-400" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                        {detail.label}
                      </span>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="block text-sm md:text-base font-bold text-slate-850 dark:text-slate-200 hover:text-primary-600 dark:hover:text-secondary-400 transition-colors mt-0.5"
                        >
                          {detail.val}
                        </a>
                      ) : (
                        <p className="text-sm md:text-base font-bold text-slate-850 dark:text-slate-200 mt-0.5">
                          {detail.val}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card-light dark:glass-card-dark p-8 rounded-3xl border border-slate-202/50 dark:border-slate-800/50 shadow-md relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button & Status Message */}
              <div className="space-y-4 pt-2">
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  {status.type === 'loading' ? 'Sending Message...' : 'Send Message'}
                </button>

                {/* Status Alerts */}
                {status.type && status.type !== 'loading' && (
                  <div
                    className={`p-4 rounded-xl text-sm border flex items-center gap-2 ${
                      status.type === 'success'
                        ? 'bg-green-550/10 dark:bg-green-500/5 text-green-700 dark:text-green-400 border-green-500/20'
                        : 'bg-red-500/10 dark:bg-red-500/5 text-red-700 dark:text-red-400 border-red-500/20'
                    }`}
                  >
                    <span>{status.type === 'success' ? '🚀' : '⚠️'}</span>
                    <span>{status.message}</span>
                  </div>
                )}
              </div>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
