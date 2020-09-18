import React from "react";
import Navbar from "./assets/Navbar";
import Footer from "./assets/Footer";
import {BrowserRouter as Router,
      Switch,
      Route,
      Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/" exact>
            Página de contacto
          </Route>

          <Route path="/actividades">
          </Route>
        </Switch>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
