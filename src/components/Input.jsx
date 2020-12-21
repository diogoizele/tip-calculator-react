import "./Input.css";
import React from "react";

export default props => {
  return (
    <div className="input">
      <label htmlFor={props.id}>
        {props.label}
      </label>
      <input
        type="number"
        placeholder={props.placeholder}
        id={props.id}
        value={props.value}
        onChange={e => props.onNewValue(e.target.value)}
      />
    </div>
  );
};
