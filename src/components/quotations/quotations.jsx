import React, { useState } from "react";
import {
  Typography,
  Breadcrumbs,
  makeStyles,
  TextField,
  InputAdornment,
  Container,
  Grid,
  TablePagination,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import TitleStore1 from "../title/TitleStore1";
import QuotationSent from "../buttons/QuotationSent";
import QuotationNew from "../buttons/QuotationNew";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  search: {
    display: "flex",
    alignItems: "center",
  },
  items: {
    fontSize: "1.3rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  title: {
    fontSize: "14px",
    color: "#898B8F",
  },
  name: {
    textDecoration: "underline",
    color: "#C97C68",
    fontSize: "14px",
    fontWeight: "bold",
  },
}));

export default function Quotations() {
  const classes = useStyles();
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{
          margin: "0.55rem 0",
        }}
      >
        <p>Quotations</p>
        <Typography color="textPrimary">All</Typography>
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
            margin: "1.7rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TitleStore1 title="All Quotations" detail="" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              <p className={classes.items}>Sort</p>
            </div>
            <div>
              <p className={classes.items}>Filter</p>
            </div>

            <div className={classes.search}>
              <TextField
                placeholder="search"
                variant="outlined"
                value=""
                name="keyword"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                // onChange={(e) => changeForm(e)}
                style={{ width: "18rem", marginRight: "2.5rem" }}
              />
            </div>
          </div>
        </div>
        <Container>
          {/* title */}
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <div className={classes.title}>
                <p>Created Date</p>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.title}>
                <p>Name</p>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.title}>
                <p>Status Request</p>
              </div>
            </Grid>
            <Grid item xs={12}>
              <hr></hr>
            </Grid>
          </Grid>

          {/* content */}
          <Link
            to="/quotes"
            style={{
              color: "black",
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <div>
                  <p>Thu, 14 Jan 2021</p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.name}>
                  <p>Name</p>
                  <p>Name</p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <QuotationNew />
                <QuotationSent />
              </Grid>
              <Grid item xs={12}>
                <hr></hr>
              </Grid>
            </Grid>
          </Link>
        </Container>
        <TablePagination
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
}
