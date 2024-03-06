import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoNav from "../../assets/img/icons/LogoOcean16x16.svg";
import "../../assets/style/navbar.css";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openNav = () => {
    setIsMobileMenuOpen(true);
  };

  const closeNav = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeNav();
  };

  return (
    <>
      <nav className="navbar">
        <div className="logoNav">
          <img src={logoNav} alt="logoNav" />
        </div>
        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/map" onClick={handleLinkClick}>
              Mapa
            </Link>
          </li>
          <li>
            <Link to="/sobre-nosotros" onClick={handleLinkClick}>
              Sobre Nosotros
            </Link>
          </li>
        </ul>
        <div></div>
        <a onClick={openNav} className="menuNav" href="#">
          <button>Menu</button>
        </a>
        <div
          className={`overlay ${isMobileMenuOpen ? "open" : ""}`}
          id="mobile-menu"
        >
          <a onClick={closeNav} className="closeNav" href="#">
            &times;
          </a>
          <div className="overlay-content">
            <Link to="/" onClick={handleLinkClick}>
              Inicio
            </Link>
            <Link to="/map" onClick={handleLinkClick}>
              Mapa
            </Link>
            <Link to="/sobre-nosotros" onClick={handleLinkClick}>
              Sobre Nosotros
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
