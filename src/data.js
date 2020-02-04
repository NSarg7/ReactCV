import uniqid from "uniqid";

const data = {
	projects: [
		{
			id: uniqid(),
			name: "PM",
			text:
				"PM(Persons Manager) will help you manage people information easily. This version of app adopted for medical sphere. For more information please click on project picture.",
			doesShow: false,
			img: require(`./sass/assets/project-pics/15Puzzle.png`),
			link: "https://nsarg7.github.io/PersonsManager/",
		},
		{
			id: uniqid(),
			name: "15Puzzle",
			text:
				"15Puzzle - My next project, created by React.js. It's a very popular logic game. Maybe you played it in your childhood. Let's play again and feel nostalgic.",
			doesShow: false,
			img: require(`./sass/assets/project-pics/PM.png`),
			link: "https://nsarg7.github.io/15Puzzle/",
		},

		{
			id: uniqid(),
			name: "Omnifood",
			text:
				"This is my very first HTML/CSS project. Initially for animations were used jQuery, but recently I have changed it with Vanilla JS(pure JS). So it became super fast.",
			doesShow: false,
			img: require(`./sass/assets/project-pics/omnifood.png`),
			link: "https://nsarg7.github.io/Omnifood/",
		},
		{
			id: uniqid(),
			name: "Natours",
			text: "My next HTML/CSS project to master CSS3, Sass, Flexbox and grid.(ongoing)",
			doesShow: false,
			img: require(`./sass/assets/project-pics/natours.png`),
			link: "https://nsarg7.github.io/Natours/",
		},

		// {
		//    id: uniqid(),
		//    name: "Pig Game",
		//    text: `Small and cool game powered by Vanilla JS(pure JS). Rules are very simple to roll button how many time you want, but be careful from 1, in that case, you will be lost everything you have collected. If you want to save the current score, push button hold. And the turn is the next player's.`,
		//    doesShow: false,
		//    img: require(`./assets/img/pig game.jpg`),
		//    link: "https://nsarg7.github.io/Pig-Game",
		// },

		// {
		//    id: uniqid(),
		//    name: "Budgety",
		//    text: `This app will help you calculate your monthly income and expenses. To create this app was used JavaScript IIFE module pattern(to keep code private) and prototype inheritance.`,
		//    doesShow: false,
		//    img: require(`./assets/img/budgety.jpg`),
		//    link: "https://nsarg7.github.io/Budgety/",
		// },
	],
};

export default data;
