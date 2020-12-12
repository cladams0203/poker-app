import { PlayerPositionProps } from "../types";

export const PlayerPosition: React.FC<PlayerPositionProps> = ({ player }) => {
  const { chips, currentHand } = player;
  return (
    <>
      <div style={{ display: "flex" }}>
        <h3> {player.user.username} </h3>
        {currentHand.map((item, idx) => (
          <div key={idx}>
            <h4>{item.displayValue}</h4>
            <p>{item.suit}</p>
          </div>
        ))}
        <p>Chips: {chips} </p>
      </div>
    </>
  );
};
