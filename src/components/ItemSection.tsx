import React from 'react';

export interface Item {
  id: string;
  title: string;
  description?: string;
  image?: string;
  construction?: boolean;
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
            className="block p-4 hover:text-blue-600 transition-colors text-gray-700 bg-white rounded-md shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all relative"
          >
            {item.construction && (
              <div className="absolute top-2 right-5 transform translate-x-1/3 -translate-y-1/3 z-10">
                <div className="bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full shadow-md flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                    <path fill="currentColor" d="M4 4a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2h-3c0 .556-.404 1-.91 1h-.59v3.09c.85.23 1.48 1.02 1.48 1.94c0 .696-.36 1.312-.903 1.67l.92 1.3h4.489a.51.51 0 0 1 .514.5a.5.5 0 0 1-.504.5H28v3h.486a.51.51 0 0 1 .514.5a.51.51 0 0 1-.514.5h-1.018a.49.49 0 0 1-.208.48c-.09.06-.19.09-.29.09c-.16 0-.31-.07-.41-.21l-.255-.36h-8.65l-.255.36c-.1.14-.25.21-.41.21c-.1 0-.2-.03-.29-.09a.49.49 0 0 1-.208-.48h-.978a.51.51 0 0 1-.514-.5c0-.274.232-.5.514-.5H16v-3h-.486a.51.51 0 0 1-.514-.5c0-.274.232-.5.514-.5h4.45l.92-1.3a2 2 0 0 1-.904-1.67c0-.28.23-.5.5-.5c.28 0 .5.22.5.5c0 .36.193.678.481.854l.085-.12a.5.5 0 0 1 .079-.1a.5.5 0 0 1 .355-.147c.13-.001.26.05.355.147a.5.5 0 0 1 .08.1l.084.12c.288-.176.481-.494.481-.854c0-.55-.43-.99-.98-1c-.17 0-.33-.09-.42-.23a.44.44 0 0 1-.09-.27c0-.04 0-.07.01-.11V6h-.59c-.506 0-.91-.444-.91-1h-6v21h.75c.69 0 1.25.56 1.25 1.25V28h12.01c1.1 0 1.99.895 1.99 2H2c0-1.105.89-2 1.99-2H5v-.75c0-.69.56-1.25 1.25-1.25H7V5H5a1 1 0 0 1-1-1m4 3v2.191L12.382 7zm.618 19H13v-2.191zm3.764-3H8v2.191zM8.618 10H13V7.809zm3.764 1H8v2.191zm-3.764 3H13v-2.191zm3.764 1H8v2.191zm-3.764 3H13v-2.191zm3.764 1H8v2.191zm-3.764 3H13v-2.191zm13.264-8.972l-.688.972h1.572l-.688-.972a2 2 0 0 1-.196 0M19.256 15H17v3h.132zm-.893 3h7.234l-2.123-3h-2.988zm6.342-3l2.123 3H27v-3z"/>
                  </svg>
                  <span className='ml-1'>
                    WIP
                  </span>
                </div>
              </div>
            )}
            <div className="flex items-start gap-4">
              {item.image && (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-24 h-24 object-contain"
                />
              )}
              <div className="flex-1">
                <div className="mb-2">
                  <span className="font-medium block">{item.title}</span>
                </div>
                {item.description && (
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ItemSection;
