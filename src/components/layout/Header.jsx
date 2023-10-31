import gameLogo from "../../assets/game-logo.png";

const Header = () => {
  return (
    <header>
      <img src={gameLogo} alt="" />
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
};

export default Header;
