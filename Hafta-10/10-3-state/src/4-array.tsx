import { useState } from "react";

const App = () => {
  // usss
  const [meyveler, setMeyveler] = useState([
    { id: 1, name: "Elma" },
    { id: 2, name: "Armut" },
  ]);

  return (
    <div>
      {meyveler.map((meyve) => (
        <span>{meyve.name}</span>
      ))}
    </div>
  );
};

export default App;
