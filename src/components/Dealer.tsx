import "../styles/Dealer.scss";

import { useSelector } from "react-redux";
import { AppState } from "../types";

export const Dealer = () => {
  const state = useSelector((state: AppState) => state.game);
  return (
    // <div className="dealer-container">
    <div className="dealer-box">
      <div>
        <p>Blinds: $15/30</p>
        <p>Increases in 5.00s</p>
      </div>
      <p className="current-bet">Current Bet: {state.table.currentBet}</p>
      <p className="pot">Pot {state.table.pot}</p>
    </div>
    // </div>
  );
};
