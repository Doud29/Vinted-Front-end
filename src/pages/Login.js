import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      console.log(response.data);
      if (response.data.token) {
        setUser(response.data.token);
        // redirection
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signup">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          className="form"
          value={email}
          placeholder="email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          className="form"
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <input className="boutton" type="submit" value="Se connecter" />
        <br />
      </form>
    </div>
  );
};

export default Login;
