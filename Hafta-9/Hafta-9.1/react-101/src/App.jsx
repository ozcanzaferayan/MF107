// rafce
import React from "react";
import "./NavBar.css";

const App = () => {
  return (
    <NavBar liste={["Logo", "Anasayfa", "Hakkımızda", "letişim", "Projeler"]} />
  );
};

// rafc
export const NavBar = (props) => {
  return (
    <ul className="navbar">
      {props.liste.map((eleman) => (
        <li>{eleman}</li>
      ))}
    </ul>
  );
};

export default App;
