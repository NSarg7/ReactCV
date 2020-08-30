import React, { useState, createRef, useEffect } from "react";
import CustomIcon from "../CustomIcon/CustomIcon";
import SliderItem from "./SliderItem/SliderItem";

import { SliderOverlay, SliderContainer } from "./Slider.styled";

const sliderContainerRef = createRef();
const Slider = ({ content, transition }) => {
    const sliderItems = Array(3)
        .fill([...content])
        .flat(10);
    const isOdd = sliderItems.length % 2;

    const [count, setCount] = useState();
    const [slideWidth, setSlideWidth] = useState();
    const [sliderInitialPosition, setSliderInitialPosition] = useState();
    const [sliderPosition, setSliderPosition] = useState();
    const [transitionTime, setTransitionTime] = useState(transition);
    const [clickIsActive, setClickIsActive] = useState(true);

    // MOUSE TRANSLATE EVENTS
    const [mouseMoveActive, setMouseMoveActive] = useState(false);
    const [mouseDownClientX, setMouseDownClientX] = useState();
    const [mouseTranslateSize, setMouseTranslateSize] = useState();

    // Touch events
    const [touchStartPosition, setTouchStartPosition] = useState();

    useEffect(() => {
        const sliderContainerDOM = sliderContainerRef.current;
        const handleSize = () => {
            const sliderContainerDOMWidthString = getComputedStyle(sliderContainerDOM).getPropertyValue(
                "width"
            );
            const sliderContainerDOMWidth = parseFloat(sliderContainerDOMWidthString);
            const slidePosition = isOdd ? sliderContainerDOMWidth / 2 : 0;

            setSlideWidth(sliderContainerDOMWidth);
            // setTransitionTime(0);
            setCount(0);
            setSliderPosition(slidePosition);
            setSliderInitialPosition(slidePosition);
            setClickIsActive(true);
        };
        handleSize();

        window.addEventListener("resize", handleSize);
        return () => {
            window.removeEventListener("resize", handleSize);
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
    const onTouchStart = (event) => {
        setTouchStartPosition(event.touches[0].clientX);
    };
    const onTouchEnd = (event) => {
        const touchEndCords = event.changedTouches[0].clientX;

        if (touchEndCords < touchStartPosition) btnNext();
        if (touchEndCords > touchStartPosition) btnPrev();
    };

    // MOUSE EVENTS
    const mouseMoveHandler = (event) => {
        const mouseTranslate = event.clientX - mouseDownClientX;
        setMouseTranslateSize(() => mouseTranslate);
    };
    const mouseDownHandler = (event) => {
        setTransitionTime(0);
        setMouseMoveActive(true);
        setMouseDownClientX(event.clientX);
    };
    const mouseUpHundler = () => {
        setMouseMoveActive(false);
        setTransitionTime(transition);
        if (mouseTranslateSize > 0) btnPrev();
        if (mouseTranslateSize < 0) btnNext();
        setMouseTranslateSize(0);
    };

    const translateSize = mouseTranslateSize ? sliderPosition + mouseTranslateSize : sliderPosition;

    return (
        <div
            className="Slider"
            // SWIPE MOUSE EVENTS
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
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
