'use client';

import { useState } from 'react';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterPanelProps {
  title?: string;
  filters: {
    name: string;
    label: string;
    type: 'range' | 'checkbox' | 'select';
    min?: number;
    max?: number;
    step?: number;
    options?: FilterOption[];
  }[];
  accentColor?: string;
  onFilterChange: (filters: Record<string, any>) => void;
}

export default function FilterPanel({
  title = 'Filters',
  filters,
  accentColor = '#667eea',
  onFilterChange
}: FilterPanelProps) {
  const [filterState, setFilterState] = useState<Record<string, any>>({});

  const handleRangeChange = (name: string, value: string) => {
    const newState = { ...filterState, [name]: parseInt(value) };
    setFilterState(newState);
    onFilterChange(newState);
  };

  const handleCheckboxChange = (name: string, value: string) => {
    const current = filterState[name] || [];
    const newState = {
      ...filterState,
      [name]: current.includes(value)
        ? current.filter((v: string) => v !== value)
        : [...current, value]
    };
    setFilterState(newState);
    onFilterChange(newState);
  };

  const handleSelectChange = (name: string, value: string) => {
    const newState = { ...filterState, [name]: value };
    setFilterState(newState);
    onFilterChange(newState);
  };

  const resetFilters = () => {
    setFilterState({});
    onFilterChange({});
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: 12,
      padding: 24,
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e2e8f0'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 16,
        borderBottom: '1px solid #e2e8f0'
      }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#0f172a', margin: 0 }}>
          {title}
        </h3>
        {Object.keys(filterState).length > 0 && (
          <button
            onClick={resetFilters}
            style={{
              fontSize: 12,
              color: accentColor,
              background: 'transparent',
              border: 'none',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            Clear All
          </button>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {filters.map(filter => (
          <div key={filter.name}>
            <label style={{
              fontSize: 14,
              fontWeight: 600,
              color: '#0f172a',
              display: 'block',
              marginBottom: 12
            }}>
              {filter.label}
            </label>

            {filter.type === 'range' && (
              <div>
                <input
                  type="range"
                  min={filter.min || 0}
                  max={filter.max || 100000}
                  step={filter.step || 100}
                  value={filterState[filter.name] || filter.min || 0}
                  onChange={(e) => handleRangeChange(filter.name, e.target.value)}
                  style={{
                    width: '100%',
                    height: 6,
                    borderRadius: 3,
                    background: '#e2e8f0',
                    outline: 'none',
                    accentColor: accentColor
                  }}
                />
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 8,
                  fontSize: 13,
                  color: '#64748b',
                  fontWeight: 500
                }}>
                  <span>${(filter.min || 0).toLocaleString()}</span>
                  <span style={{ color: accentColor, fontWeight: 600 }}>
                    ${(filterState[filter.name] || filter.min || 0).toLocaleString()}
                  </span>
                  <span>${(filter.max || 100000).toLocaleString()}</span>
                </div>
              </div>
            )}

            {filter.type === 'checkbox' && filter.options && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {filter.options.map(option => (
                  <label
                    key={option.value}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      fontSize: 14,
                      color: '#475569'
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={(filterState[filter.name] || []).includes(option.value)}
                      onChange={() => handleCheckboxChange(filter.name, option.value)}
                      style={{
                        width: 18,
                        height: 18,
                        marginRight: 10,
                        cursor: 'pointer',
                        accentColor: accentColor
                      }}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            )}

            {filter.type === 'select' && filter.options && (
              <select
                value={filterState[filter.name] || ''}
                onChange={(e) => handleSelectChange(filter.name, e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  fontSize: 14,
                  border: '1px solid #e2e8f0',
                  borderRadius: 8,
                  boxSizing: 'border-box',
                  color: '#0f172a',
                  cursor: 'pointer'
                }}
              >
                <option value="">All {filter.label}</option>
                {filter.options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
