'use client';

import React, { useState } from 'react';
import { DesignProvider } from '@/lib/contexts/DesignContext';
import { templateRegistry } from '@/lib/constants/templateRegistry';
import { SectionType } from '@/lib/types/index';

export default function PreviewPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const renderSection = (sectionType: SectionType, variant: string) => {
    const section = templateRegistry[sectionType];
    if (!section) return null;

    const template = section[theme]?.[variant];
    if (!template) return null;

    const Component = template.component;
    return (
      <div className="mb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{template.name}</h2>
          <p className="text-gray-500">{template.description}</p>
        </div>
        <Component {...template.preview} />
      </div>
    );
  };

  return (
    <DesignProvider>
      <div className="preview-page">
        {/* Theme Controls */}
        <div className="preview-controls sticky top-0 z-10 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Template Preview</h1>
              <div className="flex gap-4">
                <button 
                  onClick={() => setTheme('light')}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    theme === 'light' 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Light Mode
                </button>
                <button 
                  onClick={() => setTheme('dark')}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    theme === 'dark' 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Dark Mode
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Templates */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          {renderSection(SectionType.Hero, 'v1')}

          {/* Problem Sections */}
          {renderSection(SectionType.Problem, 'v1')}
          {renderSection(SectionType.Problem, 'v2')}
          {renderSection(SectionType.Problem, 'v3')}
        </div>
      </div>
    </DesignProvider>
  );
} 