import React from "react";

function F(props) {
  return 2 * props.x + props.y;
}

const App = () => {
  return <F x={3} y={5} />;
};

export default App;
