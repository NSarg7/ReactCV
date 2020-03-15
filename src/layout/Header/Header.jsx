import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
	const { location } = props;

	const classes = "main-nav__item";
	const active = "main-nav__item main-nav__item--active";

	const linksData = [
		{ address: "/", name: "HOME" },
		{ address: "/projects", name: "GALLERY" },
		{ address: "/about", name: "ABOUT" },
	];

	return (
		<div className='Header'>
			<div className='Header__main'>
				<ul className='main-nav'>
					{linksData.map(({ name, address }) => {
						return (
							<Link
								to={address}
								className={location.pathname === address ? active : classes}>
								<span className='main-nav__link'>{name}</span>
							</Link>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Header;
