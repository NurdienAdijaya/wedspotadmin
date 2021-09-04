import React from "react";
import "./Button.css";

import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

const ButtonPhoto = ({ width, content, onClick, height }) => {
  return (
    <button
      className="secondary"
      style={{
        height: `${height}`,
        width: `${width}`,
        display: "flex",
        alignItems: "center",
        background: "#ffffff",
      }}
      onClick={(event) => onClick(event)}
    >
      <AddAPhotoIcon style={{ marginRight: "1rem" }} />
      Add{content} Photo
    </button>
  );
};

export default ButtonPhoto;
