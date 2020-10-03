import React, {useState} from 'react';

//Importando estilos
import '../../css/contact.css';

//Importando los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const FormContac = () =>{
    return(
        <form className="form-group col-12 col-lg-6">
            <div className="col-12">
                <label for="name">Ingrese su nombre</label>
                <input
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Nombre"
                    type="text"
                />
            </div>
            <div className="col-12">
                <label for="email">Ingrese su correo</label>
                <input
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                    type="email"
                />
            </div>
            <div className="col-12">
                <label for="message">Escriba su mensaje</label>
                <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    value=""
                />
            </div>
            <div className="col-8">
                <button type="submit" className="btn btn-light btnContact">Enviar <FontAwesomeIcon icon={faArrowCircleRight}/></button>
            </div>
        </form>
    );
}

export default FormContac;