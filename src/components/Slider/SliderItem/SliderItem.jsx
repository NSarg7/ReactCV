import React from 'react';
import { SliderItemOverlay, ProjectLabel } from './SliderItem.styled';

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
            <ProjectLabel>{name}</ProjectLabel>
        </SliderItemOverlay>
    );
};

export default SliderItem;
