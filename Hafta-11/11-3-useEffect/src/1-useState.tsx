// rafce

import { useState } from "react";

const App = () => {
  // usss
  const [sayi, setSayi] = useState(42);

  return (
    <div className="p-4">
      <button
        onClick={() => setSayi(sayi + 1)}
        className="p-4 bg-blue-500 rounded text-white"
      >
        {sayi}
      </button>
    </div>
  );
};

export default App;
