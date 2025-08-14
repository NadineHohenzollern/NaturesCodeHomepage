interface ButtonProps {
    text: string;
    link: string;
    color1: string; // Farbe für Umrandung und Text (normaler Zustand)
    color2: string; // Farbe für Hintergrund (normaler Zustand) und Text (Hover-Zustand)
  }
  
  const Button: React.FC<ButtonProps> = ({ text, link, color1, color2 }) => {
    return (
      <a
        href={link}
        className={`px-8 py-4 text-lg font-semibold text-${color1} border-2 border-${color1} rounded-full 
          hover:bg-${color1} hover:text-${color2} transition duration-300`}
      >
        {text}
      </a>
    );
  };

  export default Button