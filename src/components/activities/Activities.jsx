import React from 'react';

//Importando estilos 
import '../../css/activities.css'

//Importando las actividades recientes
import NewAct from './NewAct';
//Importando audiovisuales recientes
import Audiovisual from './AudioVisual';

const Activities = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-7">
                    <NewAct/>
                </div>
                <div className="col-12 col-lg-4 offset-lg-1">
                    <Audiovisual/>
                </div>
            </div>
        </div>
    );
}

export default Activities;