import { UserActions, UserState } from "../../types";
import { userState } from "./initialState";
import { LOADING, SUCCESS, ERROR } from "../actions/userActions";

export const userReducer = (
  state: UserState = userState,
  action: UserActions
) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
      };
    case SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
