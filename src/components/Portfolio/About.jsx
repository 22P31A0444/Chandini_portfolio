
import React from 'react';
import c from "./Port.module.css";
import pic1 from "../../assets/colourspic1.jpg"

export default function About() {
  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <div className={c.about1} id="About">
      <div className={c.about2}>About Me</div>
      <div className={c.about3}>
        <div className={c.about31}>
          <div className={c.header}>Developing With a Passion While Exploring The World.</div>
          <div className={c.content}>
            Hi there! I'm <b><i>Chandini</i></b>, a passionate developer with a love for exploring new technologies and traveling the world. 
            With a background in Electronics and Communication Engineering from Aditya College of Engineering and Technology, 
            I thrive on solving complex problems and creating innovative solutions. Whether it's building robust applications or 
            designing user-friendly interfaces, I pour my heart and soul into every project I work on.
            <br/>
            <br/><br/>
            <b>Contact</b>: +916300215594
            <br/>
            <b>Mail</b>: chandini207@gmail.com
          </div>
          <br/>
          <div>
            <button 
              style={{
                height:"40px",
                width:"130px",
                borderRadius:"20px",
                backgroundColor:"#33aadd",
                color:"white",
                fontWeight:"bold",
                border:"none",
                marginLeft:"10px"
              }}
              onClick={handleContactClick}
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className={c.about32}>
          <div className={c.imageBox}>
            <div className={c.imageBox1}>
              <img src={pic1}  className={c.pic} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
