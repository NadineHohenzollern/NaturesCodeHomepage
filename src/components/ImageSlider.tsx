"use client";

import React, { useState, useEffect, useCallback } from 'react';

// Define the props type for ImageSlider component
interface ImageSliderProps {
  images: string[]; // Array of image URLs
  imageTexts: string[]; // Array of texts corresponding to each image
  intervalDuration: number; // Duration in milliseconds for automatic slide
}

// Reusable ImageSlider Component
export default function ImageSlider({ images, imageTexts, intervalDuration }: ImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the previous image
  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  // Function to go to the next image
  const goToNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  }, [images.length]);

  // Automatically advance the slider
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, intervalDuration);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [intervalDuration, goToNext]);

  return (
    // Removed max-w-lg from here to allow the slider to expand fully within its parent
    <div className="relative w-full h-full max-h-lg rounded-lg shadow-lg overflow-hidden">
      <img
        src={images[currentImageIndex]}
        alt={`Pflanzenbild ${currentImageIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        style={{ opacity: 1 }} // Ensure image is visible
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          // Explicitly cast e.target to HTMLImageElement
          const target = e.target as HTMLImageElement;
          target.onerror = null; // Prevent infinite loop if fallback image also fails
          target.src = 'https://placehold.co/800x600/E7DFC6/131B23?text=Bildfehler';
        }}
      />

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none hover:bg-opacity-75 transition"
        aria-label="Previous image"
      >
        &#10094; {/* Left arrow character */}
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none hover:bg-opacity-75 transition"
        aria-label="Next image"
      >
        &#10095; {/* Right arrow character */}
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
            } focus:outline-none hover:bg-white transition`}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 rounded-b-lg z-10">
        <p className="text-center text-sm md:text-base">
          {imageTexts[currentImageIndex]}
        </p>
      </div>
    </div>
  );
}