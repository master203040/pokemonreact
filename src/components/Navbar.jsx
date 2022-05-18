import React from 'react'
import logo from '../components/img/logo.jpg'

const Navbar = () => {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <img src={logo}alt="logp" className='d-block'/>
          <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span  className="navbar-toggler-icon"></span>
          </button>
          <div  className="collapse navbar-collapse" id="navbarNav">
            <ul  className="navbar-nav">
              <li  className="nav-item">
                <a  className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li  className="nav-item">
                <a  className="nav-link" href="#">ApiGoku</a>
              </li>
              <li  className="nav-item">
                <a  className="nav-link" href="#">ApiMarvel</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar