import "./styles/App.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
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

import { analizeHands } from "./utils/helpers";

import io from "socket.io-client";

function App() {
  const state = useSelector((state: AppState) => state.game);
  const dispatch = useDispatch();

  const socket = io("http://127.0.0.1:5000");
  useEffect(() => {
    socket.on("from_Api", (data: any) => {
      console.log(data);
    });
  }, []);

  const deal = () => {
    state.players.forEach((item: Player) => {
      dispatch({
        type: ADD_TO_HAND,
        payload: { id: item.playerId },
      });
    });
  };

  const findTheWinner = () => {
    socket.on("app_data", () => "hello");
    socket.emit("app_data", "hey");
    // socket.off("app_data");
    analizeHands(state.players, state.community, dispatch).then((res) => {});
  };

  const orderPlayers = () => {
    const currentUser = state.players.find((item) => item.activeUser);
    const currentId = currentUser?.playerId;
    let newPlayerArray: Player[] = [];
    if (currentId) {
      if (currentId > 1) {
        const leftOfCurrent = state.players.slice(currentId);
        const rightOfCurrent = state.players.slice(0, currentId - 1);
        newPlayerArray = leftOfCurrent.concat(rightOfCurrent);
      }
    }
    const updatedPlayers = [currentUser, ...newPlayerArray];

    dispatch({ type: START, payload: updatedPlayers });
    console.log(updatedPlayers);
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
        <button onClick={() => orderPlayers()}>Order Players</button>
        <button onClick={() => deal()}>Deal</button>
        <button onClick={() => dispatch({ type: FLOP })}>Flop</button>
        <button onClick={() => dispatch({ type: TURN_RIVER })}>
          Turn/River
        </button>
        <button onClick={() => findTheWinner()}>Winner</button>
      </header>

      {/* <div className="opponents">
        {state.players.map((item: Player, idx) => {
          if (item.activeUser === false) {
            return (
              <PlayerPosition idx={idx} key={item.playerId} player={item} />
            );
          }
        })}
      </div> */}
      {/* <Dealer /> */}
      <Table />
      {/* {state.players.map((item: Player, idx) => {
        if (item.activeUser) {
          console.log("fired");
          return <User idx={idx} key={item.playerId} player={item} />;
        }
      })} */}
    </div>
  );
}

export default App;
