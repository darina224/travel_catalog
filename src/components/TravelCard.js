import React from 'react';

const TravelCard = ({ travel, onLike }) => {
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
      <p style={{ margin: '0 0 15px 0', color: '#666' }}>{travel.description}</p>
      
      {/* Кнопка лайка */}
      <button
        onClick={() => onLike(travel.id)}
        style={{
          backgroundColor: '#ff6b6b',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '14px'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#ff5252'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6b6b'}
      >
        ❤️ Нравится ({travel.likes})
      </button>
    </div>
  );
};

export default TravelCard;