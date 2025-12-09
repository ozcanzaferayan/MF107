import React, { useState } from "react";

const App = () => {
  const [not, setNot] = useState(0);
  const [sonuc, setSonuc] = useState("");

  const handleClick = () => {
    if (not >= 90) {
      setSonuc("AA");
    } else if (not >= 85) {
      setSonuc("BA");
    } else if (not >= 80) {
      setSonuc("BB");
    } else if (not >= 75) {
      setSonuc("CB");
    } else if (not >= 70) {
      setSonuc("CC");
    } else if (not >= 65) {
      setSonuc("DC");
    } else if (not >= 60) {
      setSonuc("DD");
    } else if (not >= 50) {
      setSonuc("FD");
    } else {
      setSonuc("FF");
    }
  };

  return (
    <div>
      <h1>11.05</h1>
      <input
        value={not}
        onChange={(e) => setNot(+e.target.value)}
        type="number"
        placeholder="Not girin"
      />
      <button onClick={handleClick}>Hesapla</button>
      <h1>Sonuc: {sonuc}</h1>
    </div>
  );
};

export default App;
