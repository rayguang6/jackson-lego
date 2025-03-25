'use client';

import React, { useState, ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabPanelProps {
  tabs: Tab[];
  defaultTab?: string;
}

const TabPanel: React.FC<TabPanelProps> = ({ tabs, defaultTab }) => {
  const [activeTabId, setActiveTabId] = useState(defaultTab || tabs[0]?.id);

  return (
    <div>
      <div className="border-b">
        <nav className="flex -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`py-2 px-4 text-center font-medium text-sm mr-2 ${
                activeTabId === tab.id
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-4">
        {tabs.find((tab) => tab.id === activeTabId)?.content}
      </div>
    </div>
  );
};

export default TabPanel; 