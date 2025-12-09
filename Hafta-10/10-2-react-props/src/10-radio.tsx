// rafce

import { useState } from "react";

const App = () => {
  // usss
  const [ad, setAd] = useState("Zafer");
  const [yas, setYas] = useState(34);
  const [erkekMi, setErkekMi] = useState(true);

  return (
    <div>
      <label>
        Adınız:
        <input type="text" value={ad} onChange={(e) => setAd(e.target.value)} />
      </label>
      <br />
      <label>
        Yaş:
        <input
          type="number"
          value={yas}
          onChange={(e) => setYas(parseInt(e.target.value))}
        />
      </label>
      <br />
      Cinsiyet
      <label>
        <input
          type="radio"
          name="gender"
          value={"true"}
          checked={erkekMi === true}
          onChange={() => setErkekMi(true)}
        />
        Erkek
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value={"false"}
          checked={erkekMi === false}
          onChange={() => setErkekMi(false)}
        />
        Kadın
      </label>
    </div>
  );
};

export default App;
