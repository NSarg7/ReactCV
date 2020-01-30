import uniqid from "uniqid";

const data = {
	projects: [
		{
			id: uniqid(),
			name: "15Puzzle",
			text: `15Puzzle - quite popular logic game, created with ReactJS, CSS grid and CSS animations.`,
			doesShow: false,
			img: require(`./assets/img/15puzzle.jpg`),
			link: "https://nsarg7.github.io/15Puzzle/",
		},
		{
			id: uniqid(),
			name: "Persons Manager",
			text: `This project created using React.JS library for front-end part and firebase for backend. The main purpose of the application to help small enterprises and medical facilities manage thier clients' information more easily. This version of app adopted for medical sphere. For detailed introduction please click on project's picture.`,
			doesShow: false,
			img: require(`./assets/img/PM.jpg`),
			link: `https://nsarg7.github.io/PersonsManager/`,
		},
		{
			id: uniqid(),
			name: "Omnifood",
			text: `My first HTML/CSS project. For creation used old-school technics - CSS grid layout, floats and so on. For animations used Vanilla JS.`,
			doesShow: false,
			img: require(`./assets/img/omnifood.jpg`),
			link: "https://nsarg7.github.io/Omnifood/",
		},
		{
			id: uniqid(),
			name: "Natours",
			text: `HTML/CSS project created with traditional CSS grid layout, but instead used very advanced animations and tricks with pure CSS.`,
			doesShow: false,
			img: require(`./assets/img/natours.jpg`),
			link: "https://nsarg7.github.io/Natours/",
		},

		{
			id: uniqid(),
			name: "Pig Game",
			text: `Small and cool game powered by Vanilla JS(pure JS). Rules are very simple to roll button how many time you want, but be careful from 1, in that case, you will be lost everything you have collected. If you want to save the current score, push button hold. And the turn is the next player's.`,
			doesShow: false,
			img: require(`./assets/img/pig game.jpg`),
			link: "https://nsarg7.github.io/Pig-Game",
		},

		{
			id: uniqid(),
			name: "Budgety",
			text: `Budgety will help you calculate your monthly income and expenses. To create this app was used JavaScript module pattern and prototype inheritance.`,
			doesShow: false,
			img: require(`./assets/img/budgety.jpg`),
			link: "https://nsarg7.github.io/Budgety/",
		},
	],
};

export default data;
