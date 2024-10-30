// src/Navbar.jsx
import React from 'react';
import Logo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <div className="bg-black">
        <nav className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-white font-bold text-xl">
                <img class="size-20" src={Logo} alt="" />
            </a>
            <ul className="flex space-x-6 text-white">
            <li><a href="home" className="hover:text-blue-200">HOME</a></li>
            <li><a href="alex" className="hover:text-blue-200">ALEX'S VISION</a></li>
            <li><a href="#about" className="hover:text-blue-200">1'EVER PANORAMIC LANDSCAPES TUTORIAL</a></li>
            
            {/* Dropdown Menu */}
            <li className="relative group">
                <a href="#services" className="hover:text-blue-200">COLLECTION</a>
                <div className="absolute hidden group-hover:block bg-black mt-2 rounded shadow-lg w-40">
                <a href="#web-development" className="block px-4 py-2 text-white hover:bg-blue-800">Web Development</a>
                <a href="#app-development" className="block px-4 py-2 text-white hover:bg-blue-800">App Development</a>
                <a href="#marketing" className="block px-4 py-2 text-white hover:bg-blue-800">Digital Marketing</a>
                </div>
            </li>
            <li className="relative group">
                <a href="#services" className="hover:text-blue-200">PHOTOTOURS</a>
                <div className="absolute hidden group-hover:block bg-black mt-2 rounded shadow-lg w-40">
                <a href="#web-development" className="block px-4 py-2 text-white hover:bg-blue-800">Web Development</a>
                <a href="#app-development" className="block px-4 py-2 text-white hover:bg-blue-800">App Development</a>
                <a href="#marketing" className="block px-4 py-2 text-white hover:bg-blue-800">Digital Marketing</a>
                </div>
            </li>
            
            <li><a href="#contact" className="hover:text-blue-200">EDITING LESSONS</a></li>
            <li className="relative group">
                <a href="#services" className="hover:text-blue-200">BLOG</a>
                <div className="absolute hidden group-hover:block bg-black mt-2 rounded shadow-lg w-40">
                <a href="#web-development" className="block px-4 py-2 text-white hover:bg-blue-800">Web Development</a>
                <a href="#app-development" className="block px-4 py-2 text-white hover:bg-blue-800">App Development</a>
                <a href="#marketing" className="block px-4 py-2 text-white hover:bg-blue-800">Digital Marketing</a>
                </div>
            </li>
            <li><a href="#contact" className="hover:text-blue-200">CONTACT</a></li>
            </ul>
        </div>
        </nav>
    </div>
  );
};

export default Navbar;
