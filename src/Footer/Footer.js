import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <ul className="social-list">
        {/*
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://linkedin.com/in/jad-nasser-349436247"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        */}
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/jad-nasser"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
      <a className="footer__link" href="mailto:jadnasser.official@gmail.com">
        jadnasser.official@gmail.com
      </a>
      <div className="address-and-phone">
        <div className="phone">+961 81 747098</div>
        <div className="address">Beirut, Lebanon</div>
      </div>
    </footer>
  );
};

export default Footer;
