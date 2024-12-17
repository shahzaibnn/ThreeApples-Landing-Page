import React from "react";
import "./App.css";
import { PhoneIcon } from "@heroicons/react/solid"; // import the icon
import { VideoCameraIcon } from "@heroicons/react/solid"; // Import the icon
import { ArrowRightIcon } from "@heroicons/react/solid";
import threeApplesLogo from "./assets/threeApplesLogo.png"; // Import the logo
import students from "./assets/students.png"; // Import the logo
import designBackground from "./assets/designBackground.png"; // Import the logo
import students2 from "./assets/students2.png"; // Import the logo
import students3 from "./assets/students3.png"; // Import the logo
import students4 from "./assets/students4.png"; // Import the logo

import institute1 from "./assets/institute1.png"; // Import the logo
import institute2 from "./assets/institute2.png"; // Import the logo
import institute3 from "./assets/institute3.png"; // Import the logo
import institute4 from "./assets/institute4.png"; // Import the logo
import institute5 from "./assets/institute5.png"; // Import the logo
import institute6 from "./assets/institute6.png"; // Import the logo

function App() {
  return (
    <div className="bg-[#0B1546] min-h-screen py-4">
      {/* Header Section */}
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

      {/* Second Part */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Endorsed Across Canada
          </h2>
          <p className="text-lg mb-8">
            We're a trusted partner for many of Canada's top educational
            institutions, delivering premium services across a range of domains.
          </p>

          {/* Logos section */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-12">
            <div className="flex justify-center items-center">
              <img
                src={institute1}
                // alt="Peerless Training Institute"
                className="max-h-16"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={institute2}
                // alt="Peerless Training Institute"
                className="max-h-16"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={institute3}
                // alt="Peerless Training Institute"
                className="max-h-16"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={institute4}
                // alt="Peerless Training Institute"
                className="max-h-16"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={institute5}
                // alt="Peerless Training Institute"
                className="max-h-16"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={institute6}
                // alt="Peerless Training Institute"
                className="max-h-16"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Section */}

            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={students2}
                alt="EdTech image"
                className="w-3/4 rounded-lg"
              />
            </div>

            <div className="text-center md:text-left mb-6 md:mb-0 md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">
                We Help You Succeed Through Personalized EdTech Solutions that
                Everyone Loves!
              </h3>
              <p className="text-lg mb-6">
                An Education Ecosystem Where Everyone Thrives
              </p>
              <p className="text-lg mb-6">
                Leading the forefront of EdTech innovation, Three Apples
                empowers educators to navigate productivity challenges,
                dismantle data silos, and enhance management efficiency. Our
                systems are all experience-engineered with a special focus on
                user-friendliness, cross-compatibility, and scalability, so you
                always stay on top of your business without compromising on time
                or budget.
              </p>
              <button className="bg-[#F8A82A] text-black px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
                Learn More
                <ArrowRightIcon className="ml-4 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Transforming Education Through Digital Transformation
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our solutions are designed to end your stress, so you focus on
            things that matter.
          </p>

          <div className="flex justify-center items-center gap-10 bg-gray-100 rounded-lg shadow-lg w-3/4 mx-auto">
            <div className="p-8 w-1/2 text-left">
              <p className="text-base text-gray-600 mb-6">
                Streamline and Enhance Management With
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                K12 School App
              </h2>
              <p className="text-base text-gray-600 mb-6">
                Three Apples K-12 Education Software is an all-in-one solution
                designed for school administrators, students, teachers, and
                parents that transforms school operations into a single-point
                access system.
              </p>
              <button className="bg-[#F8A82A] text-black px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
                Learn More
                <ArrowRightIcon className="ml-4 h-5 w-5 " />
              </button>
            </div>

            <div>
              <img
                src={students3}
                alt="Person"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-white py-10 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <div className="flex justify-center items-center gap-10 w-3/4 mx-auto">
            <div className="p-8 w-1/2 text-left bg-gray-100 rounded-lg shadow-lg">
              <p className="text-base text-gray-600 mb-6">
                Boost Administrative Efficiency With
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Student Information System
              </h2>
              <p className="text-base text-gray-600 mb-6">
                Three Apples Student Information System (SIS) software is a
                cloud backed, LMS-integrated platform equipped with a
                comprehensive toolkit of features.
              </p>
              <button className="bg-[#F8A82A] text-black px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
                Learn More
                <ArrowRightIcon className="ml-4 h-5 w-5" />
              </button>

              <img
                src={students4}
                alt="Person"
                className="w-full h-full object-cover mt-5"
              />
            </div>

            <div className="p-8 w-1/2 text-left bg-gray-100 rounded-lg shadow-lg">
              <p className="text-base text-gray-600 mb-6">
                Advance Communication and Accessibility With
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Students Online Portal
              </h2>
              <p className="text-base text-gray-600 mb-6">
                Three Apples Students Portal offers a centralized hub for
                students to effortlessly access various services and educational
                information related to your institute.
              </p>
              <button className="bg-[#F8A82A] text-black px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
                Learn More
                <ArrowRightIcon className="ml-4 h-5 w-5" />
              </button>

              <img
                src={students4}
                alt="Person"
                className="w-full h-full object-cover  mt-5"
              />
            </div>

            {/* <div>
              <img
                src={students3}
                alt="Person"
                className="w-full h-full object-cover"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
