// pages.tsx
import React from 'react';
import Link from 'next/link';
import ImageSlider from "@/components/ImageSlider";
import ImageRow from "@/components/ImageRow";
import ImageFeatureRow from "@/components/ImageFeatureRow";
import FeatureList from '@/components/FeatureList';
import Button from '@/components/Button';

const elevateImages = [
  { src: "/elevate/elevate_1.jpg", alt: "Elevate 1" },
  { src: "/elevate/elevate_2.jpg", alt: "Elevate 2" },
  { src: "/elevate/elevate_4.jpg", alt: "Elevate 3" },
];

const flowpotImages = [
  { src: "/flowpot/flowpot_1.jpg", alt: "Flowpot 1" },
  { src: "/flowpot/flowpot_1.jpg", alt: "Flowpot 2" },
];

const nurtureImages = [
  { src: "/plants/plants_1.jpg", alt: "Nurture 1" },
  { src: "/plants/plants_1.jpg", alt: "Nurture 2" },
];

const appImages = [
  { src: "/plants/plants_1.jpg", alt: "Nurture 1" },
  { src: "/plants/plants_1.jpg", alt: "Nurture 2" },
];

const imagesPlants = [
  { src: "/plants/plants_3.jpg", alt: "Plant 1" },
  { src: "/plants/plants_5.jpg", alt: "Plant 2" },
  { src: "/plants/plants_6.jpg", alt: "Plant 3" },
];

const urbanEcosystemfeatures = [
  {
    src: "/elevate/elevate_1.jpg",
    alt: "lighting",
    title: "Elevate",
    description: "Optimales Pflanzenlicht für jedes Wohnzimmer. Elegant, unaufdringlich, effektiv.",
    overlayText: (
      <>
        <FeatureList
          features={[
            'Optimiertes Licht für Pflanzenwachstum',
            'Einstellbarer Abstrahlwinkel gegen Blendung',
            'Stufenlos dimmbar',
            'Zeitloses und minimalistisches Design',
            'Angenehmes, warm-weißes Licht',
          ]}
        />
    
        {/* Pfeil mit 'Erfahre mehr' */}
        <div className="mt-10 text-center">
          {/* Hier kommt dein "Erfahre mehr"-Inhalt rein */}
        </div>
    
        {/* Pfeil mit 'Erfahre mehr' */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center text-white text-lg font-medium hover:underline"
          >
            Erfahre mehr
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </>
    )
  },
  {
    src: "/flowpot/flowpot_1.jpg",
    alt: "watering",
    title: "Flowline",
    description: "Automatisches Gießen durch smarte Sensorik. Bis zu acht Wochen nicht ans Gießen denken.",
    overlayText: 
      ((
        // Liste mit Features
        <div>
          <ul className="space-y-4 text-lg text-white">
            <li className="flex items-start">
              <span className="text-white mr-3 text-2xl">✓</span>
              {/* <span><strong className="text-white">Automatisiertes Gießen</strong> für mindestens vier Wochen.</span> */}
              <span><strong className="text-white">Automatisierte Bewässerung von Topf und Rankstab</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3 text-2xl">✓</span>
              {/* <span><strong className="text-white">Bewässerung des Rankstabes</strong> reduziert den Pflegeaufwand drastisch.</span> */}
              <span><strong className="text-white">Drastisch reduzierter Pflegeaufwand</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3 text-2xl">✓</span>
              <span><strong className="text-white">Kein Nachfüllen für mindestens vier Wochen</strong></span>
            </li> 
            <li className="flex items-start">
              <span className="text-white mr-3 text-2xl">✓</span>
              <span><strong className="text-white">App-Steuerung und Notifications</strong></span>
              {/* <span><strong className="text-white">App-Steuerung</strong> für Einblicke in dein Pflanzenwachstum.</span> */}
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3 text-2xl">✓</span>
              <span><strong className="text-white">Parameter Monitoring</strong></span>
              {/* <span><strong className="text-white">Überwachung entscheidender Parameter</strong> wie Temperatur und Luftfeuchtigkeit.</span> */}
            </li>
            {/* <li className="flex items-start">
              <span className="text-white mr-3 text-2xl">✓</span>
              <span><strong className="text-white">Notifications</strong> um an das Nachfüllen erinnert zu werden.</span>
            </li> */}
          </ul>

          {/* Pfeil mit 'Erfahre mehr' */}
          <div className="mt-10 text-center">
            <a
              href="#"
              className="inline-flex items-center text-white text-lg font-medium hover:underline"
            >
              Erfahre mehr
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      )
    )
  },
  {
    src: "/plants/plants_1.jpg",
    alt: "nurturing",
    title: "Thrive",
    description: "Maßgefertigtes und individuelles Gießwasser. Für makellose Pflazen.",
  },
];

// images data for the ImageSlider with impressive plant growth
const bigPlants_images = [
  '/plants/plants_7.jpg',
  '/plants/plants_8.jpg',
  '/plants/plants_9.jpg',
];
const bigPlants_text = [
  'Unsere 6 Monate alte Monstera',
  'Usere Anthurie nach 2 Jahren',
  'Irgendeine andere Pflanze nach x Monaten',
];
const imageSlider_intervalDuration = 6000; // 3 seconds

// Main App component for the Nature's Code homepage
const App: React.FC = () => {
  return (
    <div className="font-encode antialiased text-costumGreen bg-costumBlack">
      {/* 1. Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/greenPlants.jpg')" }}>
        {/* Overlay with costumBlack for depth and text readability */}
        <div className="absolute inset-0 bg-[#131B23] opacity-60"></div>
        <div className="relative z-10 text-center text-[#E7DFC6] p-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl  leading-tight mb-6 rounded-lg text-[#F6FFF8]">
            Urbanes Ökosystem
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 text-[#F6FFF8]">
            <strong> Systematische Optimierung deiner Zimmerpflanzen. </strong>
            <br />
            professionell - mühelos - automatisiert 
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            text={"Entdecke das Urbane Ökosystem"}
            link={"/shadebar"} 
            color1={"[#F6FFF8]"}
            color2={"[#131B23]"}
          />
          </div>
        </div>
      </section>

      {/* 3. Quote Section */}
      <section className="relative py-20 bg-[#121113] text-[#E5EEDE] flex items-center justify-center overflow-hidden">
       <div className="absolute inset-0 flex items-center justify-center">
         {/* Large quotation marks as background elements */}
         <span className="text-[15rem] md:text-[20rem] font-serif text-gray-700 opacity-10 leading-none">“</span>
         <span className="absolute bottom-0 right-0 text-[15rem] md:text-[20rem] font-serif text-gray-700 opacity-10 leading-none rotate-180">”</span>
       </div>
       <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
         <p className="text-2xl md:text-3xl mb-6 italic font-semibold">
           "Hier steht Ihr großes Zitat, das die Essenz Ihrer Botschaft einfängt und visuell hervorgehoben wird."
         </p>
       </div>
      </section>

      {/* 2. Showcase impressive plant growth */}
      <div className="flex flex-col md:flex-row h-screen w-screen bg-[#F3F3F0]">
        {/* Left section for Image Slider */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <ImageSlider
            images={bigPlants_images}
            imageTexts={bigPlants_text}
            intervalDuration={imageSlider_intervalDuration}
          />
        </div>

        {/* Right section for Text Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-[#F3F3F0] shadow-lg rounded-lg m-4 md:m-0">
          <div className="text-gray-800 max-w-md text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4 text-green-700">Wenn Pflanzen bekommen, was sie brauchen.</h1>
            <p className="text-lg leading-relaxed mb-4">
              Gewöhnliche Zimmerpflanzen wachsen über sich hinaus. 
              Anspruchsvolle Arten gedeihen mit Leichtigkeit. 
              Was sonst Jahre dauert, geschieht hier in Monaten. 
            </p>
            <p className="text-lg leading-relaxed">
              Das ist kein gewöhnliches Wachstum – es ist Jungle-Wachstum mitten in der Stadt.
            </p>
            <p className="text-md mt-6 text-gray-600">
              Jedes Bild erzählt die Erfolgsgeschichte einer unserer Pflanzen. Lassen Dich inspirieren!
            </p>
          </div>
        </div>
      </div>

      {/* Value Proposition: Urbanes Ökosystem */}
      <section className="py-20 bg-[#F3F3F0]"> 
      <div className="text-center">
        <h1 className="text-5xl  mb-3 text-[#121113]">Urbanes Ökosystem</h1>
      </div>
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:space-x-12">
          <ImageFeatureRow features={urbanEcosystemfeatures} />
        </div>
      </section>

      {/* Bilderkollektion */}
      <section className="flex w-full overflow-hidden">
        <ImageRow images={imagesPlants} />
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#121113] text-[#E5EEDE]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
        <h3 className="text-3xl font-bold mb-8 text-[#E5EEDE]">Mühelos ästhetisch. </h3>
          <p className="text-lg md:text-xl mb-6">
            
          </p>
          <p className="text-lg md:text-xl">
            {/* Als Dekoration oder Statussymbol sind eindrucksvolle Zimmerpflanzen längst Bestandteil moderner Wohn- und Arbeitsräume. 
            Doch ihre Pflege ist mühsam und Ergebnisse bleiben mittelmäßig. 
            <br /><br />*/}

            Wir {/* von Nature's Code */}wollen die Modernisierung der Pflanzenpflege vorantreiben. 
            Die Pflege von Zimmerpflanzen ist mühsam und zu oft erfolglos. 
            Deshalb haben wir ein System entwickelt, das dir nicht nur <strong>95% der Arbeit abnimmt</strong>,
            sondern dein Pflanzenwachstum optimiert - basierend auf Expertenwissen. 

            Damit deine <strong>Pflanzen länger leben</strong>, <strong>schneller wachsen</strong> und <strong>größere Blätter</strong>  bekommen.
            
            <br /><br />
            Wir wollen das Ende des technischen Rückstands in der Pflanzenpflege sein, und der Anfang grenzenlos grüner Raumgestaltung. 
            Werde auch du Teil unserer Mission - wir freuen uns auf dich! 
            {/* Modern, effektiv und ästhetisch. */}

          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
