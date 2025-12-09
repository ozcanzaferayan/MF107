import React from "react";

const App = () => {
  return <SayiGosterComponent sayi={42} />;
};

const SayiGosterComponent = (props) => {
  return <h1>{props.sayi}</h1>;
};

export default App;
