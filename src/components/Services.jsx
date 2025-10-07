import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDev, FaMobileAlt } from "react-icons/fa";
import WebImg from "../assets/MERN-Stack-Development.png";
import MobileImg from "../assets/mobileApp.png";

const services = [
  {
    title: "Web Development",
    description:
      "I create responsive and modern websites using React.js, HTML, CSS, and JavaScript.",
    icon: FaDev,
    isImage: false,
    modalContent: {
      image: WebImg,
      details: `As a MERN Stack Developer, I craft high-performance, modern websites and web apps using React.js, Tailwind CSS, Node.js, Express, and MongoDB. Whether it's a personal portfolio, admin dashboard, e-commerce platform, or custom business tool — I focus on clean code, responsive design, fast loading, and user-friendly UI/UX.

I specialize in:
- Building full-stack apps with React + Node.js
- Creating APIs and integrating databases using MongoDB
- Implementing authentication (JWT/Firebase)
- Optimizing performance, SEO, and responsiveness
- Deploying apps on Vercel, Netlify, or custom servers

Every project is built with scalability, security, and speed in mind.`,
    },
  },
  {
    title: "Mobile App",
    description:
      "I create responsive & modern mobile apps using React-Native (Android & iOS).",
    icon: FaMobileAlt,
    isImage: false,
    modalContent: {
      image: MobileImg,
      details: `As a React Native Developer, I build high-quality, cross-platform mobile applications for Android. I focus on delivering smooth, performant, and user-friendly apps with modern UI/UX design principles.

I specialize in:
- Developing native-like mobile apps using React Native
- Integrating APIs and backend services for dynamic data
- Implementing authentication, push notifications, and offline support
- Optimizing app performance and responsiveness
- Publishing apps on Google Play Store

Every app is crafted with scalability, maintainability, and best coding practices to ensure a seamless user experience.`,
    },
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const closeModal = () => setSelectedService(null);

  // Variants for card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  // Modal animation
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="services"
      className="min-h-screen pt-30 py-16 bg-gray-900 text-center px-6 md:px-16 cursor-pointer"
    >
      <h2 className="text-4xl mb-20 font-bold text-blue-400">
        My <span className="text-white">Services</span>
      </h2>

      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg w-80 text-center shadow-lg group hover:scale-105 duration-300 cursor-pointer"
            onClick={() => setSelectedService(service)}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-5xl mb-4 flex justify-center">
              {service.isImage ? (
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16"
                />
              ) : (
                React.createElement(service.icon, {
                  className: "text-blue-400",
                })
              )}
            </div>
            <h3 className="text-2xl font-semibold text-blue-400 mt-2">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 px-4 py-10"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <button
              onClick={closeModal}
              className="absolute top-[33px] right-[40px] text-2xl font-bold text-white hover:text-blue-500 transition-transform transform hover:scale-125"
            >
              ×
            </button>
            <div className="hide-scrollbar relative bg-gray-900/90 text-white p-6 rounded-2xl w-11/12 max-w-xl max-h-[80vh] overflow-y-auto shadow-[0_0_40px_rgba(255,255,255,0.15)] border border-white/10 backdrop-blur-md">
              <div className="flex justify-center mb-4">
                <img
                  src={selectedService.modalContent.image}
                  alt={selectedService.title}
                  className="h-48 w-70 max-w-md object-cover rounded-xl shadow-lg"
                />
              </div>
              <h3 className="text-3xl font-bold text-blue-400 mb-3 tracking-wide text-center">
                {selectedService.title}
              </h3>
              <pre className="text-gray-300 leading-relaxed text-left whitespace-pre-wrap font-sans">
                {selectedService.modalContent.details}
              </pre>
              <div className="flex justify-center">
                <motion.button
                  className="mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg shadow-blue-500/50 transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Order Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
