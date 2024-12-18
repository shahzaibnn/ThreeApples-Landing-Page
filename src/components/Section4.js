import React from "react";
import "../App.css";
import { ArrowRightIcon } from "@heroicons/react/solid";

import students4 from "../assets/students4.png"; // Import the logo

export default function Section4() {
  return (
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
              Three Apples Student Information System (SIS) software is a cloud
              backed, LMS-integrated platform equipped with a comprehensive
              toolkit of features.
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
              Three Apples Students Portal offers a centralized hub for students
              to effortlessly access various services and educational
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
  );
}
