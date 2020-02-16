import styled from "styled-components";

export const SliderOverlay = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow-x: hidden;
`;

export const SliderContainer = styled.div((props) => {
	const { sliderPosition, transitionTime} = props;

	return `
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	transform: translateX(${sliderPosition}px);
	transition: ${transitionTime}s;
	transition-timing-function: linear;

	`;
});

