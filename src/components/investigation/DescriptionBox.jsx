import React from 'react';

//Importando los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DescriptionBox = (props) =>{
    return(
        <React.Fragment>
            <p id={props.id} className="titleInvestigation">{props.title}</p>
            <div className="row">
                <div className="col-3 col-sm-2 col-xl-1 iconInvestigation">
                    <FontAwesomeIcon icon={props.icon} />
                </div>
                <div className="col-9 col-sm-10 col-xl-11">
                    {props.children}
                </div>
            </div> 
        </React.Fragment>
    );
}

export default DescriptionBox;