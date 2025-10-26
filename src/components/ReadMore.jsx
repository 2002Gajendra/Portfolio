import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaUsers, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import videos correctly
import Video1 from "../assets/video1.mp4";
import Video2 from "../assets/video1.mp4";
import Video3 from "../assets/video1.mp4";

const ReadMore = () => {
  const projects = [
    { title: "Project 1", video: Video1 },
    { title: "Project 2", video: Video2 },
    { title: "Project 3", video: Video3 },
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-16 space-y-16 pt-[110px]">
      {/* Expertise Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-blue-400">💼 My Expertise</h2>
        <p className="text-gray-300 leading-relaxed">
          I specialize in building <strong>modern, fast, and user-friendly</strong> digital experiences — from <strong>web applications</strong> to <strong>mobile apps</strong> — using React.js, React Native, Tailwind CSS, and Firebase. Smooth animations, responsive layouts, and interactive UIs are always my focus.
        </p>
      </motion.div>

      {/* Why Choose Me Section */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-blue-400">🌟 Why Choose Me</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <FaLaptopCode size={40} />, title: "Creative & Modern UI", desc: "Visually stunning designs." },
            { icon: <FaCogs size={40} />, title: "Performance Focused", desc: "Fast and optimized web & mobile apps." },
            { icon: <FaUsers size={40} />, title: "Client-Centric Approach", desc: "Close collaboration for best results." },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-blue-500/30 transition-all">
              <div className="text-blue-400 mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Our Work in Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4"
      >
        <h2 className="text-2xl font-semibold text-blue-400">🚀 Our Work in Action</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Every project is a combination of <strong>clean design</strong>, <strong>smart technology</strong>, and <strong>meaningful interaction</strong>.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6 justify-items-center">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="relative w-40 sm:w-48 md:w-56 rounded-3xl overflow-hidden cursor-pointer shadow-lg shadow-blue-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <video
                src={proj.video}
                className="w-full h-auto aspect-[9/20] object-cover rounded-3xl"
                muted
                loop
                preload="metadata"
                controls
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center font-semibold py-1 text-sm">
                {proj.title}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Let's Build Together Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-center mt-20">
        <h2 className="text-3xl font-bold text-blue-400 mb-4">Let’s Build Something Great Together!</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Have an idea? Let's collaborate and bring your project to life.
        </p>
        <Link to="/" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-bold transition">
          Contact Us
        </Link>
      </motion.div>
    </section>
  );
};

export default ReadMore;
