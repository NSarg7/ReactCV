import React, { useState, useRef, useEffect } from "react";
import CustomIcon from "../CustomIcon/CustomIcon";

import { SliderOverlay, SliderContainer } from './Slider.styled';

const Slider = ({ children, transition }) => {
	const sliderContainerRef = useRef(null);

	const [count, setCount] = useState(0);
	const [slideWidth, setSlideWidth] = useState(0);
	const [sliderPosition, setSliderPosition] = useState(0);
	const [transitionTime, setTransitionTime] = useState(transition);
	const [clickIsActive, setClickIsActive] = useState(true);

	useEffect(() => {
		var sliderContainerDOM = sliderContainerRef.current;
		const sliderContainerDOMWidth = getComputedStyle(sliderContainerDOM).getPropertyValue(
			"width"
		);

		setSlideWidth(parseFloat(sliderContainerDOMWidth));
	}, [slideWidth, transition]);

	const btnPrev = () => {
		if (!clickIsActive) return;
		setCount(count + 1);
		setClickIsActive(false);
		setSliderPosition(sliderPosition + slideWidth);
	};

	const btnNext = () => {
		if (!clickIsActive) return;
		setCount(count - 1);
		setClickIsActive(false);
		setSliderPosition(sliderPosition - slideWidth);
	};

	const transitionReset = () => {
		if (Math.abs(count) === 4) {
			setTransitionTime(0);
			setCount(0);
			setSliderPosition(0);
			setTimeout(() => {
				setTransitionTime(transition);
			});
		}

		setClickIsActive(true);
	};

	return (
		<div className='Slider'>
			<SliderOverlay>
				<CustomIcon Styles='Slider__btn-prev' name='ios-arrow-back' onClick={btnPrev} />
				<SliderContainer
					ref={sliderContainerRef}
					sliderPosition={sliderPosition}
					slideWidth={slideWidth}
					onTransitionEnd={transitionReset}
					transitionTime={transitionTime}>
					{children}
				</SliderContainer>
				<CustomIcon Styles='Slider__btn-next' name='ios-arrow-forward' onClick={btnNext} />
			</SliderOverlay>
		</div>
	);
};

export default Slider;
