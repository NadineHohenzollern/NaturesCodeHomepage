

//pages.tsx
import React from 'react';
import Image from 'next/image'; // Uncommented and now actively used

// Main App component for the Nature's Code homepage
const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-darkBlue bg-white">
      {/* Header / Navigation */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4 bg-transparent">
        <nav className="container flex items-center justify-between mx-auto">
          <div className="text-2xl font-bold text-white">Nature&apos;s Code</div>
          <ul className="flex space-x-6 text-lg text-white">
            <li><a href="#" className="hover:text-[#BCE784] transition duration-300">Shop</a></li>
            <li><a href="#" className="hover:text-[#BCE784] transition duration-300">Über uns</a></li>
            <li><a href="#" className="hover:text-[#BCE784] transition duration-300">FAQ</a></li>
            <li><a href="#" className="hover:text-[#BCE784] transition duration-300">Kontakt</a></li>
          </ul>
        </nav>
      </header>

      {/* 1. Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080/525174/FFFFFF?text=Stilvolles+Wohnzimmer+mit+Pflanzen')" }}>
        {/* Overlay with a darker purple for depth and text readability */}
        <div className="absolute inset-0 bg-[#513B56] opacity-60"></div>
        <div className="relative z-10 text-center text-white p-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 rounded-lg">
            Dein Urbanes Ökosystem: Pflanzenliebe neu definiert – Design trifft Natur.
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Revolutioniere deine Pflanzenpflege mit autonomer Intelligenz und nahtloser Ästhetik. Erlebe gesunde, langlebige Pflanzen ohne Aufwand, Fachwissen oder Zeit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 text-lg font-semibold text-white bg-[#5DD39E] rounded-full shadow-lg hover:bg-[#348AA7] transition duration-300">
              Entdecke das Urbanes Ökosystem
            </button>
            <button className="px-8 py-4 text-lg font-semibold text-[#5DD39E] bg-white rounded-full shadow-lg hover:bg-[#BCE784] hover:text-[#525174] transition duration-300">
              Jetzt kaufen
            </button>
          </div>
        </div>
      </section>

      {/* 2. Problem-Ansprache */}
      <section className="py-20 bg-[#BCE784]"> {/* Light green/yellow background */}
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-[#525174]">Verabschiede dich von Pflanzenstress und Unsicherheit.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-[#525174]">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <p className="mb-4">
                <span className="font-semibold text-[#5DD39E]">Kennst du das Gefühl, dass deine Pflanzen trotz aller Bemühungen nicht gedeihen wollen?</span> (Gelbe Blätter, dünne Triebe, ausbleibende Blütenbildung).
              </p>
              <p className="mb-4">
                <span className="font-semibold text-[#5DD39E]">Ugly Grow Lights, die dein Interior stören</span> und versteckt werden müssen?
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <p className="mb-4">
                <span className="font-semibold text-[#5DD39E]">Das ständige Rätselraten bei Gießen und Düngen,</span> das zu Über- oder Unterversorgung führt?
              </p>
              <p className="mb-4">
                <span className="font-semibold text-[#5DD39E]">Der überwältigende Zeitaufwand</span> für eine wachsende Pflanzensammlung?
              </p>
            </div>
          </div>
          <p className="text-2xl font-semibold mt-12 text-[#348AA7]"> {/* Teal/blue for solution */}
            Wir haben die Lösung. Stell dir vor, deine Pflanzen wachsen von alleine – prächtig und gesund.
          </p>
        </div>
      </section>

      {/* 3. Das "Urbanes Ökosystem" – Die Gesamtlösung */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-[#525174]">Nature&apos;s Code präsentiert: Dein autonomes Urbanes Ökosystem.</h2>
          <p className="text-lg text-[#525174] mb-12 max-w-3xl mx-auto">
            Entdecke die harmonische Einheit aus Design und Technologie, die synergetisch funktioniert, um deinen Pflanzen die optimale Pflege zu bieten.
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-16">
            <div className="flex flex-col items-center text-center max-w-sm">
              {/* Image component with width and height */}
              <Image src="https://placehold.co/200x200/5DD39E/FFFFFF?text=Hängelampe" alt="Hängelampe" width={200} height={200} className="mb-6 rounded-full shadow-lg" />
              <h3 className="text-2xl font-semibold mb-2 text-[#5DD39E]">Die Hängelampe</h3>
              <p className="text-[#525174]">Optimales Licht, wo immer du es brauchst – ästhetisch und effektiv.</p>
            </div>
            <div className="flex flex-col items-center text-center max-w-sm">
              <Image src="https://placehold.co/200x200/5DD39E/FFFFFF?text=Intelligenter+Topf" alt="Intelligenter Topf und Mischstation" width={200} height={200} className="mb-6 rounded-full shadow-lg" />
              <h3 className="text-2xl font-semibold mb-2 text-[#5DD39E]">Der Intelligente Topf & die Mischstation</h3>
              <p className="text-[#525174]">Präzise Bewässerung und Nährstoffversorgung – komplett automatisiert.</p>
            </div>
            <div className="flex flex-col items-center text-center max-w-sm">
              <Image src="https://placehold.co/200x200/5DD39E/FFFFFF?text=Intuitive+App" alt="Intuitive App" width={200} height={200} className="mb-6 rounded-full shadow-lg" />
              <h3 className="text-2xl font-semibold mb-2 text-[#5DD39E]">Die intuitive App</h3>
              <p className="text-[#525174]">Volle Kontrolle und Transparenz, ohne Überforderung.</p>
            </div>
          </div>
          <div className="mt-16">
            {/* Placeholder for Infographic/Animation */}
            <Image src="https://placehold.co/800x400/BCE784/525174?text=Infografik+Systeminteraktion" alt="System Interaktion Infografik" width={800} height={400} className="mx-auto rounded-xl shadow-lg" />
            <p className="mt-4 text-[#525174] text-sm">Visualisierung der synergetischen Funktionsweise des Urbanen Ökosystems.</p>
          </div>
        </div>
      </section>

      {/* 4. Kernbotschaft 1: "Pflanzenliebe neu definiert: Design trifft Natur" */}
      <section className="py-20 bg-[#BCE784]"> {/* Light green/yellow background */}
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image src="https://placehold.co/700x500/525174/BCE784?text=Elegante+Hängelampe+im+Wohnraum+(3000K)" alt="Elegante Hängelampe im Wohnraum" width={700} height={500} className="rounded-xl shadow-lg w-full" />
            <p className="mt-4 text-[#525174] text-sm text-center">Nahaufnahme der eleganten Hängelampe, nahtlos integriert in ein stilvolles Interieur.</p>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-[#525174]">Ästhetik, die begeistert: Pflanzenbeleuchtung als Statement-Piece.</h2>
            <ul className="space-y-4 text-lg text-[#525174]">
              <li className="flex items-start">
                <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#525174]">Schluss mit unansehnlichen Pflanzenlampen.</strong> Unsere Hängelampe ist optisch ansprechend und passt sich nahtlos in dein Designer-Interior ein.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#525174]">Angenehmes, warmweißes Licht (z.B. 3000K),</strong> das für das menschliche Auge als angenehm gilt. Keine störenden &quot;Blurple&quot;-Lichter.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#525174]">Dimmbarkeit und einstellbarer Abstrahlwinkel</strong> verhindern Blendung und schaffen die perfekte Atmosphäre für Mensch und Pflanze.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#525174]">Elegantes Kabelmanagement und flexible Platzierung,</strong> auch abseits von Fensterflächen, ermöglichen dir die Gestaltung deiner grünen Oase.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Kernbotschaft 2: "Intelligenz für deinen grünen Daumen: Autonomie statt Aufwand" */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row-reverse items-center lg:space-x-reverse lg:space-x-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image src="https://placehold.co/700x500/525174/BCE784?text=Intelligenter+Topf+und+Mischstation" alt="Intelligenter Topf und Mischstation" width={700} height={500} className="rounded-xl shadow-lg w-full" />
            <p className="mt-4 text-[#525174] text-sm text-center">Der intelligente Topf mit dezenter Sensorik und die saubere Mischstation.</p>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-[#525174]">Sorgenfreie Pflanzenpflege: Dein Ökosystem übernimmt die Arbeit.</h2>
            <ul className="space-y-4 text-lg text-[#525174]">
              <li className="flex items-start">
                <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#525174]">Nie wieder Rätselraten beim Gießen:</strong> Die integrierte Sensorik überwacht die Bodenfeuchtigkeit präzise.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#525174]">Der Topf kann automatisiert für mindestens 4 Wochen gießen,</strong> was Über- oder Unterwässerung zuverlässig verhindert.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#525174]">Die Mischstation filtert Wasser und reichert es mit Dünger</strong> basierend auf den Messdaten optimal an – für stets perfekt genährte Pflanzen, ganz ohne dein Zutun.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#525174]">Eine autonome Lösung für Licht, Wasser und Nährstoffe,</strong> die den &apos;Trial and Error&apos;-Prozess vollständig eliminiert und dir einen grünen Daumen schenkt.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Kernbotschaft 3: "Wachstum ohne Kompromisse: Gesunde Pflanzen, maximale Entfaltung" */}
      <section className="py-20 bg-[#BCE784]"> {/* Light green/yellow background */}
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image src="https://placehold.co/700x500/525174/BCE784?text=Vorher-Nachher+Pflanzenwachstum" alt="Vorher-Nachher Pflanzenwachstum" width={700} height={500} className="rounded-xl shadow-lg w-full" />
            <p className="mt-4 text-[#525174] text-sm text-center">Beeindruckende Vorher-Nachher-Bilder von Pflanzen, die unter dem Nature&apos;s Code System gedeihen.</p>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-[#525174]">Prächtiges Wachstum, das man sieht: Für gesunde, widerstandsfähige Pflanzen.</h2>
            <ul className="space-y-4 text-lg text-[#525174]">
              <li className="flex items-start">
                <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#525174]">Gib deinen Pflanzen genau das, was sie brauchen:</strong> Helles und effektives Licht mit Vollspektrum-LEDs, die natürliches Sonnenlicht nachahmen und alle Wachstumsphasen unterstützen.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#525174]">Ein hoher PAR-Wert und gezielte Wellenlängen</strong> sorgen für optimale Photosynthese und Pflanzenentwicklung.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#525174]">Die Dimmbarkeit vermeidet „Verbrennungen“ oder „Versengen“,</strong> während die energieeffiziente LED-Technologie minimale Wärme erzeugt.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#525174]">Erlebe gesündere und widerstandsfähigere Pflanzen,</strong> die seltener von Schädlingen und Krankheiten betroffen sind.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#525174]">Reduziere drastisch die Rate an sterbenden oder kranken Pflanzen</strong> und stärke dein Selbstvertrauen als Pflanzenliebhaber.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Kernbotschaft 4: "Dein Lifestyle, dein grünes Paradies: Zeit für das Wesentliche" */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row-reverse items-center lg:space-x-reverse lg:space-x-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image src="https://placehold.co/700x500/525174/BCE784?text=Entspannte+Menschen+mit+Pflanzen" alt="Entspannte Menschen genießen Pflanzen" width={700} height={500} className="rounded-xl shadow-lg w-full" />
            <p className="mt-4 text-[#525174] text-sm text-center">Menschen genießen ihre Freizeit, während ihre Pflanzen prächtig gedeihen.</p>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-[#525174]">Mehr Freude, weniger Aufwand: Gewinne Zeit für das, was wirklich zählt.</h2>
            <ul className="space-y-4 text-lg text-[#525174]">
              <li className="flex items-start">
                <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#525174]">Der Zeitaufwand für Pflanzenpflege wird massiv reduziert</strong> – selbst eine große Sammlung wird zum stressfreien Vergnügen.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#525174]">Platziere deine Pflanzen flexibel,</strong> selbst bei begrenzter Fensterfläche, dank unserer Hängelampe. Erschaffe deinen Urban Jungle überall.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
                <span><strong className="text-[#525174]">Ideal auch für Urlaube oder Geschäftsreisen:</strong> Dein urbanes Ökosystem kümmert sich um alles, sodass du unbesorgt sein kannst.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Warum Nature's Code? */}
      <section className="py-20 bg-[#BCE784]"> {/* Light green/yellow background */}
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-[#525174]">Qualität, auf die du zählen kannst.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-[#525174]">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-[#348AA7]">Unsere Geschichte & Engagement</h3>
              <p>
                Bei Nature&apos;s Code sind wir leidenschaftlich daran interessiert, innovative Lösungen für die Pflanzenpflege zu entwickeln. Wir glauben, dass jeder die Freude an prächtigen Pflanzen erleben sollte, ohne den damit verbundenen Aufwand.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-[#348AA7]">Langlebigkeit & Nachhaltigkeit</h3>
              <p className="mb-4">
                Unsere LEDs sind für eine außergewöhnliche Langlebigkeit ausgelegt (ähnlich Soltechs 7-11 Jahre Lebensdauer), und das gesamte System ist robust und zuverlässig.
              </p>
              <p>
                Wir legen Wert auf Energieeffizienz und einen ressourcenschonenden Ansatz, um eine nachhaltige grüne Oase in deinem Zuhause zu schaffen.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md col-span-1 md:col-span-2">
              <h3 className="text-2xl font-semibold mb-4 text-[#348AA7]">Forschung, Entwicklung & Transparenz</h3>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-[#525174]">Was unsere Kunden sagen.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-[#BCE784] rounded-xl shadow-md flex flex-col items-center"> {/* Light green/yellow background */}
              <Image src="https://placehold.co/100x100/525174/BCE784?text=Kunde+1" alt="Kundenportrait 1" width={100} height={100} className="rounded-full mb-4" />
              <p className="italic text-[#525174] mb-4">
              &quot;Endlich gedeihen meine Pflanzen prächtig, und das ganz ohne Aufwand! Das Design ist einfach umwerfend und passt perfekt in mein Wohnzimmer.&quot;
              </p>
              <p className="font-semibold text-[#5DD39E]">- Anna M., Berlin</p>
            </div>
            <div className="p-8 bg-[#BCE784] rounded-xl shadow-md flex flex-col items-center">
              <Image src="https://placehold.co/100x100/525174/BCE784?text=Kunde+2" alt="Kundenportrait 2" width={100} height={100} className="rounded-full mb-4" />
              <p className="italic text-[#525174] mb-4">
              &quot;Ich bin oft auf Reisen, und dank Nature&apos;s Code muss ich mir keine Sorgen mehr um meine Pflanzen machen. Sie sehen fantastisch aus!&quot;
              </p>
              <p className="font-semibold text-[#5DD39E]">- Max S., München</p>
            </div>
            <div className="p-8 bg-[#BCE784] rounded-xl shadow-md flex flex-col items-center">
              <Image src="https://placehold.co/100x100/525174/BCE784?text=Kunde+3" alt="Kundenportrait 3" width={100} height={100} className="rounded-full mb-4" />
              <p className="italic text-[#525174] mb-4">
              &quot;Die Qualität ist jeden Cent wert. Meine Pflanzen sind gesünder und widerstandsfähiger geworden. Eine echte Bereicherung für mein Zuhause.&quot;
              </p>
              <p className="font-semibold text-[#5DD39E]">- Lena K., Hamburg</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA Section (Wiederholung) */}
      <section className="py-20 bg-[#513B56] text-white text-center"> {/* Darker purple background */}
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Bereit für ein neues Kapitel der Pflanzenpflege?</h2>
          <p className="text-xl mb-10 opacity-90">
            Erlebe die perfekte Symbiose aus Design, Technologie und Natur. Werde Teil der Nature&apos;s Code Familie und erschaffe deine eigene grüne Oase.
          </p>
          <button className="px-10 py-5 text-xl font-semibold text-[#513B56] bg-white rounded-full shadow-lg hover:bg-[#BCE784] hover:text-[#525174] transition duration-300">
            Jetzt das Urbanes Ökosystem entdecken
          </button>
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="bg-[#513B56] text-[#BCE784] py-12"> {/* Darker purple background, light green/yellow text */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition duration-200">Shop</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Über uns</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">FAQ & Hilfe</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Kontakt</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Mein Konto</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Rücksendungen & Garantie</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Folge uns</h3>
            <div className="flex space-x-4">
              {/* Font Awesome Icons */}
              <a href="#" className="text-[#BCE784] hover:text-white transition duration-200">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="#" className="text-[#BCE784] hover:text-white transition duration-200">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-[#BCE784] hover:text-white transition duration-200">
                <i className="fab fa-pinterest-p text-2xl"></i>
              </a>
              <a href="#" className="text-[#BCE784] hover:text-white transition duration-200">
                <i className="fab fa-youtube text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-[#BCE784] mb-4">Verpassen Sie keine Neuigkeiten!</p>
            <form>
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="w-full p-3 rounded-md bg-[#525174] text-white border border-[#525174] focus:outline-none focus:ring-2 focus:ring-[#5DD39E]"
              />
              <button
                type="submit"
                className="mt-4 w-full py-3 bg-[#5DD39E] text-white font-semibold rounded-md hover:bg-[#348AA7] transition duration-300"
              >
                Abonnieren
              </button>
            </form>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition duration-200">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Datenschutz</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">AGB</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Versand</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center mt-12 text-[#525174] text-sm"> {/* Dark purple/grey for copyright */}
          &copy; {new Date().getFullYear()} Nature&apos;s Code. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
};

export default App;