/// rafce
import React from "react";

const KaloriSelect = (props) => {
  return (
    <select onChange={props.handleChange}>
      <option value={47}>Elma</option>
      <option value={275}>Simit</option>
      <option value={177}>Menemen</option>
      <option value={325}>Adana Dürüm</option>
      <option value={59}>Ayran</option>
      <option value={426}>Künefe</option>
    </select>
  );
};

export default KaloriSelect;
