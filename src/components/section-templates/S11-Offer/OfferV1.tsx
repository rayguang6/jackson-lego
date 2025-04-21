import React from 'react';
import { OfferProps, defaultOfferProps } from './types';

export const OfferV1: React.FC<OfferProps> = (props) => {
  const { 
    eyebrowText, 
    title, 
    subtitle, 
    offers,
    specialOfferTitle,
    specialOfferSubtitle,
    specialOfferPrice,
    specialOfferOriginalPrice,
    ctaText,
    ctaLink,
    footerText,
    theme 
  } = { ...defaultOfferProps, ...props };

  const isDark = theme === 'dark';
  
  return (
    <section className={`w-full py-24 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-red-50'}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center gap-10">
          {/* Eyebrow */}
          {eyebrowText && (
            <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium tracking-wide ${
              isDark ? 'bg-gray-800 text-red-500 border border-gray-700' : 'bg-white text-red-600 border border-gray-200 shadow-sm'
            }`}>
              <span className="text-red-600 tracking-widest uppercase font-medium">{eyebrowText}</span>
            </div>
          )}
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            {title && (
              <h2 className={`text-4xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {subtitle}
              </p>
            )}
          </div>
          
          {/* Grouped Devices Image */}
          <div className="w-full max-w-4xl mx-auto my-8">
            <div className="relative w-full">
              <img 
                src="https://placehold.co/1200x600/FFE5E5/EF083A?text=Responsive+Devices" 
                alt="Responsive Devices" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              {/* Overlay to simulate a real device image */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-100/10 rounded-lg"></div>
            </div>
          </div>
          
          {/* Offers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6">
            {offers?.map((offer, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg border ${
                  isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                } shadow-lg`}
              >
                <div className="flex gap-10">
                  {/* Offer Image */}
                  <div className="hidden md:block w-1/4">
                    <div className="aspect-square bg-gradient-to-b from-red-100 to-red-600 rounded-md relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3/4 h-3/4 bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url('https://placehold.co/600x400/FFE5E5/EF083A?text=PC')"}}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    {/* Offer Content */}
                    <div className="mb-4">
                      {/* Offer Number */}
                      <div className="text-red-600 font-medium text-base mb-2">{offer.offerNumber}</div>
                      
                      {/* Offer Title */}
                      <h3 className={`text-2xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {offer.title}
                      </h3>
                      
                      {/* Offer Description */}
                      <p className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {offer.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Special Offer */}
          <div className="mt-16 text-center">
            <h3 className={`text-2xl font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>
              {specialOfferTitle}
            </h3>
            <p className={`uppercase tracking-[0.24em] mt-3 font-bold text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {specialOfferSubtitle}
            </p>
            <div className="mt-4">
              <div className="text-6xl md:text-7xl font-extrabold text-red-600 leading-tight">{specialOfferPrice}</div>
              <div className={`text-3xl mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <s>{specialOfferOriginalPrice}</s>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="mt-10">
            <a 
              href={ctaLink} 
              className={`py-4 px-8 text-center rounded-md text-lg font-semibold inline-flex items-center gap-2 ${
                isDark 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-red-600 text-white hover:bg-red-700'
              } transition-colors ring-8 ring-red-100/25`}
            >
              {ctaText}
              <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center ml-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08" stroke="#EF083A" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
          
          {/* Footer Text */}
          {footerText && (
            <div className="mt-10 flex items-center gap-4">
              {/* User Avatars */}
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-[url('https://placehold.co/100?text=1')]"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-[url('https://placehold.co/100?text=2')]"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-[url('https://placehold.co/100?text=3')]"></div>
              </div>
              <p className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                {footerText}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}; 