import React from "react";
import "../App.css";
import { ArrowRightIcon } from "@heroicons/react/solid";
import students2 from "../assets/students2.png"; // Import the logo

import institute1 from "../assets/institute1.png"; // Import the logo
import institute2 from "../assets/institute2.png"; // Import the logo
import institute3 from "../assets/institute3.png"; // Import the logo
import institute4 from "../assets/institute4.png"; // Import the logo
import institute5 from "../assets/institute5.png"; // Import the logo
import institute6 from "../assets/institute6.png"; // Import the logo

export default function Section2() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Endorsed Across Canada</h2>
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
              Leading the forefront of EdTech innovation, Three Apples empowers
              educators to navigate productivity challenges, dismantle data
              silos, and enhance management efficiency. Our systems are all
              experience-engineered with a special focus on user-friendliness,
              cross-compatibility, and scalability, so you always stay on top of
              your business without compromising on time or budget.
            </p>
            <button className="bg-[#F8A82A] text-black px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
              Learn More
              <ArrowRightIcon className="ml-4 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
