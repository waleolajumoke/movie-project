// src/components/SearchBar.jsx
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { useState } from 'react';


const SearchBar = ({ onSearch }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;