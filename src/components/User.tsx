import { AppState, Card, PlayerPositionProps } from "../types";
import "../styles/User.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BET } from "../state/actions/gameActions";

export const User: React.FC = () => {
  const state = useSelector((state: AppState) => state.game);
  const user = state.players[0];
  const dispatch = useDispatch();
  const [raise, setRaise] = useState({ allow: false, amount: 0 });
  const call = () => {
    dispatch({
      type: BET,
      payload: { id: user.playerId, amt: state.table.currentBet },
    });
  };

  const enableRaise = () => {
    setRaise({ ...raise, allow: true, amount: state.table.currentBet });
  };

  const submitRaise = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: BET,
      payload: { id: user.playerId, amt: raise.amount },
    });
    setRaise({ allow: false, amount: 0 });
  };

  return (
    <>
      {user && (
        <div className="active-user">
          {user.isButton && <div className="user-button">D</div>}
          <div className="user-cards">
            {user.currentHand &&
              user.currentHand.map((item: Card) => (
                <img src={item.image} alt={item.displayValue} />
              ))}
          </div>
          <p className="user-chips">Chips: {user.chips}</p>
          {!raise.allow && (
            <div>
              <button>Fold</button>
              <button onClick={() => call()}>Call</button>
              <button onClick={() => enableRaise()}>Raise</button>
            </div>
          )}
          {raise.allow && (
            <form onSubmit={submitRaise}>
              <label>
                Raise Ammount:
                <input
                  type="number"
                  value={raise.amount && raise.amount}
                  onChange={(e) =>
                    setRaise({ ...raise, amount: Number(e.target.value) })
                  }
                />
              </label>
              <button type="submit">Raise</button>
              <button onClick={() => setRaise({ ...raise, allow: false })}>
                Cancel
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
};
