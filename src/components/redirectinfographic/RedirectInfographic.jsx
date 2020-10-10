import React from 'react';

//Importando estilos 
import '../../css/redirectinfographic.css'

//Importando la infografía que se verá 
import Infographic from './Infographic';
//Importando los extras que acompañaran a la infografía
import ExtrasInfographic from './ExtrasInfographic';
//Importando las infografías recientes
import RecentInfographic from './RecentInfographic';

const RedirectInfographic = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-8">
                    <p className="titleInfographic">FLACSO El Salvador implementa los Talleres de agenciamiento juvenil “¡Con el cel te lo digo!”</p>
                    <p className="dateInfographic">09/10/2020 - 10:33</p>
                    <Infographic/>
                </div>
                <div className="col-12 col-sm-4">
                    <ExtrasInfographic/>
                </div>
                
            </div>
            <div className="row">
                <div className="col-12">
                    <p className="text-center titleInfographic">Infografías Relacionadas</p>
                </div>
                <RecentInfographic/>
                <div className="col-6">
                    <button type="button" className="btn btn-light btnInfographic">Ver galería completa</button>
                </div>
            </div>
        </div>
    );
}

export default RedirectInfographic;