import React, { useState } from "react";
import {
  Breadcrumbs,
  Typography,
  Container,
  Grid,
  TextField,
  InputAdornment,
  makeStyles,
  Button,
  TablePagination,
} from "@material-ui/core";
import { MoreVert, Search } from "@material-ui/icons";
import PackageDetail from "./packageDetail";

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
  newpackage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  },
}));

export default function PackageList() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
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
      <div>
        <Breadcrumbs
          aria-label="breadcrumb"
          style={{
            margin: "0.55rem 0",
          }}
        >
          <p>Packages</p>
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
            <div className={classes.newpackage}>
              <div>
                <h3>All Package</h3>
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  height: "35px",
                  marginLeft: "1rem",
                }}
              >
                + New Package
              </Button>
            </div>
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
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <div className={classes.title}>
                  <p>Created Date</p>
                </div>
              </Grid>
              <Grid item xs={9}>
                <div className={classes.title}>
                  <p>Package Name</p>
                </div>
              </Grid>
            </Grid>
            <hr></hr>

            {/* Content */}
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <div>
                  <p>Thu, 14 Jan 2021</p>
                </div>
              </Grid>
              <Grid item xs={8}>
                <div className={classes.name}>
                  <p>Name</p>
                </div>
              </Grid>
              <Grid item xs={1}>
                <div>
                  <MoreVert />
                </div>
              </Grid>
              <Grid item xs={12}>
                <hr></hr>
              </Grid>
            </Grid>
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
      <PackageDetail />
    </div>
  );
}
