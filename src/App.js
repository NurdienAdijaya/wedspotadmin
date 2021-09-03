import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routers from "./routers/router";

const theme = createTheme({
  palette: {
    primary: {
      main: "#455437",
    },
    secondary: {
      main: "#C97C68",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme} className="App">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
