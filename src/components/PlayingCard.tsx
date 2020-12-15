import "../styles/PlayingCard.scss";
import { PlayingCardProps } from "../types";

export const PlayingCard: React.FC<PlayingCardProps> = ({ item }) => {
  const { displayValue, image } = item;
  return (
    <div className="playing-card">
      <img src={image} alt={displayValue} />
    </div>
  );
};
