import React from 'react';

export interface Item {
  id: string;
  title: string;
}

interface ItemSectionProps {
  title: string;
  items: Item[];
}

const ItemSection: React.FC<ItemSectionProps> = ({ title, items }) => {
  return (
    <div className="mb-8">
      <h2 className="category item mt-8 font-medium text-lg border-b pb-1">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {items.map((item, index) => (
          <a
            key={index}
            href={`/${item.id}`}
            className="block p-3 hover:text-blue-600 transition-colors text-gray-700 bg-white rounded-md shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all"
          >
            <span className="info">
              <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">
                {item.id}
              </code>
              <span className="ml-2 font-medium">{item.title}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ItemSection;
