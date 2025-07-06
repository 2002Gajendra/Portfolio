import React from "react";
import { FaDev, FaMobileAlt } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

const services = [
  {
    title: "Web Development",
    description: "I create responsive and modern websites using React.js, HTML, CSS, and JavaScript.",
    icon: FaDev,
    isImage: false,
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly and visually appealing interfaces for web applications.",
    icon: MdDesignServices,
    isImage: false,
  },
  {
    title: "Mobile App",
    description: "I create responsive & modern mobile app using React-Native (Android & Ios).",
    icon: FaMobileAlt,
    isImage: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="min-h-screen pt-30 py-16 bg-gray-900 text-center px-6 md:px-16">
      <h2 className="text-4xl mb-20 font-bold text-blue-400">
        My <span className="text-white">Services</span>
      </h2>

      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg w-80 text-center shadow-lg group hover:scale-105 duration-300"
          >
            <div className="text-5xl group-hover:scale-125 duration-500 mb-4 flex justify-center">
              {service.isImage ? (
                <img src={service.icon} alt={service.title} className="w-16 h-16" />
              ) : (
                React.createElement(service.icon, { className: "text-blue-400" })
              )}
            </div>
            <h3 className="text-2xl font-semibold text-blue-400 mt-2">{service.title}</h3>
            <p className="mt-2 text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
