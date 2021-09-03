import { Route, Switch } from "react-router-dom";
import Notifications from "../components/Notifications";
import NewPackages from "../components/packages/NewPackages";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";

const Routers = () => {
  const token = true;
  return (
    <>
      <Switch>
        <Route exact path="/">
          {token ? <Sidebar /> : <Home />}
        </Route>
        <Route path="/test"></Route>
        <Route path="/*">
          <NewPackages />
        </Route>
      </Switch>
    </>
  );
};

export default Routers;
