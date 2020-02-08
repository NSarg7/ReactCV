import React from "react";
import { Switch, Route } from "react-router-dom";

import MainContainer from "./layout/MainContainer/MainContainer";

// LAYOUT
import Header from "./layout/Header/Header";

// PAGES
import HomePage from "./pages/HomePage/HomePage";
import ProjectWall from "./pages/ProjectWall/ProjectWall";
import About from "./pages/About/About";

const App = () => {
	return (
		<div className='App'>
			<Route component={Header} />
			<MainContainer>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/projects' component={ProjectWall} />
					<Route exact path='/about' component={About} />
				</Switch>
			</MainContainer>
		</div>
	);
};

export default App;
