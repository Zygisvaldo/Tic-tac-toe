import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import Players from "./components/Players/Players";
import Header from "./components/layout/Header";
import Log from "./components/Log/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      // best practise is to NEVER merge states so instead of activePlayer, computed value currentPlayer
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }

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
        <Log />
      </main>
    </>
  );
}

export default App;
