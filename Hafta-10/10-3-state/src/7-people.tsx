import { useState } from "react";

const App = () => {
  // usss
  const [people, setPeople] = useState([
    { id: 1, name: "Birol" },
    { id: 2, name: "Ayhan" },
    { id: 3, name: "Barış" },
  ]);
  return (
    <div>
      {people.map((person) => (
        <span>{person.name}</span>
      ))}
    </div>
  );
};

export default App;
