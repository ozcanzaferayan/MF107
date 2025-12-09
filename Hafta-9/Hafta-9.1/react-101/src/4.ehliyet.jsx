import React, { useState } from "react";

const App = () => {
  const [yas, setYas] = useState(0);
  const [sonuc, setSonuc] = useState("");

  const handleClick = () => {
    if (yas >= 18) {
      setSonuc("Ehliyet alabilir");
    } else {
      setSonuc("Ehliyet alamaz");
    }
  };

  return (
    <div>
      <input
        value={yas}
        onChange={(e) => setYas(e.target.value)}
        type="number"
        placeholder="Yaş"
      />
      <button onClick={handleClick}>Ehliyet Alabilir mi?</button>
      <h1>Sonuc: {sonuc}</h1>
    </div>
  );
};

export default App;
