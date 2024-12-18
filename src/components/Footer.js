import React from "react";
import "../App.css";
import facebookLogo2 from "../assets/facebookLogo2.png"; // Import the logo
import linkedinLogo2 from "../assets/linkedinLogo2.png"; // Import the logo
import youtubeLogo2 from "../assets/youtubeLogo2.png"; // Import the logo
import twitterLogo2 from "../assets/twitterLogo2.png"; // Import the logo

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-600 px-20">
        {/* Dropdown for Languages */}
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
          <select
            id="language"
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>

        {/* Text Data */}
        <div className="flex items-center mb-4 md:mb-0">
          <p>© 2024 Brand, Inc. • Privacy • Terms • Sitemap</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-blue-600">
            <img src={twitterLogo2} alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" className="text-blue-700">
            <img src={facebookLogo2} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" className="text-blue-500">
            <img src={linkedinLogo2} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="#" className="text-red-500">
            <img src={youtubeLogo2} alt="YouTube" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
