// LIBRARIES
import React from 'react';

import ManPic from '../../assets/workbench/man.png';
import EngravedPic from '../../assets/workbench/engraved-back.png';

// COMPONENTS
import Slider from '../../components/Slider/Slider';
import projects from '../../App/data';

const ProjectWall = () => {
    return (
        <div className="ProjectWall">
            <div className="ProjectWall__intro">
                <h1 className="ProjectWall__title title fadeIn">Welcome to Sargsyan's gallery</h1>
                <h2 className="ProjectWall__description fadeIn">
                    It's a pleasure to introduce you to a small gallery of my projects. I know, it's far away
                    from Art, maybe just a piece of it.
                </h2>
            </div>

            <Slider transition={0.5} content={projects} />
            <img className="ProjectWall__man" src={ManPic} alt="man" />
            <img className="ProjectWall__engraving" src={EngravedPic} alt="statue" />
        </div>
    );
};

export default ProjectWall;
