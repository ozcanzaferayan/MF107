// rafce

import { useState } from "react";

const App = () => {
  // usss
  const [metin, setMetin] = useState("Zafer");
  return (
    <div>
      <input value={metin} onChange={(e) => setMetin(e.target.value)} />
      {metin}
    </div>
  );
};

export default App;
