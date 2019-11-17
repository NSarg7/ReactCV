import React from "react";

const header = props => {
  return (
    
      <div className="title">
        <h1 className="greeting">Welcome</h1>
        <div className="title_bottom">
          <h2>
            Below you can find my projects. <br />
            <span className="title_bottom--span">
              Hint: By clicking on images in your browser will be opened the
              original project.
            </span>
          </h2>
        </div>
      </div>
    
  );
};

export default header;
