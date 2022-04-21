import React, {Component} from 'react';
import CV from "../../assets/MihaiMuraru_CV.pdf";

const Cta = () => {
    return (
        <div className="cta">
            <a href={CV} className="btn" download>Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    );
}

export default Cta;