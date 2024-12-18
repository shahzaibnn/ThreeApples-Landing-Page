import React from "react";
import "../App.css";

export default function Section10() {
  return (
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
  );
}
