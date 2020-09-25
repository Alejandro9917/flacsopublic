import React from 'react';

//Importando componente de caja de descripcion
import DescriptionBox from './DescriptionBox';

const Investigation = () =>{
    return(
        <React.Fragment>
            <div className="container">
                <h2>Investigacion</h2>
                <p>
                    El programa de investigación de FLACSO El Salvador se estructura a partir de cinco áreas que desde la visión 
                    institucional constituyen ejes fundamentales para la agenda de desarrollo político y social del país y en las 
                    cuales vuelca sus esfuerzos.
                </p>
                <hr/>
                <DescriptionBox title="Desarrollo Económico y Social de El Salvador"></DescriptionBox>
                <DescriptionBox title="Gobernabilidad, democracia y seguridad ciudadana"></DescriptionBox>
                <DescriptionBox title="Educación y mercados de trabajo"></DescriptionBox>
                <DescriptionBox title="Juventud y desarrollo humano"></DescriptionBox>
                <DescriptionBox title="Dinámicas territoriales"></DescriptionBox>
            </div>
        </React.Fragment>
    );
}

export default Investigation;