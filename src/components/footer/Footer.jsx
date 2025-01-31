import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
} from "react-icons/fa";
import {  NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal-gray text-creamy-white py-8 px-4 shadow-black shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="logo text-2xl font-bold mb-4 md:mb-0">
            Shop with Apoorv
          </div>
          <div className="md:ml-6 flex items-center space-x-4">
            <a
              href="tel:+123456789"
              className="text-soft-pink hover:text-[#088178] text-xl"
            >
              <FaPhoneAlt />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-soft-pink hover:text-[#088178] text-xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        <nav className="flex space-x-4 mt-4 md:mt-0 font-semibold">
          <NavLink to="/"
          onClick={() => window.scrollTo(0, 0)}
            href="#"
            className="text-soft-pink hover:text-[#088178] text-xl"
          >
            Home
          </NavLink>
          <NavLink
          onClick={() => window.scrollTo(0, 0)}
            to ="/shop"
            className="text-soft-pink hover:text-[#088178] text-xl"
          >
            Shop
          </NavLink>
         
        </nav>
      </div>
      <div className="text-center mt-6">
        <div className="flex justify-center items-center space-x-4">
          <a
            href="#"
            className="text-soft-pink hover:text-[#088178] text-xl"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-soft-pink hover:text-[#088178] text-xl"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-soft-pink hover:text-[#088178] text-xl"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="mt-4 flex justify-center items-center space-x-4">
          <FaCcVisa className="text-soft-pink h-6 text-xl hover:text-[#088178]" />
          <FaCcMastercard className="text-soft-pink h-6 text-xl hover:text-[#088178]" />
          <FaPaypal className="text-soft-pink h-6  text-xl hover:text-[#088178]" />
        </div>
      </div>
      <div className="text-center mt-4">
        &copy; {new Date().getFullYear()} Shop with Apoorv. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
