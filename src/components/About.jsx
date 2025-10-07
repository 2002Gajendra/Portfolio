import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutImage from "../assets/mobileimg.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center bg-gray-800 py-10 px-6 md:px-16 overflow-hidden"
    >
      {/* Left Side - Image */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-[50px] relative"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.img
          src={aboutImage}
          alt="About Me"
          className="w-[380px] h-[420px] "
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        className="md:w-1/2 text-center md:text-left p-6 text-white"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-bold text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          About <span className="text-white">Me</span>
        </motion.h2>

        <motion.h3
          className="text-[32px] font-semibold mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Web/App Developer
        </motion.h3>

        <motion.p
          className="mt-4 text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          I am a passionate Frontend Developer with experience in creating
          dynamic and responsive websites and mobile applications. I focus on
          crafting seamless user experiences and clean, maintainable code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Link
            to="/"
            className="mt-6 inline-block px-6 py-2 bg-blue-400 text-white font-semibold rounded-md shadow-md hover:bg-blue-500 hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
          >
            Read More
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
