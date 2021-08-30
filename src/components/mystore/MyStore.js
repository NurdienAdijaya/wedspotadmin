import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import TitleStore1 from "../title/TitleStore1";
import { MenuItem, TextField } from "@material-ui/core";
import "./MyStore.css";

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

const MyStore = () => {
  const [service, setservice] = useState("EUR");
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
        <Link color="inherit" href="/store/edit/" onClick={handleClick}>
          Edit
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
      <div
        style={{
          background: "white",
          border: "solid 1px #E1E1E1",
          // padding: "1.7rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "1.7rem",
          }}
        >
          <div>
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
          <div>
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
            margin: "1.7rem",
          }}
        >
          <h3>Contact Details</h3>
        </div>
        <div
          style={{
            borderBottom: "solid 1px #E1E1E1",
            paddingBottom: "3rem",
          }}
        >
          <TextField
            id="outlined-basic"
            className="textfield"
            label="Store Name*"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            className="textfield"
            label="Email*"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            className="textfield"
            label="Contact Number*"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            className="textfield"
            label="Website (optional)"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            className="textfield"
            label="Facebook Account (optional)"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            className="textfield"
            label="Instagram Account (optional)"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            className="textfield"
            label="Twitter Account (optional)"
            variant="outlined"
          />
        </div>
        <div
          style={{
            margin: "1.7rem",
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
            helperText="Please select your currency"
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
    </div>
  );
};

export default MyStore;
