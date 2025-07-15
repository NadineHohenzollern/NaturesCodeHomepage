// pages.tsx
import React from 'react';
import Image from 'next/image'; 
import ImageSlider from "@/components/ImageSlider";
import ImageRow from "@/components/ImageRow";

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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 rounded-lg text-[#F6FFF8]">
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
            professionell - mühelos - vollautomatisiert 
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

      {/* Kurzes Zitat als Überleitung */}
      <section className="py-20 bg-[#121113] text-[#E5EEDE]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
        <h3 className="text-3xl font-bold mb-8 text-[#E5EEDE]">Moderne Pflanzenpflege, mühelos ästhetisch. </h3>
          <p className="text-lg md:text-xl mb-6">
            
          </p>
          <p className="text-lg md:text-xl">
            Als Dekoration oder Statussymbol sind eindrucksvolle Zimmerpflanzen längst Bestandteil moderner Wohn- und Arbeitsräume. 
            Doch ihre Pflege ist mühsam und Ergebnisse bleiben mittelmäßig.
            
            <br /><br />
            Wir von Nature's Code wollen die Modernisierung der Pflanzenpflege vorantreiben. 
            Dafür haben wir das automatisierte Urbane Ökosystem entwickelt, das dir nicht nur <strong>95% der Arbeit abnimmt</strong>,
            sondern dein Pflanzenwachstum optimiert - basierend auf Expertenwissen. 
            Damit <strong>leben Pflanzen länger</strong>, <strong>wachsen schneller</strong> und ihre <strong>Blätter werden größer.</strong> 
            
            <br /><br />
            Nature's Code ist das Ende des technischen Rückstands in der Pflanzenpflege, und der Anfang grenzenlos grüner Raumgestaltung. 
            Modern, effektiv und ästhetisch.

          </p>
        </div>
      </section>

      {/* Value Proposition: Urbanes Ökosystem */}
      <section className="py-20 bg-[#D8E1D0]"> {/* green2 background */}
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
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
          </div>
        </div>
      </section>

      {/* Bilderkollektion */}
      <section className="flex w-full overflow-hidden">
        <ImageRow images={imagesPlants} />
      </section>
    

      {/* Vorstellung "Urbanes Ökosystem" – Die Gesamtlösung */}
      <section className="py-24 bg-[#A8B69F]"> 
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-[#121113]">Urbanes Ökosystem</h2>
          {/* <p className="text-lg text-[#121113] mb-16 max-w-3xl mx-auto">
            Automatisiert und optimiert die Pflege für fast jede Pflanze für langlebige und gesunge Pflanzen - ohne Fachwissen oder Aufwand. 
          </p> */}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            {/* Box 1 */}
            <div className="bg-[#D8E1D0] rounded-xl shadow-lg p-3 flex flex-col items-center">
              <ImageSlider images={elevateImages} width={300} height={420} />
              <h3 className="text-2xl font-semibold mb-3 text-[#121113]">Elevate</h3>
              <p className="text-[#121113] text-base"> Die Hängelampe für perfektes Licht. <br />elegant - unaufdringlich - effektiv</p>
              <button className="mt-6 mb-6 px-8 py-4 text-lg font-semibold text-[#16340A] border-2 border-[#16340A] rounded-full hover:bg-[#16340A] hover:text-[#E5EEDE] transition duration-300">
                Elevate entdecken 
              </button>
            </div>
            

            {/* Box 2 */}
            <div className="bg-[#D8E1D0] rounded-xl shadow-lg p-3 flex flex-col items-center">
              <ImageSlider images={flowpotImages} width={300} height={420} />
              <h3 className="text-2xl font-semibold mb-3 text-[#121113]">Flowpot</h3>
              <p className="text-[#121113] text-base">Der smarte Pflanzentopf. <br /> Gießt und überwacht automatisch.</p>
              <button className="mt-6 mb-6 px-8 py-4 text-lg font-semibold text-[#16340A] border-2 border-[#16340A] rounded-full hover:bg-[#16340A] hover:text-[#E5EEDE] transition duration-300">
                Flowpot entdecken 
              </button>
            </div>

            {/* Box 3 */}
            <div className="bg-[#D8E1D0] rounded-xl shadow-lg p-3 flex flex-col items-center">
              <ImageSlider images={nurtureImages} width={300} height={420} />
              <h3 className="text-2xl font-semibold mb-3 text-[#121113]">Nurture</h3>
              <p className="text-[#121113] text-base">Die smarte Düngstation.  <br /> Mischt das optimale Gießwasser.</p>
              <button className="mt-6 mb-6 px-8 py-4 text-lg font-semibold text-[#16340A] border-2 border-[#16340A] rounded-full hover:bg-[#16340A] hover:text-[#E5EEDE] transition duration-300">
                Nurture entdecken 
              </button>
            </div>

            {/* Box 4 */}
            <div className="bg-[#D8E1D0] rounded-xl shadow-lg p-3 flex flex-col items-center">
              <ImageSlider images={appImages} width={300} height={420} />
              <h3 className="text-2xl font-semibold mb-3 text-[#121113]">Nature's Code App</h3>
              <p className="text-[#121113] text-base">Das Herzstück und Kopf deines Urbanen Ökosystems. </p>
              <button className="mt-6 mb-6 px-8 py-4 text-lg font-semibold text-[#16340A] border-2 border-[#16340A] rounded-full hover:bg-[#16340A] hover:text-[#E5EEDE] transition duration-300">
                Unsere App entdecken
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Produktvorstellung: Elevate */}
      <section className="py-20 bg-[#D8E1D0]"> {/* green2 background */}
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image src="https://placehold.co/700x500/E5EEDE/121113?text=Elegante+Hängelampe+im+Wohnraum+(3000K)" alt="Elegante Hängelampe im Wohnraum" width={700} height={500} className="rounded-xl shadow-lg w-full" />
            <p className="mt-4 text-green4 text-sm text-center">Nahaufnahme der Elevate, nahtlos integriert in ein stilvolles Interieur.</p>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-[#121113]">Elevate</h2>
            <ul className="space-y-4 text-lg text-green4">
              <li className="flex items-start">
                <span className="text-[#121113] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#121113]">Effektives Licht.</strong> Versorgt deine Pflanze mit ausreichend Licht unabhängig von Fensternähe und verfügbarem Sonnenlicht.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#121113] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#121113]">Zeitloses und elegantes Design</strong> für die nahtlose Integration in jedes Designer-Interior.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#121113] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#121113]">Angenehmes, warmweißes Licht</strong> für eine gemütliche Wohnatmosphäre.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#121113] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#121113]">Dimmbarkeit</strong> für Licht angepasst an jede Tageszeit.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#121113] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#121113]">Flexibler Abstrahlwinkel gegen Blendung</strong> für unaufdringliches und angenehmes Licht.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 1a. Problem Pflege */}
      <section className="py-20 bg-[#121113] text-[#E5EEDE]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#E5EEDE]">Das Problem mit der Pflege</h2>
          <p className="text-lg md:text-xl mb-6">
            Pflanzen am leben zu halten ist für die meisten von uns schwieriger als gedacht. 
            Eine geeignete Standortwahl und regelmäßiges und korrektes Gießen ist bisher ein Trial and Error ohne Garantie auf Erfolg. 
            Pflanzenratgeber liefern ungenaue Hinweise, bei Problemen findet man kaum eine eindeutige Ursache. 
            <br />
            Das steht in vollkommenem Kontrast dazu, dass Zimmerpflanzen weitestgehen gut erforscht sind. 
            Wir kennen ihre Bedürfnisse und können genau quantifizieren wann sie wie viel von etwas brauchen. 

            {/* während Pflegeratgeber ungenaue und uneindeutige Informationen liefern. 
            Dabei sind unsere Zimmerpflanzen gut erforscht und ihre Bedürfnisse konkret quantisierbar. 
            Was es braucht ist kein grüner Daumen und auch kein Gefühl für Pflanzen. 
             

            Es wird Zeit dir Pflege von Zimmerpflanzen zu revolutionieren und ihren Stand aus dem letzten Jahrhundert zu holen. 
            Bedürfnisse von Pflanzen sind nicht willkürlich und es braucht auch keinen grünen Daumen oder ein Gefühl für die Pflanze.
            Es braucht   

            Unsere Mission ist es, jedem zu ermöglichen urbane Lebensräume grüner, gesünder und inspirierender zu gestalten. 
            
            – mit smarter Technologie, die Pflanzenpflege revolutioniert.
            Gesundheitsfördernde und konzentrationsstärkende Luft oder einfach als ästhetisches Interior-Statement - die Gründe für Zimmerpflanzen sind endlos. 

            Leider scheitern wir immer wieder an der richtigen Pflege und entsorgen eine Pflanze nach der nächsten. 
            Immer mehr Menschen greifen zu Plastikpflanzen und verzichten auf die 
            Unsere Mission ist es, urbane Lebensräume grüner, gesünder und inspirierender zu gestalten – mit smarter Technologie, die Pflanzenpflege revolutioniert. */}
          </p>
          <p className="text-lg md:text-xl">
            {/* Unsere Vision: Eine Welt, in der jede Pflanze gedeiht – unabhängig von Zeit, Wissen oder Umgebung. Nachhaltig. Ästhetisch. Vollautomatisiert. */}
            Doch warum sind Pflanzenratgeber dann so ungenau und der Erfolg der Pflege scheinbar Glückssache?
          </p>
        </div>
      </section>

      {/* 1b. Vorbild Natur */}
      <section className="py-20 bg-[#A8B69F] text-[#121113]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#121113]">Pflanzenwachstum ist nicht willkürlich</h2>
          <p className="text-lg md:text-xl mb-6">
            Was Pflanzen brauchen ist genug Licht, regelmäßiges Wasser und die richtigen Nährstoffe. 
            Was genug, regelmäßig und das richtige ist, hängt von der Pflanzenart ab - aber nicht nur - 
            auch von der Raumtemperatur und der Luftfeuchtigkeit. 
            Der Boden muss den richtigen pH-Wert haben, 
            das Düngverhältnis muss an die Wasserqualität angepasst werden 
            und die Gießfrequenz schwankt je Jahreszeit. 
            In der Landwirtschaft ist das Regulieren dieser Werte längst gängige und notwendige Praxis. 
          </p>
          <p className="text-lg md:text-xl">
            Wer also auch privat wirklich langlebige Pflanzen möchte, kann regelmäßige Messungen und abgestimmtes Düngen nicht vermeiden. 
          </p>
        </div>
      </section>

      {/* 1a. Mission & Vision */}
      <section className="py-20 bg-[#121113] text-[#E5EEDE]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#E5EEDE]">Unsere Mission</h2>
          <p className="text-lg md:text-xl mb-6">
            Wir möchten, dass jeder Mensch seinen Wohnraum grüner, gesünder uns inspirierender gestalten kann,
            ohne zum Hobby-Botaniker werden zu müssen und Pflanzen zum Zeitfresser werden. 
            Es wird Zeit die Pflege von Zimmerpflanzen zu revolutionieren und im kleinen Maßstab anzuwenden, 
            was seit Jahrzenhnten unverzichtbare Praxis der Landwirtschaft ist. 
            
          </p>
          <p className="text-lg md:text-xl">
            Wir entwicklen daher Produkte, die die Pflanzenpflege automatisiert, optimiert und gleichzeitig 
            den Fokus auf modernes Design legt, um deinen Wohnraum ästhetisch zu ergänzen. 
          </p>
        </div>
      </section>

      {/* 2. Problem-Ansprache */}
      <section className="py-20 bg-[#A8B69F]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-[#6c584c]">
            Verabschiede dich von Pflanzenstress und Unsicherheit.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8 text-lg text-green4">
            <div className="p-6 bg-[#E9F1F7] rounded-xl shadow-md text-center">
              <div className="text-green3 text-3xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2 text-[#a98467]">Gießen als lästige Aufgabe</h3>
              <p className="text-sm text-green4">
                Die Aufgabe, die man entweder vergisst, oder es zu gut meint.
              </p>
            </div>

            <div className="p-6 bg-[#E9F1F7] rounded-xl shadow-md text-center">
              <div className="text-green3 text-3xl mb-4">🧪</div>
              <h3 className="text-xl font-semibold mb-2 text-[#a98467]">Überforderung bei Düngung</h3>
              <p className="text-sm text-green4">
                Das nötige Feingefühl und Fachwissen der Düngung wirkt überwältigend, weshalb Sie dies lieber vermeiden.
              </p>
            </div>

            <div className="p-6 bg-[#E9F1F7] rounded-xl shadow-md text-center">
              <div className="text-green3 text-3xl mb-4">🥀</div>
              <h3 className="text-xl font-semibold mb-2 text-[#a98467]">Frust durch sterbende Pflanzen</h3>
              <p className="text-sm text-green4">
                Die hohe Rate an sterbenden Pflanzen ist frustrierend und man scheint es nicht richtig machen zu können.
              </p>
            </div>

            <div className="p-6 bg-[#E9F1F7] rounded-xl shadow-md text-center">
              <div className="text-green3 text-3xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2 text-[#a98467]">Widersprüchliche Ratgeber</h3>
              <p className="text-sm text-green4">
                Informationen und Ratgeber widersprechen sich oder sind zu ungenau. Pflanzenbedürfnisse scheinen komplex und willkürlich zu sein.
              </p>
            </div>

            <div className="p-6 bg-[#E9F1F7] rounded-xl shadow-md text-center">
              <div className="text-green3 text-3xl mb-4">🧭</div>
              <h3 className="text-xl font-semibold mb-2 text-[#a98467]">Trial and Error</h3>
              <p className="text-sm text-green4">
                <strong>"Dafür musst du ein Gefühl bekommen"</strong>  
                <br/>
                Gießfrequenz, Standortwahl und Düngen scheinen ein Trial and Error zu sein, durch den jeder Pflanzenbesitzer durch muss.
              </p>
            </div>

            <div className="p-6 bg-[#adc178] rounded-xl shadow-md text-center">
              <div className="text-green3 text-3xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-2 text-[#6c584c]">Kein grüner Daumen?</h3>
              <p className="text-sm text-[#E7DFC6]">
                <br /> <br /> 
                <span className="text-[#6c584c] font-bold">Wir von Nature's Code wissen, dass das ein Irrtum ist.</span>
              </p>
            </div>
          </div>
          <p className="text-2xl font-semibold mt-12 text-green3">
          Pflanzenpflege ist weniger mystisch und willkürlich, als sie scheint. 
          <br/>
          <strong>Sie ist gut erforscht, berechenbar und damit kontrollierbar.</strong>
          </p>
        </div>
      </section>

      

      {/* 4. Kernbotschaft 1: "Pflanzenliebe neu definiert: Design trifft Natur" */}
      {/* <section className="py-20 bg-[#F6FFF8]"> 
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image src="https://placehold.co/700x500/44482A/A7B758?text=Elegante+Hängelampe+im+Wohnraum+(3000K)" alt="Elegante Hängelampe im Wohnraum" width={700} height={500} className="rounded-xl shadow-lg w-full" />
            <p className="mt-4 text-green4 text-sm text-center">Nahaufnahme der eleganten Hängelampe, nahtlos integriert in ein stilvolles Interieur.</p>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-green4">Ästhetik, die begeistert: Pflanzenbeleuchtung als Statement-Piece.</h2>
            <ul className="space-y-4 text-lg text-green4">
              <li className="flex items-start">
                <span className="text-green3 mr-3 text-2xl">✓</span>
                <span><strong className="text-green4">Schluss mit unansehnlichen Pflanzenlampen.</strong> Unsere Hängelampe ist optisch ansprechend und passt sich nahtlos in dein Designer-Interior ein.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green3 mr-3 text-2xl">✓</span>
                <span><strong className="text-green4">Angenehmes, warmweißes Licht (z.B. 3000K),</strong> das für das menschliche Auge als angenehm gilt. Keine störenden &quot;Blurple&quot;-Lichter.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green3 mr-3 text-2xl">✓</span>
                <span><strong className="text-green4">Dimmbarkeit und einstellbarer Abstrahlwinkel</strong> verhindern Blendung und schaffen die perfekte Atmosphäre für Mensch und Pflanze.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green3 mr-3 text-2xl">✓</span>
                <span><strong className="text-green4">Elegantes Kabelmanagement und flexible Platzierung,</strong> auch abseits von Fensterflächen, ermöglichen dir die Gestaltung deiner grünen Oase.</span>
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* 5. Kernbotschaft 2: "Intelligenz für deinen grünen Daumen: Autonomie statt Aufwand" */}
      <section className="py-20 bg-costumBlack"> {/* Dark background */}
        <div className="container mx-auto px-4 flex flex-col lg:flex-row-reverse items-center lg:space-x-reverse lg:space-x-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image src="https://placehold.co/700x500/44482A/A7B758?text=Intelligenter+Topf+und+Mischstation" alt="Intelligenter Topf und Mischstation" width={700} height={500} className="rounded-xl shadow-lg w-full" />
            <p className="mt-4 text-green2 text-sm text-center">Der intelligente Topf mit dezenter Sensorik und die saubere Mischstation.</p>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-green2">Sorgenfreie Pflanzenpflege: Dein Ökosystem übernimmt die Arbeit.</h2>
            <ul className="space-y-4 text-lg text-green2">
              <li className="flex items-start">
                <span className="text-green1 mr-3 text-2xl">✓</span>
                <span><strong className="text-green2">Nie wieder Rätselraten beim Gießen:</strong> Die integrierte Sensorik überwacht die Bodenfeuchtigkeit präzise.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green1 mr-3 text-2xl">✓</span>
                <span><strong className="text-green2">Der Topf kann automatisiert für mindestens 4 Wochen gießen,</strong> was Über- oder Unterwässerung zuverlässig verhindert.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green1 mr-3 text-2xl">✓</span>
                <span><strong className="text-green2">Die Mischstation filtert Wasser und reichert es mit Dünger</strong> basierend auf den Messdaten optimal an – für stets perfekt genährte Pflanzen, ganz ohne dein Zutun.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green1 mr-3 text-2xl">✓</span>
                <span><strong className="text-green2">Eine autonome Lösung für Licht, Wasser und Nährstoffe,</strong> die den &apos;Trial and Error&apos;-Prozess vollständig eliminiert und dir einen grünen Daumen schenkt.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Kernbotschaft 3: "Wachstum ohne Kompromisse: Gesunde Pflanzen, maximale Entfaltung" */}
      <section className="py-20 bg-green2"> {/* green2 background */}
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image src="https://placehold.co/700x500/44482A/A7B758?text=Vorher-Nachher+Pflanzenwachstum" alt="Vorher-Nachher Pflanzenwachstum" width={700} height={500} className="rounded-xl shadow-lg w-full" />
            <p className="mt-4 text-green4 text-sm text-center">Beeindruckende Vorher-Nachher-Bilder von Pflanzen, die unter dem Nature&apos;s Code System gedeihen.</p>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-green4">Prächtiges Wachstum, das man sieht: Für gesunde, widerstandsfähige Pflanzen.</h2>
            <ul className="space-y-4 text-lg text-green4">
              <li className="flex items-start">
                <span className="text-green3 mr-3 text-2xl">✓</span>
                <span><strong className="text-green4">Gib deinen Pflanzen genau das, was sie brauchen:</strong> Helles und effektives Licht mit Vollspektrum-LEDs, die natürliches Sonnenlicht nachahmen und alle Wachstumsphasen unterstützen.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green3 mr-3 text-2xl">✓</span>
                <span><strong className="text-green4">Ein hoher PAR-Wert und gezielte Wellenlängen</strong> sorgen für optimale Photosynthese und Pflanzenentwicklung.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green3 mr-3 text-2xl">✓</span>
                <span><strong className="text-green4">Die Dimmbarkeit vermeidet „Verbrennungen“ oder „Versengen“,</strong> während die energieeffiziente LED-Technologie minimale Wärme erzeugt.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green3 mr-3 text-2xl">✓</span>
                <span><strong className="text-green4">Erlebe gesündere und widerstandsfähigere Pflanzen,</strong> die seltener von Schädlingen und Krankheiten betroffen sind.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green3 mr-3 text-2xl">✓</span>
                <span><strong className="text-green4">Reduziere drastisch die Rate an sterbenden oder kranken Pflanzen</strong> und stärke dein Selbstvertrauen als Pflanzenliebhaber.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Kernbotschaft 4: "Dein Lifestyle, dein grünes Paradies: Zeit für das Wesentliche" */}
      <section className="py-20 bg-costumBlack"> {/* Dark background */}
        <div className="container mx-auto px-4 flex flex-col lg:flex-row-reverse items-center lg:space-x-reverse lg:space-x-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image src="https://placehold.co/700x500/44482A/A7B758?text=Entspannte+Menschen+mit+Pflanzen" alt="Entspannte Menschen genießen Pflanzen" width={700} height={500} className="rounded-xl shadow-lg w-full" />
            <p className="mt-4 text-green2 text-sm text-center">Menschen genießen ihre Freizeit, während ihre Pflanzen prächtig gedeihen.</p>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-green2">Mehr Freude, weniger Aufwand: Gewinne Zeit für das, was wirklich zählt.</h2>
            <ul className="space-y-4 text-lg text-green2">
              <li className="flex items-start">
                <span className="text-green1 mr-3 text-2xl">✓</span>
                <span><strong className="text-green2">Der Zeitaufwand für Pflanzenpflege wird massiv reduziert</strong> – selbst eine große Sammlung wird zum stressfreien Vergnügen.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green1 mr-3 text-2xl">✓</span>
                <span><strong className="text-green2">Platziere deine Pflanzen flexibel,</strong> selbst bei begrenzter Fensterfläche, dank unserer Hängelampe. Erschaffe deinen Urban Jungle überall.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green1 mr-3 text-2xl">✓</span>
                <span><strong className="text-green2">Ideal auch für Urlaube oder Geschäftsreisen:</strong> Dein urbanes Ökosystem kümmert sich um alles, sodass du unbesorgt sein kannst.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Warum Nature's Code? */}
      <section className="py-20 bg-green2"> {/* green2 background */}
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-green4">Qualität, auf die du zählen kannst.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-green4">
            <div className="p-6 bg-green1 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green3">Unsere Geschichte & Engagement</h3>
              <p>
                Bei Nature&apos;s Code sind wir leidenschaftlich daran interessiert, innovative Lösungen für die Pflanzenpflege zu entwickeln. Wir glauben, dass jeder die Freude an prächtigen Pflanzen erleben sollte, ohne den damit verbundenen Aufwand.
              </p>
            </div>
            <div className="p-6 bg-green1 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green3">Langlebigkeit & Nachhaltigkeit</h3>
              <p className="mb-4">
                Unsere LEDs sind für eine außergewöhnliche Langlebigkeit ausgelegt (ähnlich Soltechs 7-11 Jahre Lebensdauer), und das gesamte System ist robust und zuverlässig.
              </p>
              <p>
                Wir legen Wert auf Energieeffizienz und einen ressourcenschonenden Ansatz, um eine nachhaltige grüne Oase in deinem Zuhause zu schaffen.
              </p>
            </div>
            <div className="p-6 bg-green1 rounded-xl shadow-md col-span-1 md:col-span-2">
              <h3 className="text-2xl font-semibold mb-4 text-green3">Forschung, Entwicklung & Transparenz</h3>
              <p className="mb-4">
                Entwickelt in Deutschland – wir stehen für Qualität, auf die man sich verlassen kann. Unser Engagement für Forschung und Entwicklung stellt sicher, dass du immer die beste Technologie für deine Pflanzen erhältst.
              </p>
              <p>
                Die intuitive App bietet dir volles Monitoring von Wachstums- und Sensordaten und macht komplexe Informationen verständlich, sodass du immer den Überblick behältst.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Kundenstimmen / Social Proof */}
      <section className="py-20 bg-costumBlack"> {/* Dark background */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-green2">Was unsere Kunden sagen.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-green4 rounded-xl shadow-md flex flex-col items-center"> {/* green4 background for cards */}
              <Image src="https://placehold.co/100x100/121113/A7B758?text=Kunde+1" alt="Kundenportrait 1" width={100} height={100} className="rounded-full mb-4" />
              <p className="italic text-green2 mb-4">
              &quot;Endlich gedeihen meine Pflanzen prächtig, und das ganz ohne Aufwand! Das Design ist einfach umwerfend und passt perfekt in mein Wohnzimmer.&quot;
              </p>
              <p className="font-semibold text-green3">- Anna M., Berlin</p>
            </div>
            <div className="p-8 bg-green4 rounded-xl shadow-md flex flex-col items-center">
              <Image src="https://placehold.co/100x100/121113/A7B758?text=Kunde+2" alt="Kundenportrait 2" width={100} height={100} className="rounded-full mb-4" />
              <p className="italic text-green2 mb-4">
              &quot;Ich bin oft auf Reisen, und dank Nature&apos;s Code muss ich mir keine Sorgen mehr um meine Pflanzen machen. Sie sehen fantastisch aus!&quot;
              </p>
              <p className="font-semibold text-green3">- Max S., München</p>
            </div>
            <div className="p-8 bg-green4 rounded-xl shadow-md flex flex-col items-center">
              <Image src="https://placehold.co/100x100/121113/A7B758?text=Kunde+3" alt="Kundenportrait 3" width={100} height={100} className="rounded-full mb-4" />
              <p className="italic text-green2 mb-4">
              &quot;Die Qualität ist jeden Cent wert. Meine Pflanzen sind gesünder und widerstandsfähiger geworden. Eine echte Bereicherung für mein Zuhause.&quot;
              </p>
              <p className="font-semibold text-green3">- Lena K., Hamburg</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA Section (Wiederholung) */}
      <section className="py-20 bg-green3 text-green4 text-center"> {/* green3 background for strong CTA */}
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-6 text-green4">Bereit für ein neues Kapitel der Pflanzenpflege?</h2>
          <p className="text-xl mb-10 opacity-90 text-green4">
            Erlebe die perfekte Symbiose aus Design, Technologie und Natur. Werde Teil der Nature&apos;s Code Familie und erschaffe deine eigene grüne Oase.
          </p>
          <button className="px-10 py-5 text-xl font-semibold text-green3 bg-green1 rounded-full shadow-lg hover:bg-green2 hover:text-green4 transition duration-300">
            Jetzt das Urbane Ökosystem entdecken
          </button>
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
