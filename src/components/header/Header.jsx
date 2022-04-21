import React, {Component} from 'react';
import "./header.css";
import Cta from "./CTA";
import ProfileImg from "../../assets/me_opt.png";
import ProfileImgWebp from "../../assets/me_opt.webp";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Mihai Muraru</h1>
                <h5 className="text-light">
                    Software Developer
                </h5>

                <Cta />

                <HeaderSocials/>

                <div className="me">
                    <picture>
                        <source srcSet={ProfileImgWebp} type='image/webp'/>
                        <img src={ProfileImg} alt="me"/>
                    </picture>
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;