

// //pages.tsx
// import React from 'react';
// import Image from 'next/image'; // Uncommented and now actively used

// // Main App component for the Nature's Code homepage
// const App: React.FC = () => {
//   return (
//     <div className="font-sans antialiased text-darkBlue bg-white">
//       {/* Header / Navigation */}
//       <header className="absolute top-0 left-0 right-0 z-10 p-4 bg-transparent">
//         <nav className="container flex items-center justify-between mx-auto">
//           <div className="text-2xl font-bold text-white">Nature&apos;s Code</div>
//           <ul className="flex space-x-6 text-lg text-white">
//             <li><a href="#" className="hover:text-[#BCE784] transition duration-300">Shop</a></li>
//             <li><a href="#" className="hover:text-[#BCE784] transition duration-300">Tools</a></li>
//             <li><a href="#" className="hover:text-[#BCE784] transition duration-300">Blog</a></li>
//             <li><a href="#" className="hover:text-[#BCE784] transition duration-300">Über uns</a></li>
//             <li><a href="#" className="hover:text-[#BCE784] transition duration-300">FAQ</a></li>
//             <li><a href="#" className="hover:text-[#BCE784] transition duration-300">Kontakt</a></li>
//           </ul>
//         </nav>
//       </header>

//       {/* 1. Hero Section */}
//       <section className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080/525174/FFFFFF?text= ')" }}>
//         {/* Overlay with a darker purple for depth and text readability */}
//         <div className="absolute inset-0 bg-[#513B56] opacity-60"></div>
//         <div className="relative z-10 text-center text-white p-4 max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 rounded-lg">
//             Das Urbane Ökosystem
//           </h1>
//           <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 rounded-lg"> 
//             Imitiert die Natur. Vollautomatisiert durch Technik.
//           </h2>
//           <p className="text-xl md:text-2xl mb-8 opacity-90">
//             Vollautomatisierte Pflanzenpflege mit perfekten Ergebnissen. Technik, die nicht aussieht wie Technik und sich ästhetisch in deine Raumgestaltung integriert. 
//             Revolutioniere deine Pflanzenpflege und erlebe gesunde, langlebige Pflanzen ohne Aufwand, Fachwissen oder Zeit.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//             <button className="px-8 py-4 text-lg font-semibold text-white bg-[#5DD39E] rounded-full shadow-lg hover:bg-[#348AA7] transition duration-300">
//               Entdecke das Urbane Ökosystem
//             </button>
//             <button className="px-8 py-4 text-lg font-semibold text-[#5DD39E] bg-white rounded-full shadow-lg hover:bg-[#BCE784] hover:text-[#525174] transition duration-300">
//               Jetzt kaufen
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* 2. Problem-Ansprache */}
//       <section className="py-20 bg-[#BCE784]">
//         <div className="container mx-auto px-4 text-center max-w-3xl">
//           <h2 className="text-4xl font-bold mb-12 text-[#525174]">
//             Verabschiede dich von Pflanzenstress und Unsicherheit.
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8 text-lg text-[#525174]">
//             <div className="p-6 bg-white rounded-xl shadow-md text-center">
//               <div className="text-green text-3xl mb-4">🌱</div>
//               <h3 className="text-xl font-semibold mb-2 text-[#5DD39E]">Gießen als lästige Aufgabe</h3>
//               <p className="text-sm text-gray-600">
//                 Die Aufgabe, die man entweder vergisst, oder es zu gut meint.
//               </p>
//             </div>

//             <div className="p-6 bg-white rounded-xl shadow-md text-center">
//               <div className="text-green text-3xl mb-4">🧪</div>
//               <h3 className="text-xl font-semibold mb-2 text-[#5DD39E]">Überforderung bei Düngung</h3>
//               <p className="text-sm text-gray-600">
//                 Das nötige Feingefühl und Fachwissen der Düngung wirkt überwältigend, weshalb Sie dies lieber vermeiden.
//               </p>
//             </div>

//             <div className="p-6 bg-white rounded-xl shadow-md text-center">
//               <div className="text-green text-3xl mb-4">🥀</div>
//               <h3 className="text-xl font-semibold mb-2 text-[#5DD39E]">Frust durch sterbende Pflanzen</h3>
//               <p className="text-sm text-gray-600">
//                 Die hohe Rate an sterbenden Pflanzen ist frustrierend und man scheint es nicht richtig machen zu können.
//               </p>
//             </div>

//             <div className="p-6 bg-white rounded-xl shadow-md text-center">
//               <div className="text-green text-3xl mb-4">📚</div>
//               <h3 className="text-xl font-semibold mb-2 text-[#5DD39E]">Widersprüchliche Ratgeber</h3>
//               <p className="text-sm text-gray-600">
//                 Informationen und Ratgeber widersprechen sich oder sind zu ungenau. Pflanzenbedürfnisse scheinen komplex und willkürlich zu sein.
//               </p>
//             </div>

//             <div className="p-6 bg-white rounded-xl shadow-md text-center">
//               <div className="text-green text-3xl mb-4">🧭</div>
//               <h3 className="text-xl font-semibold mb-2 text-[#5DD39E]">Trial and Error</h3>
//               <p className="text-sm text-gray-600">
//                 <strong>"Dafür musst du ein Gefühl bekommen"</strong>  
//                 <br/>
//                 Gießfrequenz, Standortwahl und Düngen scheinen ein Trial and Error zu sein, durch den jeder Pflanzenbesitzer durch muss.
//               </p>
//             </div>

//             <div className="p-6 bg-[#525174] rounded-xl shadow-md text-center">
//               <div className="text-green text-3xl mb-4">🌿</div>
//               <h3 className="text-xl font-semibold mb-2 text-[#BCE784]">Kein grüner Daumen?</h3>
//               <p className="text-sm text-white">
//                 Sie glauben nicht an ihren grünen Daumen. 
//                 <br /> <br /> 
//                 <span className="text-[#BCE784] font-bold">Wir von Nature's Code wissen, dass das ein Irrtum ist.</span>
//               </p>
//             </div>
//           </div>
//           <p className="text-2xl font-semibold mt-12 text-[#348AA7]">
//           Pflanzenpflege ist weniger mystisch und willkürlich, als sie scheint. 
//           <br/>
//           <strong>Sie ist gut erforscht, berechenbar und damit kontrollierbar.</strong>
//           </p>
//         </div>
//       </section>

//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold mb-12 text-[#525174]">Das autonome Urbane Ökosystem</h2>
//           <p className="text-lg text-[#525174] mb-16 max-w-3xl mx-auto">
//             Pflanzen brauchen vor allem drei Dinge: genügend Licht, sauberes Wasser und den richtigen Dünger.
//             Unser Urbanes Ökosystem vereint und automatisiert die Erfüllung dieser Bedürfnisse – optimiert für perfektes Wachstum,
//             basierend auf etlichen wissenschaftlichen Quellen und bestätigt durch eigene Tests.
//           </p>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
//             {/* Box 1 */}
//             <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
//               <Image
//                 src="https://placehold.co/320x220/5DD39E/FFFFFF?text=Bild"
//                 alt="Elevate"
//                 width={320}
//                 height={520}
//                 className="mb-6 object-cover rounded-md"
//               />
//               <h3 className="text-2xl font-semibold mb-3 text-[#5DD39E]">Elevate</h3>
//               <p className="text-[#525174] text-base">Optimales Licht, wo immer du es brauchst – ästhetisch und effektiv.</p>
//             </div>

//             {/* Box 2 */}
//             <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
//               <Image
//                 src="https://placehold.co/320x220/5DD39E/FFFFFF?text=Bild"
//                 alt="Topf"
//                 width={320}
//                 height={520}
//                 className="mb-6 object-cover rounded-md"
//               />
//               <h3 className="text-2xl font-semibold mb-3 text-[#5DD39E]">Topf</h3>
//               <p className="text-[#525174] text-base">Automatisierte Bewässerung – kein Nachfüllen für mindestens 4 Wochen.</p>
//             </div>

//             {/* Box 3 */}
//             <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
//               <Image
//                 src="https://placehold.co/320x220/5DD39E/FFFFFF?text=Bild"
//                 alt="Mischstation"
//                 width={320}
//                 height={520}
//                 className="mb-6 object-cover rounded-md"
//               />
//               <h3 className="text-2xl font-semibold mb-3 text-[#5DD39E]">Mischstation</h3>
//               <p className="text-[#525174] text-base">Wasserfilterung und präzise Nährstoffversorgung für starkes und gesundes Wachstum.</p>
//             </div>
//           </div>

//           {/* Infografik */}
//           <div className="mt-20">
//             <Image
//               src="https://placehold.co/800x400/BCE784/525174?text=Infografik+Systeminteraktion"
//               alt="System Interaktion Infografik"
//               width={800}
//               height={400}
//               className="mx-auto rounded-xl shadow-lg"
//             />
//             <p className="mt-4 text-[#525174] text-sm">
//               Visualisierung der synergetischen Funktionsweise des Urbanen Ökosystems.
//             </p>
//           </div>
//         </div>
//       </section>



//       {/* 4. Kernbotschaft 1: "Pflanzenliebe neu definiert: Design trifft Natur" */}
//       <section className="py-20 bg-[#BCE784]"> {/* Light green/yellow background */}
//         <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:space-x-12">
//           <div className="lg:w-1/2 mb-10 lg:mb-0">
//             <Image src="https://placehold.co/700x500/525174/BCE784?text=Elegante+Hängelampe+im+Wohnraum+(3000K)" alt="Elegante Hängelampe im Wohnraum" width={700} height={500} className="rounded-xl shadow-lg w-full" />
//             <p className="mt-4 text-[#525174] text-sm text-center">Nahaufnahme der eleganten Hängelampe, nahtlos integriert in ein stilvolles Interieur.</p>
//           </div>
//           <div className="lg:w-1/2">
//             <h2 className="text-4xl font-bold mb-6 text-[#525174]">Ästhetik, die begeistert: Pflanzenbeleuchtung als Statement-Piece.</h2>
//             <ul className="space-y-4 text-lg text-[#525174]">
//               <li className="flex items-start">
//                 <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
//                 <span><strong className="text-[#525174]">Schluss mit unansehnlichen Pflanzenlampen.</strong> Unsere Hängelampe ist optisch ansprechend und passt sich nahtlos in dein Designer-Interior ein.</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
//                 <span><strong className="text-[#525174]">Angenehmes, warmweißes Licht (z.B. 3000K),</strong> das für das menschliche Auge als angenehm gilt. Keine störenden &quot;Blurple&quot;-Lichter.</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
//                 <span><strong className="text-[#525174]">Dimmbarkeit und einstellbarer Abstrahlwinkel</strong> verhindern Blendung und schaffen die perfekte Atmosphäre für Mensch und Pflanze.</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
//                 <span><strong className="text-[#525174]">Elegantes Kabelmanagement und flexible Platzierung,</strong> auch abseits von Fensterflächen, ermöglichen dir die Gestaltung deiner grünen Oase.</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* 5. Kernbotschaft 2: "Intelligenz für deinen grünen Daumen: Autonomie statt Aufwand" */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 flex flex-col lg:flex-row-reverse items-center lg:space-x-reverse lg:space-x-12">
//           <div className="lg:w-1/2 mb-10 lg:mb-0">
//             <Image src="https://placehold.co/700x500/525174/BCE784?text=Intelligenter+Topf+und+Mischstation" alt="Intelligenter Topf und Mischstation" width={700} height={500} className="rounded-xl shadow-lg w-full" />
//             <p className="mt-4 text-[#525174] text-sm text-center">Der intelligente Topf mit dezenter Sensorik und die saubere Mischstation.</p>
//           </div>
//           <div className="lg:w-1/2">
//             <h2 className="text-4xl font-bold mb-6 text-[#525174]">Sorgenfreie Pflanzenpflege: Dein Ökosystem übernimmt die Arbeit.</h2>
//             <ul className="space-y-4 text-lg text-[#525174]">
//               <li className="flex items-start">
//                 <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
//                 <span><strong className="text-[#525174]">Nie wieder Rätselraten beim Gießen:</strong> Die integrierte Sensorik überwacht die Bodenfeuchtigkeit präzise.</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
//                 <span><strong className="text-[#525174]">Der Topf kann automatisiert für mindestens 4 Wochen gießen,</strong> was Über- oder Unterwässerung zuverlässig verhindert.</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
//                 <span><strong className="text-[#525174]">Die Mischstation filtert Wasser und reichert es mit Dünger</strong> basierend auf den Messdaten optimal an – für stets perfekt genährte Pflanzen, ganz ohne dein Zutun.</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
//                 <span><strong className="text-[#525174]">Eine autonome Lösung für Licht, Wasser und Nährstoffe,</strong> die den &apos;Trial and Error&apos;-Prozess vollständig eliminiert und dir einen grünen Daumen schenkt.</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* 6. Kernbotschaft 3: "Wachstum ohne Kompromisse: Gesunde Pflanzen, maximale Entfaltung" */}
//       <section className="py-20 bg-[#BCE784]"> {/* Light green/yellow background */}
//         <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:space-x-12">
//           <div className="lg:w-1/2 mb-10 lg:mb-0">
//             <Image src="https://placehold.co/700x500/525174/BCE784?text=Vorher-Nachher+Pflanzenwachstum" alt="Vorher-Nachher Pflanzenwachstum" width={700} height={500} className="rounded-xl shadow-lg w-full" />
//             <p className="mt-4 text-[#525174] text-sm text-center">Beeindruckende Vorher-Nachher-Bilder von Pflanzen, die unter dem Nature&apos;s Code System gedeihen.</p>
//           </div>
//           <div className="lg:w-1/2">
//             <h2 className="text-4xl font-bold mb-6 text-[#525174]">Prächtiges Wachstum, das man sieht: Für gesunde, widerstandsfähige Pflanzen.</h2>
//             <ul className="space-y-4 text-lg text-[#525174]">
//               <li className="flex items-start">
//                 <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
//                 <span><strong className="text-[#525174]">Gib deinen Pflanzen genau das, was sie brauchen:</strong> Helles und effektives Licht mit Vollspektrum-LEDs, die natürliches Sonnenlicht nachahmen und alle Wachstumsphasen unterstützen.</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
//                 <span><strong className="text-[#525174]">Ein hoher PAR-Wert und gezielte Wellenlängen</strong> sorgen für optimale Photosynthese und Pflanzenentwicklung.</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
//                 <span><strong className="text-[#525174]">Die Dimmbarkeit vermeidet „Verbrennungen“ oder „Versengen“,</strong> während die energieeffiziente LED-Technologie minimale Wärme erzeugt.</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
//                 <span><strong className="text-[#525174]">Erlebe gesündere und widerstandsfähigere Pflanzen,</strong> die seltener von Schädlingen und Krankheiten betroffen sind.</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
//                 <span><strong className="text-[#525174]">Reduziere drastisch die Rate an sterbenden oder kranken Pflanzen</strong> und stärke dein Selbstvertrauen als Pflanzenliebhaber.</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* 7. Kernbotschaft 4: "Dein Lifestyle, dein grünes Paradies: Zeit für das Wesentliche" */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 flex flex-col lg:flex-row-reverse items-center lg:space-x-reverse lg:space-x-12">
//           <div className="lg:w-1/2 mb-10 lg:mb-0">
//             <Image src="https://placehold.co/700x500/525174/BCE784?text=Entspannte+Menschen+mit+Pflanzen" alt="Entspannte Menschen genießen Pflanzen" width={700} height={500} className="rounded-xl shadow-lg w-full" />
//             <p className="mt-4 text-[#525174] text-sm text-center">Menschen genießen ihre Freizeit, während ihre Pflanzen prächtig gedeihen.</p>
//           </div>
//           <div className="lg:w-1/2">
//             <h2 className="text-4xl font-bold mb-6 text-[#525174]">Mehr Freude, weniger Aufwand: Gewinne Zeit für das, was wirklich zählt.</h2>
//             <ul className="space-y-4 text-lg text-[#525174]">
//               <li className="flex items-start">
//                 <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
//                 <span><strong className="text-[#525174]">Der Zeitaufwand für Pflanzenpflege wird massiv reduziert</strong> – selbst eine große Sammlung wird zum stressfreien Vergnügen.</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
//                 <span><strong className="text-[#525174]">Platziere deine Pflanzen flexibel,</strong> selbst bei begrenzter Fensterfläche, dank unserer Hängelampe. Erschaffe deinen Urban Jungle überall.</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-[#5DD39E] mr-3 text-2xl">✓</span>
//                 <span><strong className="text-[#525174]">Ideal auch für Urlaube oder Geschäftsreisen:</strong> Dein urbanes Ökosystem kümmert sich um alles, sodass du unbesorgt sein kannst.</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* 8. Warum Nature's Code? */}
//       <section className="py-20 bg-[#BCE784]"> {/* Light green/yellow background */}
//         <div className="container mx-auto px-4 text-center max-w-4xl">
//           <h2 className="text-4xl font-bold mb-12 text-[#525174]">Qualität, auf die du zählen kannst.</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-[#525174]">
//             <div className="p-6 bg-white rounded-xl shadow-md">
//               <h3 className="text-2xl font-semibold mb-4 text-[#348AA7]">Unsere Geschichte & Engagement</h3>
//               <p>
//                 Bei Nature&apos;s Code sind wir leidenschaftlich daran interessiert, innovative Lösungen für die Pflanzenpflege zu entwickeln. Wir glauben, dass jeder die Freude an prächtigen Pflanzen erleben sollte, ohne den damit verbundenen Aufwand.
//               </p>
//             </div>
//             <div className="p-6 bg-white rounded-xl shadow-md">
//               <h3 className="text-2xl font-semibold mb-4 text-[#348AA7]">Langlebigkeit & Nachhaltigkeit</h3>
//               <p className="mb-4">
//                 Unsere LEDs sind für eine außergewöhnliche Langlebigkeit ausgelegt (ähnlich Soltechs 7-11 Jahre Lebensdauer), und das gesamte System ist robust und zuverlässig.
//               </p>
//               <p>
//                 Wir legen Wert auf Energieeffizienz und einen ressourcenschonenden Ansatz, um eine nachhaltige grüne Oase in deinem Zuhause zu schaffen.
//               </p>
//             </div>
//             <div className="p-6 bg-white rounded-xl shadow-md col-span-1 md:col-span-2">
//               <h3 className="text-2xl font-semibold mb-4 text-[#348AA7]">Forschung, Entwicklung & Transparenz</h3>
//               <p className="mb-4">
//                 Entwickelt in Deutschland – wir stehen für Qualität, auf die man sich verlassen kann. Unser Engagement für Forschung und Entwicklung stellt sicher, dass du immer die beste Technologie für deine Pflanzen erhältst.
//               </p>
//               <p>
//                 Die intuitive App bietet dir volles Monitoring von Wachstums- und Sensordaten und macht komplexe Informationen verständlich, sodass du immer den Überblick behältst.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 9. Kundenstimmen / Social Proof */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold mb-12 text-[#525174]">Was unsere Kunden sagen.</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="p-8 bg-[#BCE784] rounded-xl shadow-md flex flex-col items-center"> {/* Light green/yellow background */}
//               <Image src="https://placehold.co/100x100/525174/BCE784?text=Kunde+1" alt="Kundenportrait 1" width={100} height={100} className="rounded-full mb-4" />
//               <p className="italic text-[#525174] mb-4">
//               &quot;Endlich gedeihen meine Pflanzen prächtig, und das ganz ohne Aufwand! Das Design ist einfach umwerfend und passt perfekt in mein Wohnzimmer.&quot;
//               </p>
//               <p className="font-semibold text-[#5DD39E]">- Anna M., Berlin</p>
//             </div>
//             <div className="p-8 bg-[#BCE784] rounded-xl shadow-md flex flex-col items-center">
//               <Image src="https://placehold.co/100x100/525174/BCE784?text=Kunde+2" alt="Kundenportrait 2" width={100} height={100} className="rounded-full mb-4" />
//               <p className="italic text-[#525174] mb-4">
//               &quot;Ich bin oft auf Reisen, und dank Nature&apos;s Code muss ich mir keine Sorgen mehr um meine Pflanzen machen. Sie sehen fantastisch aus!&quot;
//               </p>
//               <p className="font-semibold text-[#5DD39E]">- Max S., München</p>
//             </div>
//             <div className="p-8 bg-[#BCE784] rounded-xl shadow-md flex flex-col items-center">
//               <Image src="https://placehold.co/100x100/525174/BCE784?text=Kunde+3" alt="Kundenportrait 3" width={100} height={100} className="rounded-full mb-4" />
//               <p className="italic text-[#525174] mb-4">
//               &quot;Die Qualität ist jeden Cent wert. Meine Pflanzen sind gesünder und widerstandsfähiger geworden. Eine echte Bereicherung für mein Zuhause.&quot;
//               </p>
//               <p className="font-semibold text-[#5DD39E]">- Lena K., Hamburg</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 10. CTA Section (Wiederholung) */}
//       <section className="py-20 bg-[#513B56] text-white text-center"> {/* Darker purple background */}
//         <div className="container mx-auto px-4 max-w-3xl">
//           <h2 className="text-4xl font-bold mb-6">Bereit für ein neues Kapitel der Pflanzenpflege?</h2>
//           <p className="text-xl mb-10 opacity-90">
//             Erlebe die perfekte Symbiose aus Design, Technologie und Natur. Werde Teil der Nature&apos;s Code Familie und erschaffe deine eigene grüne Oase.
//           </p>
//           <button className="px-10 py-5 text-xl font-semibold text-[#513B56] bg-white rounded-full shadow-lg hover:bg-[#BCE784] hover:text-[#525174] transition duration-300">
//             Jetzt das Urbanes Ökosystem entdecken
//           </button>
//         </div>
//       </section>

//       {/* 11. Footer */}
//       <footer className="bg-[#513B56] text-[#BCE784] py-12"> {/* Darker purple background, light green/yellow text */}
//         <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Navigation */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-white transition duration-200">Shop</a></li>
//               <li><a href="#" className="hover:text-white transition duration-200">Über uns</a></li>
//               <li><a href="#" className="hover:text-white transition duration-200">FAQ & Hilfe</a></li>
//               <li><a href="#" className="hover:text-white transition duration-200">Kontakt</a></li>
//               <li><a href="#" className="hover:text-white transition duration-200">Blog</a></li>
//               <li><a href="#" className="hover:text-white transition duration-200">Mein Konto</a></li>
//               <li><a href="#" className="hover:text-white transition duration-200">Rücksendungen & Garantie</a></li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Folge uns</h3>
//             <div className="flex space-x-4">
//               {/* Font Awesome Icons */}
//               <a href="#" className="text-[#BCE784] hover:text-white transition duration-200">
//                 <i className="fab fa-facebook-f text-2xl"></i>
//               </a>
//               <a href="#" className="text-[#BCE784] hover:text-white transition duration-200">
//                 <i className="fab fa-instagram text-2xl"></i>
//               </a>
//               <a href="#" className="text-[#BCE784] hover:text-white transition duration-200">
//                 <i className="fab fa-pinterest-p text-2xl"></i>
//               </a>
//               <a href="#" className="text-[#BCE784] hover:text-white transition duration-200">
//                 <i className="fab fa-youtube text-2xl"></i>
//               </a>
//             </div>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
//             <p className="text-[#BCE784] mb-4">Verpassen Sie keine Neuigkeiten!</p>
//             <form>
//               <input
//                 type="email"
//                 placeholder="Ihre E-Mail-Adresse"
//                 className="w-full p-3 rounded-md bg-[#525174] text-white border border-[#525174] focus:outline-none focus:ring-2 focus:ring-[#5DD39E]"
//               />
//               <button
//                 type="submit"
//                 className="mt-4 w-full py-3 bg-[#5DD39E] text-white font-semibold rounded-md hover:bg-[#348AA7] transition duration-300"
//               >
//                 Abonnieren
//               </button>
//             </form>
//           </div>

//           {/* Legal */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Rechtliches</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-white transition duration-200">Impressum</a></li>
//               <li><a href="#" className="hover:text-white transition duration-200">Datenschutz</a></li>
//               <li><a href="#" className="hover:text-white transition duration-200">AGB</a></li>
//               <li><a href="#" className="hover:text-white transition duration-200">Versand</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="container mx-auto px-4 text-center mt-12 text-[#525174] text-sm"> {/* Dark purple/grey for copyright */}
//           &copy; {new Date().getFullYear()} Nature&apos;s Code. Alle Rechte vorbehalten.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;

// pages.tsx
import React from 'react';
import Image from 'next/image'; // Uncommented and now actively used

// Main App component for the Nature's Code homepage
const App: React.FC = () => {
  return (
    // Tailwind CSS is assumed to be loaded via CDN in the HTML file
    // Overall background is customBlack, default text is green2 for a dark theme
    <div className="font-sans antialiased text-green2 bg-[#131B23]">
      {/* Header / Navigation */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4 bg-transparent">
        <nav className="container flex items-center justify-between mx-auto">
          <div className="text-2xl font-bold text-[#E7DFC6]">Nature&apos;s Code</div>
          <ul className="flex space-x-6 text-lg text-[#B4A694]">
            <li><a href="#" className="hover:text-[#E7DFC6] transition duration-300">Shop</a></li>
            <li><a href="#" className="hover:text-[#E7DFC6] transition duration-300">Tools</a></li>
            <li><a href="#" className="hover:text-[#E7DFC6] transition duration-300">Blog</a></li>
            <li><a href="#" className="hover:text-[#E7DFC6] transition duration-300">Über uns</a></li>
            <li><a href="#" className="hover:text-[#E7DFC6] transition duration-300">FAQ</a></li>
            <li><a href="#" className="hover:text-[#E7DFC6] transition duration-300">Kontakt</a></li>
          </ul>
        </nav>
      </header>

      {/* 1. Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080/131B23/131B23?text=Stilvolles+Wohnzimmer+mit+Pflanzen')" }}>
        {/* Overlay with costumBlack for depth and text readability */}
        <div className="absolute inset-0 bg-[#131B23] opacity-60"></div>
        <div className="relative z-10 text-center text-[#E7DFC6] p-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 rounded-lg text-[#D9EE6F]">
            Das Urbane Ökosystem
          </h1>
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 rounded-lg text-[#87A623]"> 
            Imitiert die Natur. Vollautomatisiert durch Technik.
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 text-[#E9F1F7]">
            Vollautomatisierte Pflanzenpflege mit perfekten Ergebnissen. Technik, die nicht aussieht wie Technik und sich ästhetisch in deine Raumgestaltung integriert. 
            Revolutioniere deine Pflanzenpflege und erlebe gesunde, langlebige Pflanzen ohne Aufwand, Fachwissen oder Zeit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 text-lg font-semibold text-[#131B23] bg-[#D9EE6F] rounded-full shadow-lg hover:bg-[#87A623] transition duration-300">
              Entdecke das Urbane Ökosystem
            </button>
            <button className="px-8 py-4 text-lg font-semibold text-[#131B23] bg-[#E7DFC6] rounded-full shadow-lg hover:bg-[#816C61] hover:text-[#283037] transition duration-300">
              Jetzt kaufen
            </button>
          </div>
        </div>
      </section>

      {/* 2. Problem-Ansprache */}
      <section className="py-20 bg-green2"> {/* green2 background */}
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-green4">
            Verabschiede dich von Pflanzenstress und Unsicherheit.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8 text-lg text-green4">
            <div className="p-6 bg-green1 rounded-xl shadow-md text-center">
              <div className="text-green3 text-3xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2 text-green3">Gießen als lästige Aufgabe</h3>
              <p className="text-sm text-green4">
                Die Aufgabe, die man entweder vergisst, oder es zu gut meint.
              </p>
            </div>

            <div className="p-6 bg-green1 rounded-xl shadow-md text-center">
              <div className="text-green3 text-3xl mb-4">🧪</div>
              <h3 className="text-xl font-semibold mb-2 text-green3">Überforderung bei Düngung</h3>
              <p className="text-sm text-green4">
                Das nötige Feingefühl und Fachwissen der Düngung wirkt überwältigend, weshalb Sie dies lieber vermeiden.
              </p>
            </div>

            <div className="p-6 bg-green1 rounded-xl shadow-md text-center">
              <div className="text-green3 text-3xl mb-4">🥀</div>
              <h3 className="text-xl font-semibold mb-2 text-green3">Frust durch sterbende Pflanzen</h3>
              <p className="text-sm text-green4">
                Die hohe Rate an sterbenden Pflanzen ist frustrierend und man scheint es nicht richtig machen zu können.
              </p>
            </div>

            <div className="p-6 bg-green1 rounded-xl shadow-md text-center">
              <div className="text-green3 text-3xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2 text-green3">Widersprüchliche Ratgeber</h3>
              <p className="text-sm text-green4">
                Informationen und Ratgeber widersprechen sich oder sind zu ungenau. Pflanzenbedürfnisse scheinen komplex und willkürlich zu sein.
              </p>
            </div>

            <div className="p-6 bg-green1 rounded-xl shadow-md text-center">
              <div className="text-green3 text-3xl mb-4">🧭</div>
              <h3 className="text-xl font-semibold mb-2 text-green3">Trial and Error</h3>
              <p className="text-sm text-green4">
                <strong>"Dafür musst du ein Gefühl bekommen"</strong>  
                <br/>
                Gießfrequenz, Standortwahl und Düngen scheinen ein Trial and Error zu sein, durch den jeder Pflanzenbesitzer durch muss.
              </p>
            </div>

            <div className="p-6 bg-green4 rounded-xl shadow-md text-center">
              <div className="text-green3 text-3xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-2 text-green1">Kein grüner Daumen?</h3>
              <p className="text-sm text-green2">
                Sie glauben nicht an ihren grünen Daumen. 
                <br /> <br /> 
                <span className="text-green1 font-bold">Wir von Nature's Code wissen, dass das ein Irrtum ist.</span>
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

      {/* 3. Das "Urbanes Ökosystem" – Die Gesamtlösung */}
      <section className="py-24 bg-costumBlack"> {/* Dark background */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-green2">Das autonome Urbane Ökosystem</h2>
          <p className="text-lg text-green2 mb-16 max-w-3xl mx-auto">
            Pflanzen brauchen vor allem drei Dinge: genügend Licht, sauberes Wasser und den richtigen Dünger.
            Unser Urbanes Ökosystem vereint und automatisiert die Erfüllung dieser Bedürfnisse – optimiert für perfektes Wachstum,
            basierend auf etlichen wissenschaftlichen Quellen und bestätigt durch eigene Tests.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Box 1 */}
            <div className="bg-green4 rounded-xl shadow-lg p-8 flex flex-col items-center">
              <Image
                src="https://placehold.co/320x220/768041/D9EE6F?text=Elevate"
                alt="Elevate"
                width={320}
                height={220}
                className="mb-6 object-cover rounded-md"
              />
              <h3 className="text-2xl font-semibold mb-3 text-green3">Elevate</h3>
              <p className="text-green2 text-base">Optimales Licht, wo immer du es brauchst – ästhetisch und effektiv.</p>
            </div>

            {/* Box 2 */}
            <div className="bg-green4 rounded-xl shadow-lg p-8 flex flex-col items-center">
              <Image
                src="https://placehold.co/320x220/768041/D9EE6F?text=Topf"
                alt="Topf"
                width={320}
                height={220}
                className="mb-6 object-cover rounded-md"
              />
              <h3 className="text-2xl font-semibold mb-3 text-green3">Topf</h3>
              <p className="text-green2 text-base">Automatisierte Bewässerung – kein Nachfüllen für mindestens 4 Wochen.</p>
            </div>

            {/* Box 3 */}
            <div className="bg-green4 rounded-xl shadow-lg p-8 flex flex-col items-center">
              <Image
                src="https://placehold.co/320x220/768041/D9EE6F?text=Mischstation"
                alt="Mischstation"
                width={320}
                height={220}
                className="mb-6 object-cover rounded-md"
              />
              <h3 className="text-2xl font-semibold mb-3 text-green3">Mischstation</h3>
              <p className="text-green2 text-base">Wasserfilterung und präzise Nährstoffversorgung für starkes und gesundes Wachstum.</p>
            </div>
          </div>

          {/* Infografik */}
          <div className="mt-20">
            <Image
              src="https://placehold.co/800x400/A7B758/44482A?text=Infografik+Systeminteraktion"
              alt="System Interaktion Infografik"
              width={800}
              height={400}
              className="mx-auto rounded-xl shadow-lg"
            />
            <p className="mt-4 text-green2 text-sm">
              Visualisierung der synergetischen Funktionsweise des Urbanen Ökosystems.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Kernbotschaft 1: "Pflanzenliebe neu definiert: Design trifft Natur" */}
      <section className="py-20 bg-green2"> {/* green2 background */}
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
      </section>

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
