// rafce

import { useState } from "react";

const App = () => {
  // usss
  const [kisaKenar, setKisaKenar] = useState(10);
  const [uzunKenar, setUzunKenar] = useState(20);
  const [cevre, setCevre] = useState(0);

  const handleHesapla = () => {
    setCevre((kisaKenar + uzunKenar) * 2);
  };

  return (
    <div>
      {kisaKenar} <br />
      {uzunKenar} <br />
      {cevre} <br />
      <button onClick={() => handleHesapla()}>Çevre Hesapla</button>
    </div>
  );
};

export default App;
