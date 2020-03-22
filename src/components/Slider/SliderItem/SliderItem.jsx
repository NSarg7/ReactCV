import React from 'react';
import { SliderItemOverlay, ProjectLabel } from './SliderItem.styled';

const SliderItem = ({ url, name, link }) => {
    return (
        <SliderItemOverlay
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            url={url}	
            className="SliderItem">
            <ProjectLabel>{name}</ProjectLabel>
        </SliderItemOverlay>
    );
};

export default SliderItem;
