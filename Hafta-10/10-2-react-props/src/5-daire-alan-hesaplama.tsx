// rafce

import { useState } from "react";

const App = () => {
  const pi = 3;
  // usss
  const [yaricap, setYaricap] = useState(10);
  const [alan, setAlan] = useState(0);

  const handleHesapla = () => {
    setAlan(pi * yaricap * yaricap);
  };

  return (
    <div>
      {yaricap} <br />
      {alan} <br />
      <button onClick={() => handleHesapla()}>Hesapla</button>
    </div>
  );
};

export default App;
