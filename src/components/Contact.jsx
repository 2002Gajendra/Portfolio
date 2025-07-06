import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-16 pt-30 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-blue-400">Contact <span className="text-white">Me</span></h2>
      
      <form className="mt-8 max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none" />
        </div>
        <div className="mb-4">
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none" />
        </div>
        <div className="mb-4">
          <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-400 text-black px-6 py-2 rounded-md hover:bg-blue-500">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
