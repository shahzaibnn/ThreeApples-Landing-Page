import React from "react";
import "../App.css";
import { ArrowRightIcon } from "@heroicons/react/solid";

import students3 from "../assets/students3.png"; // Import the logo

export default function Section3() {
  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Transforming Education Through Digital Transformation
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Our solutions are designed to end your stress, so you focus on things
          that matter.
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
  );
}
