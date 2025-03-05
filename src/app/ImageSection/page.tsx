import React from "react";
import MasonryGallery from "../components/MasonryGallery";

export default function ImageSection() {
  const categories = ['Category1', 'Category2', 'Category3', 'Category4', 'Category5', 'Category6'];
  const imageCount = 8; // Number of images per category

  return (
    <div className="flex flex-col gap-20 items-center justify-center">
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
