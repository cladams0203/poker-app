import { PlayerPositionProps } from "../types";
import "../styles/PlayerPosition.scss";
export const PlayerPosition: React.FC<PlayerPositionProps> = ({
  player,
  idx,
}) => {
  const { chips, isFolded, isButton, isSmall, isLarge } = player;
  return (
    <div
      className={`position-players position${idx} ${
        isFolded ? "folded" : null
      }`}
    >
      <p className="user"> {player.user.username} </p>
      <p className="chips">Chips: {chips} </p>
      {isButton && <div className={`dealer-button`}>D</div>}
      {isSmall && <div className={`dealer-button`}>SB</div>}
      {isLarge && <div className={`dealer-button`}>BB</div>}
    </div>
  );
};
