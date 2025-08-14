import FeatureList from "./FeatureList";
import Button from "./Button";


interface ProductCardProps {
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
  
  const ProductCard: React.FC<ProductCardProps> = ({
    imagePath,
    altText,
    title,
    features,
    buttonText,
    buttonLink,
    bgColor,
    textColor = 'text-white',
    checkColor = 'text-white',
    fontFamily = 'font-sans',
    imageWidth = '400px',
    imageHeight = '600px',
    buttonColor1 = 'white',
    buttonColor2 = 'costumBlack',
  }) => {
    return (
      // Haupt-Container für die Karte, zentriert alle Kind-Elemente
      <div className={`p-8 rounded-lg shadow-lg bg-${bgColor} ${fontFamily} flex flex-col items-center text-center`}>
        {/* Bild */}
        <img
          src={imagePath}
          alt={altText}
          className={`w-[${imageWidth}] h-[${imageHeight}] object-cover rounded-lg shadow-lg mb-6`}
        />
        
        {/* Überschrift */}
        <h2 className={`text-4xl mb-6 ${textColor}`}>{title}</h2>
  
        {/* FeatureList */}
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
    );
  };

export default ProductCard;