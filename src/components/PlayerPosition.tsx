import { PlayerPositionProps } from "../types";
import "../styles/PlayerPosition.scss";
export const PlayerPosition: React.FC<PlayerPositionProps> = ({
  player,
  idx,
}) => {
  const { chips, currentHand } = player;
  return (
    <div className="position-players">
      <p className="user"> {player.user.username} </p>
      {/* {currentHand.map((item, idx) => (
          <div key={idx}>
            <h4>{item.displayValue}</h4>
            <p>{item.suit}</p>
          </div>
        ))} */}
      <p className="chips">Chips: {chips} </p>
    </div>
  );
};
