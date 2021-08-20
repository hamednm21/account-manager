import { combineReducers } from "redux";
import accounts from "./Accounts";
import validData from "./ValidData";
export default combineReducers({
  accountsList: accounts,
  validData: validData,
});
