import React from 'react';

const TravelCard = ({ travel }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{travel.title}</h3>
      <p style={{ margin: '0 0 8px 0', color: '#666' }}>
        <strong>Страна:</strong> {travel.country}
      </p>
      <p style={{ margin: '0', color: '#666' }}>{travel.description}</p>
    </div>
  );
};

export default TravelCard;