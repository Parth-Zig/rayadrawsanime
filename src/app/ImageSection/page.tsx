import React from "react";
import MasonryGallery from "../components/MasonryGallery";

export default function ImageSection() {
  const categories = ['Pixel', 
    'Nature', 
    'Anime', 
    // 'Category4', 
    // 'Category5', 
    // 'Category6'
  ];
  const imageCount = 8; // Number of images per category

  return (
    <div className="flex flex-col gap-20 items-center justify-center pb-6">
      {categories.map(category => (
        <MasonryGallery
          key={category}
          category={category}
          imageUrls={Array.from({ length: imageCount }, (_, i) => `/${category.toLowerCase()}/${i + 1}.webp`)}
        />
      ))}
    </div>
  );
}
