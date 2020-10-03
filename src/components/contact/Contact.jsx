import React from 'react';

//Importando componente de formulario
import FormContact from './FormContact';
//Importando mapa embebido
import MapContact from './MapContact';

const Contact = () =>{
    return(
        <div className="container">
            <p className="titleContact">Contacto</p>
            <div className="row">
                <FormContact/>
                <MapContact/>
            </div>  
        </div>
    );
}

export default Contact;