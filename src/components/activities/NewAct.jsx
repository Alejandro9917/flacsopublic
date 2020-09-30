import React from 'react';

//Importando imagenes
import defaultImg from '../../img/default.jpg';

const NewAct = () =>{
    return(
        <React.Fragment>
            <div>
                <p className="titleNewAct">Actividades</p>
                <div className="divider col-4"/>
            </div>
            <div className="row">
                <div className="card col-6">
                    <img src={defaultImg} className="card-img-top" alt="..."/>
                    <div className="superNewAct">Titulo de ejemplo</div>
                    <div className="card-body">
                        <p className="card-title cardTitleNewAct">28/09/2020 | 16:41</p>
                        <p className="card-text textNewAct">Un total de 27 jóvenes en confinamiento domiciliar por la pandemia del...</p>
                        <button className="btn btn-primary btnNewAct">LEER MÁS</button>
                    </div>
                </div>
                <div className="card col-6">
                    <img src={defaultImg} className="card-img-top" alt="..."/>
                    <div className="superNewAct">Titulo de ejemplo</div>
                    <div className="card-body">
                        <p className="card-title cardTitleNewAct">28/09/2020 | 16:41</p>
                        <p className="card-text textNewAct">Un total de 27 jóvenes en confinamiento domiciliar por la pandemia del...</p>
                        <button className="btn btn-primary btnNewAct">LEER MÁS</button>
                    </div>
                </div>
                <div className="card col-6">
                    <img src={defaultImg} className="card-img-top" alt="..."/>
                    <div className="superNewAct">Titulo de ejemplo</div>
                    <div className="card-body">
                        <p className="card-title cardTitleNewAct">28/09/2020 | 16:41</p>
                        <p className="card-text textNewAct">Un total de 27 jóvenes en confinamiento domiciliar por la pandemia del...</p>
                        <button className="btn btn-primary btnNewAct">LEER MÁS</button>
                    </div>
                </div>
                <div className="card col-6">
                    <img src={defaultImg} className="card-img-top" alt="..."/>
                    <div className="superNewAct">Titulo de ejemplo</div>
                    <div className="card-body">
                        <p className="card-title cardTitleNewAct">28/09/2020 | 16:41</p>
                        <p className="card-text textNewAct">Un total de 27 jóvenes en confinamiento domiciliar por la pandemia del...</p>
                        <button className="btn btn-primary btnNewAct">LEER MÁS</button>
                    </div>
                </div>
                <div className="card col-6">
                    <img src={defaultImg} className="card-img-top" alt="..."/>
                    <div className="superNewAct">Titulo de ejemplo</div>
                    <div className="card-body">
                        <p className="card-title cardTitleNewAct">28/09/2020 | 16:41</p>
                        <p className="card-text textNewAct ">Un total de 27 jóvenes en confinamiento domiciliar por la pandemia del...</p>
                        <button className="btn btn-primary btnNewAct">LEER MÁS</button>
                    </div>
                </div>
                <div className="card col-6">
                    <img src={defaultImg} className="card-img-top" alt="..."/>
                    <div className="superNewAct">Titulo de ejemplo</div>
                    <div className="card-body">
                        <p className="card-title cardTitleNewAct">28/09/2020 | 16:41</p>
                        <p className="card-text textNewAct">Un total de 27 jóvenes en confinamiento domiciliar por la pandemia del...</p>
                        <button className="btn btn-primary btnNewAct">LEER MÁS</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NewAct;