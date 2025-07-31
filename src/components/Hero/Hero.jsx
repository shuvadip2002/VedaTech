import React from 'react';
import './Hero.css';
import hero from '../../assets/hero.mp4'

const Hero = () => {
  return (
    <div id='hero' className="hero">
      <video autoPlay muted loop className="hero-video">
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* <div className="hero-content">
        <h1>
          <span>I'm Shuvadip Ghosh,</span> frontend developer based in India
        </h1>
        <p>We offer creative and modern design & development solutions.</p>
      </div> */}
    </div>
  );
};

export default Hero;
