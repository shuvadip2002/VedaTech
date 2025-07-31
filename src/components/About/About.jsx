import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/shuvadip.jpg'
import soumyadip from '../../assets/soumyadip.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Us</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-shuvadip">
            <img src={profile_img} alt="" />
            <h1>Shuvadip Ghosh</h1>
            <h3>CO-FOUNDER | ENTREPRENOUR |CREATOR</h3>
            <p>With a focus on user experience, our UI/UX design services deliver intuitive and seamless interfaces for web and mobile platforms. For product-based businesses, we provide 2D and 3D product packaging design, crafting packaging that is not only functional but also visually compelling.</p>

        </div>
        <div className="about-Soumyadip">
            <img src={soumyadip} alt="" />
            <h1>Soumyadip Ghosh</h1>
            <h3>CO-FOUNDER | ENTREPRENOUR |CREATOR</h3>
            <p>With a focus on user experience, our UI/UX design services deliver intuitive and seamless interfaces for web and mobile platforms. For product-based businesses, we provide 2D and 3D product packaging design, crafting packaging that is not only functional but also visually compelling.</p>


            {/* <div className="about-para">
                <p>With a focus on user experience, our UI/UX design services deliver intuitive and seamless interfaces for web and mobile platforms. For product-based businesses, we provide 2D and 3D product packaging design, crafting packaging that is not only functional but also visually compelling.</p>
                <p>Our ad film and photoshoot services bring your products and stories to life through cinematic vlogs, professional product photography, content creation, trending Reels, and AI-enhanced video editing. We also create engaging carousel designs for websites and social media that highlight your products or services in a visually interactive way. Lastly, our graphic design solutions cover everything from promotional posters and social media graphics to brochures and digital ads — all tailored to fit your brand’s identity.</p>
            </div> */}

            {/* <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
            </div> */}

        </div>
        <div className="about-shuvadip">
            <img src={profile_img} alt="" />
            <h1>Shuvadip Ghosh</h1>
            <h3>CO-FOUNDER | ENTREPRENOUR |CREATOR</h3>
            <p>With a focus on user experience, our UI/UX design services deliver intuitive and seamless interfaces for web and mobile platforms. For product-based businesses, we provide 2D and 3D product packaging design, crafting packaging that is not only functional but also visually compelling.</p>

        </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPRENCES</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLINTS</p>
            </div>
      </div>
    </div>
  )
}

export default About
