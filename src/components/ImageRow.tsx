"use client";

type ImageRowProps = {
  images: { src: string; alt: string }[];
};

export default function ImageRow({
  images
}: ImageRowProps) {
  return (
    <div className="flex w-full">
      {images.map((img, index) => (
        <img
            src={img.src}
            alt={img.alt}
            className="w-1/3 h-auto object-cover"
        />
      ))}
    </div>
  );
}


