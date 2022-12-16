import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
      <div className='sidebar'>
          <div className="header__logo-box">
              <h1>gs meter</h1>
              <img src="/insight-iitb-logo.png" alt="insight" className='logo'/>
          </div>

          <ul className='navigation-menu'>
              {/* <li>Introduction</li>
              <li component={Link} to="/culturals">Acads UG</li>
              <li className='active'>Acads PG</li>
              <li>Hostel Council</li>
              <li>Technical Council</li>
              
              <li>Cultural Council</li> */}
              <li><NavLink to="/" className='navigation-links' activeClassName="active">Introduction</NavLink></li>
              <li><NavLink to="/acadsug" className='navigation-links' activeClassName="active">Acads UG</NavLink></li>
              <li><NavLink to="/acadspg" className='navigation-links' activeClassName="active">Acads PG</NavLink></li>
              <li><NavLink to="/hostel" className='navigation-links' activeClassName="active">Hostel</NavLink></li>
              <li><NavLink to="/sports" className='navigation-links' activeClassName="active">Sports</NavLink></li>
              <li><NavLink to="/technical" className='navigation-links' activeClassName="active">Technical</NavLink></li>
              <li><NavLink to="/culturals" className='navigation-links' activeClassName="active">Culturals</NavLink></li>
          </ul>
      </div>
  )
}

export default Sidebar