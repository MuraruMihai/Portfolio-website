import React, {useRef } from 'react';
import './contact.css';
import {RiMailSendLine, RiMessengerLine, RiWhatsappLine} from 'react-icons/ri';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l2g7nku', 'template_5mq8h6k', form.current, 'Nfl557JZ6Huoz4RLE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <RiMailSendLine className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>contact@murarugraphics.com</h5>
                        <a href='mailto:contact@murarugraphics.com' target='_blank'>Send an email</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>Mihai Muraru</h5>
                        <a href='https://m.me/muraru.mihai.14' target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiWhatsappLine className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+40721002903</h5>
                        <a href='https://api.whatsapp.com/send?phone=+40721002903' target='_blank'>Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input name='name' type='text' placeholder='Your Full Name' required/>
                    <input name='email' type='email' placeholder='Email' required/>
                    <textarea name="message" rows="7" placeholder='Enter your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;