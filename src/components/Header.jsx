import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

// Exemples d’importació d’imatges
import LOGO from '../assets/images/LOGO.jpg';
import facebookIcon from '../assets/images/facebook-icon.png';
import instagramIcon from '../assets/images/instagram-icon.png';
import twitterIcon from '../assets/images/twitter-icon.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* BARRETA SUPERIOR (Xarxes socials i botons d'usuari) */}
      <div className="top-bar">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={facebookIcon} alt="Facebook" className="icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Instagram" className="icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="Twitter" className="icon" />
          </a>
        </div>
        <div className="auth-buttons">
          <button className="login-button">Entra</button>
          <button className="soci-button">Fes-te soci</button>
        </div>
      </div>

      {/* CONTENIDOR PRINCIPAL: Logo, botó hamburger i menú */}
      <div className="header-top">
        <div className="logo-container">
          <img className="logo" src={LOGO} alt="Grup Esquelles Amer" />
          <h1>Grup Esquelles Amer</h1>
        </div>

        {/* Botó hamburger (només visible en pantalles petites segons el teu CSS) */}
        <button className="hamburger" onClick={toggleMenu}>
          {/* Mostra la "X" si el menú és obert, sinó la hamburguesa */}
          {menuOpen ? '✖' : '☰'}
        </button>

        {/* Menú de navegació, es mostra/oculta segons menuOpen */}
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Inici
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={() => setMenuOpen(false)}>
                Qui Som
              </Link>
            </li>
            <li>
              <Link to="/excursions" onClick={() => setMenuOpen(false)}>
                Excursions
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contacte
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
