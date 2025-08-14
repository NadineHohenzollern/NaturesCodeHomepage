import React from 'react';
import MediaContentSection from '@/components/MediaContentSection';
import QuoteSection from '@/components/QuoteSection';
import ImageSection from '@/components/ImageSection';
import TableSection from '@/components/TableSection';
import ProductCard from '@/components/ProductCard';
import ProductVendingSection from '@/components/ProductVendingSection';

const AboutPage: React.FC = () => {
  return (
    <div>
      <MediaContentSection
          imagePath="/plants/plants_5_cropped.png"
          heading="Shade Bars"
          text="The first grow light designed for shade-loving plants."
          bgColor="bg-costumBlack"
          textColor="text-white"
          isImageLeft={true}
      />
      <MediaContentSection
          imagePath="/elevate/lightspectrum.png"
          heading="In nature..."
          text="... shadow-loving plants receive a different spectrum than other plants. It has much more far red bla bla bla"
          bgColor="bg-costumBlack"
          textColor="text-white"
          isImageLeft={false}
      />
      <QuoteSection
          bgColor="bg-costumBlack"
          textColorQuote="text-white"
          textColorSource="text-gray-400"
          quoteText="The first grow light designed for shade-loving plants."
          fontFamily="font-sans"
          quoteSource="Quelle, 2024"
      />      
      <ImageSection
        imagePath="/elevate/lightbar.png"
        altText="lightbar"
      />
      <MediaContentSection
          imagePath="/elevate/lightspectrum.png"
          heading="light spectrum"
          text="Our shade bars imitate the natural light spectrum in the shadow. bla bla bla"
          bgColor="bg-costumBlack"
          textColor="text-white"
          isImageLeft={false}
      />
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