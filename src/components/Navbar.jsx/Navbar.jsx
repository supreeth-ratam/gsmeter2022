import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><h1 className='nav-heading'>Gs meter</h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeclassname="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/acadsug" className="nav-link" activeclassname="active">Acads UG</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/acadspg" className="nav-link" activeclassname="active">Acads PG</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/hostel" className="nav-link" activeclassname="active">Hostel</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/sports" className="nav-link" activeclassname="active">Sports</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/technical" className="nav-link" activeclassname="active">Technical</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/culturals" className="nav-link" activeclassname="active">Culturals</NavLink>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar