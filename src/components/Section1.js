import React from "react";
import "../App.css";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid"; // import the icon
import { VideoCameraIcon } from "@heroicons/react/solid"; // Import the icon
import { ArrowRightIcon } from "@heroicons/react/solid";
import threeApplesLogo from "../assets/threeApplesLogo.png"; // Import the logo
import students from "../assets/students.png"; // Import the logo
import designBackground from "../assets/designBackground.png"; // Import the logo

export default function Section1() {
  return (
    <div className="bg-[#0B1546] pt-6">
      <header className="flex items-center justify-between bg-white px-12 py-3 mx-4 rounded-full shadow-lg">
        <div className="font-bold text-2xl text-black">
          <div className="flex items-center">
            <img src={threeApplesLogo} alt="Logo" className="h-10 w-30 mr-2" />{" "}
            {/* Rounded logo */}
            {/* <div className="flex flex-col">
              <span className="text-[#3A9E9B]">Three</span>
              <span className="text-black">Apples</span>
            </div> */}
          </div>
        </div>

        <nav className="hidden md:flex flex-grow justify-center items-center space-x-8 text-black bg-white py-2 px-8 rounded-full">
          <a href="#" className="hover:text-gray-500">
            Home
          </a>
          <a href="#" className="hover:text-gray-500">
            About Us
          </a>
          <a href="#" className="hover:text-gray-500">
            SIS
          </a>
          <a href="#" className="hover:text-gray-500 font-bold">
            Digital Services
          </a>
          <a href="#" className="hover:text-gray-500">
            Portfolio
          </a>
          <a href="#" className="hover:text-gray-500">
            Contact Us
          </a>
        </nav>

        <button className="bg-[#0B1546] text-white px-6 py-2 rounded-full hover:bg-[#2e7c7a] flex items-center">
          <PhoneIcon className="mr-2 h-5 w-5" />
          Request a Demo
        </button>
      </header>
      {/* Hero Section */}
      <section className="text-center text-white mt-16 px-4">
        <h3 className="text-lg uppercase font-semibold">
          Leading the Charge In EdTech Transformation
        </h3>
        <h1 className="text-4xl md:text-6xl font-bold mt-4">
          Empowering Educators, Inspiring Students
        </h1>
        <p className="mt-6 text-gray-300 text-sm md:text-base max-w-3xl mx-auto">
          We build transformative EdTech solutions to simplify your education
          management needs, so you can focus on what really matters. Whether
          it's enrollments, tuition, financial or daily operations, Three Apples
          puts control at your fingertips!
        </p>
        <div className="flex justify-center mt-8 space-x-4">
          <button className="bg-[#F8A82A] text-black px-6 py-3 rounded-md hover:bg-[#e0911c] flex items-center">
            Book a Demo
            <VideoCameraIcon className="ml-2 h-5 w-5" />
          </button>
          <button className="px-6 py-3 rounded-full hover:bg-white hover:text-[#0B1546]">
            Get a Quote
          </button>
        </div>
      </section>
      {/* Image Section */}
      <div className="relative mt-12 flex justify-center">
        <img src={designBackground} alt="DesignBackground" className="w-full" />

        <img
          src={students}
          alt="Students"
          className="absolute w-[80%] md:w-[60%] h-full object-cover"
        />
      </div>
    </div>
  );
}
