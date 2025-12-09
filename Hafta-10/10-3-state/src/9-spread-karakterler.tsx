// rafce

import { useState } from "react";

const App = () => {
  // usss
  const [karakterler, setKarakterler] = useState<string[]>([
    "Behlül",
    "Ayhan",
    "Nihal",
  ]);

  const handleKarakterEkle = () => {
    const yeniKarakter = "Firdevs";
    setKarakterler([...karakterler, yeniKarakter]);
  };

  return (
    <div>
      <button onClick={() => handleKarakterEkle()}>Karakter ekle</button>
      {karakterler.map((karakter) => (
        <span>{karakter}</span>
      ))}
    </div>
  );
};

export default App;
