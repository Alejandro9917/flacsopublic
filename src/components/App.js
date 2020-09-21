import React from "react";
import {BrowserRouter as Router,
      Switch,
      Route} from 'react-router-dom';

//Importando Navbar y Footer
import Navbar from "./assets/Navbar";
import Footer from "./assets/Footer";

//Importando la página principal
import Principal from "./principal/Principal"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Principal/>
          </Route>

          <Route path="/investigation">
            Página de investigacion
          </Route>

          <Route path="/activities">
            Página de actividades
          </Route>

          <Route path="/publications">
            Página de publicaciones
          </Route>

          <Route path="/about">
            Página de acerca de Flacso
          </Route>

          <Route path="/aboutSystem">
            Página de Sistema FLACSO
          </Route>

          <Route path="/contact">
            Página de contacto
          </Route>
        </Switch>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
