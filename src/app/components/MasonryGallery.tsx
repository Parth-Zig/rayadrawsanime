import React from "react";
import Image from "next/image";

interface MasonryGalleryProps {
  category: string;
  imageUrls: string[];
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  category,
  imageUrls,
}) => {
  return (
    // xs sm md lg xl 
    <div className="w-full p-4 select-none border-2 md:container mx-auto">
      {/* Category Title */}
      <h2 className="text-2xl bg-gray-900 text-white hover:bg-gray-600 hver:text-white p-4 font-semibold mb-3 cursor-pointer">{category}</h2>

      {/* Scrollable Gallery Box */}
      <div className=" max-h-[66vh] overflow-y-auto scrollbar-hide">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-1 space-y-1">
          {imageUrls.map((url, index) => (
            <div key={index} className="break-inside-avoid">
              <Image
                src={url}
                height={400}
                width={400}
                alt={`Gallery Image ${index + 1}`}
                className="w-full  shadow-md pointer-events-none select-none"
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
