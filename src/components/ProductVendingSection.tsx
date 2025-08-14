import FeatureList from "./FeatureList";
import Button from "./Button";

interface ProductVendingSectionProps {
    imagePath: string;
    altText: string;
    title: string;
    features: string[];
    buttonText: string;
    buttonLink: string;
    bgColor?: string;
    textColor?: string;
    checkColor?: string;
    fontFamily?: string; 
    imageWidth?: string; 
    imageHeight?: string;
    buttonColor1?: string;
    buttonColor2?: string;
  }
  
  const ProductVendingSection: React.FC<ProductVendingSectionProps> = ({
    imagePath,
    altText,
    title,
    features,
    buttonText,
    buttonLink,
    bgColor = 'bg-gray-900',
    textColor = 'text-white',
    checkColor = 'text-white',
    fontFamily = 'font-encode', 
    imageWidth = '400px', 
    imageHeight = '600px',
    buttonColor1 = 'white',
    buttonColor2 = 'costumBlack',
  }) => {
    return (
      <section className={`w-full py-16 px-4 lg:px-8 ${bgColor}`}>
        <div className="mx-auto max-w-7xl flex flex-col-reverse lg:flex-row-reverse items-center gap-12">
          {/* Rechter Bereich: Überschrift, FeatureList und Button */}
          <div className={`w-full lg:w-1/2 text-left ${fontFamily}`}>
            <h2 className={`text-4xl mb-6 ${textColor}`}>{title}</h2>
            <div className="mb-8">
              <FeatureList features={features} checkColor={checkColor} textColor={textColor} />
            </div>
            {/* Button */}
            <Button 
                text={buttonText} 
                link={buttonLink} 
                color1={buttonColor1} 
                color2={buttonColor2} 
            />
          </div>
  
          {/* Linker Bereich: Bild */}
          <div className="w-full lg:w-1/2">
            <img
              src={imagePath}
              alt={altText}
              className={`w-[${imageWidth}] h-[${imageHeight}] object-cover rounded-lg shadow-lg`}
            />
          </div>
        </div>
      </section>
    );
  };

export default ProductVendingSection