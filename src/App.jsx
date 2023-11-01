import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import Players from "./components/Players/Players";
import Header from "./components/layout/Header";
import Log from "./components/Log/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

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

  // deriving computed value from props(which is state in App)
  // must ALWAYS make a copy of ARRAY before mutating! deeply nested arrays like this:
  let gameBoard = [...initialGameBoard.map((row) => [...row])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner;

  // getting every symbol that is stored in the winning combination for its EACH square/ cell
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      // not null
      firstSquareSymbol &&
      // and the same as 2nd
      firstSquareSymbol === secondSquareSymbol &&
      // and 3rd
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

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

  const handleRematch = () => {
    setGameTurns([]);
  };

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <Players activePlayerSymbol={activePlayer} />
          {(winner || hasDraw) && (
            <GameOver winner={winner} onRematch={handleRematch} />
          )}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
