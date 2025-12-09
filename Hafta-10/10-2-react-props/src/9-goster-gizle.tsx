// rafce

import { useState } from "react";

const App = () => {
  // usss
  const [isVisible, setIsVisible] = useState(false);

  const handleGosterGizle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={() => handleGosterGizle()}>
        {isVisible ? "Gizle" : "Göster"}
      </button>
      <br />
      {isVisible && <span>Çok önemli bilgi</span>}
    </div>
  );
};

export default App;
