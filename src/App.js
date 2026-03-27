import React, { useState } from 'react';
import TravelList from './components/TravelList';

function App() {
  const [travels] = useState([
    {
      id: 1,
      country: "Италия",
      title: "Римские каникулы",
      description: "Колизей, фонтан Треви, паста и солнце."
    },
    {
      id: 2,
      country: "Франция",
      title: "Парижская мечта",
      description: "Эйфелева башня, круассаны и искусство."
    },
    {
      id: 3,
      country: "Япония",
      title: "Сакура и самураи",
      description: "Токио, Киото, суши и традиции."
    },
    {
      id: 4,
      country: "Таиланд",
      title: "Тропический рай",
      description: "Белые пляжи, изумрудное море и вкусная еда."
    }
  ]);

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#333',
        marginBottom: '30px'
      }}>
        Каталог путешествий
      </h1>
      
      <TravelList travels={travels} />
    </div>
  );
}

export default App;