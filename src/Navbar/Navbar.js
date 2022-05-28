import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="top">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/home" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/services" className="nav__link">
              My Services
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">
              About Me
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/work" className="nav__link">
              My Work
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
