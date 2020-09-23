import React from "react";
import {Link} from 'react-router-dom';

//Importando estilos
import '../../css/navbar.css';

//Importanto imagenes
import imgLogo from '../../img/logo/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
      
      <div className="container">
        <div className="row">
            <div className="col-2 col-md-2 col-xl-1">
              <Link to="/"><img src={imgLogo} id="imgLogoNav" alt="Logo FLACSO"/></Link>
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
              <Link to="/investigation"><p className="linkTextNav nav-link">Investigación</p></Link>
            </li>

            <li className="nav-item">
              <Link to="/activities"><p className="linkTextNav nav-link">Actividades</p></Link>
            </li>

            <li className="nav-item">
              <Link to="/publications"><p className="linkTextNav nav-link">Publicaciones</p></Link>
            </li>

            <li className="nav-item dropdown">
              <p className="linkTextNav nav-link dropdown-toggle" id="acercaDeMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Acerca de</p>
              <div className="listBackNav dropdown-menu" aria-labelledby="acercaDeMenu">
                <Link to="/aboutSystem"><p className="listTextNav dropdown-item">Sistema FLACSO</p></Link>
                <Link to="/about"><p className="listTextNav dropdown-item">FLACSO El Salvador</p></Link>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/contact"><p className="linkTextNav nav-link">Contacto</p></Link>
            </li>
          </ul>
        </div>

        </div>
      </div>

    </nav>
  );
}

//Exportando el componente
export default Navbar;
