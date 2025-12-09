// rafce
import React from "react";

const App = () => {
  return <NavBar liste={["Anasayfa", "Hakkımızda", "letişim", "Projeler"]} />;
};

// rafc
export const NavBar = (props) => {
  return (
    <ul>
      {props.liste.map((eleman) => (
        <li>{eleman}</li>
      ))}
    </ul>
  );
};

export default App;
