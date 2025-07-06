import { Link } from "react-router-dom";
import aboutImage from "../assets/about.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center bg-gray-800 py-10 px-6 md:px-16"
    >
      <div className="md:w-1/2 flex justify-center relative">
        <img
          src={aboutImage}
          alt="About Me"
          className="w-72 h-80 rounded-lg shadow-lg border-4 border-blue-400"
        />
      </div>

      <div className="md:w-1/2 text-center md:text-left p-6 text-white">
        <h2 className="text-3xl font-bold text-blue-400">
          About <span className="text-white">Me</span>
        </h2>
        <h3 className="text-[32px] font-semibold mt-4">Web/App Developer</h3>
        <p className="mt-4">
          I am a passionate Frontend Developer with experience in creating
          dynamic and responsive websites.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block px-6 py-2 bg-blue-400 text-white rounded-md"
        >
          Read More
        </Link>
      </div>
    </section>
  );
};

export default About;
