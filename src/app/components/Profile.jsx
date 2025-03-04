"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center p-6 py-8">
      {/* Background Blur when Modal is Open */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? "blur-md" : ""
        } w-full max-w-7xl`}
      >
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between flex-col sm:flex-row items-center gap-6">
          {/* Profile Image */}
          <div className="flex items-center justify-center h-80">
            <Image
              src="/Profile copy.tiff"
              alt="Profile Photo"
              width={256}
              height={256}
              className="rounded-full object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-gray-600 mt-2">
              Software Engineer | Passionate about building amazing products.
            </p>
            <button
              className="blackBtn mt-4 px-4 py-2  rounded-lg  transition"
              onClick={() => setIsOpen(true)}
            >
              View More
            </button>
          </div>
        </div>
      </div>

      {/* Modal - Background & Dialog Transition Separately */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay (Animates Separately) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-opacity-50 backdrop-blur-lg z-50"
              onClick={() => setIsOpen(false)} // Close when clicking outside
            />

            {/* Modal Content (Animates Separately) */}
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="fixed inset-x-0 top-10 mx-auto bg-white w-full max-w-4xl mt-40 p-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto z-50"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                More About John Doe
              </h3>
              <p className="text-gray-600 mt-2">
                John Doe is a senior software engineer with 10+ years of experience in full-stack development.
                He specializes in React, Next.js, and Tailwind CSS. Lorem ipsum dolor sit amet...
              </p>
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
