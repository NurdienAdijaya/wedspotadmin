import { combineReducers } from "redux";
import vendorData from "./auth";
import quotationsList from "./quotationList";
import quotationsById from "./quotationById";
import packageList from "./packageList";
import packageById from "./packageById";
import config from './config'

export default combineReducers({ vendorData, quotationsList, quotationsById, packageList, packageById, config});
