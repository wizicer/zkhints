import React from 'react';

interface CheatsheetHeaderProps {
  title: string;
  description: string;
}

const CheatsheetHeader: React.FC<CheatsheetHeaderProps> = ({ title, description }) => {
  return (
    <div className="py-8">
      <div className="flex items-center mb-4">
        <a href="/" className="flex items-center text-gray-600 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </a>
        <div className="ml-4">
          <div className="text-sm uppercase tracking-wider text-gray-600">DEVHINTS.IO</div>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-gray-700">{description}</p>
    </div>
  );
};

export default CheatsheetHeader;
