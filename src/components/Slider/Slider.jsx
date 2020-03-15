import React, { useState, useRef, useEffect } from "react";
import CustomIcon from "../CustomIcon/CustomIcon";

import { SliderOverlay, SliderContainer } from "./Slider.styled";

const Slider = ({ children, transition }) => {
	const sliderContainerRef = useRef(null);
	const isOdd = children.length % 2;

	const [count, setCount] = useState(0);
	const [slideWidth, setSlideWidth] = useState(0);
	const [sliderPositionStart, setSliderPositionStart] = useState(0);
	const [sliderPosition, setSliderPosition] = useState(isOdd ? slideWidth / 2 : 0);
	const [transitionTime, setTransitionTime] = useState(transition);
	const [clickIsActive, setClickIsActive] = useState(true);

	// MOUSE TRANSLATE EVENTS
	const [mouseMoveActive, setMouseMoveActive] = useState(false);
	const [mouseDownClientX, setMouseDownClientX] = useState();
	const [mouseTranslateSize, setMouseTranslateSize] = useState();

	// Touch events
	const [touchStartClient, setTouchStartClient] = useState();
	const [curTouchPosition, setCurTouchPosition] = useState();

	useEffect(() => {
		let sliderContainerDOM = sliderContainerRef.current;
		const sliderContainerDOMWidthString = getComputedStyle(sliderContainerDOM).getPropertyValue(
			"width"
		);
		let sliderContainerDOMWidth = parseFloat(sliderContainerDOMWidthString);
		setSliderPositionStart(isOdd ? sliderContainerDOMWidth / 2 : 0);

		const handleSize = () => {
			setSlideWidth(sliderContainerDOMWidth);
			setTransitionTime(0);
			setCount(0);
			setSliderPosition(isOdd ? sliderContainerDOMWidth / 2 : 0);
			setSliderPositionStart(isOdd ? sliderContainerDOMWidth / 2 : 0);
			setTimeout(() => {
				setTransitionTime(transition);
			});
		};

		window.addEventListener("resize", handleSize);
		handleSize();
		return () => {
			window.removeEventListener("resize", handleSize);
		};
	}, [transition, isOdd]);

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
		setTransitionTime(0);
		setCount(0);
		setSliderPosition(sliderPositionStart);
		setTimeout(() => {
			setTransitionTime(transition);
		});

		setClickIsActive(true);
	};

	/*----------------- FOR MOBILE DEVICES -----------------*/

	// TOUCH EVENTS
	const touchMove = (event) => {
		setTouchStartClient(event.touches[0].clientX);
	};
	const touchStart = (event) => {
		setCurTouchPosition(event.touches[0].clientX);
	};
	const touchEnd = () => {
		if (touchStartClient < curTouchPosition) {
			requestAnimationFrame(btnNext);
		} else {
			requestAnimationFrame(btnPrev);
		}
	};

	// MOUSE EVENTS
	const mouseMoveHandler = (event) => {
		// console.log(event.clientX - mouseDownClientX);
		const mouseTranslate = event.clientX - mouseDownClientX;
		setMouseTranslateSize(mouseTranslate);
	};
	const mouseDownHandler = (event) => {
		setTransitionTime(0);
		setMouseMoveActive(true);
		setMouseDownClientX(event.clientX);
		// console.log(event.clientX);
	};
	const mouseUpHundler = (event) => {
		setMouseMoveActive(false);
		setTransitionTime(transition);
		// console.log(event.clientX);
		if (mouseTranslateSize > 0) {
			requestAnimationFrame(btnPrev);
		}
		if (mouseTranslateSize < 0) {
			requestAnimationFrame(btnNext);
		}

		setMouseTranslateSize(0);
	};

	return (
		<div
			className='Slider'
			// SWIPE MOUSE EVENTS
			onTouchStart={touchStart}
			onTouchEnd={touchEnd}
			onTouchMove={touchMove}
			// DESKTOP MOUSE EVENTS
			onMouseDown={mouseDownHandler}
			onMouseUp={mouseUpHundler}
			onMouseMove={mouseMoveActive ? mouseMoveHandler : null}
			onMouseOut={mouseUpHundler}

			/***************/
		>
			<SliderOverlay>
				<CustomIcon Styles='Slider__btn-prev' name='ios-arrow-back' onClick={btnPrev} />
				<SliderContainer
					ref={sliderContainerRef}
					slideWidth={slideWidth}
					onTransitionEnd={
						Math.abs(count) === children.length / 3
							? transitionReset
							: setClickIsActive.bind(this, true)
					}
					transitionTime={transitionTime}
					style={{
						transform: ` translateX(${
							mouseTranslateSize
								? sliderPosition + mouseTranslateSize
								: sliderPosition
						}px)`,
					}}>
					{children}
				</SliderContainer>
				<CustomIcon Styles='Slider__btn-next' name='ios-arrow-forward' onClick={btnNext} />
			</SliderOverlay>
		</div>
	);
};

export default Slider;
