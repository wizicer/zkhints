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
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 64 64">
                    <path fill="currentColor" d="M61.063 17h-8.438v-2.148a6.564 6.564 0 1 0-3.75 0V17h-33.75v-2.148A6.564 6.564 0 0 0 13.25 2a6.562 6.562 0 0 0-1.874 12.852V17H2.938a.937.937 0 0 0-.938.938v18.75c0 .519.419.938.938.938h8.438v6.563H7.938v3.75h3.437v10.752C11.375 59.53 9.5 62 9.5 62H17s-1.875-2.47-1.875-3.311V47.938h33.75V58.69C48.875 59.53 47 62 47 62h7.5s-1.875-2.47-1.875-3.311V47.938h3.437v-3.75h-3.437v-6.563h8.438a.937.937 0 0 0 .938-.938v-18.75a.94.94 0 0 0-.938-.937m-20.704 1.875h9.907L43.292 35.75h-9.905zM8.563 8.563c0-2.587 2.099-4.688 4.688-4.688s4.688 2.101 4.688 4.688a4.688 4.688 0 0 1-9.376 0M4.145 35.468a.93.93 0 0 1-.27-.655v-15c0-.519.419-.938.938-.938h6.579zm9.105 11.283a.688.688 0 1 1 0-1.376a.688.688 0 0 1 0 1.376m.053-11.001l7.372-16.875h9.94L23.641 35.75zm35.572 8.438h-33.75v-6.563h33.75zm1.875 2.563a.688.688 0 1 1 0-1.376a.688.688 0 0 1 0 1.376m0-33.501a4.688 4.688 0 1 1 0-9.376a4.688 4.688 0 0 1 0 9.376m9.375 21.563a.937.937 0 0 1-.938.938h-6.149l6.842-16.557a.93.93 0 0 1 .245.619z"/>
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
                  <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">{item.id}</code>
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
