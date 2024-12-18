import React from "react";
import "../App.css";
import { ArrowRightIcon } from "@heroicons/react/solid";

import students7 from "../assets/students7.png"; // Import the logo
import students8 from "../assets/students8.png"; // Import the logo
import students9 from "../assets/students9.png"; // Import the logo

export default function Section8() {
  return (
    <section className="py-2 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Informed
          </h2>
          <p className="text-gray-600">
            Stay updated on the latest education industry news, trends, and
            evolving landscape.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-40">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={students7}
              alt="Card 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-yellow-600 font-medium mb-2">
                Do consectetur
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Aliqua Irure Tempor Lorem Occaecat Volup
              </h3>
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <span>Dec 24, 2022</span>
                <span className="px-2 py-1 bg-gray-100 rounded-md">
                  5 mins read
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={students8}
              alt="Card 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-yellow-600 font-medium mb-2">
                Consequat labore
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Commodo Deserunt Ipsum Occaecat Qui
              </h3>
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <span>Dec 12, 2022</span>
                <span className="px-2 py-1 bg-gray-100 rounded-md">
                  10 mins read
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={students9}
              alt="Card 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-yellow-600 font-medium mb-2">
                Laboris nulla
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Deserunt Cccaecat Qui Amet Tempor Dolore
              </h3>
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <span>Nov 20, 2022</span>
                <span className="px-2 py-1 bg-gray-100 rounded-md">
                  3 mins read
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center mb-20">
          <button className="bg-[#F8A82A] text-black px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
            Read More Articles
            <ArrowRightIcon className="ml-4 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
