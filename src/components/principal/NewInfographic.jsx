import React from 'react';

//Importando imagenes
import infoImg from '../../img/info.jpg';

const NewInfographic = () =>{
    return(
        <React.Fragment>
            <div className="row">
                <div className="card col-6 col-sm-4 col-lg-6 col-xl-4 cardMargin">
                    <img src={infoImg} className="card-img-top" alt="..."/>
                </div>
                <div className="card col-6 col-sm-4 col-lg-6 col-xl-4 cardMargin">
                    <img src={infoImg} className="card-img-top" alt="..."/>
                </div>
                <div className="card col-6 col-sm-4 col-lg-6 col-xl-4 cardMargin">
                    <img src={infoImg} className="card-img-top" alt="..."/>
                </div>              
            </div>
            <button type="button" className="btn btn-light btnCardPrincipal">VER GALERÍA DE INFOGRAFÍAS</button>
        </React.Fragment>
    );
}

export default NewInfographic;