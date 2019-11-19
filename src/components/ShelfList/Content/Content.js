import React from "react";

const content = ({link, img, name, text}) => {

  return (
    <div className="Content_container">
    <div className="Content">
      <a target="_blank" rel="noopener noreferrer" href={link} className="pic">
        <img src={img}
          alt={`Project ${name}`} />
      </a>
      <div className="text">
        <p className="inline-text">{text}</p>
      </div>
      </div>
    </div>
  )
};

export default content;
