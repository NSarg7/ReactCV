import React, { useState } from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import data from "../../data";

const ProjectWall = () => {
	const [projectsData] = useState(data);
	const { projects } = projectsData;

	return (
		<div className='ProjectWall'>
			<div className='ProjectWall_box'>
				{projects.map((project, ind) => {
					return <ProjectItem Styles={`ProjectWall_box--item-${ind+1}`} url={project.img} />;
				})}
			</div>

			{/* <ProjectItem url={projects[0].img} topPosition="19rem" leftPosition="11rem"/> */}
		</div>
	);
};

export default ProjectWall;
