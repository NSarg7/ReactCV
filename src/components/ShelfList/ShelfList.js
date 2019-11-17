import React from "react";
import Shelf from "./Shelf/Shelf";
import Content from "./Content/Content";

const shelfList = props => {
  return (
    <ul className="ShelfList">
      {props.projects.map(project => {
        return (
          <div key={project.id}>
            <Shelf className="Shelf" name={project.name} showContent={props.showContent} id={project.id} />
            {/*TODO:*/} {project.doesShow ? <Content name={project.name} text={project.text} /> : null}
          </div>
        );
      })}
    </ul>
  );
};

export default shelfList;
