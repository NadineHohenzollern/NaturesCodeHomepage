import React from 'react';
//import MediaContentSection from '@/components/MediaContentSection';
import QuoteSection from '@/components/QuoteSection';
import ImageSection from '@/components/ImageSection';
import TableSection from '@/components/TableSection';
import ProductCard from '@/components/ProductCard';
import TitleSection from '@/components/ui/sections/pageTitle';
import MediaContent from '@/components/ui/formats/mediaContent';
import Quote from '@/components/ui/formats/quote';

const AboutPage: React.FC = () => {
  return (
    <div>

      <TitleSection
        title="Shade Bar"
        caption="The first grow light designed for shade loving plants."
        image='/plants/plants_5.jpg'
      />

      {/* explaining the biological foundations for why shade bars make sense */}
      <section>
        <div className="bg-costumBlack text-white p-8 space-y-16">
          <MediaContent
            title="In nature..."
            caption="... shadow-loving plants receive a different spectrum than other plants. It has much more far red bla bla bla"
            image={"/elevate/lightspectrum.png"}
            image_position="left"
          />
          <Quote
            quote="The first grow light designed for shade-loving plants."
            source="Quelle, 2024"
          />
        </div>
        
      </section>
      

       
      <ImageSection
        imagePath="/elevate/lightbar.png"
        altText="lightbar"
      />
      {/* <MediaContentSection
          imagePath="/elevate/lightspectrum.png"
          heading="light spectrum"
          text="Our shade bars imitate the natural light spectrum in the shadow. bla bla bla"
          bgColor="bg-costumBlack"
          textColor="text-white"
          isImageLeft={false}
      /> */}
      <QuoteSection
          bgColor="bg-costumBlack"
          textColorQuote="text-white"
          textColorSource="text-gray-400"
          quoteText="Far red light increases leaf size by 30%."
          fontFamily="font-sans"
          quoteSource="Paper xy, 2024"
      />  
      <TableSection
        data={[
          ['shadow bar', '-'],
          ['deep shadow', 'elevate'],
        ]}
        columnHeaders={['shadow plant', 'other']}
        rowHeaders={['I already have a grow light', "I don't have a grow light yet"]}
        title="Which grow light should I use?"
        bgColor='bg-white'
        textColor="text-costumBlack"
        cellTextColor='text-costumBlack'
      />
      <div className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center p-8 gap-8">
      {/* Erste Produktkarte */}
      <ProductCard
        title="Shade Bar"
        features={[
          'Feature 1',
          'Feature 2',
          'Feature 3',
        ]}
        imagePath="https://placehold.co/600x200/gray/white?text=Produkt-Bild"
        altText="Produktbild"
        buttonText="Add to cart"
        buttonLink="#"
        bgColor="costumBlack"
        textColor="text-white"
        checkColor="text-green-400"
        imageWidth="600px"
        imageHeight="200px"
        buttonColor1="costumBlack"
        buttonColor2="white"
      />
      
      {/* Zweite Produktkarte */}
      <ProductCard
        title="Shade Bar"
        features={[
          'Feature 1',
          'Feature 2',
          'Feature 3',
        ]}
        imagePath="https://placehold.co/600x200/gray/white?text=Produkt-Bild"
        altText="Produktbild"
        buttonText="Add to cart"
        buttonLink="#"
        bgColor="costumBlack"
        textColor="text-white"
        checkColor="text-green-400"
        imageWidth="600px"
        imageHeight="200px"
        buttonColor1="costumBlack"
        buttonColor2="white"
      />
      </div>
    </div>
  );
};

export default AboutPage;