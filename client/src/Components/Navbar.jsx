import React from 'react'
import "../assets/css/navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
<Link to="/" className='navbar-brand'>
    CONTACT RH
</Link>
        </div>
        <div className="navbar-right">
            <Link to="/about" className='navbar-link'>A Propos</Link>
            <Link to="/login" className='navbar-link'>Inscription</Link>
            <Link to="/register" className='navbar-link'>Connexion</Link>
        </div>
    </div>
  )
}

export default Navbar