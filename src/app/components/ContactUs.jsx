"use client";

import Image from "next/image";
import { useState } from "react";


export default function ContactUs() {
  const [formData, setFormData] = useState({ email: "", contact: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message Sent Successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-cente px-4 py-10">
      {/* Fixed Height Container */}
      <div className=" rounded-2xl shadow-lg w-full max-w-3xl flex flex-col md:flex-row overflow-hidden" style={{ height: "400px" }}>
        {/* Left Side - Large Textarea */}
        <div className="w-full h-full md:w-1/2 p-6 flex flex-col justify-center">
          <textarea
            name="message"
            className="w-full h-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
            placeholder="Brief your requirements - illustration/animation, type of art, budget, deadline & references (if any)."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Right Side - Inputs & Button */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between space-y-4">
        <div className="flex flex-col gap-6">

          <input
            type="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="contact"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Your Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div className=" justify-evenly items-center md:flex hidden">
          <Image src="/email.gif" alt="Animation" width={50} height={50} className="icon" />
          <Image src="/seal.gif" alt="Animation" width={50} height={50} className="icon" />
          <Image src="/email (1).gif" alt="Animation" width={50} height={50} className="icon" />
        </div>

          <button
            type="submit"
            className="blackBtn w-full  py-3 rounded-lg text-lg font-semibold  transition"
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
