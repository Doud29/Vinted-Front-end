import logo from "../img/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();
  return (
    <div className="header-app">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <input
        className="searchbar"
        placeholder="What do you want?"
        type="text"
      />

      <div>
        {token === null ? (
          <div className="connecter">
            <Link
              className="incription"
              to="/Signup"
              style={{ textDecoration: "none" }}
            >
              <div>
                <span>S'inscrire</span>
              </div>
            </Link>
            <Link
              className="connexion"
              to="/Login"
              style={{ textDecoration: "none" }}
            >
              <div>
                <span>Se connecter</span>
              </div>
            </Link>

            <div className="vendre" style={{ opacity: 0.4 }}>
              {" "}
              <span>Vends des articles</span>{" "}
            </div>
          </div>
        ) : (
          <div className="connecter">
            {" "}
            <div
              className="connexion"
              onClick={() => {
                setUser(null);
                navigate("/");
              }}
            >
              <span>Se déconnecter</span>
            </div>{" "}
            <div
              className="vendre"
              onClick={() => {
                // const = blblb;
                navigate("/Publish");
              }}
            >
              <p>Vends des articles</p>{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
