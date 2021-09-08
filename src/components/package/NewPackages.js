import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import NoPhoto from "../../assets/NoPhotoAlbum.png";
import { MenuItem, TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ButtonPrimary from "../buttons/ButtonPrimary";
import ButtonPhoto from "../buttons/ButtonPhoto";
import CancelIcon from "@material-ui/icons/Cancel";
import { useParams } from "react-router-dom";
import {
  createPackage,
  editPackage,
  getPackageById,
} from "../../store/action/package";
import { useDispatch, useSelector } from "react-redux";

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
  const { data } = useSelector((state) => state.packageById);
  const [package_album, setPackageAlbum] = useState(data.package_album || []);
  const [package_name, setPackageName] = useState(data.package_name || "");
  const [package_location, setPackageLocation] = useState(data.package_location || "");
  const [package_price, setPackagePrice] = useState(data.package_price || "");
  const [package_capacity, setPackageCapacity] = useState(`${data.package_min_capacity} - ${data.package_max_capacity}` || "");
  const [package_details, setPackageDetails] = useState(data.package_details || "");
  const [package_services, setPackageServices] = useState("");
  const [album, setAlbum] = useState(data.package_album || []);
  const dataToSend = {
    package_album: album,
    package_name,
    package_location,
    package_price,
    package_details,
    package_services,
  };
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedF: true,
    checkedG: true,
  });
  

  useEffect(() => {
    dispatch(getPackageById(id));
    if (id) {
      console.log("edit");
    } else {
      console.log("create");
    }
  }, [dispatch, id]);

  const handleSubmit = () => {
    if (id) {
      dispatch(editPackage(dataToSend));
    } else {
      dispatch(createPackage(dataToSend));
    }
  };

  console.log(data);

  const handleChangeCheckbox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChange = (event) => {
    setservice(event.target.value);
  };
  const handleAlbum = (e) => {
    // function to convert image file into base64
    console.log("files", e.target.files);
    let file = e.target.files[0];
    let reader = new FileReader();
    let allAlbum = e.target.files;
    // setAlbum(album.push(file))
    if (allAlbum) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPackageAlbum([...package_album, reader.result]);
        setAlbum([...album, file]);
      };
    }
    reader.onerror = () => {
      console.log("error");
    };
  };
  // clear state
  // const clearImage = () => {
  //   if (package_album.length) {
  //     setPackageAlbum([]);
  //   } else {
  //     alert("gamber kosong!");
  //   }
  // };
  const clearOne = (index) => {
    if (package_album.length) {
      setPackageAlbum(
        package_album.filter((fil) => fil !== package_album[index])
      );
      setAlbum(album.filter((fil) => fil !== album[index]));
    } else {
      alert("gamber kosong!");
    }
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
        <Typography color="textPrimary">
          {id ? (<>Edit</>) : (<>Create Package</>)}
        </Typography>
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
            <input
              type="file"
              name="album-upload"
              id="album-input"
              accept="image/*"
              style={{
                display: "none",
              }}
              onChange={handleAlbum}
            />
            <label
              htmlFor="album-input"
              className="album-upload"
              style={{ zIndex: "1" }}
            >
              {package_album.length === 0 ? (
                <ButtonPhoto width="160px" height="55px" />
              ) : (
                <ButtonPhoto
                  width="160px"
                  height="55px"
                  content="Add More Pictures"
                />
              )}
            </label>
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
              padding: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {package_album.length === 0 ? (
              <div
                style={{
                  height: "inherit",

                  width: "inherit",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={NoPhoto} height="70rem" alt="" />
              </div>
            ) : (
              package_album.map((data, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      height: "114px",
                      width: "114px",
                      border: "1px solid #e1e1e1",
                      background: "white",
                      margin: "1.2rem 1rem",
                    }}
                  >
                    <CancelIcon
                      onClick={() => clearOne(index)}
                      style={{
                        zIndex: "1",
                        position: "absolute",
                        color: "#f66257",
                      }}
                    />
                    <div
                      style={{
                        height: "inherit",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <img
                        src={data}
                        alt="mapped img"
                        style={{
                          maxHeight: "110px",
                          maxWidth: "110px",
                          position: "absolute",
                        }}
                      />
                    </div>
                  </div>
                );
              })
            )}
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
                  value={package_name}
                  onChange={(e) => setPackageName(e.target.value)}
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
                  // defaultValue="Default Value"
                  value={package_capacity}
                  onChange={(e) => setPackageCapacity(e.target.value)}
                />
              </div>
              <div className="textfieldmargin">
                <TextField
                  className="textfield"
                  label="Price Range*"
                  variant="outlined"
                  helperText="number in Rupiah"
                  value={package_price}
                  onChange={(e) => setPackagePrice(e.target.value)}
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
                  value={package_details}
                  onChange={(e) => setPackageDetails(e.target.value)}
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
