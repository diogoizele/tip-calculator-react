import "./Button.css";
import React from "react";

export default props => {
  return (
    <button className="btn" onClick={props.function}>
      {props.value}
    </button>
  );
};
