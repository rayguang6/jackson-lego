import React from 'react';
import { WorkWithUsProps, defaultWorkWithUsProps } from './types';

export const WorkWithUsV2: React.FC<WorkWithUsProps> = (props) => {
  const { 
    eyebrowText, 
    title, 
    subtitle, 
    cards, 
    theme 
  } = { ...defaultWorkWithUsProps, ...props };

  const isDark = theme === 'dark';
  
  return (
    <section className={`w-full py-24 ${isDark ? 'bg-gray-900 text-white' : 'bg-white'}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-2xl mx-auto text-center">
          {eyebrowText && (
            <div className={`inline-flex mb-4 items-center gap-2 px-5 py-2 rounded-full text-sm font-medium tracking-wide ${
              isDark ? 'bg-gray-800 text-red-500 border border-gray-700' : 'bg-white text-red-600 border border-gray-200 shadow-sm'
            }`}>
              <span className="text-red-600">{eyebrowText}</span>
            </div>
          )}
          
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
        
        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {cards?.map((card, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}
            >
              {/* Card Banner */}
              <div className="bg-gradient-to-r from-red-500 to-red-700 h-2"></div>
              
              <div className="p-8">
                {/* Card Header */}
                <div className="flex items-start mb-6">
                  <div className="mr-4">
                    <div className={`w-16 h-16 p-4 rounded-full ${
                      isDark ? 'bg-gray-700 text-red-400' : 'bg-red-100 text-red-600'
                    } flex items-center justify-center`}>
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        {index === 0 ? (
                          // Community icon (people)
                          <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.62c0-1.17.68-2.25 1.76-2.73 1.17-.51 2.61-.9 4.24-.9zM12 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm8 10V18.13c0-1.24-.8-2.36-1.87-2.87-1.14-.53-2.32-.89-3.41-1.08.19-.35.28-.75.28-1.18 0-1.38-1.12-2.5-2.5-2.5-.52 0-1 .16-1.41.43.13-.51.41-.93.79-1.27C13.19 8.55 14.56 8 16 8V6c-2.42 0-4.44.93-5.88 2.39C8.7 6.94 6.7 6 4 6v2c1.44 0 2.8.55 3.91 1.55 1.21 1.09 1.97 2.61 1.97 4.45 0 3.18-2.45 5.79-5.72 6H20z" />
                        ) : (
                          // Newsletter icon (mail)
                          <path d="M21.5 9v.5c0 .55-.2 1.08-.559 1.496l-7 8A1.999 1.999 0 0112 20c-.674 0-1.284-.326-1.657-.823l-4.474-6.19a2 2 0 01-.365-1.067L5.5 12V6a1 1 0 011-1h12a3 3 0 013 3v1zM16 5H8v-.5C8 3.67 8.67 3 9.5 3h5c.83 0 1.5.67 1.5 1.5V5z" />
                        )}
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      {card.title}
                    </h3>
                    <p className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {card.description}
                    </p>
                  </div>
                </div>
                
                {/* Divider */}
                <div className={`w-full h-px my-6 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                
                {/* CTA Button */}
                <a 
                  href={card.ctaLink}
                  className={`block w-full py-4 px-6 text-center rounded-lg font-semibold transition-all ${
                    isDark 
                      ? 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg' 
                      : 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg'
                  }`}
                >
                  {card.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 