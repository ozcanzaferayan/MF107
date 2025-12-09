import { useState } from "react";

const App = () => {
  // usss
  const [arabalar, setArabalar] = useState(["Egea", "Porsche", "Lada"]);

  const handleArabaSil = (araba: string) => {
    setArabalar(arabalar.filter((a) => a !== araba));
  };

  return (
    <div>
      {arabalar.map((araba) => (
        <div>
          <span>{araba}</span>
          <button onClick={() => handleArabaSil(araba)}>🗑️</button>
        </div>
      ))}
    </div>
  );
};

export default App;
