import React from 'react'
import s from './About.module.css'
import {motion} from "framer-motion";
import aboutSmall from "../../assets/about-small.png"
import aboutAnimation from "../../assets/aboutAnimation.svg"

const About = ({setSelectedPage}) => {
    return (
        <div id='about' className={s.about}>
            <motion.div
                className={s.aboutContainer}
                onViewportEnter={() => setSelectedPage('about')}
            >
                <div className={s.aboutAnimationContainer}>
                    <div className={s.aboutBackground}>
                        <img className={s.aboutSmall} src={aboutSmall} alt='about-small'/>
                        <div className={s.animationBackground}>
                            <img src={aboutAnimation} className={s.aboutAnimation} alt='animation'/>
                        </div>
                    </div>
                </div>
                <div className={s.aboutText}>
                    <div style={{fontSize: 16, fontWeight: 900, color: '#ff4d30'}}>
                        ABOUT ME
                    </div>
                    <div style={{fontSize: 21, fontWeight: 900}}>
                        A dedicated Front-end Developer
                        based in Ternopil, Ukraine. <img style={{width: '1rem'}}
                                                         src='https://em-content.zobj.net/thumbs/160/apple/354/round-pushpin_1f4cd.png'
                                                         alt='location'/>
                    </div>
                    <div style={{fontSize: 16.5, color: '#58595d'}}>As a Junior Front-End Developer, I possess an
                        impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in
                        designing and maintaining responsive websites that offer a smooth user experience. My expertise
                        lies in crafting dynamic, engaging interfaces through writing clean and optimized code and
                        utilizing cutting-edge development tools and techniques. I am also a team player who thrives in
                        collaborating with cross-functional teams to produce outstanding web applications.
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
export default About
