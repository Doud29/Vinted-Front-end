/* ----------------------------------------------------------------------------- */
/*-----------------------// Import packages/composant //------------------------*/
/* ---------------------------------------------------------------------------- */

import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      {/* ---------------------------------------------------------------------------- */
      /* ----------------------------------/ Route  /---------------------------------- */
      /* ---------------------------------------------------------------------------- */}

      {/* toujours réaliser la démarche ci-dessous */}
      {/* on englobe toute notre naviguation dans un composant Router (Router = Browser Router) */}
      {/* on déclare l'existance d'une naviguation : d'un router */}
      <Router>
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
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
