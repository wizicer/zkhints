import React from 'react';

interface CheatsheetItem {
  id: string;
  title: string;
}

interface RecentUpdatesProps {
  items: CheatsheetItem[];
}

const RecentUpdates: React.FC<RecentUpdatesProps> = ({ items }) => {
  return (
    <div className="my-8">
      <h2 className="text-xl font-medium mb-4">Recently updated</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
        {items.map((item) => (
          <a 
            key={item.id}
            href={`/${item.id}`}
            className="block py-1 hover:underline"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentUpdates;
