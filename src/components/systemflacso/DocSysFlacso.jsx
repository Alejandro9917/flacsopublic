import React from 'react';

//Importando los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt} from '@fortawesome/free-solid-svg-icons';

const DocSysFlacso = (props) =>{
    return(
        <a className="btn btn-light col-10 offset-1 btnSysFlacso" href={props.doc} role="button" target="blank"><FontAwesomeIcon icon={faCloudDownloadAlt} /> {props.children}</a>
    );
}

export default DocSysFlacso;