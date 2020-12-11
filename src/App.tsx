import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_TO_HAND,
  FLOP,
  SHUFFLE,
  START,
  TURN_RIVER,
} from "./state/actions/gameActions";
import { AppState, Player } from "./types";
import { players } from "./utils/computerPlayers";
import { Table } from "./components/Table";
import { PlayerPosition } from "./components/PlayerPosition";

import { Hand } from "pokersolver";

function App() {
  const state = useSelector((state: AppState) => state.game);
  const dispatch = useDispatch();
  console.log(state.players);

  const deal = () => {
    console.log("hey");
    state.players.forEach((item: Player) => {
      dispatch({
        type: ADD_TO_HAND,
        payload: { id: item.playerId },
      });
    });
  };

  const winner = () => {
    const handArray: any = [];
    const communityValue = state.community.map((item) => item.value);

    state.players.forEach((item) => {
      const handValue = item.currentHand.map((item) => item.value);
      const hand = Hand.solve(communityValue.concat(handValue));
      handArray.push(hand);
    });
    console.log(Hand.winners(handArray));
  };

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: SHUFFLE })}>Shuffle</button>
      <button onClick={() => dispatch({ type: START, payload: players })}>
        Start
      </button>
      <button onClick={() => deal()}>Deal</button>
      <button onClick={() => dispatch({ type: FLOP })}>Flop</button>
      <button onClick={() => dispatch({ type: TURN_RIVER })}>Turn/River</button>
      <button onClick={() => winner()}>Winner</button>
      <Table />
      {state.players.map((item: Player) => (
        <PlayerPosition player={item} />
      ))}
    </div>
  );
}

export default App;
