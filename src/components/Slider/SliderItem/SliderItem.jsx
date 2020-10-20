import React from "react";
import { SliderItemOverlay, ProjectLabel, ProjectLabelWrapper } from "./SliderItem.styled";

const SliderItem = ({ url, name, link }) => {
    const handleDrag = (event) => {
        event.preventDefault();
    };
    return (
        <SliderItemOverlay
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            url={url}
            className="SliderItem"
            onDragStart={handleDrag}>
            <ProjectLabelWrapper>
                <ProjectLabel>{name}</ProjectLabel>
            </ProjectLabelWrapper>
        </SliderItemOverlay>
    );
};

export default SliderItem;
