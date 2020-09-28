import React from "react";
import {BrowserRouter as Router,
      Switch,
      Route} from 'react-router-dom';

//Importando Navbar y Footer
import Navbar from "./assets/Navbar";
import Footer from "./assets/Footer";

//Importando la página principal
import Principal from "./principal/Principal";
//Importando el componente del sitio de investigaciom
import Investigation from './investigation/Investigation';
//Importando el componente donde se muestran las actividades
import Activities from './activities/Activities';

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
            <Investigation/>
          </Route>

          <Route path="/activities">
            <Activities/>
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
