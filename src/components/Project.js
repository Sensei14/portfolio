import React from "react";
import "../styles/projects.css";

const Project = props => {
  const screens = [];
  const id = props.data.title;
  const href = `#${props.data.title}`;

  props.data.img.forEach(src => {
    const screen = require(`../images/${src}`);
    screens.push(screen);
  });

  const images = screens.map(screen => (
    <img src={screen} alt="screen" width={props.data.imgSize} />
  ));

  const carouselItems = images.map(item => {
    if (images.indexOf(item) === 0)
      return <div className="carousel-item active"> {item}</div>;
    return <div className="carousel-item">{item}</div>;
  });

  return (
    <div className="single-project">
      <a href={props.data.link} target="blank" className="project-title">
        {props.data.description}
      </a>

      <div id={id} className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">{carouselItems}</div>
        <a
          class="carousel-control-prev"
          href={href}
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href={href}
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Project;
