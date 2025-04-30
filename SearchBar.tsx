"use client";
import { useState } from 'react';

export default function SearchBar({ onSelectLocation }: { onSelectLocation: (loc: any) => void }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  

  const handleSearch = async (text: string) => {
    if (text.length > 2) {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${text}&limit=5`
      );
      const data = await response.json();
      setSuggestions(data);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto my-4">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(e.target.value);
        }}
        placeholder="Buscar ubicación..."
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          {suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setQuery(item.display_name);
                setSuggestions([]);
                onSelectLocation(item);
              }}
              className="p-3 hover:bg-gray-100 cursor-pointer"
            >
              {item.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}