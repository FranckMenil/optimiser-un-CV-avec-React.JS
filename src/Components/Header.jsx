import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fw-bold navbar-custom">
      <div className="container-fluid ms-5 me-5">
        {/* Logo texte */}
        <NavLink className="navbar-brand" to="/profile">JOHN DOE</NavLink>
        
        {/* Menu Hamburger*/}
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
              <li className="nav-item"><NavLink className="nav-link" to="/">Accueil</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/services">Services</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/realisations">Réalisations</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/blog">Blog</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/contact">Me Contacter</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
