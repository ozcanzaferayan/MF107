// rafce

import { useState } from "react";

const App = () => {
  // usss
  const [sayi1, setSayi1] = useState(0);
  const [karesi, setKaresi] = useState(0);

  const handleKareAl = () => {
    setKaresi(sayi1 * sayi1);
  };

  return (
    <div>
      <input
        type="number"
        value={sayi1}
        onChange={(e) => setSayi1(parseInt(e.target.value))}
      />
      <br />
      <button onClick={() => handleKareAl()}>Karesini Al</button>
      <br />
      {karesi}
    </div>
  );
};

export default App;
