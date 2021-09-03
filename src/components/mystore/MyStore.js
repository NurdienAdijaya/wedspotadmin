import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import TitleStore1 from "../title/TitleStore1";
import { MenuItem, TextField } from "@material-ui/core";
import "./MyStore.css";
import ButtonPrimary from "../buttons/ButtonPrimary";

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
                border: "solid 1px black",
              }}
            >
              <h1>kotak foto</h1>
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
                border: "solid 1px black",
              }}
            >
              <h1>kotak foto</h1>
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
                width: "500px",
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
