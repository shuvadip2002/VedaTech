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
  <img src={profile_img} alt="Shuvadip" />
  <div>
    <h1>Shuvadip Ghosh</h1>
    <h3>CO-FOUNDER | FULL STACK DEVELOPER | CREATOR</h3>
<p>
  Shuvadip is a passionate full stack developer and visual designer with a strong eye for detail and a drive for innovation. With every line of code and every pixel he places, he brings ideas to life through clean, modern, and intuitive digital experiences. His expertise spans responsive web design, UI/UX architecture, and branding strategy — all tailored to create lasting impact and user satisfaction. Driven by curiosity and creativity, he believes in designing not just for aesthetics but for meaning, usability, and connection.
</p>  </div>
</div>

<div className="about-Soumyadip">
  <img src={soumyadip} alt="Soumyadip" />
  <div>
    <h1>Soumyadip Ghosh</h1>
    <h3>CO-FOUNDER | CREATIVE HEAD | CONTENT CREATOR</h3>
  <p>
  Soumyadip leads the creative direction and content strategy with a visionary mindset and a deep understanding of storytelling. From cinematic edits to high-impact visuals, his work transforms raw ideas into engaging narratives that resonate across digital platforms. With a talent for turning concepts into captivating content — whether it's short-form Reels, brand documentaries, or product showcases — he brings unmatched energy, aesthetic sense, and clarity to every project. His ability to blend emotion with design makes him the creative heartbeat behind our brand’s storytelling.
</p>
  </div>


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
        {/* <div className="about-shuvadip">
            <img src={profile_img} alt="" />
            <h1>Shuvadip Ghosh</h1>
            <h3>CO-FOUNDER | ENTREPRENOUR |CREATOR</h3>
            <p>With a focus on user experience, our UI/UX design services deliver intuitive and seamless interfaces for web and mobile platforms. For product-based businesses, we provide 2D and 3D product packaging design, crafting packaging that is not only functional but also visually compelling.</p>

        </div> */}
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
