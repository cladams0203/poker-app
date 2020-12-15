import { UserActions } from "../../types";
import { userState } from "./initialState";
import { LOADING, SUCCESS, ERROR } from "../actions/userActions";

export const userReducer = (state = userState, action: UserActions) => {
  switch (action.type) {
    default:
      return state;
  }
};
