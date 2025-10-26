import React from "react";
import { motion } from "framer-motion";
import MobileImg from "../assets/mobileApp.png"; // replace with your mobile app image

const AppDevelopment = () => {
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
          <span className="text-purple-500">Mobile</span> App Development
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
              src={MobileImg}
              alt="Mobile App Development"
              className="w-full"
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
              className="text-3xl font-semibold text-purple-400"
              variants={fadeInUp}
            >
              Build Smooth, High-Performance Mobile Apps
            </motion.h2>

            <motion.p className="text-gray-300 leading-relaxed text-lg" variants={fadeInUp}>
              I specialize in creating <strong>cross-platform mobile applications</strong> using React Native for both Android and iOS. My apps are fast, user-friendly, and visually engaging, with smooth animations and responsive layouts.
            </motion.p>

            <motion.ul className="space-y-3" variants={fadeInUp}>
              {[
                "⚡ Cross-platform apps with React Native",
                "🧩 Integrate APIs & backend services",
                "🔐 Authentication, Push Notifications & Offline Support",
                "🚀 Optimized for Performance & App Store Guidelines",
                "☁️ Publish on Google Play & App Store"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  variants={cardVariants}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href="/contact"
              className="inline-block mt-6 bg-purple-500 hover:bg-purple-400 text-white font-semibold py-3 px-10 rounded-xl shadow-lg shadow-purple-500/40 transition-all duration-300 hover:scale-105"
              variants={fadeInUp}
            >
              Let’s Build Your App 🚀
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDevelopment;
