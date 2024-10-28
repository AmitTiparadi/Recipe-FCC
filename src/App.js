// src/App.js
import React from 'react';
import './App.css';
import Nav from './components/nav.js'; // Import your Navbar
import Cards from './components/card.js'; 

import dabeli from './images/dabeli.jpeg'; 
import vadapav from './images/vadapav.jpeg';

const card = [
  { image: dabeli, title: 'Dabeli', text: 'An Amazing Recipe of classic Dabeli.' },
  { image: vadapav, title: 'Vadapav', text: 'An Amazing Recipe of classic Vadapav.' },
  { image: dabeli, title: 'Dabeli', text: 'An Amazing Recipe of classic Dabeli.' },
  { image: dabeli, title: 'Dabeli', text: 'An Amazing Recipe of classic Dabeli.' },
  { image: dabeli, title: 'Dabeli', text: 'An Amazing Recipe of classic Dabeli.' },
];

function App() {

  const card = [
    { image: dabeli, title: 'Dabeli', text: 'An Amazing Recipe of classic Dabeli.' },
    { image: vadapav, title: 'Vadapav', text: 'An Amazing Recipe of classic Vadapav.' },
    { image: dabeli, title: 'Dabeli', text: 'An Amazing Recipe of classic Dabeli.' },
    { image: dabeli, title: 'Dabeli', text: 'An Amazing Recipe of classic Dabeli.' },
    { image: dabeli, title: 'Dabeli', text: 'An Amazing Recipe of classic Dabeli.' },
  ];

  return (
    <div className="App">
      <Nav />
      <div className="container mt-4">
        <div className="row row-cols-3 g-4">
          {card.map((card, index) => (
            <div className="col" key={index}>
              <Cards image={card.image} title={card.title} text={card.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;