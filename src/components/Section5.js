import React from "react";
import "../App.css";
import { ArrowRightIcon } from "@heroicons/react/solid";

import students5 from "../assets/students5.png"; // Import the logo
import students6 from "../assets/students6.png"; // Import the logo
import preference1 from "../assets/preference1.png"; // Import the logo
import preference2 from "../assets/preference2.png"; // Import the logo

import preference3 from "../assets/preference3.png"; // Import the logo

import preference4 from "../assets/preference4.png"; // Import the logo

export default function Section5() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-12">
          {/* Left Image Card */}
          <div className="relative flex-1 basis-1/5">
            <img
              src={students5}
              alt="Man on phone"
              className="rounded-lg object-contain h-auto w-full"
            />
          </div>

          {/* Middle Text Section */}
          <div className="text-center py-12 px-6 flex-1 basis-1/3">
            <p className="text-gray-600 max-w-xl mx-auto mb-6">
              Solve Complex Business Challenges With
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Bespoke Software and App Solutions
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-6">
              As an EdTech specialty organization, we offer deep-domain
              expertise in education software development. We tailor our
              software development services to educators' unique challenges.
            </p>

            <div className="flex items-center justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2 w-48">
                <span>Explore More</span>
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="relative flex-1 basis-1/5 mt-40">
            <img
              src={students6}
              alt="Woman working"
              className="rounded-lg object-contain h-auto w-full"
            />
          </div>
        </div>
      </section>

      <div className="flex justify-between items-start px-28 py-6 space-x-6">
        {/* <!-- Card 1 --> */}
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center">
            <img src={preference1} alt="Icon" className="h-6 w-6 mb-1" />
            <div className="w-[1px] bg-gray-300 h-12"></div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">PPC & Youtube Ads</h3>
            <p className="text-gray-600 text-sm">
              Targeted, cost-efficient advertising for instant reach.
            </p>
          </div>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center">
            <img src={preference2} alt="Icon" className="h-6 w-6 mb-1" />
            <div className="w-[1px] bg-gray-300 h-12"></div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Social Media Ads</h3>
            <p className="text-gray-600 text-sm">
              Drive engagement with tailored social media campaigns.
            </p>
          </div>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center">
            <img src={preference3} alt="Icon" className="h-6 w-6 mb-1" />
            <div className="w-[1px] bg-gray-300 h-12"></div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">SEO Optimization</h3>
            <p className="text-gray-600 text-sm">
              Improve search rankings to maximize visibility.
            </p>
          </div>
        </div>

        {/* <!-- Card 4 --> */}
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center">
            <img src={preference4} alt="Icon" className="h-6 w-6 mb-1" />
            <div className="w-[1px] bg-gray-300 h-12"></div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Content Marketing</h3>
            <p className="text-gray-600 text-sm">
              Create engaging content to attract your audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
