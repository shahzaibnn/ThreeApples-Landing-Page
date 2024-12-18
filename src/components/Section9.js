import React from "react";
import "../App.css";

import blueLinear from "../assets/blueLinear.png"; // Import the logo
import mail from "../assets/mail.png"; // Import the logo

export default function Section9() {
  return (
    <div>
      <div className="relative w-full h-full">
        <div className="absolute w-full h-60">
          <img
            src={blueLinear}
            alt="Hero Background"
            className="w-full h-full"
          />
        </div>

        <div className="relative w-full h-full flex flex-col justify-center items-center text-center py-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to transform your school management?
          </h2>
          <div className="flex justify-center items-center gap-16">
            <button className="bg-[#F8A82A] hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded">
              Contact Sales
            </button>
            <a href="#" className="text-white underline">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white text-black px-6 md:px-12 py-8 md:py-12">
        {/* Newsletter */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold mb-3">
            Subscribe to our newsletter
          </h3>
          <div className="flex justify-center">
            <div className="flex items-center border border-gray-300 p-2 w-72 rounded-l">
              <img src={mail} alt="Icon" className="h-6 w-6 p-1 mr-2" />
              {/* Mail Icon */}
              <input
                type="email"
                placeholder="Input your email"
                className="border-none focus:outline-none w-full"
              />
            </div>
            <button className="bg-[#F8A82A] hover:bg-yellow-600 text-black px-4 py-2 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
