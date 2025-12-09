import React, { useState } from "react";

const App = () => {
  const [deger, setDeger] = useState(42);
  return (
    <div>
      <MyInput deger={deger} degisim={(e) => setDeger(e.target.value)} />;
      <h1>{deger}</h1>
    </div>
  );
};

const MyInput = (props) => {
  return <input value={props.deger} onChange={props.degisim} />;
};

export default App;
