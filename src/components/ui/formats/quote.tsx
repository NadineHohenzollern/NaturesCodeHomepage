import React from 'react';

interface QuoteProps {
  quote: string;
  source: string;

}

const Quote: React.FC<QuoteProps> = ({
  quote,
  source,
}) => {
  return (
    <div className="relative z-10 container mx-auto px-6 max-w-4xl flex items-center">
      {/* Ein einziges großes Anführungszeichen, das links neben dem Text positioniert ist. */}
      <span className={`text-[8rem] md:text-[10rem] font-serif leading-none opacity-100 mr-4 -mt-8`}>“</span>
      
      <div className="flex-1 text-left">
        <p className={`text-2xl md:text-3xl mb-2 italic font-semibold`}>
          "{quote}"
        </p>
        {source && (
          <p className={`text-sm font-medium`}>
            - {source}
          </p>
        )}
      </div>
    </div>

  );
};

export default Quote;
