import React from "react";

const CustomIcon = ({ Styles, name, ...otherProps }) => {
const classes = ['CustomIcon', Styles]

	return (
		<div className={classes.join(' ')} {...otherProps}>
			<ion-icon name={name} />
		</div>
	);
};

export default CustomIcon;
