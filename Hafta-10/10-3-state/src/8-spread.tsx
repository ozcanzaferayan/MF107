// rafce

import { useState } from "react";

const App = () => {
  // usss
  const [diziler, setDiziler] = useState<string[]>([]);

  const handleDiziEkle = () => {
    const yeniDizi = "Lost";
    setDiziler([...diziler, yeniDizi]);
  };

  return (
    <div>
      <button onClick={() => handleDiziEkle()}>Dizi ekle</button>
      {diziler.map((dizi) => (
        <span>{dizi}</span>
      ))}
    </div>
  );
};

export default App;
