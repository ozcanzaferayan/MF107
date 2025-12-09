import { useState } from "react";

const App = () => {
  // usss
  const [metin, setMetin] = useState("");
  
  return (
    <div>
      <input
        className="p-4 border-2"
        value={metin}
        onChange={(e) => setMetin(e.target.value)}
      />
      <span className="text-3xl">{metin}</span>
    </div>
  );
};

export default App;
