import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faBlogger } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "", // 'success', 'error', 'loading', or ''
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message:
          "Please fill in all required fields (Name, Email, and Message).",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setStatus({ type: "loading", message: "Sending your message..." });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setTimeout(() => {
        setStatus({
          type: "success",
          message:
            "Demo mode: Message simulated successfully! To activate live delivery, configure your EmailJS environment variables.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 1500);
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject || "Portfolio Inquiry",
          message: formData.message,
        },
        publicKey,
      )
      .then(() => {
        setStatus({
          type: "success",
          message:
            "Your message has been sent successfully. I will get back to you shortly!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus({
          type: "error",
          message:
            "Oops! Something went wrong while sending your message. Please try again later or email me directly.",
        });
      });
  };

  const contactDetails = [
    {
      icon: faEnvelope,
      label: "Email",
      val: "ameerasri59@gmail.com",
      href: "mailto:ameerasri59@gmail.com",
    },
    {
      icon: faPhone,
      label: "Phone",
      phones: [
        { val: "+94 750 652 541", href: "tel:+94750652541" },
        { val: "+94 767 620 601", href: "tel:+94767620601" },
      ],
    },
    {
      icon: faLinkedin,
      label: "LinkedIn",
      val: "linkedin.com/in/asri-ibnu-ameer",
      href: "https://www.linkedin.com/in/asri-ibnu-ameer-ab567b1ab",
    },
    {
      icon: faBlogger,
      label: "Blogspot",
      val: "asriibnuameer.blogspot.com",
      href: "https://asriibnuameer.blogspot.com/search/label/Social%20Work",
    },
    {
      icon: faMapMarkerAlt,
      label: "Location",
      val: "Colombo, Sri Lanka",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Blur Blob */}
      <div
        className="bg-blob bg-secondary-500/10 dark:bg-primary-500/5"
        style={{ width: 'min(450px, 80vw)', height: 'min(450px, 80vw)', bottom: '-6rem', right: '-6rem' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[3px] bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Contact Layout Grid — stack on mobile, 12-col on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">

          {/* Left Column: Contact info cards */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 flex flex-col justify-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                Let's Discuss Opportunities
              </h3>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-6 sm:mb-8 leading-relaxed">
                Whether you have an event to plan, a project to coordinate, an
                HR position to fill, or just want to connect, feel free to reach
                out. I am open to job opportunities, community work, and
                partnerships.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={
                    (detail.href || detail.phones)
                      ? { x: 5, transition: { duration: 0.2 } }
                      : {}
                  }
                  style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
                  className="glass-card-light dark:glass-card-dark px-4 py-4 sm:px-5 sm:py-4 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm gap-4 "
                >
                  {/* ── Icon (always vertically centered) ── */}
                  <div
                    style={{ flexShrink: 0, alignSelf: "center" }}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 shadow-inner leading-none"
                  >
                    <FontAwesomeIcon
                      icon={detail.icon}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 dark:text-secondary-400"
                    />
                  </div>

                  {/* ── Text (label + value/s) ── */}
                  <div style={{ minWidth: 0, flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    {/* Label */}
                    <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1 leading-none">
                      {detail.label}
                    </span>

                    {/* Phone — vertical stack, one number per line */}
                    {detail.phones ? (
                      <div style={{
                        display: "flex",
                        gap: "2px",
                        flexDirection: "column"
                      }}>
                        {detail.phones.map((phone, i) => (
                          <a
                            key={i}
                            href={phone.href}
                            style={{ minHeight: "3vh" }}
                            className="block text-sm font-semibold leading-none text-slate-800 dark:text-slate-100 hover:text-primary-600 dark:hover:text-secondary-400 transition-colors"
                          >
                            {phone.val}
                          </a>
                        ))}
                      </div>
                    ) : detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                        rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "100%" }}
                        className="text-sm font-semibold text-slate-800 dark:text-slate-100 hover:text-primary-600 dark:hover:text-secondary-400 transition-colors"
                        title={detail.val}
                      >
                        {detail.val}
                      </a>
                    ) : (
                      <p
                        style={{ margin: 0 }}
                        className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-tight"
                      >
                        {detail.val}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>


          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card-light dark:glass-card-dark p-5 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-md relative"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>

              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 block"
                  >
                    Full Name <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    autoComplete="name"
                    className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors text-sm"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 block"
                  >
                    Email Address <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5 sm:space-y-2">
                <label
                  htmlFor="subject"
                  className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 block"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                  className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors text-sm"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5 sm:space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 block"
                >
                  Message <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Type your message here..."
                  className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none text-sm"
                />
              </div>

              {/* Submit Button & Status Message */}
              <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="w-full py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 min-h-[48px]"
                >
                  <FontAwesomeIcon icon={faPaperPlane} aria-hidden="true" />
                  {status.type === "loading" ? "Sending Message..." : "Send Message"}
                </button>

                {/* Status Alerts */}
                {status.type && status.type !== "loading" && (
                  <div
                    role="alert"
                    className={`p-3 sm:p-4 rounded-xl text-xs sm:text-sm border flex items-start gap-2 ${status.type === "success"
                      ? "bg-green-500/10 dark:bg-green-500/5 text-green-700 dark:text-green-400 border-green-500/20"
                      : "bg-red-500/10 dark:bg-red-500/5 text-red-700 dark:text-red-400 border-red-500/20"
                      }`}
                  >
                    <span className="flex-shrink-0 mt-0.5" aria-hidden="true">{status.type === "success" ? "🚀" : "⚠️"}</span>
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
