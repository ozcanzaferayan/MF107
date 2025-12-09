import React from "react";

const App = () => {
  const users = ["Burak", "Nergis", "Selma", "Gokhan"];
  return (
    <div>
      {users.map((user) => (
        <h1>{user}</h1>
      ))}
    </div>
  );
};

export default App;
