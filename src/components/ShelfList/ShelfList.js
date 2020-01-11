import React from "react";
import Shelf from "./Shelf/Shelf";
import Content from "./Content/Content";

const shelfList = props => {
	const { projects, showContent } = props;

	return (
		<ul className='ShelfList'>
			{projects.map(project => {
				return (
					<div key={project.id}>
						<Shelf name={project.name} showContent={showContent} id={project.id} />

						{project.doesShow ? (
							<Content
								link={project.link}
								img={project.img}
								name={project.name}
								text={project.text}
							/>
						) : (
							<Content
								link={project.link}
								img={project.img}
								name={project.name}
								text={project.text}
								styles='Content_container--hide'
							/>
						)}
					</div>
				);
			})}
		</ul>
	);
};

export default shelfList;
