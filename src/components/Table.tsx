import "../styles/Table.scss";
import { useEffect } from "react";
import { PlayingCard } from "./PlayingCard";
import { useSelector, useDispatch } from "react-redux";
import { AppState, Card, Player } from "../types";
import { Dealer } from "./Dealer";
import { PlayerLayout } from "./PlayerLayout";
import io from "socket.io-client";
import { ADD_PLAYERS } from "../state/actions/gameActions";

const socket = io("http://127.0.0.1:5000");

export const Table: React.FC = () => {
  const state = useSelector((state: AppState) => state.game);
  const dispatch = useDispatch();
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
    });
    socket.emit("room", state.table.tableCode);
    socket.on("players", (res: any) => {
      dispatch({ type: ADD_PLAYERS, payload: res });
    });
  }, []);

  return (
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
  );
};
