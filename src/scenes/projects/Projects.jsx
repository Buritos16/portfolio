import React from 'react'
import s from './Projects.module.css'
import {motion} from "framer-motion";
import Project from "../../components/Project/Project";



const Projects = ({setSelectedPage}) => {

    return (
        <div id='projects' className={s.projects}>
            <motion.div className={s.projectsContainer} onViewportEnter={() => setSelectedPage('projects')}>
                <div className={s.projectsTitle}>
                    <div style={{fontSize: 16, fontWeight: 900, color: '#ff4d30'}}>
                        PROJECTS
                    </div>
                    <div style={{fontSize: 21, fontWeight: 800}}>
                        Each project is a unique piece of development <img style={{width: '1.2rem', marginLeft: '0.3rem'}}
                                                                           src='https://em-content.zobj.net/thumbs/160/apple/354/puzzle-piece_1f9e9.png'
                                                                           alt='location'/>
                    </div>
                </div>
                <div className={s.arrayProjects}>
                    <Project
                        demo='gym'
                        title='EVOGYM'
                        image='https://em-content.zobj.net/thumbs/160/apple/354/woman-running-light-skin-tone_1f3c3-1f3fb-200d-2640-fe0f.png'
                        subtitle='A gym landing page is a comprehensive resource for fitness information, benefits of gym, description of classes and contact information.'
                        mainTech={['React', 'TypeScript']}
                        additionalTech={['Tailwind', 'Vite']}
                        github='https://github.com/Buritos16/gym-vite-typescript'
                        vercel='https://gym-vite-typescript.vercel.app/'
                        setSelectedPage={setSelectedPage}
                    />
                    <Project
                        demo='algorax'
                        title='ALGORAX'
                        image='https://www.iconarchive.com/download/i109534/cjdowner/cryptocurrency-flat/Ethereum-ETH.1024.png'
                        subtitle='A full-fledged cryptocurrency app, made from scratch, that allows its user to track and/or control local or global flows of cryptocurrency funds, exchange them for fiat funds, and vice versa, make deposits and withdrawals.'
                        mainTech={['React', 'Redux', 'Css']}
                        additionalTech={['Node.js', 'Express', 'MongoDB']}
                        github='/'
                        vercel='/'
                        additionalStyle='leftToRight'
                        setSelectedPage={setSelectedPage}
                    />
                    <Project
                        demo='admin'
                        title='ECOMVISION'
                        image='https://em-content.zobj.net/thumbs/160/apple/354/gear_2699-fe0f.png'
                        subtitle='A complete admin dashboard application. It includes a wide variety of statistics, different charts and tables with data.'
                        mainTech={['React', 'Redux', 'MaterialUI']}
                        additionalTech={['Node.js', 'Express', 'MongoDB']}
                        github='/'
                        vercel='/'
                        setSelectedPage={setSelectedPage}
                    />
                    <Project
                        demo='bus'
                        title='UkrainianBus'
                        image='https://em-content.zobj.net/thumbs/160/apple/354/oncoming-bus_1f68d.png'
                        subtitle='Simple landing page about transportation. It is an online platform that allows users to rent cars for personal or business use. The website provides an interface with сar gallery, reviews, about and contacts page.'
                        mainTech={['React', 'Css']}
                        github='https://github.com/Buritos16/cars'
                        vercel='https://cars-puce.vercel.app/'
                        additionalStyle='leftToRight'
                        setSelectedPage={setSelectedPage}
                    />
                </div>
            </motion.div>
        </div>
    )
}
export default Projects
