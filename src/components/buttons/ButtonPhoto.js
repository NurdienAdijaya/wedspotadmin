import React from "react";
import "./Button.css";

import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

const ButtonPhoto = ({ width, content, height }) => {
  return (
    <div
      className="secondary"
      style={{
        height: `${height}`,
        width: `${width}`,
        display: "flex",
        alignItems: "center",
        background: "#ffffff",
      }}
    >
      <AddAPhotoIcon style={{ marginRight: "1rem" }} />
      Add{content} Photo
    </div>
  );
};

export default ButtonPhoto;
