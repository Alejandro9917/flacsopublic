import React from 'react';

//Importando los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons';


const ExtrasInfographic = () =>{
    const tags = [];
    for(var i=1;i<7;i++)
    {
        tags.push(<div className="col-4 tagInfographic"><span key={i}>#Tag-1</span></div>);
    }

    return(
        <React.Fragment>
            <div className="col-12 extrasInfographic">
                <p>Temas</p>
                <div className="dividerInfographic"/>
                <div className="row contentTagsInfographic">
                    {tags}
                </div>
            </div>
            <div className="col-12 extrasInfographic">
                <p>Opciones</p>
                <div className="dividerInfographic"/>
                <div className="contentTagsInfographic">
                    <p>Descargar infografía <FontAwesomeIcon icon={faCloudDownloadAlt}/></p>
                    <p>Compartir <FontAwesomeIcon icon={faShareAlt}/></p>
                </div>              
            </div>
        </React.Fragment>
    );
}

export default ExtrasInfographic;