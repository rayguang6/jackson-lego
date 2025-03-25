'use client';

import React from 'react';
import { Section } from '@/lib/types';

interface SitemapSectionProps {
  section: Section;
  onRemove: (id: string) => void;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
  isFirst: boolean;
  isLast: boolean;
}

const SitemapSection: React.FC<SitemapSectionProps> = ({
  section,
  onRemove,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast,
}) => {
  return (
    <div className="flex items-center justify-between p-3 mb-2 bg-white border rounded-lg shadow-sm">
      <div className="flex items-center">
        <div className="mr-3 p-2 rounded bg-gray-100">
          <span className="text-gray-600">{section.order + 1}</span>
        </div>
        <div>
          <h3 className="font-medium">{section.title}</h3>
          <p className="text-sm text-gray-500">{section.type}</p>
        </div>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => onMoveUp(section.id)}
          disabled={isFirst}
          className={`p-1 rounded ${
            isFirst ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'
          }`}
          aria-label="Move up"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
        
        <button
          onClick={() => onMoveDown(section.id)}
          disabled={isLast}
          className={`p-1 rounded ${
            isLast ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'
          }`}
          aria-label="Move down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        
        <button
          onClick={() => onRemove(section.id)}
          className="p-1 text-red-500 hover:bg-red-50 rounded"
          aria-label="Remove section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SitemapSection; 