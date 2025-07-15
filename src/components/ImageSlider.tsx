"use client";
import { useState } from "react";
import Image from "next/image";

type ImageData = {
  src: string;
  alt: string;
};

type ImageSliderProps = {
  images: ImageData[];
  width: number;
  height: number;
};

export default function ImageSlider({ images, width, height }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-fit mx-auto">
      <div className="relative">
      <div className="relative mb-6" style={{ width: `${width}px`, height: `${height}px` }}>
        <Image
            src={images[current].src}
            alt={images[current].alt}
            fill
            className="rounded-lg object-cover"
        />
        </div>
        {/* Navigationsbuttons */}
        <button
          onClick={prevSlide}
          className="absolute bottom-3 left-3 bg-white/70 hover:bg-white text-[#16340A] rounded-full w-8 h-8 flex items-center justify-center shadow"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute bottom-3 right-3 bg-white/70 hover:bg-white text-[#16340A] rounded-full w-8 h-8 flex items-center justify-center shadow"
        >
          →
        </button>
      </div>
    </div>
  );
}
