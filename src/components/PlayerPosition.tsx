import { PlayerPositionProps } from "../types";
import "../styles/PlayerPosition.scss";
export const PlayerPosition: React.FC<PlayerPositionProps> = ({
  player,
  idx,
}) => {
  const { chips, currentHand, isFolded } = player;
  return (
    <div className={`position-players ${isFolded ? "folded" : null}`}>
      <p className="user"> {player.user.username} </p>
      <p className="chips">Chips: {chips} </p>
    </div>
  );
};
