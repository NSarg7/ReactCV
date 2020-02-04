import React from "react";
import {StyledIcon} from './CustomIcon.styled'

const CustomIcon = ({ Styles, name, ...otherProps }) => {
	return (
		<StyledIcon className={Styles} {...otherProps}>
			<ion-icon name={name} />
		</StyledIcon>
	);
};

export default CustomIcon;
