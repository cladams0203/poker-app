import { Card, PlayerPositionProps } from "../types";
import "../styles/User.scss";

export const User: React.FC<PlayerPositionProps> = ({ player }) => {
  return (
    <div className="active-user">
      <div className="user-cards">
        {player.currentHand.map((item: Card) => (
          <img src={item.image} alt={item.displayValue} />
        ))}
      </div>
    </div>
  );
};
