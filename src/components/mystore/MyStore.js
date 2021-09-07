import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import TitleStore1 from "../title/TitleStore1";
import { MenuItem, TextField } from "@material-ui/core";
import "./MyStore.css";
import ButtonPrimary from "../buttons/ButtonPrimary";
import NoPhoto from "../../assets/NoPhotoAlbum.png";
import ButtonPhoto from "../buttons/ButtonPhoto";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const services = [
  {
    value: "venue",
    label: "Venue",
  },
  {
    value: "package",
    label: "Package",
  },
];
const location = [
  {
    value: "bandung",
    label: "Bandung",
  },
  {
    value: "jakarta",
    label: "Jakarta",
  },
];

const MyStore = () => {
  const [service, setservice] = useState("package");
  const [vendor_header, setVendorHeader] = useState();
  const [previewHeader, setPreviewHeader] = useState();
  const [vendor_avatar, setVendorAvatar] = useState();
  const [previewAvatar, setPreviewAvatar] = useState();

  const handleChange = (event) => {
    setservice(event.target.value);
  };

  const handleHeaderImage = (e) => {
    setVendorHeader(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreviewHeader(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    reader.onerror = () => {
      console.log("header error");
    };
  };

  const handleAvatarImage = (e) => {
    setVendorAvatar(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreviewAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    reader.onerror = () => {
      console.log("avatar error");
    };
  };

  console.log("vendor_header", vendor_header);
  console.log("previewHeader", previewHeader);
  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{
          margin: "0.55rem 0",
        }}
      >
        <Link color="inherit" href="/store" onClick={handleClick}>
          My Store
        </Link>
        <Typography color="textPrimary">add</Typography>
      </Breadcrumbs>
      <div
        style={{
          background: "white",
          border: "solid 1px #E1E1E1",
          paddingTop: "1.7rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              margin: "1.7rem 0",
            }}
          >
            <TitleStore1
              title="Store Header"
              detail="The image must have the ratio of 1:3"
            />
            <div
              style={{
                background: "#F3F3F3",
                height: "22.857rem",
              }}
            >
              <div
                style={{
                  height: "inherit",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {previewHeader ? null : (
                  <img src={NoPhoto} height="70rem" alt="" />
                )}
                <input
                  type="file"
                  name="header-upload"
                  id="header-input"
                  accept="image/*"
                  style={{
                    display: "none",
                  }}
                  onChange={handleHeaderImage}
                />
                <label
                  htmlFor="header-input"
                  className="header-upload"
                  style={{ zIndex: "1" }}
                >
                  <ButtonPhoto />
                </label>
                <img
                  src={previewHeader}
                  alt=""
                  style={{
                    maxWidth: "500px",
                    maxHeight: "320px",
                    position: "absolute",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              margin: "1.7rem 0",
            }}
          >
            <TitleStore1
              title="Store Avatar"
              detail="The image must have the ratio of 1:1"
            />
            <div
              style={{
                background: "#F3F3F3",
                height: "22.857rem",
              }}
            >
              <div
                style={{
                  height: "inherit",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {previewAvatar ? null : (
                  <img src={NoPhoto} height="70rem" alt="" />
                )}
                <input
                  type="file"
                  name="avatar-upload"
                  id="avatar-input"
                  accept="image/*"
                  style={{
                    display: "none",
                  }}
                  onChange={handleAvatarImage}
                />
                <label
                  htmlFor="avatar-input"
                  className="avatar-upload"
                  style={{ zIndex: "1" }}
                >
                  <ButtonPhoto />
                </label>
                <img
                  src={previewAvatar}
                  alt=""
                  style={{
                    maxWidth: "500px",
                    maxHeight: "320px",
                    position: "absolute",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderBottom: "solid 1px #E1E1E1",
            paddingBottom: "3rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "flex-end",
          }}
        >
          <div className="textfieldmargin">
            <div
              style={{
                margin: "1.7rem 0",
              }}
            >
              <h3>Contact Details</h3>
            </div>
            <TextField
              className="textfield"
              label="Store Name*"
              variant="outlined"
            />
          </div>
          <div className="textfieldmargin">
            <TextField
              className="textfield"
              label="Email*"
              variant="outlined"
            />
          </div>
          <div className="textfieldmargin">
            <TextField
              className="textfield "
              label="Contact Number*"
              variant="outlined"
            />
          </div>
          <div className="textfieldmargin">
            <TextField
              className="textfield"
              label="Website (optional)"
              variant="outlined"
            />
          </div>
          <div className="textfieldmargin">
            <TextField
              className="textfield"
              label="Facebook Account (optional)"
              variant="outlined"
            />
          </div>
          <div className="textfieldmargin">
            <TextField
              className="textfield"
              label="Instagram Account (optional)"
              variant="outlined"
            />
          </div>
          <div className="textfieldmargin">
            <TextField
              className="textfield"
              label="Twitter Account (optional)"
              variant="outlined"
            />
          </div>
          <div className="textfieldmargin">
            <div
              style={{
                width: "547px",
                height: "0.1rem",
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            paddingBottom: "3rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "flex-end",
          }}
        >
          <div className="textfieldmargin">
            <div
              style={{
                margin: "1.7rem 0",
              }}
            >
              <h3>Service Details</h3>
            </div>
            <div>
              <TextField
                id="outlined-select-currency"
                className="textfield"
                select
                label="Service Type*"
                value={service}
                onChange={handleChange}
                helperText="Please select your service type"
                variant="outlined"
              >
                {services.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <div className="textfieldmargin">
            <TextField
              id="outlined-select-currency"
              className="textfield"
              select
              label="Location*"
              value={location}
              onChange={handleChange}
              helperText="Please select your service location"
              variant="outlined"
            >
              {location.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="outlined-helperText"
              className="textfield"
              label="Capacity*"
              variant="outlined"
              helperText="number per pax"
              defaultValue="Default Value"
            />
          </div>
          <div>
            <TextField
              className="textfield"
              label="Price Range*"
              variant="outlined"
              helperText="number in Rupiah"
            />
          </div>
        </div>
        <div
          style={{
            paddingBottom: "3rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              width: "500px",
              height: "0.1rem",
            }}
          ></div>
          <div
            style={{
              width: "500px",
              textAlign: "end",
            }}
          >
            <ButtonPrimary
              content="Submit"
              width="18.714rem"
              height="3.93rem"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStore;
