import React from "react";

const App = () => {
  return (
    <MyCard
      baslik={"Ekonomi savaşları"}
      govde={"Trump ve Cin lideri Şi Cinping arasındaki soğuk savaş"}
      footer={"Devam etmekte"}
    />
  );
};

const MyCard = (props) => {
  return (
    <div style={{ border: "1px solid black", padding: 16 }}>
      <h1>{props.baslik}</h1>
      <p>{props.govde}</p>
      <h2>{props.footer}</h2>
    </div>
  );
};

export default App;
