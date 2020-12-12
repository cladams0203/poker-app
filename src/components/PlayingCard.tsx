import { PlayingCardProps } from "../types";

export const PlayingCard: React.FC<PlayingCardProps> = ({ item }) => {
  const { displayValue, suit } = item;
  return (
    <>
      <div>
        <h3>{displayValue}</h3>
        <p>{suit}</p>
      </div>
    </>
  );
};
