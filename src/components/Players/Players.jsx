import Player from "./Player";

const Players = ({ activePlayerSymbol, onChangePlayerName }) => {
  return (
    <ol id="players" className="highlight-player">
      <Player isActive={activePlayerSymbol === "X"} initialName="Player 1" symbol="X"  onChangeName={onChangePlayerName}/>
      <Player isActive={activePlayerSymbol === "O"} initialName="Player 2" symbol="O" onChangeName={onChangePlayerName}/>
    </ol>
  );
};

export default Players;
