// rafce
import React, { useState } from "react";

const App = () => {
  // usss
  const [metin, setMetin] = useState("");
  return (
    <div>
      <input
        type="text"
        value={metin}
        onChange={(event) => setMetin(event.target.value)}
      />
      <h1>{metin}</h1>
    </div>
  );
};

export default App;
