import React, { useState, useEffect } from "react";
import { sections } from "../data/index";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
}

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);

  // Perform search whenever searchTerm changes
  useEffect(() => {
    performSearch();
  }, [searchTerm]);

  const performSearch = () => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results: SearchResult[] = [];
    const term = searchTerm.toLowerCase();

    // Search through all sections and items
    sections.forEach((section) => {
      section.items.forEach((item) => {
        if (
          item.title.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term)
        ) {
          results.push({
            id: item.id,
            title: item.title,
            description: item.description,
            category: section.title,
            url: `/${item.id}`,
          });
        }
      });
    });

    setSearchResults(results.slice(0, 5));
    setShowResults(true);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission is now optional since search happens on typing
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setShowResults(false);
  };

  return (
    <div className="search-box relative mb-8">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            placeholder="Search..."
            className="w-full py-3 pl-10 pr-12 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img 
              src="/src/assets/icons/search.svg" 
              alt="Search" 
              className="w-5 h-5 text-gray-400"
            />
          </div>
          {searchTerm && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <img 
                src="/src/assets/icons/close.svg" 
                alt="Clear" 
                className="w-5 h-5 text-gray-400 hover:text-gray-600"
              />
            </button>
          )}
        </div>
      </form>

      {showResults && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg max-h-96 overflow-y-auto">
          {searchResults.length > 0 ? (
            <ul className="py-1">
              {searchResults.map((result) => (
                <li key={result.id} className="px-4 py-2 hover:bg-gray-100">
                  <a href={result.url} className="block">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-gray-900">{result.title}</h4>
                      <span className="text-xs text-gray-500">{result.category}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 truncate">{result.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-sm text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
