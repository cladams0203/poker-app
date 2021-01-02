import { useState } from "react";
import { tableCode } from "../utils/helpers";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../utils/auth/api";
import { AppState } from "../types";
import { NEW_GAME } from "../state/actions/gameActions";

const initialFormState = {
  tableName: "",
  blindTimer: 0,
  startingChips: 0,
};

export const TableForm: React.FC = () => {
  const [form, setForm] = useState(initialFormState);
  const [toggle, setToggle] = useState(false);
  const state = useSelector((state: AppState) => state);
  const { push } = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = await tableCode();
    api()
      .post("/api/table", { ...form, tableCode: code })
      .then((res) => {
        dispatch({ type: NEW_GAME, payload: res.data });
        setToggle(true);
      })
      .catch((err) => console.log(err));
  };

  const joinTable = () => {
    const playerData = {
      playername: state.user.user.username,
      chips: state.game.table.startingChips,
    };
    api()
      .post(`/api/players/${state.game.table.tableCode}`, playerData)
      .then((res) => {
        console.log(res);
        push("/table");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {!toggle ? (
        <form onSubmit={handleSubmit}>
          <label>
            Table Name:
            <input
              name="tableName"
              onChange={handleChange}
              value={form.tableName}
            />
          </label>
          <label>
            Starting Chips:
            <input
              name="startingChips"
              onChange={handleChange}
              value={form.startingChips}
            />
          </label>
          <label>
            Blind Timer Interval Minutes
            <input
              name="blindTimer"
              onChange={handleChange}
              value={form.blindTimer}
            />{" "}
          </label>
          <button type="submit">Create Table</button>
        </form>
      ) : (
        <div>
          <h4>Your table code is {state.game.table.tableCode}</h4>
          <p>Be sure to share the code with the players you want to join</p>
          <button onClick={() => joinTable()}>Join Table</button>
        </div>
      )}
    </div>
  );
};
