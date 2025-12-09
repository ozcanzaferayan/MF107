// rafce

import { useState } from "react";

const App = () => {
  // usss
  const [sayi, setSayi] = useState(42);
  const [karesi, setKaresi] = useState(0);

  const handleKareAl = () => {
    setKaresi(sayi * sayi);
  };

  return (
    <div>
      {sayi} <br />
      {karesi}
      <br />
      <button onClick={() => handleKareAl()}>Kare al</button>
    </div>
  );
};

export default App;
