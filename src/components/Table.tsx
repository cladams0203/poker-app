import "../styles/Table.scss";
import { PlayingCard } from "./PlayingCard";
import { useSelector } from "react-redux";
import { AppState, Card, Player } from "../types";
import { Dealer } from "./Dealer";
import { PlayerLayout } from "./PlayerLayout";

export const Table: React.FC = () => {
  const state = useSelector((state: AppState) => state.game);
  return (
    <div className="table-container">
      <div className="table">
        <Dealer />
        <div className="inner-table">
          {/* <div className={`dealer-button position${state.buttonPosition}`}>
            B
          </div> */}
          <div className="community">
            {state.community.map((item: Card) => (
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
