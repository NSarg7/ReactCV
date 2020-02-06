import React from "react";
import uniqid from "uniqid";

import Slider from "../Slider/Slider";
import SliderItem from "../SliderItem/SliderItem";

import projects from "../../data";

const ProjectWall = () => {
	const sliderItems = [...projects, ...projects, ...projects];

	return (
		<div className='ProjectWall'>
			<h1 className='ProjectWall__title'>Sargsyan's gallery</h1>
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
			<img
				className='ProjectWall__man'
				src={require("../../sass/assets/workbench/man.png")}
				alt='man'
			/>
		</div>
	);
};

export default ProjectWall;
