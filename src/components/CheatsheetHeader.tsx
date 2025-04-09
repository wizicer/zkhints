import React from "react";

interface CheatsheetHeaderProps {
  title: string;
  description?: string;
  category?: string;
}

const CheatsheetHeader: React.FC<CheatsheetHeaderProps> = ({ title, description, category }) => {
  return (
    <div className="page-header text-center my-12">
      <div className="container mx-auto px-4">
        <h1 className="font-extrabold tracking-tight text-5xl text-zinc-950 mb-4">{title}</h1>
        {description && <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>}
        {category && (
          <div className="mt-4">
            <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheatsheetHeader;
