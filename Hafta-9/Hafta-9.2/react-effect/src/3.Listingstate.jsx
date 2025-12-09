import React, { useState } from "react";

const App = () => {
  // usss
  const [users, setUsers] = useState([
    {
      name: "Bilge",
    },
    {
      name: "Sibel",
    },
    {
      name: "Ünsal",
    },
  ]);

  return (
    <ul>
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};

export default App;
