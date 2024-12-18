import React from "react";
import "../App.css";
import { VideoCameraIcon } from "@heroicons/react/solid"; // Import the icon

import laptop from "../assets/laptop.png"; // Import the logo

export default function Section6() {
  return (
    <div className="bg-white px-48 pt-12">
      {/* Blue Gradient Background */}
      <div className="bg-gradient-to-r from-[#0B1546] to-[#4a5d84] rounded-lg flex px-12 pt-16 pb-12 relative">
        {/* Left Section (Text & Buttons) */}
        <div className="flex-1 text-white flex flex-col justify-center items-start ml-20">
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Take A Bite Into Smarter <br />
            EdTech <span className="text-yellow-500">Solutions.</span>
          </h2>
          <p className="text-lg mb-6">Book a Demo Now!</p>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <button className="bg-[#F8A82A] text-black px-6 py-3 rounded-md hover:bg-[#e0911c] flex items-center">
              Book a Demo
              <VideoCameraIcon className="ml-2 h-5 w-5" />
            </button>
            <a href="#" className="text-white underline text-lg">
              Download E-Brochure
            </a>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 flex justify-center items-center absolute top-[-40px] right-0">
          <img
            src={laptop}
            alt="Laptop and dashboard"
            className="h-64 md:h-72 lg:h-80 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
