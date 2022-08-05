import "../Project.css";
import React, { useEffect, useRef } from "react";
import images from "./images/images";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const FreeLibrary = () => {
  const topPage = useRef(null);
  useEffect(() => {
    topPage.current.scrollIntoView();
  }, []);

  //start part that contains the project title and the starting paragraphs and image
  const start = (
    <section className="start">
      <h1 className="section__title section__title--start">Free Library</h1>
      <p className="start__paragraph">
        This is my second personal project website, and while doing this project
        I've avoided many mistakes I've done in the first project, and also I've
        learned Redux. This project uses <strong>MVC</strong> architecture and{" "}
        <strong>REST API</strong> strategy, and built with{" "}
        <strong>Node js</strong>, <strong>SQL Server</strong>,{" "}
        <strong>Express js</strong>, and <strong>React js</strong>, and
        developed with <strong>TDD</strong>.
      </p>
      <p className="start__paragraph">
        This project provides free library. The publishers can add, edit, and
        delete book items, and the users can download books for free. You can
        check out the{" "}
        <a href="https://github.com/jad-nasser/free-library.git">repository</a>{" "}
        of that project for more details.
      </p>
      <img
        className="start__img"
        src={images.homePage}
        alt="Free Library home page"
      ></img>
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
            <li>Microsoft SQL Server</li>
            <li>mssql</li>
            <li>msnodesqlv8</li>
            <li>nodemon</li>
            <li>bcrypt</li>
            <li>cookie-parser</li>
            <li>cors</li>
            <li>dotenv</li>
            <li>Json Web Token</li>
            <li>Multer</li>
            <li>Lodash</li>
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
            <li>Redux</li>
            <li>react-redux</li>
            <li>Bootstrap</li>
            <li>Axios</li>
            <li>number-abbreviate</li>
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
            src={images.largeScreen}
            alt="sign in page for big screen size"
          ></img>
          <img
            className="feature__img"
            src={images.smallScreen}
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
          <h3 className="feature__text">Theme changing powered by Redux</h3>
          <img
            className="feature__img"
            src={images.themeChanging}
            alt="theme changing"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            Easy search that only needs a part of a book name, also the advanced
            search page contains easy search functionality in all its inputs.
          </h3>
          <img
            className="feature__img"
            src={images.easySearch}
            alt="easy search"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            Advanced search that helps the users search for specific books also
            this page allows the users to select the sorting way for the books.
          </h3>
          <img
            className="feature__img"
            src={images.advancedSearch}
            alt="advanced search page"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The user can easily download a book by just selecting the book and
            clicking the download button
          </h3>
          <img
            className="feature__img"
            src={images.viewBook}
            alt="view-book page"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">The publisher can add a book easily</h3>
          <img
            className="feature__img"
            src={images.addBook}
            alt="publisher add-book page"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The publisher can view, edit, and delete any book he/she added
          </h3>
          <img
            className="feature__img"
            src={images.editBook}
            alt="publisher edit book page"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The publisher can edit his/her account
          </h3>
          <img
            className="feature__img"
            src={images.accountSettings}
            alt="publisher account settings page"
          ></img>
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

export default FreeLibrary;
