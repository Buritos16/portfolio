import React from 'react'
import s from './Projects.module.css'
import Project from "../../components/Project/Project";

const Projects = () => {

    return (
        <div id='projects' className={s.projects}>
            <div className={s.projectsContainer}>
                <div className={s.projectsTitle}>
                    <div style={{fontSize: 16, fontWeight: 900, color: '#ff4d30'}}>
                        PROJECTS
                    </div>
                    <div style={{fontSize: 21, fontWeight: 900}}>
                        Each project is a unique piece of development <img style={{width: '1rem'}}
                                                                           src='https://em-content.zobj.net/thumbs/160/apple/354/puzzle-piece_1f9e9.png'
                                                                           alt='location'/>
                    </div>
                </div>
                <div className={s.arrayProjects}>
                    <Project
                        demo='/'
                        title='CAR RENTAL'
                        image='https://em-content.zobj.net/thumbs/160/apple/354/waving-hand_light-skin-tone_1f44b-1f3fb_1f3fb.png'
                        subtitle='A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.'
                        mainTech={['React', 'TypeScript']}
                        additionalTech={['Tailwind', 'Vite']}
                        github='/'
                        vercel='/'
                    />
                    <Project
                        demo='/'
                        title='CAR RENTAL'
                        image='https://em-content.zobj.net/thumbs/160/apple/354/waving-hand_light-skin-tone_1f44b-1f3fb_1f3fb.png'
                        subtitle='A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.'
                        mainTech={['React', 'Redux', 'MaterialUI']}
                        additionalTech={['Node.js', 'Express', 'MongoDB']}
                        github='/'
                        vercel='/'
                        additionalStyle='leftToRight'
                    />
                    <Project
                        demo='/'
                        title='CAR RENTAL'
                        image='https://em-content.zobj.net/thumbs/160/apple/354/waving-hand_light-skin-tone_1f44b-1f3fb_1f3fb.png'
                        subtitle='A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.'
                        mainTech={['React', 'Css']}
                        additionalTech={['Node.js', 'MongoDB']}
                        github='/'
                        vercel='/'
                    />
                    <Project
                        demo='/'
                        title='CAR RENTAL'
                        image='https://em-content.zobj.net/thumbs/160/apple/354/waving-hand_light-skin-tone_1f44b-1f3fb_1f3fb.png'
                        subtitle='A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.'
                        mainTech={['React', 'Css']}
                        additionalTech={['Node.js', 'MongoDB']}
                        github='/'
                        vercel='/'
                        additionalStyle='leftToRight'
                    />
                </div>
            </div>
        </div>
    )
}
export default Projects
