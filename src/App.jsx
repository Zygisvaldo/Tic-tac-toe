import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import Players from "./components/Players/Players";
import Header from "./components/layout/Header";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = () => {
    setActivePlayer((curActivePlayer) => {
      return curActivePlayer === "X" ? "O" : "X";
    });
  };

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <Players currPlayer={activePlayer} />
          <GameBoard
            currPlayer={activePlayer}
            onSelectSquare={handleSelectSquare}
          />
        </div>
        LOG
      </main>
    </>
  );
}

export default App;
