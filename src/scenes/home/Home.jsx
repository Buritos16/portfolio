import React from 'react'
import s from './Home.module.css'
import {ImLinkedin, ImGithub} from 'react-icons/im'
import {IoLogoHtml5, IoLogoCss3, IoLogoNodejs} from 'react-icons/io'
import {SiJavascript, SiReact, SiRedux, SiExpress, SiMongodb, SiGit, SiTypescript} from 'react-icons/si'
import me from '../../assets/me.JPG'

const Home = () => {
    return (
        <div id='home' className={s.home}>
            <div className={s.homeContainer}>
                <div className={s.homeDiv}>
                    <div className={s.right}>
                        <div className={s.animation}>
                            <img className={s.me} src={me} alt='me'/>
                        </div>
                    </div>
                    <div className={s.left}>
                        <div className={s.title}>
                            <div>
                                Front-end React Developer
                                <img className={s.hand}
                                     src='https://em-content.zobj.net/thumbs/160/apple/354/waving-hand_light-skin-tone_1f44b-1f3fb_1f3fb.png'
                                     alt='waved hand'/>
                            </div>

                        </div>
                        <div style={{fontSize: 20, color: '#58595d'}}>
                            Hi, I'm Roman Typylo. A passionate Front-end React Developer based in Ternopil,
                            Ukraine. <img style={{width: '1rem'}}
                                          src='https://em-content.zobj.net/thumbs/160/apple/354/round-pushpin_1f4cd.png'
                                          alt='location'/>
                        </div>
                        <div className={s.links}>
                            <a href='https://www.linkedin.com/in/roman-typylo-b08241156/' target="_blank" rel="noreferrer"><ImLinkedin
                                className={s.linkedin}/></a>
                            <a href='https://github.com/Buritos16' target="_blank" rel="noreferrer"><ImGithub/></a>
                        </div>
                    </div>
                </div>
                <div className={s.stack}>
                    <div className={s.stackTitle}>
                        Tech stack
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
                </div>
                <div className={s.stack}>
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
                </div>
            </div>
        </div>
    )
}
export default Home
