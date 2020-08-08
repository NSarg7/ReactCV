import uniqid from 'uniqid';

const projects = [
    {
        id: uniqid(),
        name: 'Checkmate-checker',
        img: require(`../assets/project-pics/checkmate-checker.jpg`),
        link: 'https://nsarg7.github.io/checkmate-checker/',
    },
    {
        id: uniqid(),
        name: 'Natours',
        text: 'My next HTML/CSS project to master CSS3, Sass, Flexbox and grid.(ongoing)',
        img: require(`../assets/project-pics/natours.jpg`),
        link: 'https://nsarg7.github.io/natours/',
    },
    {
        id: uniqid(),
        name: 'Omnifood',
        text:
            'This is my very first HTML/CSS project. Initially for animations were used jQuery, but recently I have changed it with Vanilla JS(pure JS). So it became super fast.',
        img: require(`../assets/project-pics/omnifood.jpg`),
        link: 'https://nsarg7.github.io/omnifood/',
    },
    {
        id: uniqid(),
        name: 'Pizza maker',
        text: 'You make, we bake.',
        img: require(`../assets/project-pics/pizza-maker.jpg`),
        link: 'https://nsarg7.github.io/pizza-maker',
    },
    {
        id: uniqid(),
        name: '15Puzzle',
        text:
            "15Puzzle - My next project, created by React.js. It's a very popular logic game. Maybe you played it in your childhood. Let's play again and feel nostalgic.",
        img: require(`../assets/project-pics/15Puzzle.jpg`),
        link: 'https://nsarg7.github.io/15Puzzle/',
    },
    {
        id: uniqid(),
        name: 'Persons Manager',
        text:
            'Persons Manager(PM) will help you manage people information easily. This version of app adopted for medical sphere. For more information please click on project picture.',
        img: require(`../assets/project-pics/PM.jpg`),
        link: 'https://persons-manager.web.app/',
    },
    {
        id: uniqid(),
        name: 'Shopify',
        text: 'Shop and manage your store',
        img: require(`../assets/project-pics/Shopify.jpg`),
        link: 'https://ns-shopify.web.app',
    },
];

export default projects;
