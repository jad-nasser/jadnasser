import "./Project.css";
import React from "react";
import {Link} from 'react-router-dom';

import project_small_pic from '../imgs/Rectangle 3(1).png';
import project_large_pic from '../imgs/christopher-gower-m_HRfLhgABo-unsplash@2x.png';
import trial_pic from '../imgs/pexels-lumn-167699.jpg';
import trial_pic2 from '../imgs/eduardo-dutra-k6b53YWZI9I-unsplash@2x.png';

/*var project_small_pic=process.env.PUBLIC_URL+'/imgs/Rectangle 3(1).png';
var project_large_pic=process.env.PUBLIC_URL+'/imgs/christopher-gower-m_HRfLhgABo-unsplash@2x.png';*/

function template() {

  var navigation=(
    <header id="top">
    {/*<button className="nav-toggle" aria-label="toggle navigation">
      <span className="hamburger"></span>
  </button>*/}
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><Link to="/home" className="nav__link">Home</Link></li>
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
  );

  var image_view= (
    <div className="image-view" id="image-view">
      <div className="image-view__close" id="image-view__close" tabIndex="0">&times;</div>
      <img className="image-view__img" id="image-view__img" src={trial_pic} alt="image1"></img>
      <div className="image-view__caption" id="image-view__caption">image view caption</div>
    </div>
  );

  var start=(<div></div>);
  var body=(<div></div>);

  if(this.props.name==="project_1"){

    start=(
      <section className="start">
        <h1 className="section__title section__title--start">Project Title</h1>
        <p className="start__paragraph">Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo 
        molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam 
        ipsum eius earum?. Click <a href="https://www.google.com">here</a> to view the source code.</p>
        <img className="start__img" src={project_large_pic} alt="Project Intro"></img>
      </section>
    );

    body=(
      <div>


      <section className="features">

        <div className="feature">
          <h2 className="feature__text">Enter fearure text here</h2>
          <img className="feature__img" src={project_small_pic} alt="Feature text"></img>
        </div>

        <div className="feature">
          <h2 className="feature__text">Enter fearure text here</h2>
          <img className="feature__img" src={project_small_pic} alt="Feature text"></img>
        </div>

        <div className="feature">
          <h2 className="feature__text">Enter fearure text here</h2>
          <img className="feature__img" src={project_small_pic} alt="Feature text"></img>
        </div>

        <div className="feature">
          <h2 className="feature__text">Enter fearure text here</h2>
          <img className="feature__img" src={project_small_pic} alt="Feature text"></img>
        </div>

      </section>


      <section className="uml">
        <h2 className="section__title section__title--uml">UML Diagrams</h2>

        <div className="uml__items">

        <div className="uml__item" tabIndex="0">
        <img className="uml__img" src={project_small_pic} alt="UML Diagram"></img>
        <span className="uml__span">UML Diagram</span>
        </div>

        <div className="uml__item" tabIndex="0">
        <img className="uml__img" src={trial_pic} alt="trial"></img>
        <span className="uml__span">trial</span>
        </div>

        <div className="uml__item" tabIndex="0">
        <img className="uml__img" src={trial_pic2} alt="trial2"></img>
        <span className="uml__span">trial2</span>
        </div>

        <div className="uml__item" tabIndex="0">
        <img className="uml__img" src={project_small_pic} alt="UML Diagram"></img>
        <span className="uml__span">UML Diagram</span>
        </div>

        </div>

      </section>


      </div>
    );

  }

  else if(this.props.name==="project_2"){
    
    start=(
      <section className="start">
        <h1 className="section__title section__title--start">Project Title</h1>
        <p className="start__paragraph">Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo 
        molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam 
        ipsum eius earum?. Click <a href="https://www.google.com">here</a> to view the source code.</p>
        <img className="start__img" src={project_large_pic} alt="Project Intro"></img>
      </section>
    );

    body=(
      <div>


      <section className="features">

        <div className="feature">
          <h2 className="feature__text">Enter fearure text here</h2>
          <img className="feature__img" src={project_small_pic} alt="Feature text"></img>
        </div>

        <div className="feature">
          <h2 className="feature__text">Enter fearure text here</h2>
          <img className="feature__img" src={project_small_pic} alt="Feature text"></img>
        </div>

        <div className="feature">
          <h2 className="feature__text">Enter fearure text here</h2>
          <img className="feature__img" src={project_small_pic} alt="Feature text"></img>
        </div>

        <div className="feature">
          <h2 className="feature__text">Enter fearure text here</h2>
          <img className="feature__img" src={project_small_pic} alt="Feature text"></img>
        </div>

      </section>


      <section className="uml">
        <h2 className="section__title section__title--uml">UML Diagrams</h2>

        <div className="uml__items">

        <div className="uml__item" tabIndex="0">
        <img className="uml__img" src={project_small_pic} alt="UML Diagram"></img>
        <span className="uml__span">UML Diagram</span>
        </div>

        <div className="uml__item" tabIndex="0">
        <img className="uml__img" src={trial_pic} alt="trial"></img>
        <span className="uml__span">trial</span>
        </div>

        <div className="uml__item" tabIndex="0">
        <img className="uml__img" src={trial_pic2} alt="trial2"></img>
        <span className="uml__span">trial2</span>
        </div>

        <div className="uml__item" tabIndex="0">
        <img className="uml__img" src={project_small_pic} alt="UML Diagram"></img>
        <span className="uml__span">UML Diagram</span>
        </div>

        </div>

      </section>


      </div>
    );

  }

  else if(this.props.name==="project_3"){
    
    start=(
      <section className="start">
        <h1 className="section__title section__title--start">Project Title</h1>
        <p className="start__paragraph">Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo 
        molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam 
        ipsum eius earum?. Click <a href="https://www.google.com">here</a> to view the source code.</p>
        <img className="start__img" src={project_large_pic} alt="Project Intro"></img>
      </section>
    );

    body=(
      <div>


      <section className="features">

        <div className="feature">
          <h2 className="feature__text">Enter fearure text here</h2>
          <img className="feature__img" src={project_small_pic} alt="Feature text"></img>
        </div>

        <div className="feature">
          <h2 className="feature__text">Enter fearure text here</h2>
          <img className="feature__img" src={project_small_pic} alt="Feature text"></img>
        </div>

        <div className="feature">
          <h2 className="feature__text">Enter fearure text here</h2>
          <img className="feature__img" src={project_small_pic} alt="Feature text"></img>
        </div>

        <div className="feature">
          <h2 className="feature__text">Enter fearure text here</h2>
          <img className="feature__img" src={project_small_pic} alt="Feature text"></img>
        </div>

      </section>


      <section className="uml">
        <h2 className="section__title section__title--uml">UML Diagrams</h2>

        <div className="uml__items">

        <div className="uml__item" tabIndex="0">
        <img className="uml__img" src={project_small_pic} alt="UML Diagram"></img>
        <span className="uml__span">UML Diagram</span>
        </div>

        <div className="uml__item" tabIndex="0">
        <img className="uml__img" src={trial_pic} alt="trial"></img>
        <span className="uml__span">trial</span>
        </div>

        <div className="uml__item" tabIndex="0">
        <img className="uml__img" src={trial_pic2} alt="trial2"></img>
        <span className="uml__span">trial2</span>
        </div>

        <div className="uml__item" tabIndex="0">
        <img className="uml__img" src={project_small_pic} alt="UML Diagram"></img>
        <span className="uml__span">UML Diagram</span>
        </div>

        </div>

      </section>


      </div>
    );

  }

  else {
    
 start=(
      <section className="start">
        <h1 className="section__title section__title--start">Project Title</h1>
        <p className="start__paragraph">Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo 
        molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam 
        ipsum eius earum?. Click <a href="https://www.google.com">here</a> to view the source code.</p>
        <img className="start__img" src={project_large_pic} alt="Project Intro"></img>
      </section>
    );

    body=(
      <div>


      <section className="features">

        <div className="feature">
          <h2 className="feature__text">Enter fearure text here</h2>
          <img className="feature__img" src={project_small_pic} alt="Feature text"></img>
        </div>

        <div className="feature">
          <h2 className="feature__text">Enter fearure text here</h2>
          <img className="feature__img" src={project_small_pic} alt="Feature text"></img>
        </div>

        <div className="feature">
          <h2 className="feature__text">Enter fearure text here</h2>
          <img className="feature__img" src={project_small_pic} alt="Feature text"></img>
        </div>

        <div className="feature">
          <h2 className="feature__text">Enter fearure text here</h2>
          <img className="feature__img" src={project_small_pic} alt="Feature text"></img>
        </div>

      </section>


      <section className="uml">
        <h2 className="section__title section__title--uml">UML Diagrams</h2>

        <div className="uml__items">

        <div className="uml__item" tabIndex="0">
        <img className="uml__img" src={project_small_pic} alt="UML Diagram"></img>
        <span className="uml__span">UML Diagram</span>
        </div>

        <div className="uml__item" tabIndex="0">
        <img className="uml__img" src={trial_pic} alt="trial"></img>
        <span className="uml__span">trial</span>
        </div>

        <div className="uml__item" tabIndex="0">
        <img className="uml__img" src={trial_pic2} alt="trial2"></img>
        <span className="uml__span">trial2</span>
        </div>

        <div className="uml__item" tabIndex="0">
        <img className="uml__img" src={project_small_pic} alt="UML Diagram"></img>
        <span className="uml__span">UML Diagram</span>
        </div>

        </div>

      </section>


      </div>
    );

  }

  return (
    <div className="project">
      {navigation}
      {start}
      {body}
      {footer}
      {image_view}
    </div>
  );
};

export default template;
