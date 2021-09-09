import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Notifications from "../components/Notifications";
import NewPackages from "../components/package/NewPackages";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";

const Routers = () => {
  const token = localStorage.getItem("token");
  const { isSuccess } = useSelector((state) => state.vendorData);
  return <>{isSuccess ? <Sidebar /> : <Home />}</>;
};

export default Routers;
