import "./Result.css";
import React from "react";

export default props => {
  return (
    <div className="result">
      <h3>
        {props.result}
      </h3>
    </div>
  );
};
