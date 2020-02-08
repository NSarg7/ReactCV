// LIBRARIES
import React from "react";
import uniqid from "uniqid";

// COMPONENTS
import Slider from "../../components/Slider/Slider";
import SliderItem from "../../components/SliderItem/SliderItem";

import projects from "../../data";

const ProjectWall = () => {
	const sliderItems = [...projects, ...projects, ...projects];

	return (
		<div className='ProjectWall'>
			<div className='ProjectWall__intro'>
				<h1 className='ProjectWall__title title fadeIn'>Welcome to Sargsyan's gallery</h1>
				<h2 className='ProjectWall__description fadeIn'>
					It's a pleasure to introduce you to a small gallery of my projects. I know, it's far
					away from Art, maybe just a piece of it.
				</h2>
			</div>

			<Slider transition={0.7}>
				{sliderItems.map((project) => {
					return (
						<SliderItem
							key={uniqid()}
							url={project.img}
							name={project.name}
							link={project.link}
						/>
					);
				})}
			</Slider>
			<img className='ProjectWall__man' src={require("../../sass/assets/man.png")} alt='man' />
		</div>
	);
};

export default ProjectWall;
