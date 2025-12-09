import { useState } from "react";

const App = () => {
  // usss
  const [sayi1, setSayi1] = useState(42);
  const [sayi2, setSayi2] = useState(36);
  const [toplam, setToplam] = useState(0);

  const handleTopla = () => {
    setToplam(sayi1 + sayi2);
  };

  return (
    <div>
      <input
        type="number"
        value={sayi1}
        onChange={(e) => setSayi1(parseInt(e.target.value))}
      />
      <br />
      <span>+</span> <br />
      <input
        type="number"
        value={sayi2}
        onChange={(e) => setSayi2(parseInt(e.target.value))}
      />
      <br />
      <button onClick={() => handleTopla()}>=</button> <br />
      <span>{toplam}</span>
    </div>
  );
};

export default App;
