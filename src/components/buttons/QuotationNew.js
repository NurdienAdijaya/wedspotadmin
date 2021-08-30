import React from "react";
import "./Button.css";

const QuotationNew = ({ width, content = "content", onClick }) => {
  return (
    <button
      className="pill-new"
      style={{
        width: `${width}`,
      }}
      onClick={(event) => onClick(event)}
    >
      {content}
    </button>
  );
};

export default QuotationNew;
