import React, { useState } from 'react';
import TravelList from './components/TravelList';
import Filter from './components/Filter';

function App() {
  const [travels, setTravels] = useState([
    {
      id: 1,
      country: "Италия",
      title: "Римские каникулы",
      description: "Колизей, фонтан Треви, паста и солнце.",
      likes: 0
    },
    {
      id: 2,
      country: "Франция",
      title: "Парижская мечта",
      description: "Эйфелева башня, круассаны и искусство.",
      likes: 0
    },
    {
      id: 3,
      country: "Япония",
      title: "Сакура и самураи",
      description: "Токио, Киото, суши и традиции.",
      likes: 0
    },
    {
      id: 4,
      country: "Таиланд",
      title: "Тропический рай",
      description: "Белые пляжи, изумрудное море и вкусная еда.",
      likes: 0
    },
    {
      id: 5,
      country: "Италия",
      title: "Венецианская сказка",
      description: "Гондолы, каналы и карнавалы.",
      likes: 0
    }
  ]);

  const [selectedCountry, setSelectedCountry] = useState('');

  // Получаем уникальные страны для фильтра
  const countries = [...new Set(travels.map(travel => travel.country))];

  // Фильтруем путешествия по выбранной стране
  const filteredTravels = selectedCountry
    ? travels.filter(travel => travel.country === selectedCountry)
    : travels;

  // Функция для обработки лайков
  const handleLike = (id) => {
    setTravels(prevTravels =>
      prevTravels.map(travel =>
        travel.id === id
          ? { ...travel, likes: travel.likes + 1 }
          : travel
      )
    );
  };

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
      
      <Filter
        countries={countries}
        selectedCountry={selectedCountry}
        onCountryChange={setSelectedCountry}
      />
      
      <TravelList travels={filteredTravels} onLike={handleLike} />
    </div>
  );
}

export default App;