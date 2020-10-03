import React from 'react';

//Importando los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const MapContact = ()=> {
    return(
        <React.Fragment>
            <div className="col-12 col-lg-6">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.19755622246!2d-89.23265792752805!3d13.706481620467674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633015b90a41cf%3A0x2f3e64c79d7fae09!2sFlacso%20El%20Salvador!5e0!3m2!1ses-419!2ssv!4v1601680080947!5m2!1ses-419!2ssv" 
                    className="mapContact"
                    frameborder="0" 
                    allowfullscreen="" 
                    aria-hidden="false" 
                    tabindex="0"
                    title="Mapa Flacso"
                />
                <p><FontAwesomeIcon icon={faPhoneAlt}/> +(503) 2206 9648</p>
                <p><FontAwesomeIcon icon={faEnvelope}/> recepcion@flacso.org.sv</p>
            </div>
        </React.Fragment>
    );
}

export default MapContact;