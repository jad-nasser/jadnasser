import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://www.google.com">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://www.google.com">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
      <a className="footer__link" href="mailto:jadnasser.official@gmail.com">
        jadnasser.official@gmail.com
      </a>
      <div className="address-and-phone">
        <p className="address">Hamra Street, Beirut, Lebanon</p>
        <p className="phone">+961 81 747098</p>
      </div>
    </footer>
  );
};

export default Footer;
