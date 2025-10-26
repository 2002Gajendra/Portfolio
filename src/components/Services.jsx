import React from "react";
import { motion } from "framer-motion";
import { FaDev, FaMobileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Web Development",
    description:
      "I create responsive and modern websites using React.js, HTML, CSS, and JavaScript.",
    icon: FaDev,
    path: "/development",
  },
  {
    title: "Mobile App",
    description:
      "I create responsive & modern mobile apps using React-Native (Android & iOS).",
    icon: FaMobileAlt,
    path: "/app-development",
  },
];

const Services = () => {
  const navigate = useNavigate();

  // Parent container with stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Card animation: smooth spring + skew + fade
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: 10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { type: "spring", stiffness: 120, damping: 18, mass: 0.8 },
    },
    hover: {
      scale: 1.05,
      rotateX: 0,
      y: -5,
      transition: { type: "spring", stiffness: 200, damping: 12 },
    },
  };

  return (
    <section
      id="services"
      className="min-h-screen py-16 bg-gray-900 text-center px-6 md:px-16 animated-bg"
    >
      <h2 className="text-4xl mb-20 font-bold text-blue-400">
        My <span className="text-white">Services</span>
      </h2>

      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-8 perspective-1000"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl w-80 text-center shadow-lg shadow-blue-500/30 cursor-pointer hover:shadow-cyan-400/50 transition-all duration-300"
            variants={cardVariants}
            whileHover="hover"
            onClick={() => navigate(service.path)}
          >
            <div className="text-5xl mb-4 flex justify-center text-blue-400">
              {React.createElement(service.icon, { className: "text-blue-400" })}
            </div>
            <h3 className="text-2xl font-semibold text-blue-400 mt-2">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
