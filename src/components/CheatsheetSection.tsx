import React from 'react';

export interface CheatsheetItem {
  code?: string;
  title?: string;
  note?: string;
  active?: boolean;
  'will appear'?: boolean;
}

interface CheatsheetSectionProps {
  title: string;
  items: CheatsheetItem[];
}

const CheatsheetSection: React.FC<CheatsheetSectionProps> = ({ title, items }) => {
  return (
    <section className="mb-8">
      <h3 className="text-lg font-medium mb-3 text-gray-800 h3-section-title">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-3 rounded shadow-sm border border-blue-200 hover:shadow-md transition-shadow">
            {item.title && <h4 className="font-medium text-sm mb-1">{item.title}</h4>}
            {item.code && <pre className="text-xs bg-gray-50 p-2 rounded mb-2 overflow-x-auto border border-gray-100">{item.code}</pre>}
            {item.note && <p className="text-xs text-gray-600">{item.note}</p>}
            {item.active && <span className="text-xs text-green-600 inline-block mt-1">Active</span>}
            {item['will appear'] && <span className="text-xs text-blue-600 inline-block mt-1">Will appear</span>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CheatsheetSection;
