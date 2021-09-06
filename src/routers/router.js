import { Route, Switch } from "react-router-dom";
import Notifications from "../components/Notifications";
import NewPackages from "../components/packages/NewPackages";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";

const Routers = () => {
  const token = localStorage.getItem("token");
  return <>{token ? <Sidebar /> : <Home />}</>;
};

export default Routers;
