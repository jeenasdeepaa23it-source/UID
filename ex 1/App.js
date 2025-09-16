import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  const products = [
    {
      name: 'Woven Basket',
      description: 'Handmade basket with natural fibers.',
      image: 'https://i.imgur.com/MVQUJxO.jpg',
    },
    {
      name: 'Clay Pot',
      description: 'Eco-friendly hand-molded clay pots.',
      image: 'https://i.imgur.com/SCcz61w.jpg',
    },
    {
      name: 'Macrame Wall Hanging',
      description: 'Boho-style macrame for wall decoration.',
      image: 'https://i.imgur.com/bEN8IkW.jpg',
    }
  ];

  return (
    <div className="App">
      <Header />
      <Content />
      <List items={products} />
      <Footer />
    </div>
  );
}

export default App;
