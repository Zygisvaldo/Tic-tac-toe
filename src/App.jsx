import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import Players from "./components/Players/Players";
import Header from "./components/layout/Header";
import Log from "./components/Log/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

console.log(WINNING_COMBINATIONS);

const deriveActivePlayers = (gameTurns) => {
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    return "O";
  } else {
    return "X";
  }
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = deriveActivePlayers(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) => {
    //setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      // best practise is to NEVER merge states so instead of activePlayer, computed value currentPlayer
      const currentPlayer = deriveActivePlayers(prevTurns);

      const updatedTurns = [
        {
          player: currentPlayer,
          square: {
            row: rowIndex,
            col: colIndex,
          },
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <Players activePlayerSymbol={activePlayer} />
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
