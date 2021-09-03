import React from "react";
import { Button } from "semantic-ui-react";

const ButtonPrimary = ({ width, content = "content", onClick, height }) => (
  <Button
    style={{
      background: "#455437",
      color: "white",
      width: `${width}`,
      height: `${height}`,
    }}
    onClick={onClick}
  >
    {content}
  </Button>
);

export default ButtonPrimary;
