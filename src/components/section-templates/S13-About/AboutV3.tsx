import React from 'react';
import { AboutProps, defaultAboutProps } from './types';

export const AboutV3: React.FC<AboutProps> = (props) => {
  const {
    title,
    subtitle,
    badgeText,
    features,
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

            {/* Features */}
            {features && features.length > 0 && (
              <div className="bg-red-50 rounded-lg p-8 space-y-8">
                {features.map((feature, index) => (
                  <div key={index}>
                    {index > 0 && <div className="h-px bg-gray-200 opacity-30 mb-8"></div>}
                    <div className="flex gap-6 items-start">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-b from-red-300 to-red-600 flex items-center justify-center flex-shrink-0">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 10L9.16667 11.6667L12.5 8.33333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10.0001C18.3333 5.39771 14.6024 1.66675 10 1.66675C5.39763 1.66675 1.66667 5.39771 1.66667 10.0001C1.66667 14.6024 5.39763 18.3334 10 18.3334Z" stroke="white" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
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