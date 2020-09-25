import React from 'react';

//Importando estilos 
import '../../css/investigation.css'

//Importando los iconos
import { faCogs, faUsers, faGraduationCap, faLightbulb } from '@fortawesome/free-solid-svg-icons';

//Importando componente de caja de descripcion
import DescriptionBox from './DescriptionBox';

const Investigation = () =>{
    return(
        <React.Fragment>
            <div className="container" data-spy="scroll" data-offset="0">
                <h2>Investigacion</h2>
                <p>
                    El programa de investigación de FLACSO El Salvador se estructura a partir de cinco áreas que desde la visión 
                    institucional constituyen ejes fundamentales para la agenda de desarrollo político y social del país y en las 
                    cuales vuelca sus esfuerzos.
                </p>
                <hr/>
                <DescriptionBox id="des" title="Desarrollo Económico y Social de El Salvador" icon={faCogs}>
                    <p className="textInvestigation">
                        El ámbito de interés de esta área de FLACSO El Salvador se concentra en el estudio de las transformaciones 
                        que se producen en los tejidos socio productivos ya sea como consecuencia de procesos o estrategias de desarrollo, 
                        o por procesos propios de la globalización.
                    </p>
                    <p className="textInvestigation">
                        De manera especial, estudiamos los temas de pobreza y exclusión, así como las políticas de atención o combate de 
                        tales fenómenos. Componentes de esta área son también los temas de desarrollo territorial, descentralización del Estado, 
                        desarrollo económico local y la migración internacional.
                    </p>
                </DescriptionBox>
                <DescriptionBox id="gob" title="Gobernabilidad, democracia y seguridad ciudadana" icon={faUsers}>
                    <p className="textInvestigation">
                        Todos aquellos fenómenos y procesos que afectan positiva o negativamente la construcción democrática son objeto de interés 
                        de esta área de investigación. Las investigaciones de FLACSO El Salvador incorporan el análisis del sistema político, los 
                        procesos de reforma estatal, los movimientos sociales, la participación y la seguridad ciudadana.
                    </p>
                    <p className="textInvestigation">
                        Esta área se denominó en sus inicios como: «Gobernabilidad, régimen político y participación ciudadana», y estaba asociada 
                        a los problemas propios de la transición política que siguió a los Acuerdos de Paz (1992).
                    </p>
                </DescriptionBox>
                <DescriptionBox id="edu" title="Educación y mercados de trabajo" icon={faGraduationCap}>
                    <p className="textInvestigation">
                        El enfoque de esta área de investigación está dirigido a los problemas del mercado de trabajo, su composición, evolución y 
                        requerimientos, así como a los temas asociados a la educación y capacitación de los recursos humanos del país. 
                    </p>
                    <p className="textInvestigation">
                        FLACSO El Salvador le presta particular atención a la focalización de aquellos factores que vinculan educación y trabajo y 
                        que repercuten sobre el capital humano y social. 
                    </p>
                </DescriptionBox>
                <DescriptionBox id="juv" title="Juventud y desarrollo humano" icon={faLightbulb}>
                    <p className="textInvestigation">
                        El enfoque de esta área de investigación consiste en conocer e identificar dinámicas, temas y problemas propios de las 
                        identidades juveniles, más allá del fenómeno de la violencia, y que articulan a los jóvenes con los temas del desarrollo 
                        y la política social.
                    </p>
                    <p className="textInvestigation">
                        Esta área de investigación fue establecida como parte de la agenda institucional debido a que El Salvador es un país 
                        fundamentalmente joven en su composición poblacional con preocupantes manifestaciones de violencia social.
                    </p>
                </DescriptionBox>
                <DescriptionBox id="dic" title="Dinámicas territoriales" icon={faCogs}>
                    <p className="textInvestigation">
                        El enfoque de esta área de investigación de FLACSO El Salvador aborda los problemas de desigualdades que se expresan entre los 
                        territorios, un fenómeno que viene reproduciéndose en el país desde hace dos siglos. 
                    </p>
                    <p className="textInvestigation">
                        En este sentido, realiza estudios orientadas a influir en procesos que hagan posible que las políticas públicas tomen en cuenta 
                        las condiciones biofísicas, socio ambientales, económicas y espaciales propias de los territorios, en temas asociados con al 
                        acceso a servicios públicos, a la educación y la capacitación de los recursos humanos, y las migraciones.
                    </p>
                </DescriptionBox>
            </div>
        </React.Fragment>
    );
}

export default Investigation;