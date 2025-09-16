import React from 'react';


const List = ({ items }) => {
  return (
    <section className="list-section">
      <h2>Our Products</h2>
      <div className="card-container">
        {items.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default List;
