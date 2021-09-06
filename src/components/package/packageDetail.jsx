import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Button,
  Typography,
  Breadcrumbs,
} from "@material-ui/core";
import TitleStore1 from "../title/TitleStore1";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  tittle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",
    marginTop: "1rem",
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

export default function PackageDetail() {
  const classes = useStyles();

  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{
          margin: "0.55rem 0",
        }}
      >
        <Link
          to="/"
          style={{
            color: "black",
          }}
        >
          Package
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
            <TitleStore1 title="Package Details" detail="" />
            <div>
              <Button
                type="submit"
                variant="contained"
                color="white"
                style={{
                  height: "45px",
                  marginLeft: "1rem",
                  width: "140px",
                }}
              >
                Edit
              </Button>
            </div>
          </div>
          <hr></hr>
          <div className={classes.content}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <div>
                  <h3>Package Details</h3>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <h3>Service</h3>
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
                      <p>Location</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>(Location)</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>Capacity</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>(Capacity)</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>Price Start From</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>(Price)</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>Description</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>(Description)</p>
                      <p>(Description)</p>
                      <p>(Description)</p>
                      <p>(Description)</p>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.text}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <p>(Service)</p>
                      <p>(Service)</p>
                      <p>(Service)</p>
                      <p>(Service)</p>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
          <hr></hr>
          <div className={classes.send}>
            <h3>Package Album</h3>
            <Grid container spacing={5}>
              <Grid item xs={3}>
                <h1>(foto)</h1>
              </Grid>
              <Grid item xs={3}>
                <h1>(foto)</h1>
              </Grid>
              <Grid item xs={3}>
                <h1>(foto)</h1>
              </Grid>
              <Grid item xs={3}>
                <h1>(foto)</h1>
              </Grid>
              <Grid item xs={3}>
                <h1>(foto)</h1>
              </Grid>
              <Grid item xs={3}>
                <h1>(foto)</h1>
              </Grid>
              <Grid item xs={3}>
                <h1>(foto)</h1>
              </Grid>
              <Grid item xs={3}>
                <h1>(foto)</h1>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
}
