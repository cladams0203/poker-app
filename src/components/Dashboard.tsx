import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SUCCESS } from "../state/actions/userActions";
import { AppState } from "../types";
import { api } from "../utils/auth/api";
export const Dashbaord: React.FC = () => {
  const user = useSelector((state: AppState) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    api()
      .get("/api/users")
      .then((res) => {
        dispatch({ type: SUCCESS, payload: res.data });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h3>Welcome {user.username} </h3>
      <button>Create Table</button>
      <button>Join Existing Table</button>
    </div>
  );
};
