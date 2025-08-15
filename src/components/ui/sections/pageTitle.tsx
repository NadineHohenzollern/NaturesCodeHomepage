import React from 'react';

interface TitleSectionProps {
  title: string;
  caption: string;
  image: string;
}

/**
 * Eine Komponente, die einen Abschnitt mit einem Hintergrundbild, Titel und einer Bildunterschrift anzeigt.
 * Das Bild wird über die gesamte Breite und Höhe des Abschnitts gestreckt.
 * Titel und Bildunterschrift werden unten links überlagert.
 *
 * @param {string} title - Der Haupttitel.
 * @param {string} caption - Die Bildunterschrift oder der Untertitel.
 * @param {string} image - Der URL zum Bild.
 */
const TitleSection: React.FC<TitleSectionProps> = ({ title, caption, image }) => {
  return (
    // Relativer Container für die Positionierung des Bildes und des Textes
    <div className="relative w-full h-[66vh] overflow-hidden rounded-xl shadow-xl">
      {/* Das Hintergrundbild, das den gesamten Container füllt */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Ein Overlay-Div mit einem Farbverlauf, um den Text lesbarer zu machen */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 to-transparent z-10">
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-2 leading-tight">
          {title}
        </h1>
        <p className="text-white text-lg sm:text-xl font-medium">
          {caption}
        </p>
      </div>
    </div>
  );
};

export default TitleSection;