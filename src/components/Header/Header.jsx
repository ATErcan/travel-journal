import { GiWorld } from "react-icons/gi";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>ATE</h1>
      <div className="header-title">
        <GiWorld className="globe-icon" />
        <h2>My Travel Journal</h2>
      </div>
    </header>
  );
};

export default Header;
