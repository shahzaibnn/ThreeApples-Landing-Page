import React from "react";
import "../App.css";

import phone from "../assets/phone.png"; // Import the logo
import mail from "../assets/mail.png"; // Import the logo
import user from "../assets/user.png"; // Import the logo
import fbLogo from "../assets/fbLogo.png"; // Import the logo
import linkedinLogo from "../assets/linkedinLogo.png"; // Import the logo
import instagramLogo from "../assets/instagramLogo.png"; // Import the logo
import twitterLogo from "../assets/twitterLogo.png"; // Import the logo

export default function Section7() {
  return (
    <div className="bg-[#F7F9FA] pt-20 pb-12">
      <div className="max-w-6xl mx-auto py-10 flex flex-col md:flex-row rounded-lg overflow-hidden">
        {/* Left Div */}
        <div className="w-full md:w-2/5 p-8">
          <h3 className="text-gray-500 text-lg mb-2">
            Interested In Our Products?
          </h3>
          <h1 className="text-4xl font-bold mb-4">Get A Quote</h1>
          <p className="text-gray-600 mb-6">
            Get in touch with our sales team for a detailed breakdown of the
            product.
          </p>
          <div className="space-y-8">
            <div className="flex items-center text-gray-700">
              <img src={phone} alt="Icon" className="h-6 w-6 mb-1 mr-2" /> (817)
              810-3785
            </div>
            <div className="flex items-center text-gray-700 rounded-lg border-2 border-blue py-2">
              <img src={mail} alt="Icon" className="h-8 w-8 p-1 mr-2" />
              htaylor@hotmail.com
            </div>

            <div className="flex items-center text-gray-700">
              <img src={user} alt="Icon" className="h-6 w-6 mb-1 mr-2" />{" "}
              htaylor@hotmail.com
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-12 mt-6">
            <a href="#" className="text-gray-500 hover:text-blue-600 text-2xl">
              <img src={fbLogo} alt="Icon" className="h-6 w-6 mb-1" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-2xl">
              <img src={twitterLogo} alt="Icon" className="h-6 w-6 mb-1" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-2xl">
              <img src={instagramLogo} alt="Icon" className="h-6 w-6 mb-1" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-2xl">
              <img src={linkedinLogo} alt="Icon" className="h-6 w-6 mb-1" />
            </a>
          </div>
        </div>

        {/* Right Div */}
        <div className="w-full md:w-3/5 bg-[#0a0f36] text-white p-8">
          <form className="space-y-6">
            {/* Full Name & Business Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 text-gray-800 rounded focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full px-4 py-2 text-gray-800 rounded focus:outline-none"
                />
              </div>
            </div>

            {/* Email & Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 mb-1">E-mail</label>
                <input
                  type="email"
                  placeholder="yourmail@emaily.com"
                  className="w-full px-4 py-2 text-gray-800 rounded focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">Service</label>
                <select className="w-full px-4 py-2 text-gray-800 rounded focus:outline-none">
                  <option>Choose a service</option>
                  <option>Consulting</option>
                  <option>Support</option>
                  <option>Custom Development</option>
                </select>
              </div>
            </div>

            {/* Message Box */}
            <div>
              <label className="block text-gray-400 mb-1">
                How can we help?
              </label>
              <textarea
                placeholder="Enter your message here"
                className="w-full px-4 py-2 text-gray-800 rounded focus:outline-none"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#e0952d] text-black py-3 rounded hover:bg-[#d2831f] transition"
              >
                Send my message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
