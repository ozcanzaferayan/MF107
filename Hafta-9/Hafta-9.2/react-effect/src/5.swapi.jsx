import React, { useEffect, useState } from "react";

const App = () => {
  // usss
  const [users, setUsers] = useState([]);

  // uffs
  useEffect(() => {
    const API_URL = "https://swapi.dev/api/people";
    fetch(API_URL)
      .then((res) => res.json())
      .then((veri) => setUsers(veri.results));
  }, []);

  return (
    <ul>
      <h1>10.10'da gelelim</h1>
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};

export default App;
