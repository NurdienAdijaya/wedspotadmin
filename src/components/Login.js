import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { vendorLogin, vendorRegister } from "../store/action/auth";
import { toast } from "react-toastify";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Wedspot"}
      <br />
      <Link color="inherit" href="https://material-ui.com/">
        All rights reserved
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
  },
  titleForm: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(1),
  },
  titleFormSignin: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(6),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginBottom: theme.spacing(3),
  },

  formSignin: {
    width: "100%", // Fix IE 11 issue.
    marginBottom: theme.spacing(4),
  },
  submit: {
    fontWeight: "bold",
    margin: theme.spacing(3, 0, 2),
  },

  submitSignin: {
    fontWeight: "bold",
    margin: theme.spacing(5, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [sign, setSign] = useState(false);
  // const { isError, message, isLoading } = useSelector(
  //   (state) => state.vendorData
  // );
  const [oldPassword, setOldPassword] = useState("");

  const [login, setlogin] = useState({
    vendor_email: "",
    vendor_password: "",
  });

  const [signup, setSignup] = useState({
    vendor_name: "",
    vendor_email: "",
    vendor_password: "",
  });

  const Login = (e) => {
    e.preventDefault();
    if ((login.vendor_email === "") | (login.vendor_password === "")) {
      return toast.error("please fill all form", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.info("Loading", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(vendorLogin(login));
      // window.location.reload();
    }

    // window.location.reload();
    // setTimeout(function () {
    //   window.location.reload();
    // }, 1000);
  };

  const add = (e) => {
    e.preventDefault();
    if (
      (signup.vendor_email === "") |
      (signup.vendor_password === "") |
      (signup.vendor_name === "")
    ) {
      return toast.error("please fill all form", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.info("Loading", {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(vendorRegister(signup));
    }
    // window.location.reload();
    // window.location.reload();
    // setTimeout(function () {
    //   window.location.reload();
    // }, 1000);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <svg
          width="100%"
          viewBox="0 0 572 165"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M81.1063 119.193H75.2883L57.107 67.7465L37.3986 119.193H31.5806L9.98126 59.8512C9.48546 58.3623 8.56219 57.0525 7.3268 56.0855C6.47423 55.3691 5.51792 54.7864 4.49053 54.3572C3.79964 54.1389 2.32697 53.7387 0.0361328 53.1566V48.0265H31.5806V53.1566C30.7544 53.4608 29.879 53.6089 28.9988 53.5932C27.941 53.6073 26.8943 53.8106 25.908 54.1935C25.5019 54.3809 25.1493 54.6673 24.8824 55.0265C24.6156 55.3856 24.4431 55.8061 24.3808 56.2492C24.4494 57.4857 24.6755 58.7084 25.0535 59.8876L38.744 100.073L58.2706 48.1174H64.1068L82.4517 100.073L98.3785 59.9421C98.836 58.8111 99.1417 57.6244 99.2875 56.4129V56.231C99.2875 54.6301 96.6513 53.6114 91.3969 53.1384V48.0083H115.56V53.1384C109.96 53.6114 106.36 55.8308 104.76 59.833L81.1063 119.193Z"
            fill="#455437"
          />
          <path
            d="M186.558 80.9537H137.632C137.632 103.366 144.947 114.572 159.577 114.572C168.061 114.572 175.376 110.224 181.522 101.529L186.485 104.276C179.407 115.482 169.583 121.085 157.013 121.085C146.48 121.085 137.996 117.622 131.56 110.697C125.123 103.772 121.93 94.9978 121.978 84.3738C121.723 74.4874 125.034 64.8396 131.305 57.1951C137.547 49.7001 145.923 45.9526 156.431 45.9526C160.67 45.7897 164.885 46.6561 168.716 48.4777C172.547 50.2993 175.88 53.0219 178.431 56.4129C183.86 63.4253 186.728 72.0851 186.558 80.9537ZM171.304 74.9504C171.304 74.8412 171.304 74.5684 171.395 74.1682C171.414 73.8531 171.414 73.5372 171.395 73.2221C171.395 59.2872 166.134 52.3137 155.613 52.3015C153.041 52.1538 150.476 52.6864 148.174 53.8456C145.873 55.0048 143.918 56.7498 142.505 58.9052C139.468 63.7087 137.837 69.267 137.796 74.9504H171.304Z"
            fill="#455437"
          />
          <path
            d="M257.628 56.2492V23.8313C257.628 14.8082 253.798 10.2359 246.138 10.1146V4.80265C254.792 3.66647 263.38 2.06938 271.864 0.0181885V100.182C271.864 109.206 275.749 113.778 283.518 113.899V119.211C277.337 119.211 270.422 119.496 262.773 120.066C261.588 117.876 260.777 115.502 260.374 113.044C251.889 118.405 243.659 121.091 235.683 121.103C230.847 121.277 226.03 120.401 221.564 118.536C217.098 116.671 213.089 113.86 209.811 110.297C203.125 102.957 199.558 93.3002 199.866 83.3732C199.866 72.6158 202.897 63.6957 208.957 56.613C215.017 49.5303 223.363 45.9829 233.993 45.9708C244.271 45.9587 252.15 49.3848 257.628 56.2492ZM257.628 101.183V66.0364C254.186 57.7894 246.913 53.672 235.811 53.6841C232.177 53.5842 228.596 54.5656 225.52 56.5038C222.667 58.3902 220.43 61.0719 219.084 64.2172C217.697 67.3796 216.69 70.6955 216.084 74.0954C215.501 77.6064 215.215 81.1603 215.23 84.7194C215.082 91.9312 216.892 99.0481 220.466 105.313C222.064 108.164 224.429 110.511 227.292 112.086C230.155 113.662 233.402 114.403 236.665 114.227C245.61 114.227 252.598 109.879 257.628 101.183Z"
            fill="#455437"
          />
          <path
            d="M335.789 48.0265V71.5121H331.844C330.814 66.4905 328.546 61.8064 325.244 57.8864C323.749 56.045 321.853 54.5698 319.701 53.5735C317.548 52.5772 315.197 52.0861 312.826 52.1378C311.515 52.0961 310.209 52.3177 308.985 52.7895C307.761 53.2613 306.644 53.9737 305.699 54.8848C304.779 55.7938 304.056 56.8838 303.577 58.0861C303.099 59.2885 302.874 60.577 302.918 61.8705C302.955 63.3044 303.313 64.7118 303.964 65.9897C304.615 67.2676 305.543 68.3837 306.681 69.2563C309.415 71.5578 312.48 73.4344 315.772 74.823C319.323 76.3754 322.893 78.0915 326.481 79.9714C330.063 81.8476 333.195 84.4792 335.662 87.6847C338.195 91.008 339.522 95.0947 339.426 99.2729C339.553 102.158 339.102 105.04 338.099 107.749C337.097 110.457 335.564 112.938 333.589 115.045C331.578 117.063 329.168 118.639 326.513 119.673C323.858 120.707 321.017 121.175 318.172 121.049C310.912 121.065 303.921 118.305 298.627 113.335L295.718 119.157H291.609V94.6158H295.645C296.205 99.9568 298.564 104.948 302.336 108.769C304.128 110.631 306.285 112.103 308.672 113.092C311.059 114.082 313.625 114.567 316.208 114.518C319.324 114.583 322.363 113.546 324.79 111.589C325.96 110.681 326.9 109.509 327.532 108.168C328.164 106.828 328.47 105.357 328.426 103.875C328.41 102.326 328.064 100.798 327.412 99.393C326.76 97.9878 325.817 96.7376 324.644 95.7254C321.947 93.2598 318.88 91.2339 315.554 89.7222C312.002 88.0728 308.457 86.3021 304.918 84.4102C301.403 82.5423 298.309 79.9727 295.827 76.8605C293.333 73.7755 292.001 69.9126 292.063 65.9454C291.816 60.5955 293.692 55.3646 297.281 51.3919C299.125 49.5413 301.337 48.0991 303.774 47.1589C306.211 46.2187 308.818 45.8015 311.426 45.9344C317.717 45.9344 323.432 48.6814 328.571 54.1753L331.826 48.0083L335.789 48.0265Z"
            fill="#455437"
          />
          <path
            d="M372.988 113.19V145.935C372.988 151.393 374.079 155.031 376.242 156.85C378.406 158.669 382.297 159.615 387.897 159.852V164.982H347.28V159.67C351.607 159.561 354.552 158.378 356.37 156.159C358.189 153.939 358.843 150.519 358.843 145.953V70.6571C358.843 61.7431 355.019 57.1103 347.371 56.7586V51.6285C355.296 50.5692 363.138 48.9645 370.843 46.8258C372.477 49.8126 373.251 53.1942 373.079 56.5948C375.977 53.2683 379.561 50.6104 383.586 48.8045C387.61 46.9985 391.977 46.0876 396.387 46.1345C406.326 46.1345 414.205 49.7062 420.023 56.8495C425.926 64.1966 429.025 73.4043 428.768 82.8274C429.017 92.5933 425.868 102.142 419.859 109.842C413.92 117.337 405.805 121.085 395.515 121.085C387.297 121.277 379.29 118.471 372.988 113.19ZM372.988 105.313C377.746 110.512 384.307 113.7 391.333 114.227C393.76 114.295 396.175 113.865 398.429 112.964C400.684 112.063 402.73 110.71 404.442 108.987C407.838 105.662 410.292 101.493 411.55 96.908C412.813 92.0936 413.425 87.1315 413.369 82.1544C413.522 75.1137 411.929 68.1447 408.732 61.8705C407.343 59.0728 405.165 56.7441 402.466 55.1727C399.768 53.6012 396.668 52.856 393.551 53.0293C385.891 53.0293 379.036 57.7167 372.988 67.0915V105.313Z"
            fill="#455437"
          />
          <path
            d="M567.018 47.4989V52.9565H548.001V97.1991C547.951 100.505 548.621 103.783 549.964 106.804C550.454 108.103 551.338 109.216 552.493 109.986C553.647 110.756 555.014 111.145 556.401 111.098C558.153 111.051 559.864 110.55 561.364 109.642C562.578 109.008 563.729 108.258 564.8 107.405C565.364 106.895 566.618 105.676 568.564 103.766L572 106.677C566.4 115.482 559.425 119.884 551.073 119.884C539.522 119.884 533.753 112.335 533.765 97.2354V52.9928H525.365V49.2271C528.088 48.7996 530.662 47.7058 532.86 46.0428C535.059 44.3797 536.812 42.1991 537.965 39.6946C540.767 34.2639 542.209 28.233 542.165 22.1213H548.001V47.5899L567.018 47.4989Z"
            fill="#455437"
          />
          <path
            d="M478.494 51.1554L484.13 46.1345L478.494 51.1554Z"
            fill="#455437"
          />
          <path
            d="M478.494 51.1555H478.039L478.257 51.3374L478.494 51.1555Z"
            fill="#455437"
          />
          <path
            d="M461.404 36.4019L472.749 46.4801L478.039 51.1736H478.494L484.13 46.1527L486.603 43.9515L495.075 36.4201L461.404 36.4019Z"
            fill="#C97C68"
          />
          <path
            d="M506.693 56.2491C502.473 51.7899 497.035 48.671 491.057 47.2806L490.566 47.7172L485.785 51.974C486.874 52.2666 487.934 52.6625 488.948 53.1565C491.425 54.3716 493.571 56.1694 495.202 58.3958C496.845 60.8069 498.074 63.4752 498.839 66.291C499.696 69.1379 500.268 72.063 500.548 75.0231C500.784 77.7155 500.893 80.7718 500.893 84.1191C500.939 89.0847 500.39 94.0379 499.257 98.8726C498.147 103.394 495.806 107.518 492.493 110.788C490.774 112.525 488.713 113.886 486.441 114.785C484.169 115.683 481.735 116.1 479.294 116.009C471.633 116.009 466.149 112.977 462.84 106.913C459.366 100.174 457.658 92.663 457.876 85.0832C457.876 67.0612 462.403 56.1824 471.458 52.4471L466.258 47.8263C461.004 49.4778 456.26 52.4461 452.477 56.4492C445.786 63.544 442.44 72.8644 442.44 84.4101C442.44 95.7255 445.755 104.639 452.386 111.152C459.016 117.665 467.985 120.927 479.294 120.939C490.275 120.939 499.19 117.477 506.038 110.552C512.887 103.627 516.317 94.6825 516.329 83.7188C516.305 72.2701 513.093 63.1135 506.693 56.2491Z"
            fill="#455437"
          />
          <path
            d="M459.04 30.9443C460.513 28.5066 461.858 26.2144 463.313 23.995C463.484 23.8154 463.69 23.6727 463.918 23.5757C464.146 23.4788 464.392 23.4295 464.64 23.4311C473.718 23.4311 482.809 23.4311 491.912 23.4311C492.183 23.4408 492.45 23.5074 492.694 23.6264C492.938 23.7455 493.155 23.9144 493.33 24.1224C494.748 26.3054 496.057 28.543 497.512 30.9443H459.04Z"
            fill="#D19072"
          />
        </svg>

        {sign ? (
          <div onSubmit={add}>
            <Typography variant="h5" className={classes.titleForm}>
              Sign to your account
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Name"
                    label="Full Name"
                    name="Name"
                    autoComplete="fullname"
                    onChange={(e) =>
                      setSignup({ ...signup, vendor_name: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) =>
                      setSignup({ ...signup, vendor_email: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) =>
                      setSignup({ ...signup, vendor_password: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Confirm Password"
                    type="password"
                    value={oldPassword}
                    helperText={
                      oldPassword !== signup.vendor_password &&
                      "password doesn't match"
                    }
                    error={oldPassword !== signup.vendor_password}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  {"Already have an account? "}
                  <Link
                    onClick={() => setSign(!sign)}
                    variant="body2"
                    style={{ color: "#C97C68", fontWeight: "bold" }}
                  >
                    Log In
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        ) : (
          <div onSubmit={Login}>
            <Typography variant="h5" className={classes.titleFormSignin}>
              Sign to your account
            </Typography>
            <form className={classes.formSignin} noValidate>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) =>
                      setlogin({ ...login, vendor_email: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) =>
                      setlogin({ ...login, vendor_password: e.target.value })
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submitSignin}
              >
                Log in
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  {"Don't have an account? "}
                  <Link
                    onClick={() => setSign(!sign)}
                    variant="body2"
                    style={{ color: "#C97C68", fontWeight: "bold" }}
                  >
                    Sign Up
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        )}
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
