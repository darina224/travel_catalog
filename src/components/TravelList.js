import React from 'react';
import TravelCard from './TravelCard';

const TravelList = ({ travels, onLike }) => {
  if (travels.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '40px',
        color: '#999',
        fontSize: '18px'
      }}>
        Путешествий не найдено
      </div>
    );
  }

  return (
    <div>
      {travels.map(travel => (
        <TravelCard
          key={travel.id}
          travel={travel}
          onLike={onLike}
        />
      ))}
    </div>
  );
};

export default TravelList;