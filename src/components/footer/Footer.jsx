import React, {Component} from 'react';
import "./footer.css";
import {ImInstagram, ImFacebook2, ImTwitter} from 'react-icons/im';

const Footer = () => {
    return (
        <footer id="footer">
            <a href="#" className='footer__logo'>Mihai Muraru</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href='https://facebook.com'><ImFacebook2/></a>
                <a href='https://instagram.com'><ImInstagram/></a>
                <a href='https://twitter.com'><ImTwitter/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Mihai Muraru. All Rights Reserved</small>
            </div>
        </footer>
    );
}

export default Footer;