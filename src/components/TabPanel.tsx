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
      <div className="border-b border-gray-200">
        <nav className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`
                px-5 py-3 text-center font-medium text-sm mr-4
                ${
                  activeTabId === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-800'
                }
              `}
              aria-current={activeTabId === tab.id ? 'page' : undefined}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="pt-6">
        {tabs.find((tab) => tab.id === activeTabId)?.content}
      </div>
    </div>
  );
};

export default TabPanel;