import { useState } from "react";

const App = () => {
  // usss
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Göster/Gizle</button>
      {isVisible && <span className="text-3xl">Büyük resim</span>}
    </div>
  );
};

export default App;
