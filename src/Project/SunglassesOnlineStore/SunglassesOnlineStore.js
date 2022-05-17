import "../Project.css";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import images from "./images/images";

const SunglassesOnlineStore = () => {
  const topPage = useRef(null);
  useEffect(() => {
    topPage.current.scrollIntoView();
  }, []);

  //navigation bar
  const navigation = (
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

  //footer
  const footer = (
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

  //start part that contains the project title and the starting paragraphs and image
  const start = (
    <section className="start">
      <h1 className="section__title section__title--start">
        Sunglasses Online Store
      </h1>
      <p className="start__paragraph">
        This is my first personal project website, and it takes the most time
        among the other personal projects to be done because I've learned the
        foundations of the full-stack web development while doing this project.
      </p>
      <p className="start__paragraph">
        This project provides online sunglasses shopping. The seller can add and
        edit sunglasses, and the users can order sunglasses, and the seller can
        manage orders. Click{" "}
        <a href="https://github.com/jad-nasser/sunglasses-online-store.git">
          here
        </a>{" "}
        to view the source code.
      </p>
      <img
        className="start__img"
        src={images.homePage}
        alt="Sunglasses online store home page"
      ></img>
    </section>
  );

  //technologies used section
  const technologiesUsed = (
    <section className="technologies-used blue-gradient-background">
      <h2 className="section__title section__title--technologies-used">
        Technologies used
      </h2>
      <p className="technologies-used__paragraph">
        This project uses <strong>MVC</strong> architecture and{" "}
        <strong>REST API</strong> strategy, and it is built using{" "}
        <strong>MERN</strong> stack web development (<strong>M</strong>ongoDB-
        <strong>E</strong>xpressJS-<strong>R</strong>eactJS-<strong>N</strong>
        odeJS).
      </p>
      <div className="server-client-container">
        <div className="server-client">
          <h3 className="server-client__text">Server Side Dependencies</h3>
          <ul className="server-client__list">
            <li>Node js</li>
            <li>Express js</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>body-parser</li>
            <li>cookie-parser</li>
            <li>cors</li>
            <li>dotenv</li>
            <li>Json Web Token</li>
            <li>Multer</li>
            <li>Stripe</li>
            <li>Mocha</li>
            <li>chai</li>
            <li>sinon</li>
            <li>proxyquire</li>
            <li>supertest</li>
          </ul>
        </div>
        <div className="server-client">
          <h3 className="server-client__text">Client Side Dependencies</h3>
          <ul className="server-client__list">
            <li>ReactJS</li>
            <li>Bootstrap</li>
            <li>Axios</li>
            <li>Stripe</li>
            <li>form-data</li>
            <li>React Router</li>
            <li>dotenv</li>
            <li>Jest</li>
            <li>React Testing Library</li>
            <li>Mock Service Worker</li>
            <li>cypress</li>
            <li>cypress-file-upload</li>
          </ul>
        </div>
      </div>
    </section>
  );

  //features section
  const features = (
    <section className="features">
      <h2 className="section__title section__title--features">Features</h2>
      <div className="features-container">
        <div className="feature">
          <h3 className="feature__text">
            A website that works with various screen sizes
          </h3>
          <img
            className="feature__img"
            src={images.responsive1}
            alt="sign in page for big screen size"
          ></img>
          <img
            className="feature__img"
            src={images.responsive2}
            alt="sign in page for small screen size"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">Strong validation system</h3>
          <img
            className="feature__img"
            src={images.strongValidation}
            alt="sign up page with some inputs not entered properly"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            User can select sorting for sunglasses items
          </h3>
          <img
            className="feature__img"
            src={images.sortSelect}
            alt="sort selection"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The customer can see and track his/her orders
          </h3>
          <img
            className="feature__img"
            src={images.myOrders}
            alt="customer orders page"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The customer can edit his/her account
          </h3>
          <img
            className="feature__img"
            src={images.accountSettings}
            alt="customer account settings page"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The customer can proceed orders in the shopping cart page easily
          </h3>
          <img
            className="feature__img"
            src={images.cart}
            alt="shopping cart page and credit card inputs"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            Seller can view and edit multiple sunglasses items at once
          </h3>
          <img
            className="feature__img"
            src={images.items}
            alt="seller items page"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The sunglasses items advanced search helps the seller search for
            specific items so that the seller can edit these items or view them
            also this page allows the seller to select sorting for items
          </h3>
          <img
            className="feature__img"
            src={images.itemsAdvancedSearch}
            alt="seller items advanced search page"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            Seller can view and edit multiple sunglasses orders at once
          </h3>
          <img
            className="feature__img"
            src={images.orders}
            alt="seller orders page"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The sunglasses orders advanced search helps the seller search for
            specific orders so that the seller can edit these orders or view
            them also this page allows the seller to select sorting for orders
          </h3>
          <img
            className="feature__img"
            src={images.ordersAdvancedSearch}
            alt="seller orders advanced search page"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            Smart search for the seller and customers pages even the advanced
            search seller pages
          </h3>
          <img
            className="feature__img"
            src={images.easySearch}
            alt="customer home page with some searched sunglasses items"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The seller can create a sunglasses item easily
          </h3>
          <img
            className="feature__img"
            src={images.addItem}
            alt="seller add item page"
          ></img>
        </div>
      </div>
    </section>
  );

  //the component
  return (
    <>
      <div ref={topPage}></div>
      {navigation}
      {start}
      {technologiesUsed}
      {features}
      {footer}
    </>
  );
};

export default SunglassesOnlineStore;
