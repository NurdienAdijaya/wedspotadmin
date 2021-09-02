import { Route, Switch } from "react-router-dom";
import Notifications from "../components/Notifications";
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
        <Route exact path="/*">
          <Notifications />
        </Route>
      </Switch>
    </>
  );
};

export default Routers;
