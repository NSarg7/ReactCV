import React, { useState } from 'react';
import uniqid from 'uniqid';

import { Link } from 'react-router-dom';

// import { Transition } from "react-transition-group";

import Typing from 'react-typing-animation';

import { Header, Gallery, GalleryItem, Image, ImageContainer, LinkContainer } from './HomePage.styled';

const HomePage = () => {
    const [isFinished, setIsFinished] = useState(false);
    const [eploreMoreActive, seteploreMoreActive] = useState(false);

    const gallery = [
        { name: 'The Creation of Adam', img: require('../../assets/gallery/adam-min.jpg') },
        { name: 'The Last Supper', img: require('../../assets/gallery/supper-min.jpg') },
        { name: 'The Kiss', img: require('../../assets/gallery/kiss-min.jpg') },
        { name: 'Mona Liza', img: require('../../assets/gallery/mona-min.jpg') },
        { name: 'The Starry Night', img: require('../../assets/gallery/starry-min.jpg') },
        { name: 'The Birth of Venus', img: require('../../assets/gallery/venus-min.jpg') },
    ];

    const string = 'Art is the beginning of everything';

    return (
        <div className="HomePage">
            <Header
                onTransitionEnd={seteploreMoreActive.bind(this, true)}
                isFinished={isFinished}
                className="HomePage__header">
                <Typing
                    className="animated-typing"
                    startDelay={1000}
                    hideCursor={true}
                    onFinishedTyping={setIsFinished.bind(this, true)}
                    isFinished={isFinished}
                    speed={70}>
                    <h1 className={`HomePage__title ${eploreMoreActive ? null : 'title'}`}>
                        {string}
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={string.length - 6} /> everywhere
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={11} /> in programming
                    </h1>
                </Typing>

                {eploreMoreActive ? (
                    <LinkContainer>
                        <div className="logo-container">
                            <div className="react-logo" />
                        </div>
                        <Link className="btn btn--link" to="/projects">
                            Explore more
                        </Link>
                    </LinkContainer>
                ) : null}
            </Header>

            <Gallery className="HomePage__gallery" isFinished={isFinished}>
                {gallery.map(({ name, img }, ind) => {
                    return (
                        <GalleryItem isFinished={isFinished} key={uniqid()} className={`item-${ind + 1}`}>
                            <ImageContainer>
                                <Image className={`item-${ind + 1}_img`} url={img} isFinished={isFinished} />
                            </ImageContainer>
                            <h2>{name}</h2>
                        </GalleryItem>
                    );
                })}
            </Gallery>
        </div>
    );
};

export default HomePage;
