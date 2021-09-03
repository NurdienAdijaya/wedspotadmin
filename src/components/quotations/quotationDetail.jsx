import React, { useState } from "react";
import {
  Container,
  Grid,
  makeStyles,
  Button,
  Typography,
  Breadcrumbs,
} from "@material-ui/core";
import TitleStore1 from "../title/TitleStore1";
import QuotationSent from "../buttons/QuotationSent";
import QuotationNew from "../buttons/QuotationNew";
import Vector from "./images/Vector.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  tittle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",
    marginTop:"1rem"
  },
  content: {
    marginTop: "2rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "16px",
    color: "#3E3E3E",
  },
  item: {
    marginBottom: "2rem",
  },
  send: {
    marginTop: "1rem",
    marginBottom: "2rem",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  file: {
    marginTop: "1rem",
    marginBottom: "1rem",
    color: "#C97C68",
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
  },
}));

export default function QuotationDetail() {
  const [file, setFile] = useState("");
  const classes = useStyles();
  console.log(file);

  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{
          margin: "0.55rem 0",
        }}
      >
        <Link to="/" style={{
          color:"black"
        }}>
          Quotations
        </Link>
        <Typography color="textPrimary">All</Typography>
      </Breadcrumbs>
      <div
        style={{
          background: "white",
          border: "solid 1px #E1E1E1",
          // padding: "1.7rem",
        }}
      >
        <Container>
          <div className={classes.tittle}>
            <TitleStore1 title="Request Details" detail="" />
            <div>
              <QuotationNew />
            </div>
          </div>
          <hr></hr>
          <div className={classes.content}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <div>
                  <h3>Prospect Detail</h3>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <h3>Enquiry Detail</h3>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={classes.item}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <div className={classes.text}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <p>Bride to be</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>(Bride Name)</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>Groom to be</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>(Groom Name)</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>City Live</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>(City)</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>Email</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>(Email)</p>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.text}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <p>Wedding Location</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>(Location)</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>Wedding Date</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>(Date)</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>Budget</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>(budget)</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>Number Of Invitees</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>(pax)</p>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
          <hr></hr>
          <div className={classes.send}>
            <TitleStore1
              title="Upload Quotation"
              detail="Acceptable file type is only PDF. Max file size 10 MB."
            />
            {file && (
              <div className={classes.file}>
                <img src={Vector} alt="pdf" />
                <Typography style={{ marginLeft: "10px" }}>
                  {file?.name || "select an File"}
                </Typography>
              </div>
            )}

            <div className={classes.buttons}>
              <div>
                <input
                  name="userfile"
                  type="file"
                  accept="application/pdf"
                  id="contained-button-file"
                  onChange={(e) => setFile(e.target.files[0])}
                  max-size="10000000"
                  style={{
                    display: "none",
                  }}
                />
                <label htmlFor="contained-button-file">
                  <Button
                    type="submit"
                    variant="contained"
                    color="white"
                    component="span"
                    className={classes.btn}
                    style={{
                      height: "45px",
                    }}
                  >
                    {file ? "Change File" : "Upload File"}
                  </Button>
                </label>
              </div>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!file}
                style={{
                  height: "45px",
                }}
              >
                Send Quotation
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
