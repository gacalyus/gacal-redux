import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";


const rootReducers = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
});

export default rootReducers;
