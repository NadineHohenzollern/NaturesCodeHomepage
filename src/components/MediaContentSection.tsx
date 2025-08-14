import React from 'react';

interface MediaContentSectionProps {
  imagePath: string;
  heading: string;
  text: string;
  bgColor: string;
  textColor: string;
  isImageLeft?: boolean;
  fontFamily?: string;
}

const MediaContentSection: React.FC<MediaContentSectionProps> = ({
  imagePath,
  heading,
  text,
  bgColor,
  textColor,
  isImageLeft = true,
  fontFamily = 'font-encode',
}) => {
  const imageOrderClass = isImageLeft ? 'lg:order-first' : 'lg:order-last';

  return (
    <section className={`w-full ${bgColor} ${textColor} py-0`}>
      <div className="flex flex-col lg:flex-row items-center px-4 lg:px-0">
        <div className={`w-full lg:w-1/2 mb-8 lg:mb-0 ${imageOrderClass}`}>
          <img
            src={imagePath}
            alt={heading}
            className="w-full aspect-square object-contain rounded-lg shadow-lg"
          />
        </div>
        <div className={`w-full lg:w-1/2 px-4 lg:px-0`}>
          <div className="flex h-full items-center justify-center">
            <div className={`max-w-md p-4 text-left ${fontFamily}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
              <p className="text-base md:text-lg mb-6">
                {text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaContentSection;