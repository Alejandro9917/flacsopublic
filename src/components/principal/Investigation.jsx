import React from 'react';
import {Link} from 'react-router-dom';

//Importando los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faUsers, faGraduationCap, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const Investigation = () =>{
    return(
        <React.Fragment>
            <Link>
                <div className="row linkTextInv">
                    <div className="col-2 col-lg-1">
                        <FontAwesomeIcon icon={faCogs} />
                    </div>
                    <div className="col-8 col-lg-11">
                        <p>Desarrollo económico y social en El Salvador</p>
                    </div>
                </div>
            </Link>
            <Link>
                <div className="row linkTextInv">
                    <div className="col-2 col-lg-1">
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <div className="col-8 col-lg-11">
                        <p>Gobernabilidad, democracia y seguridad ciudadana</p>    
                    </div>
                </div>
            </Link>
            <Link>
                <div className="row linkTextInv">
                    <div className="col-2 col-lg-1">
                        <FontAwesomeIcon icon={faGraduationCap}/>
                    </div>
                    <div className="col-8 col-lg-11">
                        <p>Educación y mercados de trabajo</p>
                    </div>
                </div>                
            </Link>
            <Link>
                <div className="row linkTextInv">
                    <div className="col-2 col-lg-1">
                        <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                    <div className="col-8 col-lg-11">
                        <p>Juventud y desarrollo humano</p>
                    </div>
                </div>
            </Link>
            <Link>
                <div className="row linkTextInv">
                    <div className="col-2 col-lg-1">

                    </div>
                    <div className="col-8 col-lg-11">
                        <p>Dinámicas territoriales</p>
                    </div>
                </div>
            </Link>
        </React.Fragment>
    );
}

export default Investigation;