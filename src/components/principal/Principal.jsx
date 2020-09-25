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
//Importando componente de nuevas infografias
import NewInfographic from './NewInfographic';
//Importando vídeos recientes
import NewVideos from './NewVideos';

const Principal = () => {
    return(
        <React.Fragment>
            <Carousel/>
            <div className="container backgroundGray">
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-4 sectionTop">
                        <Investigation/>
                        <hr/>
                        <RecentActivities/>
                        <hr/>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-8">
                        <News/>
                        <hr/>
                        <NewInfographic/>
                        <hr/>
                        <NewVideos/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Principal;