import { PlayerPosition } from "./PlayerPosition";
import { useSelector } from "react-redux";
import { AppState, Player } from "../types";
import "../styles/PlayerLayout.scss";
import { User } from "./User";
export const PlayerLayout: React.FC = () => {
  const state = useSelector((state: AppState) => state.game);
  return (
    <div className="player-layout">
      <User />
      {state.players.map((item: Player, idx) => {
        if (item.activeUser === false) {
          return <PlayerPosition idx={idx} key={item.playerId} player={item} />;
        }
      })}
    </div>
  );
};
