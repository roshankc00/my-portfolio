import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Me</h3>
            <p className="text-sm">
              MERN Stack Developer passionate about building scalable web applications
              and exploring new technologies. Based in Kathmandu, Nepal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-500 transition duration-300">Home</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-500 transition duration-300">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-500 transition duration-300">Skills</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500 transition duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>Kathmandu, Nepal</li>
              <li>+977 9827489335</li>
              <li>dev.roshankarki@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            Made with <FaHeart className="inline text-red-500 mx-1" /> by Roshan Karki © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
