import React from 'react';

interface RecentItem {
  id: string;
  title: string;
}

interface RecentUpdatesProps {
  items: RecentItem[];
}

const RecentUpdates: React.FC<RecentUpdatesProps> = ({ items }) => {
  return (
    <div className="recent-updates my-8">
      <h2 className="category item font-medium text-lg border-b pb-1 mb-4">Recently updated</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
        {items.map((item) => (
          <a 
            key={item.id}
            href={`/${item.id}`}
            className="block py-1 hover:text-blue-600 transition-colors text-gray-700"
          >
            <span className="info">
              <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">{item.id}</code>
              <span className="ml-2">{item.title}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentUpdates;
