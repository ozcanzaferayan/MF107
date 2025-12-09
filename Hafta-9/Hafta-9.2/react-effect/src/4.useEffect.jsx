import React, { useEffect, useState } from "react";
// rafce
const App = () => {
  // usss
  const [users, setUsers] = useState([]);

  // uffs
  useEffect(() => {
    const API_URL = "https://jsonplaceholder.typicode.com/users";
    fetch(API_URL)
      .then((res) => res.json())
      .then((veri) => setUsers(veri));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};

export default App;
