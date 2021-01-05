import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SUCCESS } from "../state/actions/userActions";
import { AppState } from "../types";
import { api } from "../utils/auth/api";
import { useHistory } from "react-router-dom";
import { NEW_GAME } from "../state/actions/gameActions";

export const Dashbaord: React.FC = () => {
  const state = useSelector((state: AppState) => state);
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [toggle, setToggle] = useState(false);
  const [form, setForm] = useState("");
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

  const joinTable = () => {
    api()
      .get(`/api/table/code/${form.toUpperCase()}`)
      .then((res) => {
        console.log(res);
        dispatch({ type: NEW_GAME, payload: res.data });
        const playerData = {
          playername: state.user.user.username,
          chips: state.game.table.startingChips,
          user: state.user.user.id,
        };
        api()
          .post(`/api/players/${res.data.tableCode}`, playerData)
          .then((res) => {
            console.log(res);
            push("/table");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {!toggle ? (
        <div>
          <h3>Welcome {state.user.user.username} </h3>
          <button onClick={() => push("/create-table")}>Create Table</button>
          <button onClick={() => setToggle(true)}>Join Existing Table</button>
        </div>
      ) : (
        <div>
          <label>
            Table Code:
            <input value={form} onChange={(e) => setForm(e.target.value)} />
          </label>
          <button onClick={() => joinTable()}>Join Table</button>
        </div>
      )}
    </>
  );
};
