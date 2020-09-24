import React from 'react';

const Carousel = () =>{
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner container">
                <div className="carousel-item active carouselItem">
                    <h3>Actividades recientes</h3>
                    <div className="row">
                        <div className="col-12">
                            <p>Texto de ejemplo</p>
                        </div>
                        <div className="col-3 offset-7 col-sm-3 offset-sm-8">
                            <button type="button" className="btn btn-light textButtonCarousel">LEER MÁS</button>
                        </div>
                    </div>
                </div>

                <div className="carousel-item carouselItem">
                    <h3>Actividades recientes</h3>
                    <div className="row">
                        <div className="col-12">
                            <p>Texto de ejemplo</p>
                        </div>
                        <div className="col-3 offset-7 col-sm-3 offset-sm-8">
                            <button type="button" className="btn btn-light textButtonCarousel">LEER MÁS</button>
                        </div>
                    </div>
                </div>

                <div className="carousel-item carouselItem">
                    <h3>Actividades recientes</h3>
                    <div className="row">
                        <div className="col-12">
                            <p>Texto de ejemplo</p>
                        </div>
                        <div className="col-3 offset-7 col-sm-3 offset-sm-8">
                            <button type="button" className="btn btn-light textButtonCarousel">LEER MÁS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;