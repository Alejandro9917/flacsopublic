import React from 'react';
import DocSysFlacso from './DocSysFlacso';

//Importando los documentos
import normCdE from '../../document/normativas/Codigo-de-Etica.pdf';
import normNci from '../../document/normativas/Normas-de-Control-Interno.pdf';
import normRag from '../../document/normativas/Reglamento-Asamblea-General.pdf';
import normRcd from '../../document/normativas/Reglamento-Comite-Directivo.pdf';
import normRcs from '../..//document/normativas/Reglamento-Consejo-Superior.pdf';
import normRca from '../../document/normativas/Reglamento-Consejos-Academicos.pdf';
import normRcc from '../../document/normativas/Reglamento-de-Calificacion-de-Candidaturas-Direccion.pdf';
import normRpf from '../../document/normativas/Reglamento-de-Personal-de-la-FLACSO.pdf';
import normRdl from '../../document/normativas/Reglamento-Distincion-Latinoamericana.pdf';
import normRdh from '../../document/normativas/Reglamento-Doctorado-Honoris-Causa.pdf';
 
const DocSys = () =>{
    return(
        <React.Fragment>
            <p className="titleSysFlacso">Normativas FLACSO</p>
            <div className="row">
                <DocSysFlacso doc={normCdE}>Código de Ética</DocSysFlacso>
                <DocSysFlacso doc={normNci}>Normas de Control Interno</DocSysFlacso>
                <DocSysFlacso doc={normRag}>Reglamento Asamblea General</DocSysFlacso>
                <DocSysFlacso doc={normRcd}>Reglamento Comité Directivo</DocSysFlacso>
                <DocSysFlacso doc={normRcs}>Reglamento Consejo Superior</DocSysFlacso>
                <DocSysFlacso doc={normRca}>Reglamento Consejo Académico</DocSysFlacso>
                <DocSysFlacso doc={normRcc}>Reglamento de Calificación de Candidaturas Dirección</DocSysFlacso>
                <DocSysFlacso doc={normRpf}>Reglamento de Personal de la FLACSO</DocSysFlacso>
                <DocSysFlacso doc={normRdl}>Reglamento Distinción Latinoaméricana</DocSysFlacso>
                <DocSysFlacso doc={normRdh}>Reglamento Doctorado Honoris Causa</DocSysFlacso>
            </div>
        </React.Fragment>
    );
}

export default DocSys;