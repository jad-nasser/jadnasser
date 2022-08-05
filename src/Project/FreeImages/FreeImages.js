import "../Project.css";
import React, { useEffect, useRef } from "react";
import images from "./images/images";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const FreeImages = () => {
  const topPage = useRef(null);
  useEffect(() => {
    topPage.current.scrollIntoView();
  }, []);

  //start part that contains the project title and the starting paragraphs and image
  const start = (
    <section className="start">
      <h1 className="section__title section__title--start">Free Images</h1>
      <p className="start__paragraph">
        This is my third personal project website, and while doing this project
        I've learned TypeScript. This project uses <strong>MVC</strong>{" "}
        architecture and <strong>REST API</strong> strategy, and built with{" "}
        <strong>MERN</strong> stack, and developed with <strong>TDD</strong>.
      </p>
      <p className="start__paragraph">
        This website provides free images viewing and downloading. The signed in
        users can add, edit, and delete image items, and the non signed in users
        can view and download images for free. You can check out the{" "}
        <a href="https://github.com/jad-nasser/free-images.git">repository</a>{" "}
        of that project for more details.
      </p>
      <img
        className="start__img"
        src={images.homePageLarge}
        alt="Free Images home page"
        width="1345"
        height="654"
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
            <li>Mongo DB</li>
            <li>mongoose</li>
            <li>TypeScript</li>
            <li>nodemon</li>
            <li>ts-node</li>
            <li>bcrypt</li>
            <li>cookie-parser</li>
            <li>cors</li>
            <li>dotenv</li>
            <li>Json Web Token</li>
            <li>Multer</li>
            <li>Lodash</li>
            <li>image-size</li>
            <li>Mocha</li>
            <li>chai</li>
            <li>sinon</li>
            <li>supertest</li>
          </ul>
        </div>
        <div className="server-client">
          <h3 className="server-client__text">Client Side Dependencies</h3>
          <ul className="server-client__list">
            <li>ReactJS</li>
            <li>TypeScript</li>
            <li>Redux</li>
            <li>react-redux</li>
            <li>Bootstrap</li>
            <li>Axios</li>
            <li>number-abbreviate</li>
            <li>form-data</li>
            <li>React Router</li>
            <li>js-file-download</li>
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
            src={images.homePageLarge}
            alt="large screen size home page"
          ></img>
          <img
            className="feature__img"
            src={images.homePageSmall}
            alt="small screen home page"
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
            Easy search that only needs a part of an image name, also sorting
            functionality is available that can sort the viewed images by
            alphabetical order, reversed alphabetical order, or most downloaded
            images.
          </h3>
          <img
            className="feature__img"
            src={images.easySearch}
            alt="easy search"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The user can easily download an image by just selecting the image
            and clicking the download button
          </h3>
          <img
            className="feature__img"
            src={images.viewImage}
            alt="view page"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The signed in user can add a new image easily
          </h3>
          <img
            className="feature__img"
            src={images.addImage}
            alt="add page"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The signed in user can view, edit, and delete any image he/she added
          </h3>
          <img
            className="feature__img"
            src={images.editImage}
            alt="edit page"
          ></img>
        </div>

        <div className="feature">
          <h3 className="feature__text">
            The signed in user can edit his/her account
          </h3>
          <img
            className="feature__img"
            src={images.accountSettings}
            alt="account-settings page"
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

export default FreeImages;
