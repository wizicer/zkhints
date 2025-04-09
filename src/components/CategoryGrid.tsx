import React from "react";

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
    <div className="mb-12">
      <h2 className="category item font-medium text-lg border-b pb-1 mb-4">Top categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {categories.map((category) => (
          <a key={category.id} href={`/${category.id}`} className="group">
            <div
              className="category-box rounded-md p-3 transition-all hover:shadow-md border border-gray-100"
              style={{
                backgroundColor: `${category.color}10`,
                borderLeft: `3px solid ${category.color}`,
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              <div className="text-sm font-medium group-hover:text-blue-600 transition-colors">
                {category.name}
              </div>
              <div className="mt-1 text-xs text-gray-500">
                <code className="bg-gray-100 px-1 py-0.5 rounded">{category.id}</code>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
