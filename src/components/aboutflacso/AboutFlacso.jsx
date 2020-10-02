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
            </div>   
        </div>
    );
}

export default AboutFlacso;