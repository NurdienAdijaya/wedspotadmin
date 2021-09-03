import { Route, Switch } from "react-router-dom";
import Notifications from "../components/Notifications";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";

const Routers = () => {
  const token = true;
  return (
    <>
      <Switch>
        <Route path="/">{token ? <Sidebar /> : <Home />}</Route>
        <Route path="/test">
          <Sidebar />
        </Route>
        <Route exact path="/*">
          <Notifications />
        </Route>
      </Switch>
    </>
  );
};

export default Routers;
