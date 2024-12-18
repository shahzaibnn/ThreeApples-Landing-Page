import React from "react";
import "./App.css";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid"; // import the icon
import { VideoCameraIcon } from "@heroicons/react/solid"; // Import the icon
import { ArrowRightIcon } from "@heroicons/react/solid";
import threeApplesLogo from "./assets/threeApplesLogo.png"; // Import the logo
import students from "./assets/students.png"; // Import the logo
import designBackground from "./assets/designBackground.png"; // Import the logo
import students2 from "./assets/students2.png"; // Import the logo
import students3 from "./assets/students3.png"; // Import the logo
import students4 from "./assets/students4.png"; // Import the logo
import students5 from "./assets/students5.png"; // Import the logo
import students6 from "./assets/students6.png"; // Import the logo
import students7 from "./assets/students7.png"; // Import the logo
import students8 from "./assets/students8.png"; // Import the logo
import students9 from "./assets/students9.png"; // Import the logo

import institute1 from "./assets/institute1.png"; // Import the logo
import institute2 from "./assets/institute2.png"; // Import the logo
import institute3 from "./assets/institute3.png"; // Import the logo
import institute4 from "./assets/institute4.png"; // Import the logo
import institute5 from "./assets/institute5.png"; // Import the logo
import institute6 from "./assets/institute6.png"; // Import the logo

import preference1 from "./assets/preference1.png"; // Import the logo
import preference2 from "./assets/preference2.png"; // Import the logo

import preference3 from "./assets/preference3.png"; // Import the logo

import preference4 from "./assets/preference4.png"; // Import the logo
import laptop from "./assets/laptop.png"; // Import the logo
import phone from "./assets/phone.png"; // Import the logo
import mail from "./assets/mail.png"; // Import the logo
import user from "./assets/user.png"; // Import the logo
import fbLogo from "./assets/fbLogo.png"; // Import the logo
import linkedinLogo from "./assets/linkedinLogo.png"; // Import the logo
import instagramLogo from "./assets/instagramLogo.png"; // Import the logo
import twitterLogo from "./assets/twitterLogo.png"; // Import the logo

import blueLinear from "./assets/blueLinear.png"; // Import the logo

import facebookLogo2 from "./assets/facebookLogo2.png"; // Import the logo
import linkedinLogo2 from "./assets/linkedinLogo2.png"; // Import the logo
import youtubeLogo2 from "./assets/youtubeLogo2.png"; // Import the logo
import twitterLogo2 from "./assets/twitterLogo2.png"; // Import the logo

function App() {
  return (
    <div className="bg-white min-h-screen pb-10">
      {/* Header Section */}
      <div className="bg-[#0B1546] pt-6">
        <header className="flex items-center justify-between bg-white px-12 py-3 mx-4 rounded-full shadow-lg">
          <div className="font-bold text-2xl text-black">
            <div className="flex items-center">
              <img
                src={threeApplesLogo}
                alt="Logo"
                className="h-10 w-30 mr-2"
              />{" "}
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
            it's enrollments, tuition, financial or daily operations, Three
            Apples puts control at your fingertips!
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
          <img
            src={designBackground}
            alt="DesignBackground"
            className="w-full"
          />

          <img
            src={students}
            alt="Students"
            className="absolute w-[80%] md:w-[60%] h-full object-cover"
          />
        </div>
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
                <img src={phone} alt="Icon" className="h-6 w-6 mb-1 mr-2" />{" "}
                (817) 810-3785
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
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 text-2xl"
              >
                <img src={fbLogo} alt="Icon" className="h-6 w-6 mb-1" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 text-2xl"
              >
                <img src={twitterLogo} alt="Icon" className="h-6 w-6 mb-1" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 text-2xl"
              >
                <img src={instagramLogo} alt="Icon" className="h-6 w-6 mb-1" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 text-2xl"
              >
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
          <div className="mt-12 flex justify-center">
            <button className="bg-[#F8A82A] text-black px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
              Read More Articles
              <ArrowRightIcon className="ml-4 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
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

      <div class="flex justify-center items-start space-x-12 flex-wrap">
        {/* <!-- Company Section --> */}
        <div class="flex flex-col items-start">
          <h4 class="font-bold mb-2 text-left">Company</h4>
          <ul class="space-y-1 text-sm text-gray-600 text-left">
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* <!-- Ed Tech Section --> */}
        <div class="flex flex-col items-start">
          <h4 class="font-bold mb-2 text-left">Ed Tech</h4>
          <ul class="space-y-1 text-sm text-gray-600 text-left">
            <li>Students Information System</li>
            <li>K12 School App</li>
            <li>Day Care Montessori Software</li>
            <li>Students Online Portal</li>
          </ul>
        </div>

        {/* <!-- Website Section --> */}
        <div class="flex flex-col items-start">
          <h4 class="font-bold mb-2 text-left">Website</h4>
          <ul class="space-y-1 text-sm text-gray-600 text-left">
            <li>Website Development</li>
            <li>Website Revamp</li>
            <li>UI/UX Design</li>
            <li>E-Commerce Solutions</li>
            <li>Content Writing</li>
          </ul>
        </div>

        {/* <!-- Bespoke Solutions Section --> */}
        <div class="flex flex-col items-start">
          <h4 class="font-bold mb-2 text-left">Bespoke Solutions</h4>
          <ul class="space-y-1 text-sm text-gray-600 text-left">
            <li>CRM</li>
            <li>Inventory Software</li>
            <li>Mobile Application</li>
            <li>Web Application</li>
            <li>Custom Solutions</li>
          </ul>
        </div>

        {/* <!-- Digital Services Section --> */}
        <div class="flex flex-col items-start">
          <h4 class="font-bold mb-2 text-left">Digital Services</h4>
          <ul class="space-y-1 text-sm text-gray-600 text-left">
            <li>Students Enrolment Leads</li>
            <li>Graphic Designing</li>
            <li>Content Creation</li>
            <li>Social Media Management</li>
            <li>SEO</li>
          </ul>
        </div>

        {/* <!-- Marketing Services Section --> */}
        <div class="flex flex-col items-start">
          <h4 class="font-bold mb-2 text-left">Marketing Services</h4>
          <ul class="space-y-1 text-sm text-gray-600 text-left">
            <li>YouTube Ads</li>
            <li>PPC Ads</li>
            <li>Meta Ads</li>
            <li>E-mail Marketing</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-600 px-20">
        {/* Dropdown for Languages */}
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
          <select
            id="language"
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>

        {/* Text Data */}
        <div className="flex items-center mb-4 md:mb-0">
          <p>© 2024 Brand, Inc. • Privacy • Terms • Sitemap</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-blue-600">
            <img src={twitterLogo2} alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" className="text-blue-700">
            <img src={facebookLogo2} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" className="text-blue-500">
            <img src={linkedinLogo2} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="#" className="text-red-500">
            <img src={youtubeLogo2} alt="YouTube" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
