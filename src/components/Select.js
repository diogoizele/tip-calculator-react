import "./Select.css";
import React from "react";

export default props => {
  return (
    <div className="input">
      <label htmlFor={props.id}>
        {props.label}
      </label>
      <select id={props.id} onChange={e => props.onNewValue(e.target.value)}>
        <option value="" hidden>
          -- Escolha uma opção --
        </option>
        <option value="0.3">30% - Excepcional</option>
        <option value="0.2">20% - Bom</option>
        <option value="0.15">15% - Regular</option>
        <option value="0.1">10% - Ruim</option>
        <option value="0.05">5% - Terrível</option>
      </select>
    </div>
  );
};
