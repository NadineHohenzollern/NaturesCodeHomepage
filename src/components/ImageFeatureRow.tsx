"use client";
import React from "react";

type ImageFeature = {
  src: string;
  alt: string;
  title: string;
  description: React.ReactNode;
  overlayText?: React.ReactNode; 
  //link: string;
};

type ImageFeatureRowProps = {
  features: ImageFeature[];
};

export default function ImageFeatureRow({ features }: ImageFeatureRowProps) {
  return (
    <section className="px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex-1 text-center group relative overflow-hidden">
            {/* Bild mit Overlay */}
            <div className="relative w-full">
              <img
                src={feature.src}
                alt={feature.alt}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="text-white text-lg font-medium text-left max-h-full max-w-full overflow-auto p-10">
                    {feature.overlayText ?? "Mehr erfahren"}
                </div>
              </div>
            </div>

            {/* Titel & Beschreibung */}
            <h4 className="text-xl font-semibold mt-4 mb-2 text-[#000000]">
              {feature.title}
            </h4>
            <p className="text-base text-[#000000]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// export default function ImageFeatureRow({ features }: ImageFeatureRowProps) {
//   return (
//     <section className="px-6 py-12">
//       <div className="flex flex-col md:flex-row justify-between gap-8">
//         {features.map((feature, index) => (
//           <div key={index} className="flex-1 text-center group relative overflow-hidden">
//             {/* Bild mit Overlay-Link */}
//             <div className="relative w-full">
//               <img
//                 src={feature.src}
//                 alt={feature.alt}
//                 className="w-full h-auto object-cover"
//               />
//               {/* Der gesamte Overlay-Bereich ist jetzt ein Link. */}
//               {/* Wir verwenden den 'link' Prop für das href-Attribut. */}
//               <a
//                 href={feature.link}
//                 className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
//               >
//                 <div className="text-white text-lg font-medium text-left max-h-full max-w-full overflow-auto p-10">
//                   {/* Der Text im Link. */}
//                   {feature.overlayText ?? "Mehr erfahren"}
//                 </div>
//               </a>
//             </div>

//             {/* Titel & Beschreibung */}
//             <h4 className="text-xl font-semibold mt-4 mb-2 text-[#000000]">
//               {feature.title}
//             </h4>
//             <p className="text-base text-[#000000]">{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

