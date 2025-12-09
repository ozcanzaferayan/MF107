import { useState } from "react";

const App = () => {
  // usss
  const [gender, setGender] = useState("");

  return (
    <div>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Seçiniz...</option>
        <option value="erkek">Erkek</option>
        <option value="kadın">Kadın</option>
        <option value="diğer">Diğer</option>
      </select>
      <br />
      <span>Cinsiyet: {gender}</span>
    </div>
  );
};

export default App;
