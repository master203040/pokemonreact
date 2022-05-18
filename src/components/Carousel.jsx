import React from 'react'
import pokemon1 from '../components/img/pokemon1.jpg'
import pokemon2 from '../components/img/pokemon2.jpg'
import pokemon3 from '../components/img/pokemon3.jpg'

const Carousel = () => {
  return (
    <div className='container'>
        <div id="carouselExampleControls" className="carousel slide mt-3" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={pokemon1} className =" d-block w-100 banner" alt="banner"/>
                </div>
                <div className="carousel-item">
                <img src={pokemon2}className="d-block w-100 banner" alt="banner"/>
                </div>
                <div className="carousel-item">
                <img src={pokemon3} className="d-block w-100 banner" alt="banner"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <hr/>
    </div>
  )
}

export default Carousel