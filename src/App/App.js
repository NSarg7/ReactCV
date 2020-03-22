import React from "react";
import { Switch, Route , HashRouter} from "react-router-dom";

import MainContainer from "../layout/MainContainer/MainContainer";

// LAYOUT
import Header from "../layout/Header/Header";

// PAGES
import HomePage from "../pages/HomePage/HomePage";
import ProjectWall from "../pages/ProjectWall/ProjectWall";
import About from "../pages/About/About";

const App = () => {
	return (
		<HashRouter basename='/'>
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
		</HashRouter>
	);
};

export default App;
