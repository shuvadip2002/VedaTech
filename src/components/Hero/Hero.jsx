import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <video 
        className='hero-video'
        autoPlay 
        loop 
        muted
        playsInline
        onError={(e) => {
          console.log('Video failed to load:', e);
          e.target.style.display = 'none';
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        <source src="/hero-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            <span>I'm Alex Bennett,</span> frontend developer based in USA.
          </h1>
          <p>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
          <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero