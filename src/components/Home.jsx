import React from "react";
import profileImage from "../assets/port.png"; // Ensure image is in /src/assets
import { FaGithub , FaLinkedin, FaInstagramSquare} from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 px-6 md:px-16"
    >
      {/* Left Content (Text) */}
      <div className="text-center md:text-left md:w-1/2 text-white self-center">
        <h3 className="text-[22px] md:text-[28px] font-bold">Hello, It's me</h3>
        <h1 className="text-[36px] md:text-[48px] font-bold text-blue-400">
          Gajendra Patidar
        </h1>
        <h3 className="text-[20px] md:text-[26px] font-bold">
          And I'm a{" "}
          <span className="text-blue-400 animate-typing">
            Web Developer
          </span>
        </h3>
        <p className="mt-4 text-sm md:text-base">
          I specialize in designing and developing interactive or responsive
          Websites & Mobile Applications.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-2 md:gap-4 mt-4">
          <Link
            to="https://github.com/Gajendra-patidar"
            className="text-blue-400 sm:text-xl md:text-2xl"
          >
            <FaGithub/>
          </Link>
          <Link
            to="https://www.instagram.com/golu.patidar143"
            className="text-blue-400 sm:text-xl md:text-2xl"
          >
            <FaInstagramSquare color="red" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/gajendra-patidar-5b993b235"
            className="text-blue-400 sm:text-xl md:text-2xl"
          >
            <FaLinkedin/>
          </Link>
        </div>

        {/* Download CV Button */}
        <Link
          to="https://app.luminpdf.com/viewer/6472ee0ce0a0c57d5936728a"
          className="inline-block mt-4 px-5 py-2 bg-blue-400 text-white font-bold rounded-md shadow-sm hover:shadow-md transition duration-300"
        >
          Download CV
        </Link>
      </div>

      {/* Right Content (Image) */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center self-center relative">
        <img
          src={profileImage}
          alt="Profile"
          className="w-60 md:w-80 h-auto rounded-full border-2 border-blue-400 shadow-lg"
        />
        
      </div>
    </section>
  );
};

export default Home;
