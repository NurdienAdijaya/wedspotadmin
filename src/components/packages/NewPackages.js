import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import ButtonSecondary from "../buttons/ButtonSecondary";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import NoPhoto from "../../assets/NoPhotoAlbum.png";
import { MenuItem, TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ButtonPrimary from "../buttons/ButtonPrimary";
import ButtonPhoto from "../buttons/ButtonPhoto";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
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
const NewPackages = () => {
  const [service, setservice] = useState("package");
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChangeCheckbox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChange = (event) => {
    setservice(event.target.value);
  };
  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{
          margin: "0.55rem 0",
        }}
      >
        <Link color="inherit" href="/store" onClick={handleClick}>
          Packages
        </Link>
        <Typography color="textPrimary">New Package</Typography>
      </Breadcrumbs>
      <div
        style={{
          background: "white",
          border: "solid 1px #E1E1E1",
          // padding: "0 1.715rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.715rem 1.715rem 0 1.715rem",
          }}
        >
          <div>
            <div
              style={{
                margin: "1.315rem 0",
              }}
            >
              <h1
                style={{
                  fontFamily: "Cormorant",
                  fontWeight: "700",
                }}
              >
                Package Albums
              </h1>
              <p>The image must have the ratio of 1:2 or 1:1</p>
            </div>
          </div>
          <div>
            <ButtonPhoto width="160px" height="55px" />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            padding: "1.715rem 3rem",
          }}
        >
          <div
            style={{
              background: "#F3F3F3",
              height: "22.375rem",
            }}
          >
            <div
              style={{
                height: "inherit",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={NoPhoto} height="70rem" />
            </div>
          </div>
        </div>
        <div className="divmargin">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <div className="textfieldmarginbottom">
              <h3 className="titlefield">Package Details</h3>
            </div>
            <div>
              <div className="textfieldempty"></div>
            </div>
            <div>
              <div className="textfieldmarginbottom">
                <TextField
                  className="textfield"
                  label="Email*"
                  variant="outlined"
                />
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
              <div className="textfieldmargin">
                <TextField
                  id="outlined-helperText"
                  className="textfield"
                  label="Capacity*"
                  variant="outlined"
                  helperText="number per pax"
                  defaultValue="Default Value"
                />
              </div>
              <div className="textfieldmargin">
                <TextField
                  className="textfield"
                  label="Price Range*"
                  variant="outlined"
                  helperText="number in Rupiah"
                />
              </div>
            </div>
            <div>
              <div className="textfieldmargin">
                <TextField
                  id="outlined-multiline-static"
                  className="textfield"
                  label="Package Detail*"
                  multiline
                  rows={18}
                  variant="outlined"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="divmargin2">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <div className="textfieldmarginbottom">
              <h3 className="titlefield">Package Details</h3>
            </div>
            <div>
              <div className="textfieldempty"></div>
            </div>
            <div className="titlefield">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Electricity"
              />
            </div>
            <div>
              <div className="textfieldempty"></div>
            </div>
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
              content="Create Package"
              width="18.714rem"
              height="3.93rem"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPackages;
