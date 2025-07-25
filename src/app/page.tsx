// pages.tsx
import React from 'react';
import Image from 'next/image'; 
import ImageSlider from "@/components/ImageSlider";
import ImageRow from "@/components/ImageRow";
import ImageFeatureRow from "@/components/ImageFeatureRow";

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
    overlayText: 
      (<div>
        <ul className="space-y-4 text-lg text-white">
          <li className="flex items-start">
            <span className="text-white mr-3 text-2xl">✓</span>
            {/* <span><strong className="text-white">Effektives Licht</strong> selbst bei begrenzter Fensterfläche.</span> */}
            <span><strong className="text-white">Optimiertes Licht für Pflanzenwachstum</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 text-2xl">✓</span>
            {/* <span><strong className="text-white">Flexibler Abstrahlwinkel</strong> gegen Blendung.</span> */}
            <span><strong className="text-white">Einstellbarer Abstrahlwinkel gegen Blendung</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 text-2xl">✓</span>
            {/* <span><strong className="text-white">Dimmbarkeit</strong> für angepasstes Licht an jede Tageszeit.</span> */}
            <span><strong className="text-white">Stufenlos dimmbar</strong></span> 
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 text-2xl">✓</span>
            {/* <span><strong className="text-white">Zeitloses Design</strong> für elegante Integration in jedes Designer-Interior.</span> */}
            <span><strong className="text-white">Zeitloses und minimalistisches Design</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 text-2xl">✓</span>
            {/* <span><strong className="text-white">Angenehmes Licht</strong> für eine gemütliche Atmosphäre.</span> */}
            <span><strong className="text-white">Angenehmes, warm-weißes Licht</strong></span>
          </li>
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
      </div>)
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

// Main App component for the Nature's Code homepage
const App: React.FC = () => {
  return (
    // Tailwind CSS is assumed to be loaded via CDN in the HTML file
    // Overall background is customBlack, default text is green2 for a dark theme
    <div className="font-encode antialiased text-green2 bg-[#131B23]">
      {/* Header / Navigation */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4 bg-transparent">
        <nav className="container flex items-center justify-between mx-auto">
          <div className="text-2xl font-bold text-[#D8E1D0]">Nature&apos;s Code</div>
          <ul className="flex space-x-6 text-lg text-[#A8B69F]">
            <li><a href="#" className="hover:text-[#D8E1D0] transition duration-300">Shop</a></li>
            <li><a href="#" className="hover:text-[#D8E1D0] transition duration-300">Tools</a></li>
            <li><a href="#" className="hover:text-[#D8E1D0] transition duration-300">Blog</a></li>
            <li><a href="#" className="hover:text-[#D8E1D0] transition duration-300">Über uns</a></li>
            <li><a href="#" className="hover:text-[#D8E1D0] transition duration-300">FAQ</a></li>
            <li><a href="#" className="hover:text-[#D8E1D0] transition duration-300">Kontakt</a></li>
          </ul>
        </nav>
      </header>

      {/* 1. Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/greenPlants.jpg')" }}>
        {/* Overlay with costumBlack for depth and text readability */}
        <div className="absolute inset-0 bg-[#131B23] opacity-60"></div>
        <div className="relative z-10 text-center text-[#E7DFC6] p-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl  leading-tight mb-6 rounded-lg text-[#F6FFF8]">
            Urbanes Ökosystem
          </h1>
          {/* <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 rounded-lg text-[#7BBD9F]"> 
            Imitiert die Natur. Vollautomatisiert durch Technik.
          </h2> */}
          <p className="text-xl md:text-2xl mb-8 opacity-90 text-[#F6FFF8]">
            {/* Ganzheitliche Pflanzenpflege 
            <br />
            <strong> vollautomatisiert und professionell.</strong>
            <br />
            Für langlebige, große, und gesunde Pflanzen.   */}
            <strong> Systematische Optimierung deiner Zimmerpflanzen. </strong>
            <br />
            professionell - mühelos - automatisiert 
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-8 py-4 text-lg font-semibold text-[#F6FFF8] border-2 border-[#F6FFF8] rounded-full hover:bg-[#F6FFF8] hover:text-[#131B23] transition duration-300">
            Entdecke das Urbane Ökosystem
          </button>
            {/* <button className="px-8 py-4 text-lg font-semibold text-[#131B23] bg-[#E7DFC6] rounded-full shadow-lg hover:bg-[#B4A694] hover:text-[#283037] transition duration-300">
              Jetzt kaufen
            </button> */}
          </div>
        </div>
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

      {/* Value Proposition: Urbanes Ökosystem */}
      <section className="py-20 bg-[#F3F3F0]"> {/* green2 background */}
      <div className="text-center">
        <h1 className="text-5xl  mb-3 text-[#121113]">Urbanes Ökosystem</h1>
        {/* <h2 className="text-2xl font-bold text-[#121113]">Das Gesamtkonzept für deine Zimmerpflanzen</h2>
        <p className="text-lg d:text-xl mb-6 text-[#121113]">
            Kleine Fenster, dunkle Ecken und zu wenig Sonnenlicht sind der Hauptgrund, weshalb das Wachstum deiner Pflanzen stagniert. 
            
        </p> */}
      </div>
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image src='/plants/plants_2.jpg' alt="Elegante Hängelampe im Wohnraum" width={700} height={500} className="rounded-xl shadow-lg w-full" />
            <p className="mt-4 text-green4 text-sm text-center">Ästhetisches Bild mit Topf, Pflanze, Lampe und entspannter Person daneben.</p>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-[#121113]">Komfortable Gesamtlösung <br />für deine Pflanzenpflege.</h2>
            <ul className="space-y-4 text-lg text-green4">
              <li className="flex items-start">
                <span className="text-[#121113] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#121113]">Laglebige Pflanzen.</strong> Behebt den häufigsten Grund für stagnierendes Wachstum oder Pflanzensterben - Lichtmangel.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#121113] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#121113]">Automatisiertes Gießen.</strong> Nie wieder an Gießen denken oder durch ausgetrocknete Blätter erinnert werden.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#121113] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#121113]">Wachstumssteigerung.</strong> Liefert den Schlüssel für große, gesunde und schöne Pflanzen - die richtige Nährstoffversorgung.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#121113] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#121113]">Kein Zeitaufwand.</strong> Übernimmt für dich vollautomatisiert die Aufgaben der Pflanzenpflege wie ein profesioneller Botaniker.</span>
              </li>
            </ul>
          </div> */}
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
    

      

      {/* 11. Footer */}
      <footer className="bg-costumBlack text-green2 py-12"> {/* Darkest background for footer */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-green2 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green1 transition duration-200">Shop</a></li>
              <li><a href="#" className="hover:text-green1 transition duration-200">Über uns</a></li>
              <li><a href="#" className="hover:text-green1 transition duration-200">FAQ & Hilfe</a></li>
              <li><a href="#" className="hover:text-green1 transition duration-200">Kontakt</a></li>
              <li><a href="#" className="hover:text-green1 transition duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-green1 transition duration-200">Mein Konto</a></li>
              <li><a href="#" className="hover:text-green1 transition duration-200">Rücksendungen & Garantie</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-green2 mb-4">Folge uns</h3>
            <div className="flex space-x-4">
              {/* Font Awesome Icons */}
              <a href="#" className="text-green2 hover:text-green1 transition duration-200">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="#" className="text-green2 hover:text-green1 transition duration-200">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-green2 hover:text-green1 transition duration-200">
                <i className="fab fa-pinterest-p text-2xl"></i>
              </a>
              <a href="#" className="text-green2 hover:text-green1 transition duration-200">
                <i className="fab fa-youtube text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-green2 mb-4">Newsletter</h3>
            <p className="text-green2 mb-4">Verpassen Sie keine Neuigkeiten!</p>
            <form>
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="w-full p-3 rounded-md bg-green4 text-green2 border border-green4 focus:outline-none focus:ring-2 focus:ring-green1"
              />
              <button
                type="submit"
                className="mt-4 w-full py-3 bg-green1 text-costumBlack font-semibold rounded-md hover:bg-green2 transition duration-300"
              >
                Abonnieren
              </button>
            </form>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-green2 mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green1 transition duration-200">Impressum</a></li>
              <li><a href="#" className="hover:text-green1 transition duration-200">Datenschutz</a></li>
              <li><a href="#" className="hover:text-green1 transition duration-200">AGB</a></li>
              <li><a href="#" className="hover:text-green1 transition duration-200">Versand</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center mt-12 text-green4 text-sm"> {/* green4 for copyright */}
          &copy; {new Date().getFullYear()} Nature&apos;s Code. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
};

export default App;
