import React from 'react';

//Importando estilos 
import '../../css/aboutflacso.css'

//Importando el componente para mostrar el titulo de la pagina
import TitleBanner from './TitleBanner';
//Importando el componente para mostrar los textos
import TextAboutFlacso from './TextAboutFlacso';
//Importando misión y visión 
import MVAboutFlacso from './MVAboutFlacso';
//Importando modulo de directores de flacso
import Director from './Director';
//Importando el componente de consejo de asesores
import CouncilAboutFlacso from './CouncilAboutFlacso';

const AboutFlacso = () =>{
    return(
        <div className="container">
            <p className="titleAboutFlacso">FLACSO El Salvador</p>
            <TitleBanner/>
            <div className="row">
                <TextAboutFlacso/>
                <MVAboutFlacso/>
                <div className="col-12">
                    <p className="titleAboutFlacso">Directores FLACSO</p>
                </div>
                <Director/>
                <div className="col-12 containerAboutFlacso">
                    <hr/>
                    <p className="titleAboutFlacso">Consejo asesor</p>
                    <CouncilAboutFlacso/>
                </div>
            </div>   
        </div>
    );
}

export default AboutFlacso;
