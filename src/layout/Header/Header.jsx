import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
	const { location } = props;
	console.log(props);

	const classes = ["main-nav__item"];
	const active = ["main-nav__item", "main-nav__item--active"];

	return (
		<div className='Header'>
			<div className='Header__main'>
				<ul className='main-nav'>
					<Link to='/' className={location.pathname === "/" ? active.join(" ") : classes.join(" ")}>
						<span className='main-nav__link'>HOME</span>
					</Link>
					<Link
						to='/projects'
						className={location.pathname === "/projects" ? active.join(" ") : classes.join(" ")}>
						<span className='main-nav__link'>GALLERY</span>
					</Link>
					<Link
						to='/about'
						className={location.pathname === "/about" ? active.join(" ") : classes.join(" ")}>
						<span className='main-nav__link'>ABOUT</span>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Header;
