import React from "react";
import { Switch, Route } from "react-router-dom";

import ProjectWall from "./components/ProjectWall/ProjectWall";

import MainContainer from "./layout/MainContainer/MainContainer";

// LAYOUT
import Header from "./layout/Header/Header";

// PAGES
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
	return (
		<div className='App'>
			<Route component={Header} />
			<MainContainer>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/projects' component={ProjectWall} />
				</Switch>
			</MainContainer>
		</div>
	);
};

export default App;
