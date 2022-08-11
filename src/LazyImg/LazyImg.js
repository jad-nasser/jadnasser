import { useState, useRef, useEffect } from "react";
import placeholderImg from "../imgs/placeholder.png";

const LazyImg = (props) => {
  const [src, setSrc] = useState(placeholderImg);
  const imgElement = useRef(null);
  useEffect(() => {
    //creating the observer to the img to detect if the img is in the view and then loads the image src
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          observer.unobserve(entry.target);
        });
        setSrc(props.src);
      },
      { rootMargin: "10%", threshold: 0 }
    );
    observer.observe(imgElement.current);
  }, [props.src]);
  //the component
  return (
    <img
      width={props.width}
      height={props.height}
      src={src}
      alt={props.alt}
      className={props.className}
      ref={imgElement}
    />
  );
};

export default LazyImg;
