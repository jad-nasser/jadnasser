import "../Project.css";
import React, { useEffect, useRef } from "react";
import images from "./images/images";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import LazyImg from "../../LazyImg/LazyImg";

const SunglassesOnlineStore = () => {
  const topPage = useRef(null);
  useEffect(() => {
    topPage.current.scrollIntoView();
  }, []);

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
        This project uses <strong>MVC</strong> architecture and{" "}
        <strong>REST API</strong> strategy, and it is built using{" "}
        <strong> MERN</strong> stack web development.
      </p>
      <p className="start__paragraph">
        This project provides online sunglasses shopping. The seller can add and
        edit sunglasses, and the users can order sunglasses, and the seller can
        manage orders. You can check out the{" "}
        <a href="https://github.com/jad-nasser/sunglasses-online-store.git">
          repository
        </a>{" "}
        of that project for more details.
      </p>
      <img
        className="start__img"
        width={images.homePage.width}
        height={images.homePage.height}
        src={images.homePage.src}
        alt="Sunglasses online store home page"
      />
    </section>
  );

  //technologies used section
  const technologiesUsed = (
    <section className="technologies-used blue-gradient-background">
      <h2 className="section__title section__title--technologies-used">
        Technologies used
      </h2>
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
          <LazyImg
            placeholder={images.responsive1.blur}
            className="feature__img"
            width={images.responsive1.width}
            height={images.responsive1.height}
            src={images.responsive1.src}
            alt="sign in page for big screen size"
          />
          <LazyImg
            placeholder={images.responsive2.blur}
            className="feature__img"
            width={images.responsive2.width}
            height={images.responsive2.height}
            src={images.responsive2.src}
            alt="sign in page for small screen size"
          />
        </div>

        <div className="feature">
          <h3 className="feature__text">Strong validation system</h3>
          <LazyImg
            placeholder={images.strongValidation.blur}
            className="feature__img"
            width={images.strongValidation.width}
            height={images.strongValidation.height}
            src={images.strongValidation.src}
            alt="sign up page with some inputs not entered properly"
          />
        </div>

        <div className="feature">
          <h3 className="feature__text">
            User can select sorting for sunglasses items
          </h3>
          <LazyImg
            placeholder={images.sortSelect.blur}
            className="feature__img"
            width={images.sortSelect.width}
            height={images.sortSelect.height}
            src={images.sortSelect.src}
            alt="sort selection"
          />
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The customer can see and track his/her orders
          </h3>
          <LazyImg
            placeholder={images.myOrders.blur}
            className="feature__img"
            width={images.myOrders.width}
            height={images.myOrders.height}
            src={images.myOrders.src}
            alt="customer orders page"
          />
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The customer can edit his/her account
          </h3>
          <LazyImg
            placeholder={images.accountSettings.blur}
            className="feature__img"
            width={images.accountSettings.width}
            height={images.accountSettings.height}
            src={images.accountSettings.src}
            alt="customer account settings page"
          />
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The customer can proceed orders in the shopping cart page easily
          </h3>
          <LazyImg
            placeholder={images.cart.blur}
            className="feature__img"
            width={images.cart.width}
            height={images.cart.height}
            src={images.cart.src}
            alt="shopping cart page and credit card inputs"
          />
        </div>

        <div className="feature">
          <h3 className="feature__text">
            Seller can view and edit multiple sunglasses items at once
          </h3>
          <LazyImg
            placeholder={images.items.blur}
            className="feature__img"
            width={images.items.width}
            height={images.items.height}
            src={images.items.src}
            alt="seller items page"
          />
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The sunglasses items advanced search helps the seller search for
            specific items so that the seller can edit these items or view them
            also this page allows the seller to select sorting for items
          </h3>
          <LazyImg
            placeholder={images.itemsAdvancedSearch.blur}
            className="feature__img"
            width={images.itemsAdvancedSearch.width}
            height={images.itemsAdvancedSearch.height}
            src={images.itemsAdvancedSearch.src}
            alt="seller items advanced search page"
          />
        </div>

        <div className="feature">
          <h3 className="feature__text">
            Seller can view and edit multiple sunglasses orders at once
          </h3>
          <LazyImg
            placeholder={images.orders.blur}
            className="feature__img"
            width={images.orders.width}
            height={images.orders.height}
            src={images.orders.src}
            alt="seller orders page"
          />
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The sunglasses orders advanced search helps the seller search for
            specific orders so that the seller can edit these orders or view
            them also this page allows the seller to select sorting for orders
          </h3>
          <LazyImg
            placeholder={images.ordersAdvancedSearch.blur}
            className="feature__img"
            width={images.ordersAdvancedSearch.width}
            height={images.ordersAdvancedSearch.height}
            src={images.ordersAdvancedSearch.src}
            alt="seller orders advanced search page"
          />
        </div>

        <div className="feature">
          <h3 className="feature__text">
            Smart search for the seller and customers pages even the advanced
            search seller pages
          </h3>
          <LazyImg
            placeholder={images.easySearch.blur}
            className="feature__img"
            width={images.easySearch.width}
            height={images.easySearch.height}
            src={images.easySearch.src}
            alt="customer home page with some searched sunglasses items"
          />
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The seller can create a sunglasses item easily
          </h3>
          <LazyImg
            placeholder={images.addItem.blur}
            className="feature__img"
            width={images.addItem.width}
            height={images.addItem.height}
            src={images.addItem.src}
            alt="seller add item page"
          />
        </div>
      </div>
    </section>
  );

  //the component
  return (
    <>
      <div ref={topPage}></div>
      <Navbar />
      {start}
      {technologiesUsed}
      {features}
      <Footer />
    </>
  );
};

export default SunglassesOnlineStore;
