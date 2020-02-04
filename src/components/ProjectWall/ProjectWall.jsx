import React, { useState, useRef, useEffect } from "react";
// import uniqid from "uniqid";

import { SliderItem, SliderContainer } from "./ProjectWall.styled";

import CustomIcon from "../CustomIcon/CustomIcon";
import data from "../../data";

const ProjectWall = () => {
	const sliderItemRef = useRef(null);
	const sliderContainerRef = useRef(null);

	const [count, setCount] = useState(0);
	const [slideWidth, setSlideWidth] = useState(0);
	const [sliderPosition, setSliderPosition] = useState(0);
	const [transitionTime, setTransitionTime] = useState(1);
	const [clickIsActive, setClickIsActive] = useState(true);
	const [sliderContainerDOM, setSliderContainerDOM] = useState("");

	const { projects } = data;

	useEffect(() => {
		const sliderContainerDOM = sliderContainerRef.current;
		const sliderItemDOM = sliderItemRef.current;
		const sliderItemCompWidth = getComputedStyle(sliderItemDOM).getPropertyValue("width");

		setSliderContainerDOM(sliderContainerDOM);
		setSlideWidth(parseFloat(sliderItemCompWidth));
	}, [slideWidth]);

	const btnPrev = () => {
		if (!clickIsActive) return;
		setCount(count + 1);
		setClickIsActive(false);
		setSliderPosition(sliderPosition + slideWidth);
	};

	const btnNext = (event) => {
		if (!clickIsActive) return;
		console.log(event)
		setCount(count - 1);
		setClickIsActive(false);
		setSliderPosition(sliderPosition - slideWidth);
	};

	const transitionReset = () => {
		if (count < -3 || count > 3) {
			setTransitionTime(0);
			setCount(0);
			setSliderPosition(0);
		}
		setClickIsActive(true);
	};

	const transitionCancel = () => {
		setTransitionTime(1);
	};

	if (sliderContainerDOM) {
		sliderContainerDOM.addEventListener("transitioncancel", transitionCancel);
	}

	return (
		<div className='ProjectWall'>
			<CustomIcon name='arrow-back' onClick={btnPrev} />
			<div className='ProjectWall_slider'>
				<div className='ProjectWall_slider--box'>
					<SliderContainer
						ref={sliderContainerRef}
						sliderPosition={sliderPosition}
						slideWidth={slideWidth}
						onTransitionEnd={transitionReset}
						transitionTime={transitionTime}>
						<SliderItem ref={sliderItemRef} url={projects[3].img} />
						<SliderItem url={projects[0].img} />
						<SliderItem url={projects[1].img} />
						<SliderItem url={projects[2].img} />
						<SliderItem url={projects[3].img} />
						<SliderItem url={projects[0].img} />
						<SliderItem url={projects[1].img} />
						<SliderItem url={projects[2].img} />
						<SliderItem url={projects[3].img} />
						<SliderItem url={projects[0].img} />
						<SliderItem url={projects[1].img} />
					</SliderContainer>
				</div>
			</div>
			<CustomIcon name='arrow-forward' onClick={btnNext} />
			<img
				className='ProjectWall_man'
				src={require("../../sass/assets/workbench/man.png")}
				alt='man'
			/>
		</div>
	);
};

export default ProjectWall;
