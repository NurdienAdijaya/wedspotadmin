import { Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";

const Routers = () => {
  const token = localStorage.getItem("Token");
  return (
    <>
      <Switch>
        <Route exact path="/">
          {token ? <Sidebar /> : <Home />}
        </Route>
        <Route exact path="/test">
          <Sidebar />
        </Route>
      </Switch>
    </>
  );
};

export default Routers;
