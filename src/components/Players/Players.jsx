import Player from "./Player";

const Players = ({ activePlayerSymbol }) => {
  return (
    <ol id="players" className="highlight-player">
      <Player isActive={activePlayerSymbol === "X"} initialName="Player 1" symbol="X" />
      <Player isActive={activePlayerSymbol === "O"} initialName="Player 2" symbol="O" />
    </ol>
  );
};

export default Players;
