import Link from 'next/link'

import CardProject from '../components/CardProject'
import styles from '../styles/Projects.module.css'

export default function Projects({ projects }) {

    return (
        <>
        <div className={styles.section} id="section-project">
            <div className={`${styles.title} ${styles.top}`}>
                <h2>Projects</h2>
                <img src="/diamond.svg" />
            </div>

            <div className={styles.cards}>
                {
                    projects.map((project) => (
                        <CardProject key={project.id} project={project} />
                    ))
                }
            </div>

            <div className={`${styles.title} ${styles.bottom}`}>
                <Link href="https://github.com/gNaps">
                    <a target="_blank">
                        <img src="/github.svg" />
                        <p>View my github</p>
                    </a>
                </Link>
            </div>
        </div>
        </>
    )
}