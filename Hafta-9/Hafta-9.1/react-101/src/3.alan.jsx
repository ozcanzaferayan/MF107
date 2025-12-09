// rafce
import React, { useState } from "react";

const App = () => {
  const [kisaKenar, setKisaKenar] = useState(0);
  const [uzunKenar, setUzunKenar] = useState(0);
  const [sonuc, setSonuc] = useState(0);
  return (
    <div>
      <input
        value={kisaKenar}
        onChange={(e) => setKisaKenar(+e.target.value)}
        type="number"
        placeholder="Kısa kenar"
      />
      <br />
      <input
        value={uzunKenar}
        onChange={(e) => setUzunKenar(+e.target.value)}
        type="number"
        placeholder="Uzun kenar"
      />
      <br />
      <button onClick={() => setSonuc(kisaKenar * uzunKenar)}>
        Alan hesapla
      </button>
      <h1>Sonuç: {sonuc}</h1>
      {/* 
        Alan formül: a * b
        alan = Kısa kenar * uzun kenar
      */}
    </div>
  );
};

export default App;
