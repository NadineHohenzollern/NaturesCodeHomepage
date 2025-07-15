"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  {
    src: "/elevate/elevate_1.jpg",
    alt: "Elevate 1",
  },
  {
    src: "/elevate/elevate_2.jpg",
    alt: "Elevate 2",
  },
  {
    src: "/elevate/elevate_4.jpg",
    alt: "Elevate 4",
  },
];

export default function ElevateSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-xs mx-auto bg-[#D8E1D0] rounded-xl shadow-lg p-3 text-center">
      <div className="relative">
      <div className="relative w-[300px] h-[430px] mb-6">
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          className="rounded-lg object-cover"
        />
      </div>

        {/* Nav Buttons im Bild */}
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

      <h3 className="text-2xl font-semibold mb-3 text-[#121113]">Elevate</h3>
      <p className="text-[#121113] text-base mb-6">
        Die Hängelampe für perfektes Licht. <br />
        elegant – unaufdringlich – effektiv
      </p>
      <button className="mb-6 px-8 py-4 text-lg font-semibold text-[#16340A] border-2 border-[#16340A] rounded-full hover:bg-[#16340A] hover:text-[#E5EEDE] transition duration-300">
        Elevate entdecken
      </button>
    </div>
  );
}
