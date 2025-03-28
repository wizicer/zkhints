import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="search-form">
      <form onSubmit={handleSearch} className="relative">
        <div className="search-box bg-gray-100 rounded-md flex items-center p-1 focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-opacity-50">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent py-2 px-3 text-gray-700 focus:outline-none"
            placeholder="Search 350+ cheatsheets"
          />
          <button
            type="submit"
            className="bg-white text-gray-600 hover:text-gray-900 py-2 px-4 rounded-md shadow-sm transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          <span className="text-gray-700">Examples:</span> <a href="/react" className="text-blue-600 hover:underline">react</a>, <a href="/bash" className="text-blue-600 hover:underline">bash</a>, <a href="/es6" className="text-blue-600 hover:underline">es6</a>, <a href="/rails" className="text-blue-600 hover:underline">rails</a>
        </p>
      </form>
    </div>
  );
};

export default SearchBar;
