import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  const [currPlayer, setCurrPlayer] = useState("X");
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handlePlayerChange = () => {
    setCurrPlayer((prevPlayer) => {
      if (prevPlayer === "X") {
        return "O";
      } else {
        return "X";
      }
    });
  };

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      // updating in an unmutable way / making a copy of array + its nested inner arrays
      const updatedGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      if (!updatedGameBoard[rowIndex][colIndex]) {
        updatedGameBoard[rowIndex][colIndex] = currPlayer;
        handlePlayerChange();
      }
      return updatedGameBoard;
    });
  };

  console.log(currPlayer);

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {/* col = playerSymbol = initialGameBoard[rowIndex][colIndex]*/}
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
