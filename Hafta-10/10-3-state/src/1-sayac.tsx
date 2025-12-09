import { useState } from "react";

const App = () => {
  // usss
  const [sayi, setSayi] = useState(0);

  return (
    <div>
      <button
        onClick={() => setSayi(sayi + 1)}
        className="bg-blue-500 text-white p-4 m-4 rounded"
      >
        Arttır
      </button>
      <span className="text-3xl">{sayi}</span>
    </div>
  );
};

export default App;
