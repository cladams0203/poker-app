import { PlayingCard } from "./PlayingCard";
import { useSelector } from "react-redux";
import { AppState, Card } from "../types";

export const Table: React.FC = () => {
  const state = useSelector((state: AppState) => state.game);
  return (
    <>
      <div>
        {state.community.map((item: Card) => (
          <PlayingCard item={item} />
        ))}
      </div>
    </>
  );
};
