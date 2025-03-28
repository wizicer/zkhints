import React from 'react';

interface CheatsheetItem {
  title?: string;
  description?: string;
  code?: string;
  note?: string;
}

interface CheatsheetSectionProps {
  title: string;
  items: CheatsheetItem[];
}

const CheatsheetSection: React.FC<CheatsheetSectionProps> = ({ title, items }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-medium mb-4 pb-2 border-b">{title}</h2>
      <div className="grid grid-cols-1 gap-4">
        {items.map((item, index) => (
          <div key={index} className="border rounded-md p-4">
            {item.title && <div className="text-sm text-gray-600 mb-1">{item.title}</div>}
            {item.description && <div className="mb-2">{item.description}</div>}
            {item.code && (
              <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
                <code>{item.code}</code>
              </pre>
            )}
            {item.note && <div className="mt-2 text-sm text-gray-600">{item.note}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheatsheetSection;
