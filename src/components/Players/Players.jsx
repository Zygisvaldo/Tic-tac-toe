import Player from "./Player";

const Players = ({ currPlayer }) => {
  return (
    <ol id="players" className="highlight-player">
      <Player isActive={currPlayer === "X"} initialName="Player 1" symbol="X" />
      <Player isActive={currPlayer === "O"} initialName="Player 2" symbol="O" />
    </ol>
  );
};

export default Players;
