import React from "react";

import { StyledLink, StyledLabel } from "./About.styles";

const About = () => {
    return (
        <div className="about">
            {/* <h1 className="about_title title">About me</h1> */}
            <div className="blank">
                <div className="blank__top">
                    <div className="container">
                        <div className="grid-block">
                            <label>Full name:</label>
                            <span>Narek Sargsyan</span>
                            <label>Tel.:</label>
                            <span>(098) 03-26-26</span>
                            <label>E-mail: </label>
                            <span>NSarg7@gmail.com</span>
                            <label>Date of birth:</label>
                            <span>19.07.1994</span>
                        </div>

                        <div className="grid-block">
                            <label className="grid-block--links">Links:</label>
                            <StyledLink
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/NSarg7">
                                GitHub
                            </StyledLink>
                            <StyledLink
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://gitlab.com/NSarg7">
                                GitLab
                            </StyledLink>
                            <StyledLink
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/nsarg7/">
                                LinkedIn
                            </StyledLink>
                        </div>
                    </div>
                </div>
                <div className="blank__bottom">
                    <div className="row-content">
                        <StyledLabel>Education:</StyledLabel>
                        <div className="courses">
                            <label>Self-educated with the following courses and official documenation</label>
                            <p className="course-name">
                                <span>Udemy:</span>
                                <span>“The complete JavaScript course”</span>
                            </p>
                            <p className="course-name">
                                <span>Udemy:</span> <span>“Advanced JavaScript Concepts”</span>
                            </p>
                            <p className="course-name">
                                <span>Udemy:</span>
                                <span>“Build Responsive Real World Websites with HTML5 and CSS3”</span>
                            </p>
                            <p className="course-name">
                                <span>Udemy:</span>
                                <span>“Advanced CSS and Sass: Flexbox, Grid, Animations and More!”</span>
                            </p>
                            <p className="course-name">
                                <span>Udemy:</span>
                                <span>“The Complete React Developer in 2019 (w Redux, Hooks, GraphQL)”</span>
                            </p>
                            <label>Also, waste my time in</label>
                            <p>YSU, “Bachelor's degree in International Relations”</p>
                        </div>
                    </div>
                    <div className="row-content">
                        <StyledLabel>
                            WORKING <br />
                            EXPERIENCE:
                        </StyledLabel>
                        <div>
                            <p>AIST GLOBAL – ReactJS Developer</p>
                            <p>Rumors Monitoring – Web programmer (contract deal)</p>
                            <p>MobileCentreArt LLC - Store Manager</p>
                            <p>Ministry of economy of the RA – Intern</p>
                        </div>
                    </div>
                    <div className="row-content">
                        <StyledLabel>Skills:</StyledLabel>
                        <div>
                            <p>
                                JavaScript (OOP/FP), CSS (SASS, FlexBox, Grid), ReactJS, Redux(thunk, Sagas),
                                React-Bootstrap, MaterialUI, Firebase, Git/GitHub, WebPack, Babel, Photoshop,
                                Windows, Linux, MS Office
                            </p>
                        </div>
                    </div>
                    <div className="row-content">
                        <StyledLabel>Languages:</StyledLabel>
                        <div>
                            <p>Armenian, English, Russian.</p>
                        </div>
                    </div>
                    <div className="row-content">
                        <StyledLabel>About me:</StyledLabel>
                        <div>
                            <p>
                                Nobody has ready-made solutions. I am not an exception. But I am learning a
                                lot and doing my best to have the ability to find solutions as fast as
                                possible. I think this is a hallmark of a good programmer. I would be very
                                happy to prove my words with work. I am open to any new tasks and challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
