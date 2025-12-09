// rafce

import { useState } from "react";

const App = () => {
  // usss
  const [iller, setIller] = useState<string[]>(["Istanbul", "Izmir", "Ankara"]);
  const [il, setIl] = useState<string>("");

  const handleIlEkle = () => {
    setIller([...iller, il]);
  };

  return (
    <div>
      <input
        className="p-4 block border-2"
        value={il}
        onChange={(e) => setIl(e.target.value)}
      />
      <button className="block" onClick={() => handleIlEkle()}>
        Il ekle
      </button>
      {iller.map((il) => (
        <span>{il}</span>
      ))}
    </div>
  );
};

export default App;
