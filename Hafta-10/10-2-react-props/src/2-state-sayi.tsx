import { useState } from "react";

const App = () => {
  // usss
  const [sayi, setSayi] = useState(42);

  const handleArttir = () => {
    setSayi(sayi + 1);
  };

  const handleAzalt = () => {
    setSayi(sayi - 1);
  };

  return (
    <div>
      <button onClick={() => handleArttir()}>+</button>
      {sayi}
      <button onClick={() => handleAzalt()}>-</button>
    </div>
  );
};

export default App;
