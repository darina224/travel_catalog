import React from 'react';
import TravelCard from './TravelCard';

const TravelList = ({ travels, onLike }) => {
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