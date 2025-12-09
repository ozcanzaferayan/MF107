import React, { useState } from "react";
import KaloriSelect from "./components/KaloriSelect";

const App = () => {
  const [yemek1, setYemek1] = useState(0);
  const [yemek2, setYemek2] = useState(0);
  const [yemek3, setYemek3] = useState(0);
  const [sonuc, setSonuc] = useState(0);

  const handleChange1 = (e) => setYemek1(+e.target.value);
  const handleChange2 = (e) => setYemek2(+e.target.value);
  const handleChange3 = (e) => setYemek3(+e.target.value);

  const handleClick = () => {
    setSonuc(yemek1 + yemek2 + yemek3);
  };

  return (
    <div>
      <h1>Kalori hesaplama</h1>
      <KaloriSelect handleChange={handleChange1} />
      <KaloriSelect handleChange={handleChange2} />
      <KaloriSelect handleChange={handleChange3} />
      <button onClick={handleClick}>Kalori hesapla</button>
      <h1>Kalori: {sonuc}</h1>
    </div>
  );
};

export default App;
