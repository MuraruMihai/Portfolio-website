import React, {Component} from 'react';
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/mihai-radu-muraru-36423a150/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/MuraruMihai/tomihai" target="_blank"><BsGithub/></a>
            <a href="https://www.facebook.com/muraru.mihai.14" target="_blank"><BsFacebook/></a>
        </div>
    );
}

export default HeaderSocials;