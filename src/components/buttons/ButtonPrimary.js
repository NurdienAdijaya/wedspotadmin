import React from "react";
import { Button } from "semantic-ui-react";

const ButtonPrimary = ({ width, content = "content", onClick }) => (
  <Button
    style={{
      background: "#455437",
      color: "white",
      width: `${width}`,
    }}
    onClick={(event) => onClick(event)}
  >
    {content}
  </Button>
);

export default ButtonPrimary;
