import React from "react";
import { StyledProjectItem } from "./ProjectItem.styled";

const ProjectItem = (props) => {
	const { url, Styles } = props;
	return (
		<div className={Styles ? `${Styles} ProjectItem` : "ProjectItem"}>
			<StyledProjectItem src={url} {...props} />
		</div>
	);
};

export default ProjectItem;
