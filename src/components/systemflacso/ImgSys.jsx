import React from 'react';
import ImgSysFlacso from './ImgSysFlacso';

//Importando las banderas
import logoArg from '../../img/flags/argentina-flag-xs.png';
import logoBra from '../../img/flags/brazil-flag-xs.png';
import logoChi from '../../img/flags/chile-flag-xs.png';
import logoCosRi from '../../img/flags/costa-rica-flag-xs.png';
import logoCub from '../../img/flags/cuba-flag-xs.png';
import logoDom from '../../img/flags/dominican-republic-flag-xs.png';
import logoEcu from '../../img/flags/ecuador-flag-xs.png';
import logoElSa from '../../img/flags/el-salvador-flag-xs.png';
import logoGua from '../../img/flags/guatemala-flag-xs.png';
import logoHon from '../../img/flags/honduras-flag-xs.png';
import logoMex from '../../img/flags/mexico-flag-xs.png';
import logoPan from '../../img/flags/panama-flag-xs.png';
import logoPar from '../../img/flags/paraguay-flag-xs.png';
import logoUru from '../../img/flags/uruguay-flag-xs.png';

const ImgSys = () =>{
    return(
        <React.Fragment>
            <p className="titleSysFlacso">Sedes oficiales de FLACSO</p>
            <div className="row">
                <div className="col-12 col-xl-10">
                    <ImgSysFlacso img={logoArg} alt="Logo Argentina" link="http://flacso.org.ar/"/>
                    <ImgSysFlacso img={logoBra} alt="Logo Brazil" link="http://flacso.org.br/"/>
                    <ImgSysFlacso img={logoChi} alt="Logo Chile" link="http://www.flacsochile.org/"/>
                    <ImgSysFlacso img={logoCosRi} alt="Logo Costa Rica" link="http://www.flacso.or.cr/"/>
                    <ImgSysFlacso img={logoCub} alt="Logo Cuba" link="https://www.facebook.com/flacso.cuba/?nr"/>
                    <ImgSysFlacso img={logoDom} alt="Logo Domincana" link="http://www.flacso.org.do/"/>
                    <ImgSysFlacso img={logoEcu} alt="Logo Ecuador" link="https://www.flacso.edu.ec/portal/"/>
                    <ImgSysFlacso img={logoElSa} alt="Logo El Salvador" link="http://www.flacso.org.sv"/>
                    <ImgSysFlacso img={logoGua} alt="Logo Guatemala" link=" http://www.flacso.edu.gt/"/>
                    <ImgSysFlacso img={logoHon} alt="Logo Honduras" link="https://flacso.unah.edu.hn/"/>
                    <ImgSysFlacso img={logoMex} alt="Logo Mexico" link="http://www.flacso.edu.mx/"/>
                    <ImgSysFlacso img={logoPan} alt="Logo Panama" link="https://www.programaflacsopanama.org/"/>
                    <ImgSysFlacso img={logoPar} alt="Logo Paraguay" link="http://flacso.edu.py/"/>
                    <ImgSysFlacso img={logoUru} alt="Logo Uruguay" link="http://web.flacso.edu.uy/"/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ImgSys;