import React from 'react'
import s from './Project.module.css'
import {motion} from "framer-motion";
import {ImGithub} from 'react-icons/im'
import {BiLinkExternal} from 'react-icons/bi'

const Project = ({demo, title, subtitle, image, mainTech, additionalTech, github, vercel, additionalStyle, setSelectedPage}) => {
    return (
        <motion.div
            className={additionalStyle ? s.additionalStyle : s.project}
            onViewportEnter={() => setSelectedPage('projects')}
        >
            <div className={s.left}>
                <a href={demo} >
                    <div className={s.demo}/>
                </a>
            </div>
            <div className={s.right}>
                <h3 className={s.title}>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    {title} <img style={{width: '1.2rem'}} src={image} alt='title image'/>
                </h3>
                <p className={s.subtitle}>
                    {subtitle}
                </p>
                <div className={s.techContainer}>
                    <div className={s.mainTech}>
                        {mainTech.map((el) => (
                            <div className={s.tech}>
                                {el}
                            </div>
                        ))}
                    </div>
                    <div className={s.additionalTech}>
                        {additionalTech.map((el) => (
                            <div className={s.tech}>
                                {el}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={s.links}>
                    <a href={github} className={s.linkProject}>Code <ImGithub/></a>
                    <a href={vercel} className={s.linkProject}>Live Demo <BiLinkExternal/></a>
                </div>
            </div>
        </motion.div>
    )
}
export default Project
