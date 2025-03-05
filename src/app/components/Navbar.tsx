"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:container mx-auto flex justify-between items-center p-4 pb-8 z-40">
      {/* Logo */}
      <div className="text-3xl font-bold">
        <Link href="/">Logo</Link>
      </div>

      {/* Desktop Menu */}
      <div className="text-lg hidden md:flex items-center gap-8">
        <Link href="#" className="hover:text-gray-400 transition">Instagram@Id</Link>
        <Link href="#" className="hover:text-gray-400 transition">Telegram@Id</Link>
        <Link href="#" className="hover:text-gray-400 transition">Email@Id</Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={35} /> : <Menu size={35} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 flex flex-wrap justify-evenly gap-4 items-center md:hidden z-40 "
          >
            <Link href="#" className="hover:text-gray-400 transition">Instagram@Id</Link>
            <Link href="#" className="hover:text-gray-400 transition">Telegram@Id</Link>
            <Link href="#" className="hover:text-gray-400 transition">Email@Id</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
