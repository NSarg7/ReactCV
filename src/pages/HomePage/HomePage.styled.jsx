import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const isHidden = css`
	opacity: 0;
	visibility: hidden;
`;

const visible = css`
	opacity: 1;
	visibility: visible;
`;

export const LinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: 1s;
	animation-fill-mode: forwards;
	animation-timing-function: ease;
	animation-name: fadeIn;
	animation-duration: 1.5s;
`;

export const StyledLink = styled(Link)`
	&,
	&:link,
	&:visited {
		display: inline-block;
		border: 1px solid #f37335;
		padding: 1rem 2rem;
		border-radius: 5px;
		transition: 0.3s;
	}

	&:hover {
		background-color: rgba(255, 255, 255, 0.4);
		border: 1px solid #000;
	}

	&:active,
	&:focus {
		border: 1px solid #f28c38;
	}
`;

export const Header = styled.div((props) => {
	const { isFinished } = props;
	return `
	width:100%;
	flex: ${isFinished ? "10" : "0"};
	display: flex;
	flex-direction:column;
	justify-content:center;
   transition: 2s;
	`;
});

export const Gallery = styled.div((props) => {
	const { isFinished } = props;
	return `
	
	flex: ${isFinished ? "0" : "10"};
	${isFinished ? isHidden : visible}
	
	`;
});

export const GalleryItem = styled.div((props) => {
	const { isFinished } = props;
	return `

	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	width: 100%;

	animation-fill-mode: forwards;
	animation-timing-function: ease;
	animation-name: ${isFinished ? null : "fadeIn"};
	animation-duration: 1.5s;
	${isFinished ? visible : isHidden}
`;
});
export const ImageContainer = styled.div`
	height: 95%;
	width: 100%;
	overflow: hidden;
	border-radius: 4px;
`;

export const Image = styled.div((props) => {
	const { isFinished, url } = props;

	return `
	background-image: url(${url});
	height: 100%;
	width: 100%;
	background-size: cover;
	background-position: center;
	margin: 0 auto;
	transition: 2s;

	animation-timing-function: linear;
	animation-name: ${isFinished ? null : "imageScale"};
	animation-duration: 1.5s;
`;
});
