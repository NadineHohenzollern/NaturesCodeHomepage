import React from 'react';

interface QuoteSectionProps {
  bgColor: string;
  textColorQuote: string;
  textColorSource: string;
  fontFamily?: string;
  quoteText: string;
  quoteSource?: string;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({
  bgColor,
  textColorQuote,
  textColorSource,
  fontFamily = 'font-sans',
  quoteText,
  quoteSource,
}) => {
  return (
    <section className={`relative py-20 ${bgColor} flex items-center justify-center overflow-hidden`}>
      {/* Das absolute Anführungszeichen wurde entfernt. */}
      
      <div className="relative z-10 container mx-auto px-6 max-w-4xl flex items-start">
        {/* Ein einziges großes Anführungszeichen, das links neben dem Text positioniert ist. */}
        <span className={`text-[8rem] md:text-[10rem] font-serif leading-none ${textColorQuote} opacity-100 mr-4 -mt-8`}>“</span>
        
        <div className="flex-1 text-left">
          <p className={`text-2xl md:text-3xl mb-2 italic font-semibold ${fontFamily} ${textColorQuote}`}>
            "{quoteText}"
          </p>
          {quoteSource && (
            <p className={`text-sm font-medium ${textColorSource}`}>
              - {quoteSource}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
