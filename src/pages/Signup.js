import Header from "../Composent/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/* ----------------------------------------------------------------------------- */
/*-----------------------------------// Fonction //--------------------------------*/
/* ---------------------------------------------------------------------------- */

const Signup = () => {
  /* ----------------------------------------------------------------------------- */
  /*-----------------------------------// States //--------------------------------*/
  /* ---------------------------------------------------------------------------- */

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [optin, setOptin] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/signup",

      { username: name, email: email, password: password, newsletter: optin }
    );

    navigate("/Login");
    // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
    console.log(email, password, name);
  };

  return (
    <div>
      <Header />
      <div className="signup">
        <form className="formulaire" onSubmit={handleSubmit}>
          <input
            placeholder="Votre nom"
            type="text"
            value={name}
            onChange={(event) => {
              const value = event.target.value;
              setName(value);
            }}
          />

          <input
            placeholder="email"
            type="email"
            value={email}
            onChange={(event) => {
              const value = event.target.value;
              setEmail(value);
            }}
          />

          <input
            placeholder="password"
            type="password"
            value={password}
            onChange={(event) => {
              const value = event.target.value;
              setPassword(value);
            }}
          />

          <input
            className="caseacocher"
            type="checkbox"
            name="Souhaitez-vous suivre notre Ns"
            // la valeur représente l'acceptation a recevoir des infos via la checkbox
            value={optin}
            onChange={(event) => {
              const value = event.target.checked;
              setOptin(value);
            }}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
