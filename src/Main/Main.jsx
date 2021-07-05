import React from "react";
import {Link} from 'react-router-dom';

//import intro_pic from '../imgs/eduardo-dutra-k6b53YWZI9I-unsplash-crp.png';
//import about_me_pic from '../imgs/eduardo-dutra-Kqjc3vvgl1k-unsplash.png';
import project1_pic from '../imgs/Rectangle 3(1).png';
import project2_pic from '../imgs/Rectangle 3(2).png';
import project3_pic from '../imgs/Rectangle 3(3).png';
import project4_pic from '../imgs/Rectangle 3(4).png';

function template() {

  return (
    <div className="main">
      <header>
        {/*
        <button className="nav-toggle" aria-label="toggle navigation">
          <span className="hamburger"></span>
        </button>
        */}
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">About Me</a></li>
            <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
          </ul>
        </nav>
      </header>
      

      {/* Intoduction */}
      <section className="intro" id="home">
        <h1>This site is still under constructions</h1>
        <h1 className="section__title section__title--intro">
        Hi, I am <strong className="gold-gradient jad">Jad</strong> <strong className="blue-gradient">Nasser</strong>
        </h1>
        <h2 className="section__subtitle section__subtitle--intro">Junior Developer & Software Engineer</h2>
      </section>


      {/* My Services */}
      <section className="my-services" id="services">
        <h2 className="section__title section__title--services">What I Do</h2>
        <div className="services">
          <div className="service">
            <h3>Software Engineering</h3>
            <p>
              Familiar with many technologies. Able to plan programs and websites using UML diagrams, and 
              also able to write documentation and reports.
            </p>
          </div> {/* </service> */}

          <div className="service">
            <h3>Software Development</h3>
            <p>
              Familiar with programming concepts like OOP and MVC, and with databases like MongoDB, 
              SQL Server and MySQL. Able to write code using languages like Java, C, C++, C #, SWI-Prolog, 
              GNU Octave, MATLAB and MASM. Able to write Unit / Integration tests.
            </p>
          </div> {/* </service> */}

          <div className="service">
            <h3>Full-Stack Web Development</h3>
            <p>
              Able to develop both front and back ends of a website using HTML5, CSS3, jQuery, JavaScript, 
              TypeScript, and Node.js, and using frameworks like Angular, React, and Express.js, and using 
              databases like MongoDB, SQL Server, and MySQL. Able to write Unit / Integration / e2e tests.
            </p>
          </div> {/* </service> */}
        </div> {/* </services> */}

        <a href="#work" className="btn">My Work</a>
      </section>


      {/* About Me */}
      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I Am</h2>
        
        {/*<p className="section__subtitle section__subtitle--about">Developer & Software Engineer</p>*/}
        <div className="about-me__body">
          <p>
            I'm a passionate, persistent junior developer and software engineer. I've graduated with a 
            Bachelor's degree in Computer Science.
          </p>
          <p>
            I'm always passionate about everything I do, especially in my profession. I always love my 
            work to be unique and excellent.
          </p>
          <p>
            I'm always persistent and patient about my profession. I'm always willing to learn and learn 
            and learn to achieve excellence. Because of this,  I've learned many skills, programming 
            languages and frameworks by myself.
          </p>
          <p>
            I'm now excited and ready to take a new step in my career and work for the first time in a 
            company, to get to know and meet new people and collaborate with them to reach excellent 
            results. I always love and accept to hear any note about me and my work because that improves 
            me more.
          </p>
        </div>
      </section>


      {/* My Work */}
      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My Work</h2>
        <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>

        <div className="portfolio">
          {/* portfolio item 1 */}
          <Link className="portfolio__item" to="/project-1" >
            <img src={project1_pic} alt="project 1" className="portfolio__img"></img>
            <span className="hoverable">Glasses Store Website</span>
          </Link>

          {/* portfolio item 2 */}
          <Link className="portfolio__item" to="/project-2">
            <img src={project2_pic} alt="project 2" className="portfolio__img"></img>
            <span className="hoverable">Car Renting Website</span>
          </Link>

          {/* portfolio item 3 */}
          <Link className="portfolio__item" to="/project-3">
            <img src={project3_pic} alt="project 3" className="portfolio__img"></img>
            <span className="hoverable">Electronics Store Website</span>
          </Link>

          {/* portfolio item 4 */}
          <Link className="portfolio__item" to="/project-4">
            <img src={project4_pic} alt="project 4" className="portfolio__img"></img>
            <span className="hoverable">From Excel to Relational Database</span>
          </Link>
        </div>
      </section>


      {/* footer */}
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
        <a className="footer__link" href="mailto:jadnasser.official@gmail.com">jadnasser.official@gmail.com</a>
        <div className="address-and-phone">
          <p className="address">Hamra Street, Beirut, Lebanon</p>
          <p className="phone">+961 81 747098</p>
        </div>
      </footer>
    </div>
  );
};


export default template;
