import React from 'react';

//Importando estilos
import '../../css/systemflacso.css'

//Importando imagenes
import  imgLogoAni from '../../img/logo-aniversario.png';
import imgLogoSec from '../../img/logo-secretaria-general.png';
import imgLogo from '../../img/logo.png';

//Importando componente para las imagenes
import ImgSysFlacso from './ImgSysFlacso';

const SystemFlacso = () =>{
    return(
        <div className="container">
            <p className="titleSysFlacso">Sistema Flacso</p>
            <div className="Row">
                <div className="col-12">
                    <p className="textSysFlacso">
                        La Facultad Latinoamericana de Ciencias Sociales es un organismo internacional que surge en 1956 en la Conferencia 
                        General de la UNESCO. Realiza diversas actividades académicas: docencia, investigación, difusión, extensión académica 
                        y cooperación técnica.
                    </p>
                </div>
                <img src={imgLogo} className="col-3" alt="Logo FLACSO"/>
                <img src={imgLogoAni} className="col-3 offset-1" alt="Logo Aniversario"/>
                <img src={imgLogoSec} className="col-3 offset-1" alt="Logo Secretaria General"/>
                <div className="col-12">
                    <p className="textSysFlacso">
                        Su intención original fue apoyar a los países de América Latina en la creación de una entidad de ciencias sociales que 
                        genere un espacio de reflexión, hasta entonces inexistente, desde la cual se impulse el desarrollo de nuestras sociedades. 
                        En 1957 se celebró el Acuerdo de Río de Janeiro para la creación de la FLACSO, convocado en un principio por los gobiernos 
                        de Chile y Brasil, al que posteriormente se han adherido un total de 17 países de América Latina y el Caribe.
                    </p>
                    <p className="textSysFlacso">
                        El funcionamiento de la FLACSO está regido tanto por su legislación interna, cuanto por las directrices que emiten sus órganos 
                        de gobierno. La coordinación del funcionamiento de la Facultad, así como su representación legal, está bajo la responsabilidad 
                        de la Secretaría General, la cual tiene sede en Costa Rica desde 1979. Las sedes son autónomas académica y administrativamente.
                    </p>
                    <hr/>
                </div>
            </div>

            <p className="titleSysFlacso">Sedes oficiales de FLACSO</p>
            <div className="row">
                <div className="col-12">
                    <hr/>
                </div>
            </div>

            <p className="titleSysFlacso">Normativas FLACSO</p>
        </div>
    );
}

export default SystemFlacso;