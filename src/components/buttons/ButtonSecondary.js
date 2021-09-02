import React from "react";
import "./Button.css";

const ButtonSecondary = ({ width, content = "Content", onClick, height }) => {
  return (
    <button
      className="secondary"
      style={{
        height: `${height}`,
        width: `${width}`,
      }}
      onClick={(event) => onClick(event)}
    >
      {content}
    </button>
  );
};

export default ButtonSecondary;
