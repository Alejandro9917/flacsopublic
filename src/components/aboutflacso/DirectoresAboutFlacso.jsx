import React from 'react';

const DirectoresAboutFlacso = (props) =>{
    return(
        <React.Fragment>
            <div className="card col-10 offset-1 modalAboutFlacso">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Director FLACSO {props.year}</h6>
                    <p className="card-text">{props.description}</p>
                    <button type="button" className="btn btn-ligth btnCardAbout" data-toggle="modal" data-target="#director1">Ver más</button>
                </div>
            </div>

            <div className="modal fade" id="director1" tabindex="-1" aria-labelledby="director1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="director1">{props.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img src={props.img} alt="director" className="img-thumbnail"/>
                        <p>Director FLACSO {props.year}</p>
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DirectoresAboutFlacso;