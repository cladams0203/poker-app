import "./styles/App.scss";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import {
  ADD_TO_HAND,
  FLOP,
  SHUFFLE,
  TURN_RIVER,
} from "./state/actions/gameActions";
import { AppState, Player } from "./types";
import { ProtectedRoute } from "./utils/auth/ProtectedRoute";
// import { computerPlayers } from "./utils/helpers/computerPlayers";
import { Table } from "./components/Table";
import { Register } from "./components/Register";
import { Login } from "./components/Login";

import { analizeHands } from "./utils/helpers";

import { Dashbaord } from "./components/Dashboard";
import { TableForm } from "./components/TableForm";

function App() {
  const state = useSelector((state: AppState) => state.game);
  const dispatch = useDispatch();

  const deal = () => {
    state.players.forEach((item: Player) => {
      dispatch({
        type: ADD_TO_HAND,
        payload: { id: item.playerId },
      });
    });
  };

  const findTheWinner = () => {
    analizeHands(
      state.players,
      state.table.community,
      dispatch
    ).then((res) => {});
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => dispatch({ type: SHUFFLE })}>Shuffle</button>
        <button onClick={() => deal()}>Deal</button>
        <button onClick={() => dispatch({ type: FLOP })}>Flop</button>
        <button onClick={() => dispatch({ type: TURN_RIVER })}>
          Turn/River
        </button>
        <button onClick={() => findTheWinner()}>Winner</button>
      </header>
      <Switch>
        <ProtectedRoute path="/table">
          <Table />
        </ProtectedRoute>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create-table">
          <TableForm />
        </Route>
        <ProtectedRoute path="/">
          <Dashbaord />
        </ProtectedRoute>
      </Switch>
    </div>
  );
}

export default App;
