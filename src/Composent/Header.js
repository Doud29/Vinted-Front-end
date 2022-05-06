import { Link } from "react-router-dom";
import logo from "../img/logo.png";
const Header = () => {
  return (
    <div className="header-app">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Link>
      <input
        className="searchbar"
        placeholder="What do you want?"
        type="text"
      />
      <Link to="/Signup" style={{ textDecoration: "none" }}>
        <div className="incription">
          <span>S'inscrire</span>
        </div>
      </Link>
      <Link to="/Login" style={{ textDecoration: "none" }}>
        <div className="connexion">
          <span>Se connecter</span>
        </div>
      </Link>
      <div className="vendre">
        {" "}
        <span>Vends des articles</span>{" "}
      </div>
    </div>
  );
};

export default Header;
