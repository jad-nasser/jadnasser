import Navbar from "../Navbar/Navbar";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import freeImagesPic from "../Project/FreeImages/images/home-page-large.jpg";
import freeLibraryPic from "../Project/FreeLibrary/images/home-page.png";
import sunglassesOnlineStorePic from "../Project/SunglassesOnlineStore/images/home-page.jpg";
import fromExcelToRelationalDatabasePic from "../Project/FromExcelToRelationalDatabaseConverter/images/database-diagram.png";

function Main() {
  return (
    <div className="main">
      {/* Navbar */}
      <Navbar />

      {/* Intoduction */}
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong className="gold-gradient jad">Jad</strong>{" "}
          <strong className="blue-gradient">Nasser</strong>
        </h1>
        <h2 className="section__subtitle section__subtitle--intro">
          Junior Full Stack Web Developer
        </h2>
      </section>

      {/* My Services */}
      <section className="my-services" id="services">
        <h2 className="section__title section__title--services">What I Do</h2>
        <div className="services">
          <div className="service">
            <h3>Front End Web Developer</h3>
            <p className="service-paragraph">
              Able to develop the front end of a website using JavaScript,
              TypeScript, React js, HTML, CSS, and Bootstrap. Able to write Unit
              / Integration / e2e tests.
            </p>
          </div>{" "}
          {/* </service> */}
          <div className="service">
            <h3>Back End Web Developer</h3>
            <p className="service-paragraph">
              Able to develop the back end of a website using Node.js, Express
              js, JavaScript, and TypeScript, with databases like MongoDB and
              SQL Server. Able to write Unit / Integration / e2e tests.
            </p>
          </div>{" "}
          {/* </service> */}
          <div className="service">
            <h3>Other Skills</h3>
            <p className="service-paragraph">
              Familiar with programming concepts like OOP and MVC. Able to write
              code using languages like Java, C, C++, C#, SWI-Prolog, GNU
              Octave, MATLAB.
            </p>
          </div>{" "}
          {/* </service> */}
        </div>{" "}
        {/* </services> */}
        <HashLink to="/#work" className="btn">
          My Work
        </HashLink>
      </section>

      {/* About Me */}
      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I Am</h2>

        <div className="about-me__body">
          <p>
            I'm a passionate, persistent junior full stack web developer. I've
            graduated with a Bachelor's degree in Computer Science.
          </p>
          <p>
            Always passionate about everything I do, especially in my
            profession. I love my work to be unique and excellent.
          </p>
          <p>
            Always persistent and patient about my profession. Ready at anytime
            to learn and learn and learn to achieve excellence. Because of this,
            I've learned many skills, programming languages and frameworks by
            myself.
          </p>
          <p>
            I'm now excited and ready to take a new step in my career and work
            for the first time in a company, to get to know and meet new people
            and collaborate with them to reach excellent results. I always love
            and accept to hear any note about me and my work because that
            improves me more.
          </p>
        </div>
      </section>

      {/* My Work */}
      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My Work</h2>
        <p className="section__subtitle section__subtitle--work">
          A selection of my range of work
        </p>

        <div className="portfolio">
          {/* portfolio item 1 */}
          <Link className="portfolio__item" to="/free-images">
            <img
              src={freeImagesPic}
              alt="Free Images Website"
              className="portfolio__img"
            ></img>
            <span className="hoverable">Free Images Website</span>
          </Link>

          {/* portfolio item 2 */}
          <Link className="portfolio__item" to="/free-library">
            <img
              src={freeLibraryPic}
              alt="Free Library Website"
              className="portfolio__img"
            ></img>
            <span className="hoverable">Free Library Website</span>
          </Link>

          {/* portfolio item 3 */}
          <Link className="portfolio__item" to="/sunglasses-online-store">
            <img
              src={sunglassesOnlineStorePic}
              alt="Sunglasses Online Store Website"
              className="portfolio__img"
            ></img>
            <span className="hoverable">Sunglasses Online Store Website</span>
          </Link>

          {/* portfolio item 4 */}
          <Link
            className="portfolio__item"
            to="/from-excel-to-relational-database-converter"
          >
            <img
              src={fromExcelToRelationalDatabasePic}
              alt="From Excel to Relational Database Converter Program"
              className="portfolio__img"
            ></img>
            <span className="hoverable">
              From Excel to Relational Database Converter Program
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Main;
