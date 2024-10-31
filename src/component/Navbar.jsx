import React, { useState } from 'react';
import Logo from "../assets/Logo.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="bg-black">
        <nav class="bg-black p-4">
        <div class="container mx-auto flex justify-between items-center">
            <a href="/" class="text-white font-bold text-xl">
                <img class="h-8 w-auto" src={Logo} alt="Logo" />
            </a>
            <ul class="hidden md:flex space-x-6 text-white">
            <li><a href="/home" class="hover:text-lime-400">HOME</a></li>
            <li><a href="alex" class="hover:text-lime-400">ALEX'S VISION</a></li>
            <li><a href="#about" class="hover:text-lime-400">1'EVER PANORAMIC LANDSCAPES TUTORIAL</a></li>
            
            {/* Dropdown Menu */}
            <li className="relative group">
                <a href="#services" className="hover:text-lime-400">COLLECTION</a>
                <div className="absolute hidden group-hover:block bg-black mt-2 rounded shadow-lg w-40">
                    <a href="#web-development" className="block px-4 py-2 text-white hover:bg-blue-800">Web Development</a>
                    <a href="#app-development" className="block px-4 py-2 text-white hover:bg-blue-800">App Development</a>
                    <a href="#marketing" className="block px-4 py-2 text-white hover:bg-blue-800">Digital Marketing</a>
                </div>
            </li>
            <li className="relative group">
                <a href="#services" className="hover:text-lime-400">PHOTOTOURS</a>
                <div className="absolute hidden group-hover:block bg-black mt-2 rounded shadow-lg w-40">
                <a href="#web-development" className="block px-4 py-2 text-white hover:bg-blue-800">Web Development</a>
                <a href="#app-development" className="block px-4 py-2 text-white hover:bg-blue-800">App Development</a>
                <a href="#marketing" className="block px-4 py-2 text-white hover:bg-blue-800">Digital Marketing</a>
                </div>
            </li>
            
            <li><a href="#contact" className="hover:text-lime-400">EDITING LESSONS</a></li>
            <li className="relative group">
                <a href="#services" className="hover:text-lime-400">BLOG</a>
                <div className="absolute hidden group-hover:block bg-black mt-2 rounded shadow-lg w-40">
                <a href="#web-development" className="block px-4 py-2 text-white hover:bg-blue-800">Web Development</a>
                <a href="#app-development" className="block px-4 py-2 text-white hover:bg-blue-800">App Development</a>
                <a href="#marketing" className="block px-4 py-2 text-white hover:bg-blue-800">Digital Marketing</a>
                </div>
            </li>
            <li><a href="#contact" className="hover:text-lime-400">CONTACT</a></li>
            </ul>

            {/* Mobile Menu Toggle */}
            <button
                className="text-white md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                >
                {/* Icon for the hamburger menu */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <ul className="flex flex-col mt-4 space-y-2 md:hidden text-white">
            <li><a href="/home" className="hover:text-lime-400">HOME</a></li>
            <li><a href="alex" className="hover:text-lime-400">ALEX'S VISION</a></li>
            <li><a href="#about" className="hover:text-lime-400">1'EVER PANORAMIC LANDSCAPES TUTORIAL</a></li>
            {/* Dropdown Menu */}
            <li className="relative group">
                <a href="#services" className="hover:text-lime-400">COLLECTION</a>
                <div className="absolute hidden group-hover:block bg-black mt-2 rounded shadow-lg w-40">
                    <a href="#web-development" className="block px-4 py-2 text-white hover:bg-blue-800">Web Development</a>
                    <a href="#app-development" className="block px-4 py-2 text-white hover:bg-blue-800">App Development</a>
                    <a href="#marketing" className="block px-4 py-2 text-white hover:bg-blue-800">Digital Marketing</a>
                </div>
            </li>
            <li className="relative group">
                <a href="#services" className="hover:text-lime-400">PHOTOTOURS</a>
                <div className="absolute hidden group-hover:block bg-black mt-2 rounded shadow-lg w-40">
                <a href="#web-development" className="block px-4 py-2 text-white hover:bg-blue-800">Web Development</a>
                <a href="#app-development" className="block px-4 py-2 text-white hover:bg-blue-800">App Development</a>
                <a href="#marketing" className="block px-4 py-2 text-white hover:bg-blue-800">Digital Marketing</a>
                </div>
            </li>
            
            <li><a href="#contact" className="hover:text-lime-400">EDITING LESSONS</a></li>
            <li className="relative group">
                <a href="#services" className="hover:text-lime-400">BLOG</a>
                <div className="absolute hidden group-hover:block bg-black mt-2 rounded shadow-lg w-40">
                <a href="#web-development" className="block px-4 py-2 text-white hover:bg-blue-800">Web Development</a>
                <a href="#app-development" className="block px-4 py-2 text-white hover:bg-blue-800">App Development</a>
                <a href="#marketing" className="block px-4 py-2 text-white hover:bg-blue-800">Digital Marketing</a>
                </div>
            </li>
            <li><a href="#contact" className="hover:text-lime-400">CONTACT</a></li>
          </ul>
        )}
        </nav>
    </div>
  );
};

export default Navbar;
