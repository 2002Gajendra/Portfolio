import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/mobileimg3.png";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import "../App.css";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      {/* ✅ HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 overflow-hidden animated-bg relative"
      >
        {/* Left Content */}
        <motion.div
          className="text-center md:text-left md:w-1/2 text-white flex flex-col justify-center h-full"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h3
            className="text-[22px] md:text-[28px] font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello, It's me
          </motion.h3>

          <motion.h1
            className="text-[36px] md:text-[48px] font-bold text-blue-400"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            Gajendra Patidar
          </motion.h1>

          {/* Typing effect */}
          <motion.h3
            className="flex text-[20px] md:text-[26px] gap-2 justify-center md:justify-start font-bold mt-1 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            And I'm a{" "}
            <span className="text-blue-400 typing-animation">
              App & Web Developer
            </span>
          </motion.h3>

          <motion.p
            className="mt-4 text-sm md:text-base max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            I specialize in designing and developing interactive & responsive
            Websites and Mobile Applications.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center md:justify-start gap-4 mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a
              href="https://github.com/Gajendra-patidar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:scale-125 transition-transform duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.instagram.com/golu.patidar143"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:scale-125 transition-transform duration-300"
            >
              <FaInstagramSquare size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/gajendra-patidar-5b993b235"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:scale-125 transition-transform duration-300"
            >
              <FaLinkedin size={30} />
            </a>
          </motion.div>

          {/* Download CV Button */}
          <motion.a
            href="/latestCv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
    w-[60%] sm:w-[45%] md:w-[35%] lg:w-[25%]
    mt-6 px-4 sm:px-5 md:px-6 py-2 sm:py-3
    bg-blue-500 text-white text-sm sm:text-base md:text-sm font-bold
    rounded-md shadow-md
    hover:bg-blue-600 hover:shadow-lg
    transform hover:-translate-y-1 transition duration-300
    text-center mx-auto md:mx-0
  "
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Right Content (Animated Image) */}
        <motion.div
          className="md:w-1/3 mt-8 md:mt-0 flex justify-center items-center relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={profileImage}
            alt="Profile"
            className="w-[300px] md:w-[420px] h-auto"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </section>

      {/* ✅ OTHER SECTIONS BELOW (Not inside hero) */}
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
