import React from 'react';

//Importanto imagenes
import imgInfographic from '../../img/info.jpg';

const RecentInfographic = () =>{
    const info = [];
    for(var i = 1; i < 4; i++){
        info.push(
            <div className="col-4">
                <img src={imgInfographic} className="img-fluid" id="imgInfographic" alt="Infografía" key={i}/>
            </div>
        );
    }

    return(
        <React.Fragment>
            {info}
        </React.Fragment>
    );
}

export default RecentInfographic;