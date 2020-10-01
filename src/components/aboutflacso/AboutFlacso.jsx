import React from 'react';

//Importando estilos 
import '../../css/aboutflacso.css'

//Importando imagenes
import imgHirezi from '../../img/directores/hirezi.jpg';

//Importando el componente para mostrar el titulo de la pagina
import TitleBanner from './TitleBanner';
//Importando el componente para mostrar los textos
import TextAboutFlacso from './TextAboutFlacso';
//Importando misión y visión 
import MVAboutFlacso from './MVAboutFlacso';
//Importando modulo de directores de flacso
import DirectoresAboutFlacso from './DirectoresAboutFlacso';

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
                <DirectoresAboutFlacso name="Dr. Héctor Dada Hirezi" year="1992-2002" img={imgHirezi}>
                    <p>
                        Doctor, Maestría y Licenciado en Economía de la Universidad Católica de Lovaina, Bélgica, 
                        e Ingeniero Civil de la Universidad de El Salvador.
                    </p>
                    <p>
                        Fundador y Director de la Facultad Latinoamericana de Ciencias Sociales (FLACSO) Programa 
                        El Salvador, desde 1992 hasta julio de 2002.
                    </p>
                    <p>
                        Ha sido Ministro de Economía, y Ministro de Relaciones Exteriores, y otros cargos públicos, 
                        Oficial de Asuntos Económicos de CEPAL, subsede de México, Consultor del Instituto para la 
                        Integración de América Latina (INTAL, México).
                    </p>
                    <p>
                        Investigador del Centro de Estudios Económicos y Sociales del Tercer Mundo (CEESTEM, México). 
                        Jefe del Departamento de Economía de la Universidad Centroamericana José Simeón Cañas, UCA El Salvador.
                    </p>
                </DirectoresAboutFlacso>
            </div>   
        </div>
    );
}

export default AboutFlacso;