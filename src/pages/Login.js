import Header from "../Composent/Header";

const Login = () => {
  /* ----------------------------------------------------------------------------- */
  /*-----------------------------------// States //--------------------------------*/
  /* ---------------------------------------------------------------------------- */

  // const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const response = await axios.post(
  //     "https://lereacteur-vinted-api.herokuapp.com/user/signup",

  //     { username: name, email: email, password: password, optin: optin }
  //   );

  //   navigate("/Login");
  //   // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
  //   console.log(email, password, name);
  // };

  return (
    <div>
      <Header />
      <div className="login">
        {/* <form className="formulaire" onSubmit={handleSubmit}>
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

          <input type="submit" value="Submit" />
        </form> */}
      </div>
    </div>
  );
};

export default Login;
