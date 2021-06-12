import React from "react";
import {Link} from 'react-router-dom';
import about_me_pic from '../imgs/eduardo-dutra-Kqjc3vvgl1k-unsplash.png';
import intro_pic from '../imgs/eduardo-dutra-k6b53YWZI9I-unsplash-crp.png';
import project1_pic from '../imgs/Rectangle 3(1).png';
import project2_pic from '../imgs/Rectangle 3(2).png';
import project3_pic from '../imgs/Rectangle 3(3).png';
import project4_pic from '../imgs/Rectangle 3(4).png';

function template() {
  return (
    <div className="main">
      <h1>This site is still under constructions</h1>
      <header>
        <button className="nav-toggle" aria-label="toggle navigation">
          <span className="hamburger"></span>
        </button>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">About Me</a></li>
            <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
          </ul>
        </nav>
      </header>

      {/* Intoduction */}
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
        Hi, I am <strong>Jad Nasser</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">Junior Developer & Software Engineer</p>
        <img src={intro_pic} alt="Intro" className="intro__img"></img>
      </section>


      {/* My Services */}
      <section className="my-services" id="services">
        <h2 className="section__title section__title--services">What I Do</h2>
        <div className="services">
          <div className="service">
            <h3>Software Engineering</h3>
            <p>
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div> {/* </service> */}

          <div className="service">
            <h3>Software Development</h3>
            <p>
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div> {/* </service> */}

          <div className="service">
            <h3>Full-Stack Web Development</h3>
            <p>
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div> {/* </service> */}
        </div> {/* </services> */}

        <a href="#work" className="btn">My Work</a>
      </section>


      {/* About Me */}
      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I Am</h2>
        <p className="section__subtitle section__subtitle--about">Developer & Software Engineer</p>

        <div className="about-me__body">
          <p>
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <img src={about_me_pic} alt="About Me" className="about-me__img"></img>
      </section>


      {/* My Work */}
      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My Work</h2>
        <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>

        <div className="portfolio">
          {/* portfolio item 1 */}
          <Link className="portfolio__item" to="/project 1">
            <img src={project1_pic} alt="project 1" className="portfolio__img"></img>
          </Link>

          {/* portfolio item 2 */}
          <Link className="portfolio__item" to="/project 2">
            <img src={project2_pic} alt="project 2" className="portfolio__img"></img>
          </Link>

          {/* portfolio item 3 */}
          <Link className="portfolio__item" to="project 3">
            <img src={project3_pic} alt="project 3" className="portfolio__img"></img>
          </Link>

          {/* portfolio item 4 */}
          <Link className="portfolio__item" to="project 4">
            <img src={project4_pic} alt="project 4" className="portfolio__img"></img>
          </Link>
        </div>
      </section>


      {/* footer */}
      <footer className="footer">
        <a className="footer__link" href="mailto:jadnasser.official@gmail.com">jadnasser.official@gmail.com</a>
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
      </footer>
    </div>
  );
};


export default template;
