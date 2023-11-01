const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}, ${turn.square.col}`}>
          {turn.player} selected {turn.square.row + 1} row, and{" "}
          {turn.square.col + 1} collumn
        </li>
      ))}
    </ol>
  );
};

export default Log;
