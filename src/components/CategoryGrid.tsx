import React from 'react';

interface Category {
  id: string;
  name: string;
  color: string;
}

interface CategoryGridProps {
  categories: Category[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
      {categories.map((category) => (
        <a 
          key={category.id}
          href={`/${category.id}`}
          className="block p-6 text-center text-white font-medium rounded-md"
          style={{ backgroundColor: category.color }}
        >
          {category.name}
        </a>
      ))}
    </div>
  );
};

export default CategoryGrid;
