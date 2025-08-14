import React from 'react';

interface ImageSectionProps {
  imagePath: string;
  altText: string;
  title?: string;
  textColor?: string;
  fontFamily?: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({ 
    imagePath, 
    altText, 
    title, 
    textColor = 'text-costumBlack', 
    fontFamily = 'font-encode',
  }) => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Wenn ein Titel vorhanden ist, wird er gerendert */}
        {title && (
          <h2 className={`text-3xl md:text-4xl mb-4 text-center ${textColor} ${fontFamily}`}>
            {title}
          </h2>
        )}
        <img
          src={imagePath}
          alt={altText}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default ImageSection;