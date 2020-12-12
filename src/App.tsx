import "./styles/App.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_TO_HAND,
  FLOP,
  SHUFFLE,
  START,
  TURN_RIVER,
} from "./state/actions/gameActions";
import { AppState, Player } from "./types";
import { computerPlayers } from "./utils/helpers/computerPlayers";
import { Table } from "./components/Table";
import { PlayerPosition } from "./components/PlayerPosition";

import { analizeHands } from "./utils/helpers";

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
    analizeHands(state.players, state.community, dispatch).then((res) => {});
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => dispatch({ type: SHUFFLE })}>Shuffle</button>
        <button
          onClick={() => dispatch({ type: START, payload: computerPlayers })}
        >
          Start
        </button>
        <button onClick={() => deal()}>Deal</button>
        <button onClick={() => dispatch({ type: FLOP })}>Flop</button>
        <button onClick={() => dispatch({ type: TURN_RIVER })}>
          Turn/River
        </button>
        <button onClick={() => findTheWinner()}>Winner</button>
      </header>
      <Table />
      {state.players.map((item: Player) => (
        <PlayerPosition key={item.playerId} player={item} />
      ))}
    </div>
  );
}

export default App;
