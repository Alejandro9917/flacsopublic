import React from 'react';

//Importando imagenes
import defaultImg from '../../img/default.jpg';

const News = () =>{
    return(
        <div className="row">
            <div className="card col-4">
                <img src={defaultImg} className="card-img-top" alt="..."/>
            </div>
            <div className="card col-4">
                <img src={defaultImg} className="card-img-top" alt="..."/>
            </div>
            <div className="card col-4">
                <img src={defaultImg} className="card-img-top" alt="..."/>
            </div>
        </div>
    );
} 

export default News;