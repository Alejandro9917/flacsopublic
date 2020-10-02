import React from 'react';

const Audiovisual = () =>{
    return(
        <React.Fragment>
            <div>
                <p className="titleNewAct">Audiovisuales</p>
                <div className="divider col-4 col-lg-8"/>
            </div>
            <div className="row">
                <div className="card col-6 col-sm-3 col-lg-12 cardMargin">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="vid03" />
                    </div>
                </div>
                <div className="card col-6 col-sm-3 col-lg-12 cardMargin">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="vid03" />
                    </div>
                </div>
                <div className="card col-6 col-sm-3 col-lg-12 cardMargin">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="vid03"/>
                    </div>
                </div>
                <div className="card col-6 col-sm-3 col-lg-12 cardMargin">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="vid03"/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Audiovisual;