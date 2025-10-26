import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  // Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-16 px-5 text-center animated-bg"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-400 mb-10"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact <span className="text-white">Me</span>
      </motion.h2>

      {/* Form Container */}
      <motion.form
        className="mt-8 max-w-lg mx-auto bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-blue-500/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Name Field */}
        <div className="relative mb-6">
          <input
            type="text"
            id="name"
            required
            className="peer w-full px-4 pt-5 pb-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Name"
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-400 peer-focus:text-sm"
          >
            Your Name
          </label>
        </div>

        {/* Email Field */}
        <div className="relative mb-6">
          <input
            type="email"
            id="email"
            required
            className="peer w-full px-4 pt-5 pb-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Email"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-400 peer-focus:text-sm"
          >
            Your Email
          </label>
        </div>

        {/* Message Field */}
        <div className="relative mb-6">
          <textarea
            id="message"
            rows="5"
            required
            className="peer w-full px-4 pt-5 pb-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder="Your Message"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-400 peer-focus:text-sm"
          >
            Your Message
          </label>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
