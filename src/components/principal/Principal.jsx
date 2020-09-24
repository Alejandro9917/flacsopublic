import React from 'react';

//Importando estilos 
import '../../css/principal.css'

//Importando componentes para crear Pirncipal
import Carousel from './Carousel';
//Importante la parte de accesos a investigación
import Investigation from './Investigation';
//Importando componente de actividades recientes
import RecentActivities from './RecentActivities';
//Importando componente de novedades
import News from './News';

const Principal = () => {
    return(
        <React.Fragment>
            <Carousel/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-4">
                        <Investigation/>
                        <hr/>
                        <RecentActivities/>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-8">
                        <News/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Principal;