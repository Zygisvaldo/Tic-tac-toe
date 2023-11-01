import { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-simbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "save" : "edit"}</button>
    </li>
  );
};

export default Player;
