import React, { cloneElement } from "react";
import "./Container.css";

export default props => {
  return (
    <div className="container">
      <div className="header">
        <h1>
          {props.title}
        </h1>
      </div>
      <div className="content">
        {props.children.map((child, i) => {
          return cloneElement(child, { ...props, key: i });
        })}
      </div>
    </div>
  );
};
