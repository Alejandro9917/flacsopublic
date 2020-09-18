import React from "react";

//Importando estilos
import '../../css/footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer class="page-footer font-small teal pt-4" id="footer">

        <div class="container text-center text-md-left" id="contentFooter">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <p class="font-weight-bold" id="titleFooter">Facultad Latinoamericana de Ciencias Sociales</p>
              <p id="titleCopy">©FLACSO 2020</p>
              <svg width="3em" height="3em" viewBox="0 0 16 16" class="iconWhite bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
              </svg>
            </div>
            

            <hr class="clearfix w-100 d-md-none pb-3" id="hrLine"/>

            <div class="col-md-6 mb-md-0 mb-3">

              <button type="button" class="iconBlue btn btn-light">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-at" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"/>
                </svg>
                Suscribase
              </button>

              <p id="addressFooter">91° Avenida Norte #515 Colonia Escalón, San Salvador, El Salvador.</p>

              <p id="addressFooter">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                </svg>
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
