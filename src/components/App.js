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
//Importando el component donde se muestra el sistema flacso
import SystemFlacso from './systemflacso/SystemFlacso';
//Importando el componente donde se muestra información de flacso
import AboutFlacso from './aboutflacso/AboutFlacso';

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
            <AboutFlacso/>
          </Route>

          <Route path="/aboutSystem">
            <SystemFlacso/>
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
