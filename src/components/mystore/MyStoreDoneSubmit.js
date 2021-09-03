import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import ButtonSecondary from "../buttons/ButtonSecondary";
import "./MyStore.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const MyStoreDoneSubmit = () => {
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
        <Typography color="textPrimary">detail</Typography>
      </Breadcrumbs>
      <div
        style={{
          background: "white",
          border: "solid 1px #E1E1E1",
          padding: "0 1.715rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "solid 1px #E1E1E1",
            padding: "1.715rem 0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "blue",
                width: "7.86rem",
                height: "7.86rem",
                borderRadius: "50%",
              }}
            >
              <img />
            </div>
            <div
              style={{
                margin: "1.715rem",
              }}
            >
              <h1
                style={{
                  fontFamily: "Cormorant",
                  fontWeight: "700",
                }}
              >
                Package Title
              </h1>
            </div>
          </div>
          <div>
            <ButtonSecondary content="Edit" width="160px" height="55px" />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            padding: "1.715rem 0",

            borderBottom: "solid 1px #E1E1E1",
          }}
        >
          <div
            style={{
              background: "green",
              height: "22.375rem",
            }}
          >
            Header image
          </div>
          <h3 style={{ margin: "2.2rem 0 1.714rem 0" }}>Contact Details</h3>
          <div className="divDetails">
            <h3 className="details">Contact Number</h3>
            <h3 className="details">asdasdasd</h3>
          </div>
          <div className="divDetails">
            <h3 className="details">Email</h3>
            <h3 className="details">asdasdasd</h3>
          </div>
          <div className="divDetails">
            <h3 className="details">Website</h3>
            <h3 className="details">asdasdasd</h3>
          </div>
          <div className="divDetails">
            <h3 className="details"></h3>
            <div className="logoDetails">
              <div className="icon">
                <FacebookIcon />
              </div>
              <div className="icon">
                <InstagramIcon />
              </div>
              <div className="icon">
                <TwitterIcon />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 style={{ margin: "2.2rem 0 1.714rem 0" }}>Contact Details</h3>
          <div className="divDetails">
            <h3 className="details">Service Type</h3>
            <h3 className="details">asdasdasd</h3>
          </div>
          <div className="divDetails">
            <h3 className="details">Location</h3>
            <h3 className="details">asdasdasd</h3>
          </div>
          <div className="divDetails">
            <h3 className="details">Capacity</h3>
            <h3 className="details">asdasdasd</h3>
          </div>
          <div className="divDetails">
            <h3 className="details">Price range</h3>
            <h3 className="details">asdasdasd</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStoreDoneSubmit;
