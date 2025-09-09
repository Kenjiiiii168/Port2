import React from 'react';
import Card from './components/Card';
import './styles/App.css';

const App = () => {
  const cards = [
    {
      title: 'Card 1',
      description: 'This is a description for card 1.',
      image: 'path/to/image1.jpg',
    },
    {
      title: 'Card 2',
      description: 'This is a description for card 2.',
      image: 'path/to/image2.jpg',
    },
    {
      title: 'Card 3',
      description: 'This is a description for card 3.',
      image: 'path/to/image3.jpg',
    },
  ];

  return (
    <div className="app">
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;