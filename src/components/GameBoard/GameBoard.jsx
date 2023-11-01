const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectSquare }) => {
  /*   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      // updating in an unmutable way / making a copy of array + its nested inner arrays
      const updatedGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      if (!updatedGameBoard[rowIndex][colIndex]) {
        updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
        onSelectSquare(); // lifting state up to App comp
      }
      return updatedGameBoard;
    });
  }; */

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {/* col = playerSymbol = initialGameBoard[rowIndex][colIndex]*/}
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
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
