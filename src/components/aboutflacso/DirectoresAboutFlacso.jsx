import React from 'react';

const DirectoresAboutFlacso = (props) =>{
    return(
        <React.Fragment>
            <div className="col-12 col-sm-6 containerAboutFlacso">
                <div className="card modalAboutFlacso">
                    <div className="card-body">
                        <p className="card-title cardTitleAboutFlacso">{props.name}</p>
                        <p className="card-subtitle mb-2 cardTextAbout">Director FLACSO {props.year}</p>
                        <p className="card-text cardTextAboutFlacso">{props.description}</p>
                        <button type="button" className="btn btn-ligth btnCardAboutFlacso" data-toggle="modal" data-target={props.identi}>Ver más</button>
                    </div>
                </div>
            </div>
            
            <div className="modal fade" id={props.id} aria-labelledby={props.id} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={props.id}>{props.name}</h5>
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
