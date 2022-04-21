import React, {Component} from 'react';
import './about.css';
import Image from "../../assets/pr2_opt.jpg";
import ImageWebp from "../../assets/pr2_opt.webp";
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <picture>
                            <source srcSet={ImageWebp} type='image/webp'/>
                            {/*<img src={Image} alt="About Image"/>*/}
                            <img src={Image} alt="About Image"/>
                        </picture>

                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>3+ years Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>10+ Clients</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>10+ completed projects</small>
                        </article>
                    </div>

                    <p>
                        I have always been passionate about Front-end development. I am the kind of person that never
                        stops learning and since I was very young I focused my attention on studying new methods to improve
                        my skills and myself in doing what I like and what I consider being the work I wanna do for a living.
                        Even more, I also like to discover, explore and work with new technologies, because I tend to be very
                        persuasive in all kinds of researches that can make better the way I work. I am very attentive to the
                        details and I want to come up with the best solutions for developing web applications.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;