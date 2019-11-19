import React from "react";

const content = props => {

  return (
    <div className="Content">
      <a target="_blank" rel="noopener noreferrer" href={props.link} className="pic">
        <img src={props.img}
          alt={`Project ${props.name}`} />
      </a>
      <div className="text">
        <p className="inline-text">{props.text}</p>
      </div>
    </div>
  )
};

export default content;
