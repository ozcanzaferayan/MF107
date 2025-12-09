// rafce

import { useState } from "react";

const App = () => {
  // usss
  const [baron, setBaron] = useState([
    {
      id: 1,
      name: "Mehmet Karahanlı",
    },
    {
      id: 2,
      name: "Hüseyin KILIÇ",
    },
    {
      id: 3,
      name: "Samuel Vanunu",
    },
    {
      id: 4,
      name: "Ziya YILMAZ",
    },
    {
      id: 5,
      name: "Hüsrev BEKIROĞLU",
    },
  ]);

  return (
    <div>
      {baron.map((person) => (
        <span>{person.name}</span>
      ))}
    </div>
  );
};

export default App;
