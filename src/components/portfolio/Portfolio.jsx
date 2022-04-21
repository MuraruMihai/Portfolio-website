import React, {Component} from 'react';
import "./portfolio.css";
import ProjectImage1 from '../../assets/portfolio_img.png';
import ProjectImage1Webp from '../../assets/portfolio_img.webp';

const portfolioArray = [
    {
        id : 1,
        image : ProjectImage1,
        webpImage: ProjectImage1Webp,
        title : 'Wordpress Presentation Website',
        github : 'https://github.com',
        demo : 'https://murarugraphics.com'
    },
    {
        id : 2,
        image : ProjectImage1,
        webpImage: ProjectImage1Webp,
        title : 'React Portfolio',
        github : 'https://github.com',
        demo : 'https://react.murarugraphics.com/'
    },
    {
        id : 3,
        image : ProjectImage1,
        webpImage: ProjectImage1Webp,
        title : 'Wordpress Presentation Website 3',
        github : 'https://github.com',
        demo : 'https://murarugraphics.com'
    },
    {
        id : 4,
        image : ProjectImage1,
        webpImage: ProjectImage1Webp,
        title : 'Wordpress Presentation Website 4',
        github : 'https://github.com',
        demo : 'https://murarugraphics.com'
    },
    {
        id : 5,
        image : ProjectImage1,
        webpImage: ProjectImage1Webp,
        title : 'Wordpress Presentation Website 5',
        github : 'https://github.com',
        demo : 'https://murarugraphics.com'
    },
    {
        id : 6,
        image : ProjectImage1,
        webpImage: ProjectImage1Webp,
        title : 'Wordpress Presentation Website 6',
        github : 'https://github.com',
        demo : 'https://murarugraphics.com'
    }
];
const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    portfolioArray.map(({id,image,webpImage,title,github,demo}) => {
                        return (
                            <article className='portfolio__item'>
                                <div className='portfolio__item-img'>
                                    <picture>
                                        <source srcSet={webpImage} type='image/webp'/>
                                        <img src={image} alt={title}/>
                                    </picture>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Portfolio;