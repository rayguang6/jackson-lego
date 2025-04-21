import React from 'react';
import { OfferProps, defaultOfferProps } from './types';

export const OfferV3: React.FC<OfferProps> = (props) => {
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
  
  // The benefit lists from the Figma design
  const benefitLists = {
    modularSystem: [
      "Lifetime access to [#] video lessons",
      "Downloadable workbooks and resources",
      "Access to a private community of students"
    ],
    exclusiveBonuses: [
      "Resource Library Access",
      "Priority Access to New Features and Updates",
      "Personalized Funnel Optimization Tips"
    ]
  };
  
  return (
    <section className={`w-full py-24 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
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
          
          {/* Main Content Area */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-8 mt-8">
            {/* Devices Image - 2 columns */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="relative w-full">
                <img 
                  src="https://placehold.co/800x800/FFE5E5/EF083A?text=Responsive+Devices" 
                  alt="Responsive Devices" 
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
            
            {/* Offer Card - 3 columns */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className={`rounded-3xl overflow-hidden shadow-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} border border-gray-200`}>
                <div className="px-8 md:px-12 py-10 md:py-14">
                  {/* Two Feature Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Column 1 */}
                    <div>
                      <h3 className="text-2xl font-semibold mb-7 text-gray-900">The Proven Modular System</h3>
                      <ul className="space-y-5">
                        {benefitLists.modularSystem.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 mr-3 text-green-500">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" />
                              </svg>
                            </span>
                            <span className="text-lg font-medium text-gray-800">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Column 2 */}
                    <div>
                      <h3 className="text-2xl font-semibold mb-7 text-gray-900">Exclusive Bonuses</h3>
                      <ul className="space-y-5">
                        {benefitLists.exclusiveBonuses.map((bonus, index) => (
                          <li key={index} className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 mr-3 text-green-500">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" />
                              </svg>
                            </span>
                            <span className="text-lg font-medium text-gray-800">{bonus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Pricing Section */}
                  <div className="mt-14 text-center">
                    <h3 className="text-2xl font-medium text-gray-900">
                      {specialOfferTitle}
                    </h3>
                    <p className="uppercase tracking-[0.24em] mt-2.5 font-bold text-lg text-gray-500">
                      {specialOfferSubtitle}
                    </p>
                    <div className="mt-2.5">
                      <div className="text-6xl md:text-7xl font-extrabold text-red-600 leading-tight">{specialOfferPrice}</div>
                      <div className="text-3xl mt-1 text-gray-400">
                        <s>{specialOfferOriginalPrice}</s>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="mt-8">
                      <a 
                        href={ctaLink} 
                        className="py-4 px-8 w-full md:w-auto text-center rounded-md text-lg font-bold inline-flex items-center justify-center bg-red-600 text-white hover:bg-red-700 transition-colors"
                      >
                        {ctaText}
                        <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center ml-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08" stroke="#EF083A" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </a>
                    </div>
                    
                    {/* Rating */}
                    <div className="mt-5 flex items-center justify-center gap-2">
                      <div className="text-green-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-gray-700">Rated 4.9/5 by 100's of verified students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 