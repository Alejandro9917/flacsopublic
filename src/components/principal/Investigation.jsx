import React from 'react';
import {Link} from 'react-router-dom';

//Importando los estilos
import '../../css/invPrincipal.css';

//Importando los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faUsers, faGraduationCap, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const Investigation = () =>{
    return(
        <div className="col-12 col-sm-7">
            <Link>
                <div className="row linkTextInv">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faCogs} />
                    </div>
                    <div className="col-8">
                        <p>Desarrollo económico y social en El Salvador</p>
                    </div>
                </div>
            </Link>
            <Link>
                <div className="row linkTextInv">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <div className="col-8">
                        <p>Gobernabilidad, democracia y seguridad ciudadana</p>    
                    </div>
                </div>
            </Link>
            <Link>
                <div className="row linkTextInv">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faGraduationCap}/>
                    </div>
                    <div className="col-8">
                        <p>Educación y mercados de trabajo</p>
                    </div>
                </div>                
            </Link>
            <Link>
                <div className="row linkTextInv">
                    <div className="col-2">
                        <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                    <div className="col-8">
                        <p>Juventud y desarrollo humano</p>
                    </div>
                </div>
            </Link>
            <Link>
                <div className="row linkTextInv">
                    <div className="col-2">

                    </div>
                    <div className="col-8">
                        <p>Dinámicas territoriales</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Investigation;