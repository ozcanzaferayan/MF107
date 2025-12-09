import React, { useEffect, useState } from "react";

const App = () => {
  // usss
  const [items, setItems] = useState([]);

  // uffs
  useEffect(() => {
    const API_URL = "https://fakestoreapi.com/products";
    fetch(API_URL)
      .then((res) => res.json())
      .then((veri) => setItems(veri));
  }, []);

  return (
    <div>
      {items.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};

const Card = (props) => {
  const item = props.item;
  return (
    <div>
      <img src={item.image} width={200} height={200} />
      <h1 style={{ fontSize: 24 }}>{item.title}</h1>
      <h2 style={{ fontSize: 16 }}>{item.description}</h2>
      <h1 style={{ fontSize: 24 }}>${item.price}</h1>
    </div>
  );
};

export default App;
