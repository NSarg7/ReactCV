import styled from "styled-components";

export const StyledProjectItem = styled.img`
	/* position: absolute;
	top: ${({ topPosition }) => topPosition};
	left: ${({ leftPosition }) => leftPosition}; */
	height: 13rem;
	width: auto;
	filter: grayscale(1) brightness(0.8);
	transition: 0.5s;
	backface-visibility:hidden;
	cursor: pointer;
	&:hover{
		filter: grayscale(0) brightness(1);
	}

`;
