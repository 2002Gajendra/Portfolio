import React from "react";
import { motion } from "framer-motion";
import WebImg from "../assets/MERN-Stack-Development.png";

const WebDevelopment = () => {
  // Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-screen text-white overflow-hidden animated-bg">

      <div className="relative max-w-6xl mx-auto px-6 md:px-16 py-28">
        {/* Heading */}
        <motion.h3
          className="text-3xl md:text-3xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-500">Web</span> Development
        </motion.h3>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image Card */}
          <motion.div
            className="relative group cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.img
              src={WebImg}
              alt="Web Development"
              className="w-full "
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl font-semibold text-blue-400"
              variants={fadeInUp}
            >
              Build Modern, Fast & Responsive Apps
            </motion.h2>

            <motion.p className="text-gray-300 leading-relaxed text-lg" variants={fadeInUp}>
              I specialize in creating <strong>modern web applications</strong> that are fast, scalable, and visually appealing. Every project is designed with <strong>responsive layouts, smooth animations, and user-friendly interfaces</strong> in mind.
            </motion.p>

            <motion.ul className="space-y-3" variants={fadeInUp}>
              {[
                "⚡ React + Node.js Full-Stack Development",
                "🧩 REST APIs & MongoDB Integration",
                "🔐 JWT / Firebase Authentication",
                "🚀 Optimized for Performance & SEO",
                "☁️ Deployment on Vercel & Netlify"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  variants={cardVariants}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href="/contact"
              className="inline-block mt-6 bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-10 rounded-xl shadow-lg shadow-blue-500/40 transition-all duration-300 hover:scale-105"
              variants={fadeInUp}
            >
              Let’s Build Something Great 🚀
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
