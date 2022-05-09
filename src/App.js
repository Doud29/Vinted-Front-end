/* ----------------------------------------------------------------------------- */
/*-----------------------// Import packages/composant //------------------------*/
/* ---------------------------------------------------------------------------- */

import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cookies from "js-cookie";
import { useState } from "react";

// import Login from "./pages/Login";

import Header from "./Composent/Header";
// import { useState } from "react";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token !== null) {
      //Action de connexion
      console.log("Création d'un cookie userTOken");
      Cookies.set("userToken", token, { expires: 10 });
    } else {
      //action de déconnexion
      console.log("Suppression d'un cookie userToken");
      Cookies.remove("userToken");
    }

    setToken(token);
    console.log(`Mise à jour du state Token avec ${token}`);
  };

  return (
    <div className="App">
      {/* ---------------------------------------------------------------------------- */
      /* ----------------------------------/ Route  /---------------------------------- */
      /* ---------------------------------------------------------------------------- */}

      {/* toujours réaliser la démarche ci-dessous */}
      {/* on englobe toute notre naviguation dans un composant Router (Router = Browser Router) */}
      {/* on déclare l'existance d'une naviguation : d'un router */}
      <Router>
        <Header token={token} setUser={setUser} />
        {/* on englobe ensuite dans routes qui va nous permettre de mettre en place route  */}
        <Routes>
          {/* ci-dessous : nous Route qui feront appelle à nos pages */}
          {/* path : correspond au chemin */}
          {/*  sa props est element qui aura pour composant product */}
          <Route path="/" element={<Home />} />
          {/* la route / me renvoie le composant home */}
          <Route path="/product/:id" element={<Product />} />
          {/* la route / me renvoie le composant Product */}
          {/* ID :  la route /product s'attend à recevoir en params un iD. Cela signifique que la route doit être capable de lui en envoyer un */}
          <Route path="/Signup" element={<Signup setUser={setUser} />} />
          <Route path="/Login" element={<Login setUser={setUser} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
