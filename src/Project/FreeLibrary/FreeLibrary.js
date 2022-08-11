import "../Project.css";
import React, { useEffect, useRef } from "react";
import images from "./images/images";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import LazyImg from "../../LazyImg/LazyImg";

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
        width={images.homePage.width}
        height={images.homePage.height}
        src={images.homePage.src}
        alt="Free Library home page"
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
          <LazyImg
            placeholder={images.largeScreen.blur}
            className="feature__img"
            width={images.largeScreen.width}
            height={images.largeScreen.height}
            src={images.largeScreen.src}
            alt="sign in page for big screen size"
          />
          <LazyImg
            placeholder={images.smallScreen.blur}
            className="feature__img"
            width={images.smallScreen.width}
            height={images.smallScreen.height}
            src={images.smallScreen.src}
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
          <h3 className="feature__text">Theme changing powered by Redux</h3>
          <LazyImg
            placeholder={images.themeChanging.blur}
            className="feature__img"
            width={images.themeChanging.width}
            height={images.themeChanging.height}
            src={images.themeChanging.src}
            alt="theme changing"
          />
        </div>

        <div className="feature">
          <h3 className="feature__text">
            Easy search that only needs a part of a book name, also the advanced
            search page contains easy search functionality in all its inputs.
          </h3>
          <LazyImg
            placeholder={images.easySearch.blur}
            className="feature__img"
            width={images.easySearch.width}
            height={images.easySearch.height}
            src={images.easySearch.src}
            alt="easy search"
          />
        </div>

        <div className="feature">
          <h3 className="feature__text">
            Advanced search that helps the users search for specific books also
            this page allows the users to select the sorting way for the books.
          </h3>
          <LazyImg
            placeholder={images.advancedSearch.blur}
            className="feature__img"
            width={images.advancedSearch.width}
            height={images.advancedSearch.height}
            src={images.advancedSearch.src}
            alt="advanced search page"
          />
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The user can easily download a book by just selecting the book and
            clicking the download button
          </h3>
          <LazyImg
            placeholder={images.viewBook.blur}
            className="feature__img"
            width={images.viewBook.width}
            height={images.viewBook.height}
            src={images.viewBook.src}
            alt="view-book page"
          />
        </div>

        <div className="feature">
          <h3 className="feature__text">The publisher can add a book easily</h3>
          <LazyImg
            placeholder={images.addBook.blur}
            className="feature__img"
            width={images.addBook.width}
            height={images.addBook.height}
            src={images.addBook.src}
            alt="publisher add-book page"
          />
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The publisher can view, edit, and delete any book he/she added
          </h3>
          <LazyImg
            placeholder={images.editBook.blur}
            className="feature__img"
            width={images.editBook.width}
            height={images.editBook.height}
            src={images.editBook.src}
            alt="publisher edit book page"
          />
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The publisher can edit his/her account
          </h3>
          <LazyImg
            placeholder={images.accountSettings.blur}
            className="feature__img"
            width={images.accountSettings.width}
            height={images.accountSettings.height}
            src={images.accountSettings.src}
            alt="publisher account settings page"
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

export default FreeLibrary;
