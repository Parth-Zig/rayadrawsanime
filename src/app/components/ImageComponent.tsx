"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface ImageComponentProps {
  src: string;
  title: string;
  alt?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, title, alt }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Image Wrapper */}
      <motion.div
        className="relative inline-block"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Image */}
        <Image
          src={src}
          alt={alt || title}
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />

        {/* Overlay with Framer Motion */}
        <motion.div
          className="absolute inset-0 bg-gray-900 rounded-lg flex flex-col items-center justify-center cursor-pointer"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.6 }}
          transition={{ duration: 0.3 }}
          onClick={() => router.push("/ImageSection")}
        >
          <div className="flex items-center justify-center flex-col px-10 gap-8">
          <p className="text-white text-lg font-bold m-auto">{title}</p>
          <p className="text-white text-base font-semibold">Click To View More</p>
          </div>
   
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageComponent;
