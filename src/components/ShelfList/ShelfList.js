import React from "react";
import Shelf from "./Shelf/Shelf";
import Content from "./Content/Content";

const shelfList = props => {

  return (
    <ul className="ShelfList">
      {props.projects.map((project, index) => {
        return (
          <div key={project.id}>
            <Shelf
              name={project.name}
              showContent={props.showContent}
              id={project.id} />

            {project.doesShow ? <Content
              link={project.link}
              img={project.img}
              name={project.name}
              text={project.text} /> : null}
          </div>
        );
      })}
    </ul>
  );
};

export default shelfList;
