import React from 'react';
import { GuaranteeProps, defaultGuaranteeProps } from './types';

export const GuaranteeV2: React.FC<GuaranteeProps> = (props) => {
  const {
    title,
    subtitle,
    badgeText,
    guaranteeImageUrl,
    theme,
    backgroundColor = '#ffffff', // Default white background
    textColor = '#333333' // Default dark text
  } = { ...defaultGuaranteeProps, ...props };

  return (
    <section style={{ backgroundColor, color: textColor }} className="py-16 rounded-lg overflow-hidden border border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="max-w-2xl">
            {/* Badge */}
            {badgeText && (
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-6">
                <span className="w-4 h-4 bg-red-600 rounded-full flex-shrink-0"></span>
                <span className="text-sm font-medium tracking-wider text-red-600 uppercase">{badgeText}</span>
              </div>
            )}

            {/* Title and Subtitle */}
            <h2 className="text-4xl font-bold mb-4 text-gray-900">{title}</h2>
            <p className="text-xl text-gray-700">{subtitle}</p>
          </div>

          {/* Guarantee Image */}
          {guaranteeImageUrl && (
            <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48">
              <img 
                src={guaranteeImageUrl} 
                alt="100% Guarantee" 
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}; 