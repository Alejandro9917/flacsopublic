import React from 'react';

//Importanto imagenes
import imgInfographic from '../../img/info.jpg';

const Infographic = () =>{
    return(
        <React.Fragment>
            <img src={imgInfographic} className="img-fluid" id="imgInfographic" alt="Infografía"/>
        </React.Fragment>
    );
}

export default Infographic;