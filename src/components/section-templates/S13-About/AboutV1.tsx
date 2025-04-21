import React from 'react';
import { AboutProps, defaultAboutProps } from './types';

export const AboutV1: React.FC<AboutProps> = (props) => {
  const {
    title,
    subtitle,
    badgeText,
    quote,
    imageUrl,
    theme
  } = { ...defaultAboutProps, ...props };

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="max-w-xl">
            {/* Badge */}
            {badgeText && (
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-md mb-5">
                <span className="w-4 h-4 bg-red-600 rounded-full flex-shrink-0"></span>
                <span className="text-sm font-medium tracking-wider text-red-600 uppercase">{badgeText}</span>
              </div>
            )}

            {/* Title and Subtitle */}
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-gray-600 mb-10">{subtitle}</p>

            {/* Quote */}
            {quote && (
              <div className="bg-red-600 text-white p-8 rounded-lg">
                <div className="mb-4">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 25H5L10 15H15L12.5 25Z" stroke="white" strokeWidth="2" />
                    <path d="M27.5 25H20L25 15H30L27.5 25Z" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                {quote.heading && <h3 className="text-xl font-medium mb-4">{quote.heading}</h3>}
                <p className="text-lg mb-6">{quote.text}</p>
                <p className="text-sm">– {quote.author}, {quote.position}</p>
              </div>
            )}
          </div>

          {/* Image */}
          {imageUrl && (
            <div className="flex-shrink-0 w-full lg:w-1/2">
              <img 
                src={imageUrl} 
                alt="About Us" 
                className="w-full h-auto rounded-lg object-cover shadow-lg" 
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}; 