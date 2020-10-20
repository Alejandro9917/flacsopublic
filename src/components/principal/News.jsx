import React from 'react';

//Importando imagenes
import defaultImg from '../../img/default.jpg';

const News = () =>{
    return(
        <React.Fragment>
            <p id="recentActPrincipal">Novedades</p>
            <div className="row">
                <div className="card col-6 col-sm-4 col-lg-6 col-xl-4 cardMarginPrincipal bgGrayPrincipal">
                    <img src={defaultImg} className="card-img-top" alt="..."/>
                    <div className="superTextPricipal">Tendencias demográficas de la población salvadoreña en Estados Unidos.</div>
                </div>
                <div className="card col-6 col-sm-4 col-lg-6 col-xl-4 cardMarginPrincipal bgGrayPrincipal">
                    <img src={defaultImg} className="card-img-top" alt="..."/>
                    <div className="superTextPricipal">Tendencias demográficas de la población salvadoreña en Estados Unidos.</div>
                </div>
                <div className="card col-6 col-sm-4 col-lg-6 col-xl-4 cardMarginPrincipal bgGrayPrincipal">
                    <img src={defaultImg} className="card-img-top" alt="..."/>
                    <div className="superTextPricipal">Tendencias demográficas de la población salvadoreña en Estados Unidos.</div>
                </div>          
            </div>
        <button type="button" className="btn btn-light btnCardPrincipal">VER GALERÍA DE ACTIVIDADES</button>
        </React.Fragment>
    );
} 

export default News;
