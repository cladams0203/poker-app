import "../styles/Table.scss";
import { PlayingCard } from "./PlayingCard";
import { useSelector } from "react-redux";
import { AppState, Card, Player } from "../types";
import { PlayerPosition } from "./PlayerPosition";

export const Table: React.FC = () => {
  const state = useSelector((state: AppState) => state.game);
  return (
    <div className="table">
      <div className="inner-table">
        <div className="community">
          {state.community.map((item: Card) => (
            <PlayingCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
