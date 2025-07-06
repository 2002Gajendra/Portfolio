import React from "react";
import project1 from "../assets/port1.jpg";
import project2 from "../assets/port2.jpg";
import project3 from "../assets/port3.jpg";
import { Link } from "react-router-dom";

const projects = [
  { img: project1, title: "Village Website", link: "/" },
  { img: project2, title: "News Masala", link: "/" },
  { img: project3, title: "Dashboard UI", link: "/" },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen py-16 bg-gray-800 text-center px-6 pt-30 md:px-16"
    >
      <h2 className="text-4xl font-bold text-blue-400">
        My <span className="text-white">Portfolio</span>
      </h2>

      <div className="mt-8 flex flex-wrap justify-center gap-8 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-80 bg-gray-900 p-4 rounded-lg shadow-lg group overflow-hidden"
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded-lg h-48 w-full object-cover  group-hover:scale-105 duration-500"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
