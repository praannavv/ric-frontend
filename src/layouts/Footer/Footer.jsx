// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-8 text-primary dark:text-secondary dark:bg-primary ">
      <div className="flex flex-row flex-wrap items-center justify-center text-center gap-y-6 gap-x-12 md:justify-between">
        <img src="/img/logo-ct-dark.png" alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-4 gap-x-8">
          <li>
            <a
              href="#"
              className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors  "
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors  "
            >
              License
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors  "
            >
              Contribute
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors  "
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <span className="block my-8 border-t border-gray-300 dark:border-gray-600"></span>
      <p className="block font-sans text-base antialiased font-normal leading-relaxed text-center ">
        © 2024 Pranav Mishra
      </p>
    </footer>
  );
};

export default Footer;
