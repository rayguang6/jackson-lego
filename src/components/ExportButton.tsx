'use client';

import React, { useState } from 'react';
import { useDesignStore } from '@/lib/store/designStore';
import { downloadHtml } from '@/lib/utils/exportHtml';

const ExportButton: React.FC = () => {
  const design = useDesignStore((state) => state.design);
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      // Download the HTML file
      await downloadHtml(design);
    } catch (error) {
      console.error('Error exporting HTML:', error);
      alert('Error exporting HTML. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium ${
        isExporting
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-white text-gray-700 hover:bg-gray-50 cursor-pointer'
      }`}
    >
      {isExporting ? 'Exporting...' : 'Export HTML'}
    </button>
  );
};

export default ExportButton; 