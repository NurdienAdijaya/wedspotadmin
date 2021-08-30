import React from "react";
import "./Button.css";

const QuotationSent = ({ width, content = "content", onClick }) => {
  return (
    <button
      className="pill-sent"
      style={{
        width: `${width}`,
      }}
      onClick={(event) => onClick(event)}
    >
      {content}
    </button>
  );
};

export default QuotationSent;
