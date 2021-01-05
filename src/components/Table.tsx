import "../styles/Table.scss";
import { useEffect, useRef, useState } from "react";
import { PlayingCard } from "./PlayingCard";
import { useSelector, useDispatch } from "react-redux";
import { AppState, Card, Player } from "../types";
import { Dealer } from "./Dealer";
import { PlayerLayout } from "./PlayerLayout";
import io from "socket.io-client";
import { ADD_PLAYERS } from "../state/actions/gameActions";

// const socket = io("http://127.0.0.1:5000");

export const Table: React.FC = () => {
  const state = useSelector((state: AppState) => state.game);
  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();
  const socket = useRef(io("http://127.0.0.1:5000"));
  const [start, setStart] = useState(false);
  const orderPlayers = async (playerArray: Player[]) => {
    const currentUser = playerArray.find((item) => item.user === user.user.id);
    const currentId = currentUser?.playerId;
    let newPlayerArray: Player[] = [];
    console.log(playerArray);
    if (currentId) {
      if (currentId > 1) {
        const leftOfCurrent = playerArray.slice(currentId);
        const rightOfCurrent = playerArray.slice(0, currentId - 1);
        newPlayerArray = leftOfCurrent.concat(rightOfCurrent);
      } else {
        return playerArray;
      }
    }
    const updatedPlayers = [currentUser, ...newPlayerArray];
    console.log(updatedPlayers);
    return updatedPlayers;
  };

  useEffect(() => {
    socket.current.on("connect", () => {
      console.log(socket.current.id);
    });
    socket.current.emit("room", state.table.tableCode);
    socket.current.on("players", (res: any) => {
      console.log(res);
      orderPlayers(res).then((sortedPlayers) => {
        dispatch({ type: ADD_PLAYERS, payload: sortedPlayers });
      });
    });
  }, []);

  const startGame = () => {
    socket.current.emit("startGame", state.table.tableCode);
    setStart(true);
  };

  return (
    <>
      <div className="table-container">
        <div className="table">
          <Dealer />
          <div className="inner-table">
            {/* <div className={`dealer-button position${state.buttonPosition}`}>
            B
          </div> */}
            <div className="community">
              {state.table.community &&
                state.table.community.map((item: Card) => (
                  <PlayingCard item={item} />
                ))}
            </div>
          </div>
        </div>
        <PlayerLayout />
        {/* <div className={`dealer-button`}>D</div> */}
      </div>
      {!start && <button onClick={() => startGame()}>Start Game</button>}
    </>
  );
};
