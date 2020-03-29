import React, { useState, useRef, useEffect } from 'react';
import CustomIcon from '../CustomIcon/CustomIcon';
import SliderItem from './SliderItem/SliderItem';

import { SliderOverlay, SliderContainer } from './Slider.styled';

const Slider = ({ content, transition }) => {
    const sliderItems = Array(3)
        .fill([...content])
        .flat(10);
    const sliderContainerRef = useRef(null);
    const isOdd = sliderItems.length % 2;

    const [count, setCount] = useState();
    const [slideWidth, setSlideWidth] = useState();
    const [sliderInitialPosition, setSliderInitialPosition] = useState();
    const [sliderPosition, setSliderPosition] = useState();
    const [transitionTime, setTransitionTime] = useState();
    const [clickIsActive, setClickIsActive] = useState(true);

    // MOUSE TRANSLATE EVENTS
    const [mouseMoveActive, setMouseMoveActive] = useState(false);
    const [mouseDownClientX, setMouseDownClientX] = useState();
    const [mouseTranslateSize, setMouseTranslateSize] = useState();

    // Touch events
    const [touchStartClient, setTouchStartClient] = useState();
    const [curTouchPosition, setCurTouchPosition] = useState();

    useEffect(() => {
        let sliderContainerDOM = sliderContainerRef.current;
        const handleSize = () => {
            const sliderContainerDOMWidthString = getComputedStyle(sliderContainerDOM).getPropertyValue(
                'width'
            );
            let sliderContainerDOMWidth = parseFloat(sliderContainerDOMWidthString);
            const slidePosition = isOdd ? sliderContainerDOMWidth / 2 : 0;

            setSlideWidth(sliderContainerDOMWidth);
            setTransitionTime(0);
            setCount(0);
            setSliderPosition(slidePosition);
            setSliderInitialPosition(slidePosition);
        };
        handleSize();

        window.addEventListener('resize', handleSize);
        return () => {
            window.removeEventListener('resize', handleSize);
        };
    }, [transition, isOdd]);

    const btnPrev = () => {
        if (!clickIsActive) return;
        setCount(count + 1);
        setClickIsActive(false);
        setSliderPosition(sliderPosition + slideWidth);
    };

    const btnNext = () => {
        if (!clickIsActive) return;
        setCount(count - 1);
        setClickIsActive(false);
        setSliderPosition(sliderPosition - slideWidth);
    };

    const transitionReset = () => {
        setTransitionTime(0);
        setCount(0);
        setSliderPosition(sliderInitialPosition);
        setTimeout(() => {
            setTransitionTime(transition);
            setClickIsActive(true);
        });
    };

    /*----------------- FOR MOBILE DEVICES -----------------*/

    // TOUCH EVENTS
    const touchMove = (event) => {
        setTouchStartClient(event.touches[0].clientX);
    };
    const touchStart = (event) => {
        setCurTouchPosition(event.touches[0].clientX);
    };
    const touchEnd = () => {
        if (touchStartClient < curTouchPosition) {
            requestAnimationFrame(btnNext);
        } else {
            requestAnimationFrame(btnPrev);
        }
    };

    // MOUSE EVENTS
    const mouseMoveHandler = (event) => {
        // console.log(event.clientX - mouseDownClientX);
        const mouseTranslate = event.clientX - mouseDownClientX;
        setMouseTranslateSize(mouseTranslate);
    };
    const mouseDownHandler = (event) => {
        setTransitionTime(0);
        setMouseMoveActive(true);
        setMouseDownClientX(event.clientX);
        // console.log(event.clientX);
    };
    const mouseUpHundler = (event) => {
        setMouseMoveActive(false);
        setTransitionTime(transition);
        // console.log(event.clientX);
        if (mouseTranslateSize > 0) {
            requestAnimationFrame(btnPrev);
        }
        if (mouseTranslateSize < 0) {
            requestAnimationFrame(btnNext);
        }

        setMouseTranslateSize(0);
    };

    const translateSize = mouseTranslateSize ? sliderPosition + mouseTranslateSize : sliderPosition;

    return (
        <div
            className="Slider"
            // SWIPE MOUSE EVENTS
            onTouchStart={touchStart}
            onTouchEnd={touchEnd}
            onTouchMove={touchMove}
            // DESKTOP MOUSE EVENTS
            onMouseDown={mouseDownHandler}
            onMouseUp={mouseUpHundler}
            onMouseMove={mouseMoveActive ? mouseMoveHandler : null}
            onMouseOut={mouseUpHundler}>
            <SliderOverlay>
                <CustomIcon Styles="Slider__btn-prev" name="ios-arrow-back" onClick={btnPrev} />
                <SliderContainer
                    ref={sliderContainerRef}
                    slideWidth={slideWidth}
                    onTransitionEnd={
                        Math.abs(count) === sliderItems.length / 3
                            ? transitionReset
                            : setClickIsActive.bind(this, true)
                    }
                    transitionTime={transitionTime}
                    style={{ transform: ` translateX(${translateSize}px)` }}>
                    {sliderItems.map((project, idx) => {
                        return (
                            <SliderItem key={idx} url={project.img} name={project.name} link={project.link} />
                        );
                    })}
                </SliderContainer>
                <CustomIcon Styles="Slider__btn-next" name="ios-arrow-forward" onClick={btnNext} />
            </SliderOverlay>
        </div>
    );
};

export default Slider;
