import React from "react";

const content = props => {

  return (
    <div className="Content">
      <a target="_blank" href={`${props.name}/index.html`} className="pic">
        <img src={require(`../../../assets/img/${props.name.toLowerCase()}.png`)} alt={`Project ${props.name}`} />
      </a>
      <div className="text">
        <p className="inline-text">{props.text}</p>
      </div>
    </div>
  )
};

export default content;
