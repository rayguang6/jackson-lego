import React from 'react';
import { WhoIsThisForProps, defaultWhoIsThisForProps } from './types';

export const WhoIsThisForV1: React.FC<WhoIsThisForProps> = (props) => {
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
        
        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-xl transition-all duration-300 ${
                theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              {profile.image && (
                <div className="mb-4 flex justify-center">
                  <img 
                    src={profile.image} 
                    alt={profile.name} 
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{profile.name}</h3>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                {profile.role}
              </p>
              <p className="text-base">{profile.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 