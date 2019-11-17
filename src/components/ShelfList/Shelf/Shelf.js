import React from "react";

const shelf = props => {

  return (
    <div className="Shelf" onClick={() => props.showContent(props.id)}>
      <li className="Shelf-title">{props.name}</li>
    </div>
  )
};

export default shelf;
