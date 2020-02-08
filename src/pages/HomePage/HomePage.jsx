import React, { useState } from "react";
import uniqid from "uniqid";

import { Transition } from "react-transition-group";

import Typing from "react-typing-animation";

import {
	Header,
	Gallery,
	GalleryItem,
	Image,
	ImageContainer,
	StyledLink,
	LinkContainer,
} from "./HomePage.styled";

const HomePage = () => {
	const [isFinished, setIsFinished] = useState(false);
	const [eploreMoreActive, seteploreMoreActive] = useState(false);

	const gallery = [
		{ name: "The Creation of Adam", img: require("../../sass/assets/gallery/adam.jpg") },
		{ name: "The Last Supper", img: require("../../sass/assets/gallery/supper.jpg") },
		{ name: "The Kiss", img: require("../../sass/assets/gallery/kiss.jpg") },
		{ name: "Mona Liza", img: require("../../sass/assets/gallery/mona.jpg") },
		{ name: "The Starry Night", img: require("../../sass/assets/gallery/starry.jpg") },
		{ name: "The Birth of Venus", img: require("../../sass/assets/gallery/venus.jpg") },
	];

	const string = "Art is the beginning of everything";

	return (
		<div className='HomePage'>
			<Header
				onTransitionEnd={seteploreMoreActive.bind(this, true)}
				isFinished={isFinished}
				className='HomePage__header'>
				<Typing
					className='animated-typing'
					hideCursor={true}
					onFinishedTyping={setIsFinished.bind(this, true)}
					isFinished={isFinished}
					speed={40}>
					<h1 className={`HomePage__title ${isFinished ? null : "title"}`}>
						{string}
						<Typing.Delay ms={500} />
						<Typing.Backspace count={string.length - 6} /> everywhere
						<Typing.Delay ms={500} />
						<Typing.Backspace count={11} /> in programming
					</h1>
				</Typing>

				{eploreMoreActive ? (
					<LinkContainer>
						<div className='logo-container'>
							<div className='react-logo' />
						</div>
						<StyledLink to='/projects'>Explore more</StyledLink>
					</LinkContainer>
				) : null}
			</Header>

			<Gallery className='HomePage__gallery' isFinished={isFinished}>
				{gallery.map(({ name, img }, ind) => {
					return (
						<GalleryItem isFinished={isFinished} key={uniqid()} className={`item-${ind + 1}`}>
							<ImageContainer>
								<Image
									className={`item-${ind + 1}_img`}
									url={img}
									isFinished={isFinished}
								/>
							</ImageContainer>
							<h2>{name}</h2>
						</GalleryItem>
					);
				})}
			</Gallery>
		</div>
	);
};

export default HomePage;
