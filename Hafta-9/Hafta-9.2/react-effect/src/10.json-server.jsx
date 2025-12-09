import React, { useEffect, useState } from "react";

const App = () => {
  const [isim, setIsim] = useState("");
  // usss
  const [users, setUsers] = useState([]);

  // uffs
  useEffect(() => {
    const API_URL = "http://localhost:3000/users";
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleClick = () => {
    const API_URL = "http://localhost:3000/users";
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        name: isim,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(`${data.name} Eklendi`);
        window.location.reload();
      });
  };

  return (
    <div>
      <input
        value={isim}
        onChange={(e) => setIsim(e.target.value)}
        type="text"
        placeholder="Isim giriniz"
      />
      <button onClick={handleClick}>Ekle</button>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
