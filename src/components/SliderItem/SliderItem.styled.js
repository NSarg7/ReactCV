import styled from "styled-components";

export const SliderItemOverlay = styled.a(({ url }) => {
	return `
	height: auto;
	width: 100%;
	background-image: url(${url});
	background-position: center;
	background-size: cover;
	transform: translate(-50%);
	flex-shrink: 0;
`;
});

export const ProjectLabel = styled.span`
	font-family: 'Homemade Apple', cursive;
	position: absolute;
	bottom: 0;
	right: 0;
	transform: translateX(-1rem);
	color: rgba(0, 0, 0, 0.500);
	font-size: 2rem;
	background-image: linear-gradient(to right bottom, #fdc830, #f37335);
	-webkit-background-clip: text;
	user-select: none;
`;
