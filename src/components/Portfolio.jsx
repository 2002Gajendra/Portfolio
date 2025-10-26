import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/port1.jpg";
import project2 from "../assets/port2.jpg";
import project3 from "../assets/port3.jpg";
import { Link } from "react-router-dom";

const projects = [
  { img: project1, title: "Cakes Dekho", link: "https://drive.google.com/file/d/1DrtG6INyR6SSm2sLQwU7-WvyvgruW0is/view?usp=sharing" },
  { img: project2, title: "Rajmani Salesman App", link: "https://drive.google.com/file/d/1LiFksOCsQB1BM0KLpPqD51sxgBh3N0qR/view?usp=sharing" },
  { img: project3, title: "KhetFresh", link: "https://drive.google.com/file/d/1T0hn5_NCHS9opgKUS4bQrx5brYo099Jh/view?usp=sharing" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen py-16 bg-gray-800 text-center px-6 md:px-16 animated-bga"
    >
      <h2 className="text-4xl mt-8 font-bold text-blue-400">
        My <span className="text-white">Portfolio</span>
      </h2>

      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="w-80 bg-gray-900 p-4 rounded-lg shadow-sm shadow-blue-200 group overflow-hidden cursor-pointer"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={project.img}
              alt={project.title}
              className="rounded-lg h-48 w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <h3 className="text-xl font-semibold text-blue-400 mt-4">
              {project.title}
            </h3>
            <Link
              to={project.link}
              className="inline-block mt-2 text-blue-400 hover:underline"
            >
              View Project
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
