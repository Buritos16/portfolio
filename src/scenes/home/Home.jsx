import React from 'react'
import s from './Home.module.css'
import {motion} from "framer-motion";
import {ImLinkedin, ImGithub} from 'react-icons/im'
import {IoLogoHtml5, IoLogoCss3, IoLogoNodejs} from 'react-icons/io'
import {SiJavascript, SiReact, SiRedux, SiExpress, SiMongodb, SiGit, SiTypescript} from 'react-icons/si'
import me from "../../assets/me.JPG"

const Home = ({setSelectedPage}) => {
    return (
        <div id='home' className={s.home}>
            <motion.div
                className={s.homeContainer}
                onViewportEnter={() => setSelectedPage('home')}
            >
                <div className={s.homeDiv}>
                    <motion.div
                        className={s.right}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay: 0.6, duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x: 50},
                            visible: {opacity: 1, x: 0}
                        }}
                    >
                        <div className={s.animation}>
                            <img className={s.me} src={me} alt='me'/>
                        </div>
                    </motion.div>
                    <motion.div
                        className={s.left}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay: 0.6, duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, y: -50},
                            visible: {opacity: 1, y: 0}
                        }}
                    >
                        <div className={s.title}>
                            <div>
                                Front-end React Developer
                                <img className={s.hand}
                                     src='https://em-content.zobj.net/thumbs/160/apple/354/waving-hand_light-skin-tone_1f44b-1f3fb_1f3fb.png'
                                     alt='waved hand'/>
                            </div>

                        </div>
                        <div className={s.subtitle}>
                            Hi, I'm Roman Typylo. A Front-end React Developer based in Ternopil,
                            Ukraine. <img style={{width: '1rem'}}
                                          src='https://em-content.zobj.net/thumbs/160/apple/354/round-pushpin_1f4cd.png'
                                          alt='location'/>
                        </div>
                        <div className={s.links}>
                            <a href='https://www.linkedin.com/in/roman-typylo-b08241156/' target="_blank"
                               rel="noreferrer"><ImLinkedin
                                className={s.linkedin}/></a>
                            <a href='https://github.com/Buritos16' target="_blank" rel="noreferrer"><ImGithub/></a>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    className={s.stack}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: -50},
                        visible: {opacity: 1, y: 0}
                    }}
                >
                    <div className={s.stackTitle}>
                        Main stack
                        <div className={s.line}/>
                    </div>
                    <div className={s.techno}>
                        <IoLogoHtml5 className={s.technoItem} style={{color: '#dc4b24'}}/>
                        <IoLogoCss3 className={s.technoItem} style={{color: '#214ce4'}}/>
                        <SiJavascript className={s.javaScript}/>
                        <SiReact className={s.technoItem} style={{color: '#61daf9'}}/>
                        <SiRedux className={s.technoItem} style={{color: '#754abb'}}/>
                        <SiGit className={s.technoItem} style={{color: '#ee5033'}}/>
                    </div>
                </motion.div>
                <motion.div
                    className={s.stack}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: -50},
                        visible: {opacity: 1, y: 0}
                    }}
                >
                    <div className={s.stackTitle}>
                        Additional
                        <div className={s.line}/>
                    </div>
                    <div className={s.techno}>
                        <IoLogoNodejs className={s.technoItem} style={{color: '#23b35d'}}/>
                        <SiExpress className={s.technoItem} style={{color: '#353535'}}/>
                        <SiMongodb className={s.technoItem} style={{color: '#439934'}}/>
                        <SiTypescript className={s.technoItem} style={{color: '#2d78c6'}}/>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
export default Home
