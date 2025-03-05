"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
interface MasonryGalleryProps {
  category: string;
  imageUrls: string[];
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  category,
  imageUrls,
}) => {
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full p-4 select-none md:container mx-auto">
      {/* Category Title */}
      <div className=" text-2xl bg-gray-900 text-white  hover:text-white  font-semibold mb-3 cursor-pointer flex  items-center justify-between">
        <p
        className="h-full border-r-2  p-4 hover:bg-gray-600 grow"
          onClick={() => {
            galleryRef.current?.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {category}
        </p>
        <p className=" p-4 hover:bg-gray-600"
                  onClick={() => {
                    galleryRef.current?.scrollTo({ top: galleryRef.current.scrollHeight, behavior: "smooth" });
                  }}
        >
          <ChevronDown  size={30}/>
        </p>
      </div>

      {/* Scrollable Gallery Box */}
      <div
        ref={galleryRef}
        className="max-h-[66vh] overflow-y-auto scrollbar-hide"
      >
        <div className="columns-2 md:columns-3 lg:columns-4 gap-1 space-y-1">
          {imageUrls.map((url, index) => (
            <div key={index} className="break-inside-avoid">
              <Image
                src={url}
                height={400}
                width={400}
                alt={`Gallery Image ${index + 1}`}
                className="w-full shadow-md pointer-events-none select-none "
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MasonryGallery;
