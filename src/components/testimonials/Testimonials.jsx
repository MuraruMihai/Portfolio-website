import React, {Component} from 'react';
import "./testimonials.css";
import TestimonialIMG from '../../assets/profile3_opt.jpg';
import TestimonialIMGWebp from '../../assets/profile3_opt.webp';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-cards";


const testimonialsList = [
    {
        id: 1,
        image: TestimonialIMG,
        webpImage: TestimonialIMGWebp,
        name: 'Client Name One',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, atque dicta ea eaque facilis fuga hic ' +
            'incidunt iusto, minima mollitia pariatur quam ratione reiciendis repellendus sapiente similique vel ' +
            'voluptatem voluptatum.'
    },
    {
        id: 2,
        image: TestimonialIMG,
        webpImage: TestimonialIMGWebp,
        name: 'Client Name Two',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, atque dicta ea eaque facilis fuga hic ' +
            'incidunt iusto, minima mollitia pariatur quam ratione reiciendis repellendus sapiente similique vel ' +
            'voluptatem voluptatum.'
    },
    {
        id: 3,
        image: TestimonialIMG,
        webpImage: TestimonialIMGWebp,
        name: 'Client Name Three',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, atque dicta ea eaque facilis fuga hic ' +
            'incidunt iusto, minima mollitia pariatur quam ratione reiciendis repellendus sapiente similique vel ' +
            'voluptatem voluptatum.'
    },
    {
        id: 4,
        image: TestimonialIMG,
        webpImage: TestimonialIMGWebp,
        name: 'Client Name Four',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, atque dicta ea eaque facilis fuga hic ' +
            'incidunt iusto, minima mollitia pariatur quam ratione reiciendis repellendus sapiente similique vel ' +
            'voluptatem voluptatum.'
    },
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                    modules={[Pagination, Scrollbar, A11y, EffectCards]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    effect="cards"
                    grabCursor={true}
            >
                {
                    testimonialsList.map(({id, image,webpImage, name, review}) => {
                        return (
                            <SwiperSlide key={id} className="testimonial">
                                <div className="client__avatar">
                                    <picture>
                                        <source srcSet={webpImage} type='image/webp'/>
                                        <img src={image} alt={name}/>
                                    </picture>
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
}

export default Testimonials;