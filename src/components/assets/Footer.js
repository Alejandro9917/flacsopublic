import React from "react";

//Importando estilos
import '../../css/footer.css';

//Importando los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faAt} from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small teal pt-4" id="footer">

        <div className="container text-center text-md-left" id="contentFooter">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <p className="font-weight-bold" id="titleFooter">Facultad Latinoamericana de Ciencias Sociales</p>
              <p id="titleCopy">©FLACSO 2020</p>
              <FontAwesomeIcon className="iconCopy" icon={faEnvelope} />
            </div>
            

            <hr className="clearfix w-100 d-md-none pb-3" id="hrLine"/>

            <div className="col-md-6 mb-md-0 mb-3">

              <button type="button" className="iconBlue btn btn-light">
                <FontAwesomeIcon icon={faAt} />
                Suscribase
              </button>

              <p id="addressFooter">91° Avenida Norte #515 Colonia Escalón, San Salvador, El Salvador.</p>

              <p id="addressFooter">
                <FontAwesomeIcon icon={faPhoneAlt} />
                + (503) 2206 9648
              </p>
              
              <p id="addressFooter">© 2020 Copyright:</p>
            </div>
          </div>
        </div>

      </footer>
    );
  }
}

export default Footer;
