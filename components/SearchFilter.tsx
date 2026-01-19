'use client';

import React, { useState } from 'react';

export default function SearchFilter({
  onSearch,
  onFilter,
  categories = [],
  locations = [],
  placeholder = 'Search...'
}: {
  onSearch: (query: string) => void;
  onFilter: (filters: { category?: string; location?: string }) => void;
  categories?: string[];
  locations?: string[];
  placeholder?: string;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleFilterChange = (newCategory: string, newLocation: string) => {
    onFilter({ category: newCategory, location: newLocation });
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setCategory('');
    setLocation('');
    onFilter({ category: '', location: '' });
  };

  return (
    <div className="search-filter">
      <div className="search-row">
        <input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="cta" onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {showFilters && (
        <div className="filter-panel">
          {categories.length > 0 && (
            <div className="filter-group">
              <label>Category</label>
              <select
                value={category}
                onChange={(e) => {
                  const newCat = e.target.value;
                  setCategory(newCat);
                  handleFilterChange(newCat, location);
                }}
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          )}

          {locations.length > 0 && (
            <div className="filter-group">
              <label>Location</label>
              <select
                value={location}
                onChange={(e) => {
                  const newLoc = e.target.value;
                  setLocation(newLoc);
                  handleFilterChange(category, newLoc);
                }}
              >
                <option value="">All Locations</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            className="cta"
            style={{ marginTop: 12 }}
            onClick={handleClearFilters}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
