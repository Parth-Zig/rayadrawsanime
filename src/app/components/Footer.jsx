"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        
        {/* Copyright Notice */}
        <p className="text-sm mb-3 md:mb-0">
          © {new Date().getFullYear()} All Rights Reserved.  
          <span className="text-white"> All images & artwork are copyrighted.</span>
        </p>

        {/* Terms & Credits */}
        <div className="flex gap-4 text-sm">
          <Link href="/terms" className="hover:text-white transition">
            Terms of Use
          </Link>
          <Link href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Reuse Disclaimer */}
      <div className="mt-4 text-center text-xs text-gray-500">
        If you wish to reuse any images, please credit the creator and obtain proper permission.
      </div>
    </footer>
  );
}
