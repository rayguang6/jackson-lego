'use client';

import { HeroLightV1, HeroDarkV3 } from '@/components/sections/Hero';
import React, { useState } from 'react';

export default function HeroPreviewPage() {
  const [variant, setVariant] = useState<'light-v1' | 'dark-v3'>('light-v1');

  return (
    <div className="hero-preview">
      <div className="preview-controls" style={{ padding: '1rem', background: '#f5f5f5', textAlign: 'center' }}>
        <h1>Hero Section Preview</h1>
        <div style={{ margin: '1rem 0' }}>
          <button 
            onClick={() => setVariant('light-v1')}
            style={{ 
              padding: '0.5rem 1rem', 
              margin: '0 0.5rem',
              background: variant === 'light-v1' ? '#333' : '#ccc',
              color: variant === 'light-v1' ? '#fff' : '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Light V1
          </button>
          <button 
            onClick={() => setVariant('dark-v3')}
            style={{ 
              padding: '0.5rem 1rem', 
              margin: '0 0.5rem',
              background: variant === 'dark-v3' ? '#333' : '#ccc',
              color: variant === 'dark-v3' ? '#fff' : '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Dark V3
          </button>
        </div>
      </div>

      <div className="preview-content">
        {variant === 'light-v1' && (
          <HeroLightV1 
            title="Multipurpose Page Blocks Designed for Maximum Efficiency"
            subtitle="Skip design frustration and launch your site fast with pre-designed, proven components."
            eyebrowText="The #1 Community for Game-Changers"
            ctaText="GET INSTANT ACCESS"
          />
        )}
        {variant === 'dark-v3' && (
          <HeroDarkV3 
            title="Multipurpose Page Blocks Designed for Maximum Efficiency"
            subtitle="Skip design frustration and launch your site fast with pre-designed, proven components."
            tagText="Generative Business Intelligence for Team"
            ctaText="GET INSTANT ACCESS"
          />
        )}
      </div>
    </div>
  );
} 