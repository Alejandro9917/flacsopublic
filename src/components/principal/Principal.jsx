import React from 'react';

//Importando componentes para crear Pirncipal
import Carousel from './Carousel';
//Importante la parte de accesos a investigación
import Investigation from './Investigation';

const Principal = () => {
    return(
        <React.Fragment>
            <Carousel/>
            <div className="container">
                <div className="row">
                    <Investigation/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Principal;