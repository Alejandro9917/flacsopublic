import React from 'react';
import DirectoresAboutFlacso from './DirectoresAboutFlacso';

//Importando imagenes
import imgHirezi from '../../img/directores/hirezi.jpg';
import imgBriones from '../../img/directores/briones.jpg';
import imgRamos from '../../img/directores/ramos.jpg';
import imgRoberto from '../../img/directores/roberto.png'

const Director = () =>{
    return(
        <React.Fragment>
            <DirectoresAboutFlacso name="Dr. Héctor Dada Hirezi" year="1992-2002" img={imgHirezi} id="director1" identi="#director1">
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
            <DirectoresAboutFlacso name="Mgr. Carlos Guillermo Ramos" year="2009-2018" img={imgRamos} id="director2" identi="#director2">
                <p>
                    Maestría en Sociología por la Universidad de Costa Rica y Licenciado en Filosofía por la Universidad 
                    Centroamericana “José Simeón Cañas” El Salvador.
                </p>
                <p>
                    Presidente de la Comisión de Acreditación de la Calidad de la Educación Superior en El Salvador, 
                    (CdA), desde 2014 a la fecha, Coordinador Académico e investigador de FLACSO El Salvador, Director 
                    Ejecutivo del Consejo Económico y Social (CES), y Director Ejecutivo del Centro de Información, 
                    Documentación y Apoyo a la Investigación (CIDAI).
                </p>
                <p>
                    Ha realizado investigaciones y coordinado equipos de investigación a nivel nacional y centroamericano 
                    en temas de juventud, seguridad ciudadana, pobreza y exclusión social, desarrollo local, educación, 
                    entre otros.
                </p>
            </DirectoresAboutFlacso>
            <DirectoresAboutFlacso name="Dr. Carlos Roberto Briones " year="2002-2009" img={imgBriones} id="director3" identi="#director3">
                <p>
                    Doctor en Economía por la Université Paris VIII, Saint Denis, Francia; y Máster en Sociología, con 
                    un Diplome d’Etudes Approfondies, opción Desarrollo Económico, por la Université dAix-Provence II, 
                    Marseille, Francia y Licenciado en Economía por la Universidad Centroamericana José Simeón Cañas (UCA), 
                    de El Salvador.
                </p>
                <p>
                    Director de la Facultad Latinoamericana de Ciencias Sociales (FLACSO) Programa El Salvador, desde 
                    agosto de 2002 a octubre de 2009. Fue Asesor del Despacho y Coordinador del Sistema Nacional de Evaluación 
                    Educativa del Ministerio de Educación de El Salvador; Director del Instituto de Investigaciones Económicas 
                    y Sociales de la UCA, y Jefe del Departamento de Cooperación Técnica de la Dirección Ejecutiva de Cooperación 
                    Internacional del Ministerio de Planificación y Coordinación del Desarrollo Económico y Social (MIPLAN).
                </p>
                <p>
                    Realizó investigaciones y coordinó equipos de investigación a nivel nacional e internacional en temas de 
                    Educación, Pobreza, Economía, Microempresas y Mercados de Trabajo. Ha publicado múltiples artículos y libros 
                    derivados de sus investigaciones en las áreas referidas, en diferentes países latinoamericanos.
                </p>
                <p>
                    Nació el 6 de julio de 1955 y falleció el 23 de octubre de 2009.
                </p>
            </DirectoresAboutFlacso>
            <DirectoresAboutFlacso name="Dr. Roberto Rodríguez Rojas" year="2018-presente" img={imgRoberto} id="director4" identi="#director4">
                <p>
                    Es Doctor en Ciencias Sociales con especialidad en Políticas de Desarrollo por la Universidad de Paris 
                    I Pantheón Sorbonne, Francia, desde 1998. Posee también una Maestría en Socioeconómia del Tercer Mundo 
                    por la misma universidad y estudios superiores en Antropología en la Universidad de Tours en Francia y 
                    en Derecho y Política Ambiental en la Universidad Paulo Freire de Nicaragua.
                </p>
                <p>
                    Entre otros cargos públicos ha sido Director de Cooperación Internacional de la Secretaria Técnica y 
                    Planificación de la Presidencia desde Marzo 2011, ex Presidente del Fondo Ambiental de El Salvador 
                    hasta 2014, ex Secretario Ejecutivo a. i. de la Comisión Centroamericana de Ambiente y Desarrollo, 
                    órgano Ambiental del Sistema de integración Centroamericana 2008-2010, Ex Director Regional del Programa 
                    de Legislación y Política Ambiental SICA-CCAD 2006-2010, entre otras responsabilidades.
                </p>
                <p>
                    Ha sido representante por la región centroamericana en diversos foros internacionales sobre temas de 
                    ambiente y desarrollo y ponente y profesor en los Cursos Iberoamericanos de Derecho y Política Ambiental 
                    organizados por PNUMA desde 2004-2009 en México, Argentina, El Salvador, Honduras. Fungió también como 
                    Profesor de la materia gestión ambiental y riesgo climático en la Maestría Regional sobre Integración 
                    Regional y Desarrollo. UCA de Nicaragua, El Salvador y Guatemala 2014-2015 y ha desempeñados múltiples 
                    cargos vinculados a temas de cooperación, gestión ambiental y planificación del desarrollo y como asesor 
                    y consultor en el marco de varios programas e instituciones de la sociedad civil en Centroamérica.
                </p>
            </DirectoresAboutFlacso>
        </React.Fragment>
    );
}

export default Director;