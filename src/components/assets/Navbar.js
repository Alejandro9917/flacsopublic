import React from "react";

//Importando estilos
import '../../css/navbar.css';

//Importanto imagenes
import imgLogo from '../../img/logo/logo.png';

class Navbar extends React.Component {
  //Renderizar el navbar
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
        
        <div className="container">
          <div className="row">
              <div className="col-2 col-md-2 col-xl-1">
                  <img src={imgLogo} id="imgLogoNav" alt="Logo FLACSO"/>
              </div>

              <div className="col-7 col-sm-8 col-lg-10 col-xl-4" id="titleNav">
                  <p>Facultad Latinoamericana de de Ciencias Sociales FLACSO El Salvador</p>
              </div>

              <div className="col-1 col-sm-2">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" id="toogleBoton">
                      <span className="navbar-toggler-icon blue"></span>
                  </button>
              </div>
          

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="offset-xl-4 navMenu navbar-nav">

              <li className="nav-item dropdown">
                <p className="linkTextNav nav-link dropdown-toggle" id="bicentenarioMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bicentenario</p>
                <div className="listBackNav dropdown-menu" aria-labelledby="bicentenarioMenu">
                  <p className="listTextNav dropdown-item">Página principal</p>
                  <p className="listTextNav dropdown-item">Base de datps</p>
                  <p className="listTextNav dropdown-item">Cuadernos</p>
                  <p className="listTextNav dropdown-item">Policy papers</p>
                  <p className="listTextNav dropdown-item">Infografías</p>
                  <p className="listTextNav dropdown-item">Audiovisuales</p>
                </div>
              </li>

              <li className="nav-item">
                <p className="linkTextNav nav-link">Investigación</p>
              </li>

              <li className="nav-item">
                <p className="linkTextNav nav-link">Actividades</p>
              </li>

              <li className="nav-item">
                <p className="linkTextNav nav-link">Publicaciones</p>
              </li>

              <li className="nav-item dropdown">
                <p className="linkTextNav nav-link dropdown-toggle" id="acercaDeMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Acerca de</p>
                <div className="listBackNav dropdown-menu" aria-labelledby="acercaDeMenu">
                  <p className="listTextNav dropdown-item">Sistema FLACSO</p>
                  <p className="listTextNav dropdown-item">FLACSO El Salvador</p>
                </div>
              </li>

              <li className="nav-item">
                <p className="linkTextNav nav-link">Contacto</p>
              </li>

            </ul>
          </div>

          </div>
        </div>

      </nav>
    );
  }
}

//Exportando el componente
export default Navbar;
