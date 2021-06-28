import "./Project.css";
import React from "react";
import {Link} from 'react-router-dom';

import project_small_pic from '../imgs/Rectangle 3(1).png';
import project_large_pic from '../imgs/christopher-gower-m_HRfLhgABo-unsplash@2x.png';

/*var project_small_pic=process.env.PUBLIC_URL+'/imgs/Rectangle 3(1).png';
var project_large_pic=process.env.PUBLIC_URL+'/imgs/christopher-gower-m_HRfLhgABo-unsplash@2x.png';*/

function template() {

  var navigation=(
    <header id="top">
    <button className="nav-toggle" aria-label="toggle navigation">
      <span className="hamburger"></span>
    </button>
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
        <li className="nav__item"><Link to="/services" className="nav__link">My Services</Link></li>
        <li className="nav__item"><Link to="/about" className="nav__link">About Me</Link></li>
        <li className="nav__item"><Link to="/work" className="nav__link">My Work</Link></li>
        <li className="nav__item"><Link to="/contact" className="nav__link">Contact</Link></li>
      </ul>
    </nav>
  </header>
  );

  var footer=(
    <footer className="footer" id="contact">
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
  );

  var profile=(<div></div>);
  var body=(<div></div>);

  if(this.props.name==="project_1"){

    profile=(
      <section className="intro">
      <h1 className="section__title section__title--intro">
          The title <strong>of my project</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">A short subtitle</p>
      <img src={project_small_pic} alt="" className="intro__img"></img>
      </section>
    );

    body=(
      <div className="portfolio-item-individual">
      <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
      <img src={project_large_pic} alt=""></img>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur incidunt?</p>
      <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
      </div>
    );

  }

  else if(this.props.name==="project_2"){
    
    profile=(
      <section className="intro">
      <h1 className="section__title section__title--intro">
          The title <strong>of my project</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">A short subtitle</p>
      <img src={project_small_pic} alt="" className="intro__img"></img>
      </section>
    );

    body=(
      <div className="portfolio-item-individual">
      <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
      <img src={project_large_pic} alt=""></img>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur incidunt?</p>
      <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
      </div>
    );

  }

  else if(this.props.name==="project_3"){
    
    profile=(
      <section className="intro">
      <h1 className="section__title section__title--intro">
          The title <strong>of my project</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">A short subtitle</p>
      <img src={project_small_pic} alt="" className="intro__img"></img>
      </section>
    );

    body=(
      <div className="portfolio-item-individual">
      <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
      <img src={project_large_pic} alt=""></img>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur incidunt?</p>
      <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
      </div>
    );

  }

  else {
    
    profile=(
      <section className="intro">
      <h1 className="section__title section__title--intro">
          The title <strong>of my project</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">A short subtitle</p>
      <img src={project_small_pic} alt="" className="intro__img"></img>
      </section>
    );

    body=(
      <div className="portfolio-item-individual">
      <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
      <img src={project_large_pic} alt=""></img>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur incidunt?</p>
      <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
      </div>
    );

  }

  return (
    <div className="project">
      {navigation}
      {profile}
      {body}
      {footer}
    </div>
  );
};

export default template;
