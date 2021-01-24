import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Certifications from './Certifications'

import styles from '../styles/Resume.module.css'

export default function Resume({ experiences, skills }) {
    return (
        <div className={styles.container} id="section-resume">
            <h1>Resume</h1>

            <p>
                Hello! I’m Gabriele and I’m a fullstack developer.
                I’m 25 and I'm graduated in Computer Science. At the moment 
                I work as dev in SB Italia.
            </p>

            <p>
                I code Frontend using Javascript and frameworks like React 
                (in particular NEXTJS) and Angular. I also work with Ionic 
                for Mobile Apps. For Backend I code in C# and NodeJs 
                (in particular Strapi).
            </p>

            <Experience experiences={experiences} />
            <Education />
            <Skills skills={skills} />
            <Certifications />
        </div>
    )
}