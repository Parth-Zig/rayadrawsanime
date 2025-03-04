import Image from "next/image";
import Link from "next/link";

interface ImageComponentProps {
  src: string;
  title: string;
  alt?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, title, alt }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        {/* Image Wrapper (Ensures overlay stays within image size) */}
        <div className="relative inline-block">
          {/* Image */}
          <Image
            src={src}
            alt={alt || title}
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gray-500 opacity-0 hover:opacity-50 transition-opacity duration-500 rounded-lg flex flex-col items-center justify-center">
            <span className="text-white text-lg font-semibold">{title}</span>
            <Link
              href="/ImageSection"
              className="text-white text-lg font-semibold"
            >
              More{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageComponent;
