import React from 'react';

const Filter = ({ countries, selectedCountry, onCountryChange }) => {
  return (
    <div style={{
      marginBottom: '20px',
      padding: '15px',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      <label style={{ fontWeight: 'bold', color: '#333' }}>
        Фильтр по стране:
      </label>
      <select
        value={selectedCountry}
        onChange={(e) => onCountryChange(e.target.value)}
        style={{
          padding: '8px',
          borderRadius: '5px',
          border: '1px solid #ddd',
          fontSize: '14px'
        }}
      >
        <option value="">Все страны</option>
        {countries.map(country => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;