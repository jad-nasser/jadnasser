import React    from "react";
import template from "./Main.jsx";

class Main extends React.Component {
  render() {
    return template.call(this);
  }

  componentDidMount() {

      const navToggle = document.querySelector('.nav-toggle');
      const navLinks = document.querySelectorAll('.nav__link');
    
      navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
      });
    
      navLinks.forEach(link => {
    
        link.addEventListener('click', () => {
          document.body.classList.remove('nav-open');
        });
    
      });
       
      if(this.props.goTo){
        document.getElementById(this.props.goTo).scrollIntoView();
      }

  }

}

export default Main;
