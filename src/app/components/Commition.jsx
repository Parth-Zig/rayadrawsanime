"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Commition() {
  const [isDollar, setIsDollar] = useState(true);

  const prices = {
    illustration: { usd: 20, inr: 800 },
    animation: { usd: 39, inr: 1600 },
    writing: { usd: 2.5, inr: 80 },
  };

  return (
    <div className="flex flex-col items-center p-6 px-10">
      <p className="font-bold text-3xl px-4 pb-4">
        Give me a chance to create beautiful designs & illustrations for you or
        your company
      </p>
      <p className="px-12">
        Use contact form, write me on Telegram or shoot me an email. I will
        understand your requirements and get back to you as soon as possible.
      </p>

      <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-900">USD</span>
      
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={!isDollar}
          onChange={() => setIsDollar((prev) => !prev)}
        />
        
        {/* Switch Background */}
        <motion.div
          className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-gray-600 relative"
          layout
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Moving Circle */}
          <motion.div
            className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md"
            animate={{ x: isDollar ? 0 : 24 }} // Moves smoothly
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>
      </label>
      
      <span className="text-sm font-medium text-gray-900">INR</span>
    </div>

      {/* Pricing Cards */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6"> */}
      <div className="flex flex-col sm:flex-row gap-6 justify-between w-full max-w-6xl p-6">
        {/* Illustration */}
        <div className="responsive-icon bg-white rounded-lg shadow-lg flex flex-row sm:flex-col items-center p-6">
          <Image
            src="/painting.gif"
            alt="Illustration"
            width={100}
            height={100}
            className="icon"
          />
          <div>
            <p className="mt-2 font-semibold">Illustration</p>
            <p>
              Starting at{" "}
              {isDollar
                ? `$${prices.illustration.usd}`
                : `₹${prices.illustration.inr}`}
            </p>
          </div>
        </div>

        {/* Animation */}
        <div className="responsive-icon bg-white rounded-lg shadow-lg flex flex-row sm:flex-col items-center p-6">
          <Image
            src="/video.gif"
            alt="Animation"
            width={100}
            height={100}
            className="icon"
          />
          <div className="">
            <p className="mt-2 font-semibold">Animation</p>
            <p>
              Starting at{" "}
              {isDollar
                ? `$${prices.animation.usd}`
                : `₹${prices.animation.inr}`}
            </p>
          </div>
        </div>

        {/* Writing */}
        <div className="responsive-icon bg-white rounded-lg shadow-lg flex flex-row sm:flex-col items-center p-6">
          <Image
            src="/typewriter.gif"
            alt="Writing"
            width={100}
            height={100}
            className="icon"
          />
          <div>
            <p className="mt-2 font-semibold">Writing</p>
            <p>
              Starting at{" "}
              {isDollar ? `$${prices.writing.usd}` : `₹${prices.writing.inr}`}
            </p>
            <p>per 100 words</p>
          </div>
        </div>
      </div>
    </div>
  );
}
