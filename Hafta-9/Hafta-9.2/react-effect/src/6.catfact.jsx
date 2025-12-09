import React, { useEffect, useState } from "react";

const App = () => {
  // usss
  const [fact, setFact] = useState(null);

  // uffs
  useEffect(() => {
    const API_URL = "https://catfact.ninja/fact";
    fetch(API_URL)
      .then((res) => res.json())
      .then((veri) => setFact(veri));
  }, []);

  if (fact === null) {
    return <h1>Yükleniyor...</h1>;
  }

  return <h1>{fact.fact}</h1>;
};

export default App;
