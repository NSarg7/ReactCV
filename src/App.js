import React, { useState } from "react";
import Header from "./components/Header/Header";
import ShelfList from "./components/ShelfList/ShelfList";
import PoweredBy from "./components/Info/PoweredBy";
import data from "./data";

const App = () => {
	const [state, setState] = useState(data);

	const showContent = id => {
		//Find project's index
		let projectIndex = state.projects.findIndex(project => project.id === id);
		// Copy projects from the state
		let projects = [...state.projects];
		let doesShow = !state.projects[projectIndex].doesShow;
		// If doesShow true, show items
		if (projects[projectIndex].doesShow) {
			projects[projectIndex].doesShow = doesShow;
		} else {
			//If false set all object's doesShow to false, after show the clicked project
			projects.forEach(el => {
				el.doesShow = false;
			});
			projects[projectIndex].doesShow = doesShow;
		}
		setState({ projects: projects });
	};

	return (
		<div className='App'>
			<Header />

			<ShelfList projects={state.projects} showContent={showContent} />

			<PoweredBy />
		</div>
	);
};

export default App;
