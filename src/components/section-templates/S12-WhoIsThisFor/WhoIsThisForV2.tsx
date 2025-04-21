import React from 'react';
import { WhoIsThisForProps, defaultWhoIsThisForProps } from './types';

export const WhoIsThisForV2: React.FC<WhoIsThisForProps> = (props) => {
  const {
    title,
    subtitle,
    profiles,
    theme,
  } = { ...defaultWhoIsThisForProps, ...props };

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-xl max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        
        {/* Profiles */}
        <div className="space-y-12">
          {profiles.map((profile, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-8 p-8 rounded-xl transition-all duration-300 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
              } ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {profile.image && (
                <div className="mb-6 md:mb-0">
                  <img 
                    src={profile.image} 
                    alt={profile.name} 
                    className="w-32 h-32 rounded-full object-cover" 
                  />
                </div>
              )}
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{profile.name}</h3>
                <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {profile.role}
                </p>
                <p className="text-base">{profile.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 