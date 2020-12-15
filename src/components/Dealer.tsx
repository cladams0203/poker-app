import "../styles/Dealer.scss";

export const Dealer = () => {
  return (
    <div className="dealer-container">
      <div className="dealer-box">
        <div>
          <p>Blinds: $15/30</p>
          <p>Increases in 5.00s</p>
        </div>
        <p className="current-bet">Current Bet: $500</p>
        <p className="pot">Pot $10000</p>
      </div>
    </div>
  );
};
