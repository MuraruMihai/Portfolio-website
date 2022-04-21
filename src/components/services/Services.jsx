import React, {Component} from 'react';
import "./services.css";
import {BiCheck} from 'react-icons/bi';

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>Web Design</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            Modern Wordpress Websites
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            Wordpress Blog
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            Responsive Design
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            React JS Presentation Website
                        </li>
                    </ul>
                </article>
            {/*  END OF Web Design  */}
                <article className='service'>
                    <div className="service__head">
                        <h3>Digital Marketing</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            Facebook/Instagram account management
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            Google Account Management
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            TikTok Marketing
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            Email Marketing
                        </li>
                    </ul>
                </article>
                {/*  END OF Digital Marketing  */}
                <article className='service'>
                    <div className="service__head">
                        <h3>E-Commerce Website</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            Wordpress WooCommerce Store
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            Shopify Store
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            Payment integration
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            Plugins and Apps Install
                        </li>
                    </ul>
                </article>
                {/*  END OF E-COMMERCE WEBSITE  */}

            </div>
        </section>
    );
}

export default Services;