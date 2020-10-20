import React from 'react';

const NewVideos = () =>{
    return(
        <React.Fragment>
            <div className="row">
                <div className="card col-6 col-sm-4 col-lg-6 col-xl-4 cardMarginPrincipal bgGrayPrincipal">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="vid01"/>
                    </div>
                </div>
                <div className="card col-6 col-sm-4 col-lg-6 col-xl-4 cardbgGrayPrincipal bgGrayPrincipal">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="vid02"/>
                    </div>
                </div>
                <div className="card col-6 col-sm-4 col-lg-6 col-xl-4 cardMarginPrincicardMarginPrincipal">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="vid03"/>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-light btnCardPrincipal">VER GALERÍA DE AUDIOVISUALES</button>
        </React.Fragment>
    );
}

export default NewVideos;
