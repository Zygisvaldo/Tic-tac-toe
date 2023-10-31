import Player from "./Player";

const Players = () => {
  return (
    <ol id="players">
      <Player initialName="Player 1" symbol="X" />
      <Player initialName="Player 2" symbol="O"/>
    </ol>
  );
};

export default Players;
