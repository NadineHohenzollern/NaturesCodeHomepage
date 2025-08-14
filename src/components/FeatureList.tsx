import React from 'react';

interface FeatureListProps {
  features: string[]; // Ein Array von Strings für die Features
  checkColor?: string; // Optionale Farbe für den Haken
  textColor?: string; // Optionale Farbe für den Text
}

const FeatureList: React.FC<FeatureListProps> = ({ 
  features, 
  checkColor = 'text-white', 
  textColor = 'text-white' 
}) => {
  return (
    <ul className="space-y-4 text-lg">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <span className={`mr-3 text-2xl ${checkColor}`}>✓</span>
          <span className={textColor}>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;