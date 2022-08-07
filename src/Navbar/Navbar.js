import React from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <HashLink to="/#home" className="nav__link">
              Home
            </HashLink>
          </li>
          <li className="nav__item">
            <HashLink to="/#services" className="nav__link">
              My Services
            </HashLink>
          </li>
          <li className="nav__item">
            <HashLink to="/#about" className="nav__link">
              About Me
            </HashLink>
          </li>
          <li className="nav__item">
            <HashLink to="/#work" className="nav__link">
              My Work
            </HashLink>
          </li>
          <li className="nav__item">
            <HashLink to="/#contact" className="nav__link">
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
