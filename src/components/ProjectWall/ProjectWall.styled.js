import styled from "styled-components";

export const SliderContainer = styled.div((props) => {
	const { sliderPosition, transitionTime } = props;

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

export const SliderItem = styled.div((props) => {
	const { url } = props;

	return `
	flex-shrink: 0;
	height: 100%;
	width: 100%;
	background-image: url(${url});
	background-position: center;
	background-size: cover;
	// transform: translate(-50%);
`;
});
