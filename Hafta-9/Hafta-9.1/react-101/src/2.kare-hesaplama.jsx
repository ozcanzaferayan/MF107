// rafce
import React, { useState } from "react";

const App = () => {
  /// usss
  const [sayi, setSayi] = useState(0);
  const [sonuc, setSonuc] = useState(0);
  return (
    <div>
      <input
        type="number"
        value={sayi}
        onChange={(e) => setSayi(+e.target.value)}
      />
      <button onClick={() => setSonuc(sayi * sayi)}>Karesini Al</button>
      <h1>Sonuç: {sonuc}</h1>
    </div>
  );
};

export default App;
