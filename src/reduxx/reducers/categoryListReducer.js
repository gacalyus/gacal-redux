import * as actitionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function changeCategoryReducer(
  state = initialState.categories,
  action
) {
  switch (action.type) {
    case actitionTypes.GET_CATEGORIES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
