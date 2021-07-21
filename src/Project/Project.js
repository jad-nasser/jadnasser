import React    from "react";
import template from "./Project.jsx";

class Project extends React.Component {
  render() {
    return template.call(this);
  }

  componentDidMount() {

    /*const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link');
  
    navToggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
    });
  
    navLinks.forEach(link => {
  
      link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
      });
  
    });*/

    document.getElementById("top").scrollIntoView();
     
    //getting image view DOM elements
    var img=document.querySelector('#image-view__img');
    var caption=document.querySelector('#image-view__caption');
    var img_view=document.querySelector('#image-view');
    var close=document.querySelector('#image-view__close');

    //getting some DOM elements needed for the image view
    var body=document.querySelector('body');

    //adding click event for each uml image for openning the image view
    var uml_items=document.querySelectorAll('.uml__item')
    uml_items.forEach((uml_item)=>{

      uml_item.addEventListener('click', ()=>{

        //detetecting which UML image is clicked and then changing the image and the caption inside 
        //the image view
        var selected_img=uml_item.querySelector('img');
        var img_src=selected_img.getAttribute('src');
        img.setAttribute('src' , img_src);
        var img_alt=selected_img.getAttribute('alt');
        img.setAttribute('alt' , img_alt);
        caption.innerHTML=img_alt;
  
        //disable body scroll
        body.style.overflow="hidden";

        //make the image view appear
        img_view.style.display="block";

        //adding animation
        img_view.style.animationName="zoom-in";

        //getting the DOM elements current heights in the image view to make the image in the vertical center
        var img_height=img.clientHeight;
        var img_view_height=img_view.clientHeight;
        var caption_height=caption.clientHeight;
        var close_height=close.clientHeight;
        
        //calculating and adding the needed margin to make the image in the vertical center of the image view 
        var margin=(img_view_height - (img_height + caption_height + close_height + ( close_height / 2) + 3 ) ) / 2;
        if(margin < 0) margin = 0;
        img.style.marginTop=margin+"px";

      });

    });


    //adding click event for the close button of the image view
    close.addEventListener('click',()=>{
      body.style.overflow="visible"
      img_view.style.animationName="zoom-out";
    });


    //adding animationend event at the end of image view animation
    img_view.addEventListener('animationend',()=>{
      var style=window.getComputedStyle(img_view);
      if(style.getPropertyValue('animation-name') === 'zoom-out'){
        img_view.style.display="none";
      }
    });


  }
}

export default Project;
