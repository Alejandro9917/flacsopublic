import React from 'react';

const ImgSysFlacso = (props) =>{
    return(
        <a href={props.link} target="blank">
            <img src={props.img} className="img-fluid col-3 col-sm-2 col-xl-2 flagSysFlacso" alt={props.alt}></img>
        </a>
    );
}

export default ImgSysFlacso;