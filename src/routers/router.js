import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";

const Routers = () => {
  // const token = localStorage.getItem("token");
  const { isLoggedin } = useSelector((state) => state.vendorData);
  // return <>{token ? <Sidebar /> : <Home />}</>;
  console.log(isLoggedin)
  return <>{isLoggedin ? <Sidebar /> : <Home />}</>;
};

export default Routers;
